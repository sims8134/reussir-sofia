import React, { useState, useEffect, useRef } from "react";
import { Send, Mail, Check, AlertCircle, Loader2 } from "lucide-react";

/* ============================================================
   FORMULAIRE DE CONTACT — Réussir à Sofia
   ------------------------------------------------------------
   - Trilingue (fr / en / es) : passez la prop `lang`
   - Envoie vers contact@reussir-sofia.fr via Web3Forms
   - Anti-spam : honeypot Web3Forms (botcheck) + Cloudflare Turnstile
   - Lien mailto: en secours
   ------------------------------------------------------------
   TURNSTILE — trois choses a faire une seule fois :
   1. Cloudflare > Turnstile > Add widget, mode Invisible,
      domaines : reussir-sofia.fr et localhost
   2. Site Key -> variable d'environnement VITE_TURNSTILE_SITE_KEY
      (fichier .env en local, et Vercel > Settings > Environment
      Variables pour la production)
   3. Secret Key -> tableau de bord Web3Forms, section Spam
      Protection : c'est Web3Forms qui verifie le jeton cote
      serveur. Sans cette etape le widget ne protege RIEN.
   Si la variable est absente, le formulaire fonctionne sans
   Turnstile (le honeypot reste actif).
   ============================================================ */

const ACCESS_KEY = "375be209-24af-4ea8-8dfe-5d433cea25a6";
const CONTACT_EMAIL = "contact@reussir-sofia.fr";
const TURNSTILE_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY || "";
const TURNSTILE_SRC =
  "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

const formContent = {
  fr: {
    name: "Votre nom",
    namePh: "Jean Dupont",
    email: "Votre email",
    emailPh: "jean@exemple.fr",
    message: "Votre projet",
    messagePh: "Parlez-nous de votre projet en Bulgarie…",
    submit: "Envoyer le message",
    sending: "Envoi en cours…",
    successTitle: "Message envoyé !",
    successText: "Nous vous répondons sous 24-48h. À très vite.",
    errorTitle: "L'envoi a échoué",
    errorText: "Réessayez, ou écrivez-nous directement :",
    orMail: "Ou par email :",
    invalidEmail: "Merci d'entrer un email valide.",
    required: "Ce champ est requis.",
    botTitle: "Vérification anti-spam en cours",
    botText: "Patientez une seconde, puis renvoyez le message.",
    protectedBy: "Protégé par Cloudflare Turnstile",
  },
  en: {
    name: "Your name",
    namePh: "John Smith",
    email: "Your email",
    emailPh: "john@example.com",
    message: "Your project",
    messagePh: "Tell us about your project in Bulgaria…",
    submit: "Send message",
    sending: "Sending…",
    successTitle: "Message sent!",
    successText: "We reply within 24-48h. Talk soon.",
    errorTitle: "Sending failed",
    errorText: "Please try again, or write to us directly:",
    orMail: "Or by email:",
    invalidEmail: "Please enter a valid email.",
    required: "This field is required.",
    botTitle: "Anti-spam check in progress",
    botText: "Wait a second, then send the message again.",
    protectedBy: "Protected by Cloudflare Turnstile",
  },
  es: {
    name: "Tu nombre",
    namePh: "Juan Pérez",
    email: "Tu email",
    emailPh: "juan@ejemplo.es",
    message: "Tu proyecto",
    messagePh: "Cuéntanos sobre tu proyecto en Bulgaria…",
    submit: "Enviar mensaje",
    sending: "Enviando…",
    successTitle: "¡Mensaje enviado!",
    successText: "Respondemos en 24-48h. Hasta pronto.",
    errorTitle: "El envío falló",
    errorText: "Inténtalo de nuevo, o escríbenos directamente:",
    orMail: "O por email:",
    invalidEmail: "Introduce un email válido.",
    required: "Este campo es obligatorio.",
    botTitle: "Verificación anti-spam en curso",
    botText: "Espera un segundo y vuelve a enviar el mensaje.",
    protectedBy: "Protegido por Cloudflare Turnstile",
  },
};

export default function ContactForm({ lang = "fr" }) {
  const f = formContent[lang] || formContent.fr;

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error | pending
  const [token, setToken] = useState("");

  const turnstileRef = useRef(null);
  const widgetId = useRef(null);

  /* ---- Chargement + rendu du widget Turnstile ---- */
  useEffect(() => {
    if (!TURNSTILE_SITE_KEY) return;

    const renderWidget = () => {
      if (!window.turnstile || !turnstileRef.current || widgetId.current !== null)
        return;
      widgetId.current = window.turnstile.render(turnstileRef.current, {
        sitekey: TURNSTILE_SITE_KEY,
        callback: (t) => setToken(t),
        "expired-callback": () => setToken(""),
        "error-callback": () => setToken(""),
      });
    };

    if (window.turnstile) {
      renderWidget();
      return;
    }

    let script = document.querySelector(`script[src="${TURNSTILE_SRC}"]`);
    if (!script) {
      script = document.createElement("script");
      script.src = TURNSTILE_SRC;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }
    script.addEventListener("load", renderWidget);
    return () => script.removeEventListener("load", renderWidget);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = f.required;
    if (!form.email.trim()) next.email = f.required;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = f.invalidEmail;
    if (!form.message.trim()) next.message = f.required;
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Turnstile actif mais jeton pas encore emis : on invite a reessayer.
    if (TURNSTILE_SITE_KEY && !token) {
      setStatus("pending");
      return;
    }

    setStatus("sending");

    const payload = {
      access_key: ACCESS_KEY,
      subject: `Nouveau contact — ${form.name} (Réussir à Sofia)`,
      from_name: "Réussir à Sofia",
      name: form.name,
      email: form.email,
      message: form.message,
      botcheck: "", // honeypot Web3Forms : rempli = requete rejetee
    };
    if (token) payload["cf-turnstile-response"] = token;

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        // Un jeton Turnstile ne sert qu'une fois : on en redemande un.
        if (widgetId.current !== null && window.turnstile) {
          window.turnstile.reset(widgetId.current);
          setToken("");
        }
      }
    } catch {
      setStatus("error");
      if (widgetId.current !== null && window.turnstile) {
        window.turnstile.reset(widgetId.current);
        setToken("");
      }
    }
  };

  // ----- ÉCRAN SUCCÈS -----
  if (status === "success") {
    return (
      <div className="max-w-md mx-auto bg-[#F5EFE0] rounded-2xl p-8 md:p-10 text-center border border-[#3D352820] shadow-xl">
        <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-[#6B7F4A] flex items-center justify-center">
          <Check className="w-7 h-7 text-[#F5EFE0]" />
        </div>
        <div className="font-display text-2xl font-medium text-[#2C2620] mb-2">
          {f.successTitle}
        </div>
        <p className="text-[#3D3528] leading-relaxed">{f.successText}</p>
      </div>
    );
  }

  const inputBase =
    "w-full bg-[#F5EFE0] border rounded-xl px-4 py-3 text-[#2C2620] placeholder-[#3D352866] " +
    "outline-none transition-colors focus:border-[#6B7F4A] focus:ring-2 focus:ring-[#6B7F4A]/20";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="max-w-md mx-auto bg-[#F5EFE0] rounded-2xl p-6 md:p-8 border border-[#3D352820] shadow-xl text-left"
    >
      {/* Honeypot : invisible pour un humain, rempli par les robots */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      {/* Nom */}
      <div className="mb-4">
        <label htmlFor="cf-name" className="block text-sm font-semibold text-[#2C2620] mb-1.5">
          {f.name}
        </label>
        <input
          id="cf-name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          placeholder={f.namePh}
          className={`${inputBase} ${errors.name ? "border-[#B4472F]" : "border-[#3D352830]"}`}
        />
        {errors.name && <p className="text-xs text-[#B4472F] mt-1">{errors.name}</p>}
      </div>

      {/* Email */}
      <div className="mb-4">
        <label htmlFor="cf-email" className="block text-sm font-semibold text-[#2C2620] mb-1.5">
          {f.email}
        </label>
        <input
          id="cf-email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder={f.emailPh}
          className={`${inputBase} ${errors.email ? "border-[#B4472F]" : "border-[#3D352830]"}`}
        />
        {errors.email && <p className="text-xs text-[#B4472F] mt-1">{errors.email}</p>}
      </div>

      {/* Message */}
      <div className="mb-5">
        <label htmlFor="cf-message" className="block text-sm font-semibold text-[#2C2620] mb-1.5">
          {f.message}
        </label>
        <textarea
          id="cf-message"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder={f.messagePh}
          className={`${inputBase} resize-none ${errors.message ? "border-[#B4472F]" : "border-[#3D352830]"}`}
        />
        {errors.message && <p className="text-xs text-[#B4472F] mt-1">{errors.message}</p>}
      </div>

      {/* Conteneur Turnstile (invisible en mode Invisible, visible sinon) */}
      <div ref={turnstileRef} className="mb-4 flex justify-center empty:mb-0" />

      {/* Bouton */}
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full inline-flex items-center justify-center gap-2 bg-[#6B7F4A] text-[#F5EFE0] px-6 py-3.5 rounded-full text-sm font-semibold hover:bg-[#5A6B3F] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "sending" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            {f.sending}
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            {f.submit}
          </>
        )}
      </button>

      {/* Vérification anti-spam pas encore terminée */}
      {status === "pending" && (
        <div className="mt-4 flex items-start gap-2 text-sm text-[#3D3528] bg-[#EDE4D0] rounded-xl p-3">
          <Loader2 className="w-4 h-4 mt-0.5 flex-shrink-0 animate-spin" />
          <span>
            <strong>{f.botTitle}.</strong> {f.botText}
          </span>
        </div>
      )}

      {/* Erreur */}
      {status === "error" && (
        <div className="mt-4 flex items-start gap-2 text-sm text-[#B4472F] bg-[#B4472F]/8 rounded-xl p-3">
          <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
          <span>
            <strong>{f.errorTitle}.</strong> {f.errorText}{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="underline font-semibold">
              {CONTACT_EMAIL}
            </a>
          </span>
        </div>
      )}

      {/* Secours mailto */}
      <div className="mt-5 pt-4 border-t border-[#3D352815] text-center">
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="inline-flex items-center gap-2 text-sm text-[#3D3528] hover:text-[#6B7F4A] transition-colors"
        >
          <Mail className="w-4 h-4" />
          {f.orMail} <span className="font-semibold">{CONTACT_EMAIL}</span>
        </a>
        {TURNSTILE_SITE_KEY && (
          <p className="mt-2 text-[10px] text-[#3D352866]">{f.protectedBy}</p>
        )}
      </div>
    </form>
  );
}