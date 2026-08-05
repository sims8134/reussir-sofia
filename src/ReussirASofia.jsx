import React, { useState, useRef, useEffect } from "react";
import ContactForm from "./components/ContactForm";
import Seo from "./Seo";
import StructuredData from "./StructuredData";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  Plane,
  Home,
  Building2,
  MessageCircle,
  Sparkles,
  MapPin,
  Users,
  Briefcase,
  ChevronDown,
  Menu,
  X,
  IdCard,
  Heart,
  Dog,
  Baby,
  Car,
  Landmark,
  Truck,
  HeartHandshake,
  Key,
} from "lucide-react";

/* ---------- CONTENU MULTILINGUE ---------- */
const content = {
  fr: {
    nav: {
      why: "Pourquoi nous",
      packages: "Nos packages",
      custom: "Sur mesure",
      how: "Comment ça marche",
      about: "À propos",
      faq: "FAQ",
      cta: "Contact",
    },
    hero: {
      tag: "Disponible · Couple franco-bulgare à Sofia",
      title1: "Réussir votre",
      title2: "expatriation",
      title3: "en Bulgarie,",
      title4: "sans la galère.",
      subtitle:
        "Un couple franco-bulgare vous accompagne sur place — du premier appel à la création de votre entreprise. Du tourisme à l'expatriation business.",
      ctaPrimary: "Voir les packages",
      ctaSecondary: "Contact",
    },
    trust: [
      { value: "FR · EN · BG · ES", label: "Quadrilingue" },
      { value: "Sur place", label: "À Sofia, vraiment" },
      { value: "Couple", label: "Franco-bulgare" },
      { value: "Réseau", label: "Avocat & comptable" },
    ],
    why: {
      kicker: "POURQUOI NOUS",
      title: "Ni une agence froide, ni un blog amateur.",
      subtitle:
        "Un vrai couple, sur place, qui a fait le chemin avant vous — et qui le refait avec vous, en français.",
      pillars: [
        {
          icon: "Users",
          title: "L'humain d'abord",
          text: "Vous parlez à un couple, pas à un standard téléphonique. Disponibles, francophones, présents avant, pendant et après.",
        },
        {
          icon: "MapPin",
          title: "Vraiment sur place",
          text: "Installés à Sofia depuis plusieurs années. Nous connaissons les rues, les bonnes adresses, les bons interlocuteurs administratifs.",
        },
        {
          icon: "Briefcase",
          title: "Du tourisme au business",
          text: "Une seule équipe pour découvrir le pays, vous y installer, ou y créer votre EOOD. Sans devoir tout réexpliquer à chaque étape.",
        },
      ],
    },
    packagesSection: {
      kicker: "NOS PACKAGES",
      title: "Trois formules, un parcours.",
      subtitle:
        "Que vous veniez en repérage, en installation ou pour entreprendre — nous avons le bon niveau d'accompagnement.",
      launchBadge: "Offre lancement -20%",
      popular: "Le plus choisi",
      cta: "Choisir cette formule",
      addonsTitle: "Options à la carte",
      addons: [
        { label: "Cours de bulgare additionnel", price: "30 €" },
        { label: "Accompagnement RDV admin (par heure)", price: "50 €" },
        { label: "Journée d'accompagnement Sofia", price: "120 €" },
        { label: "Recherche de logement (résidentiel)", price: "à partir de 250 €" },
        { label: "Recherche de locaux pro", price: "à partir de 400 €" },
      ],
      list: [
        {
          name: "Découverte Sofia",
          subtitle: "Pour venir en repérage",
          oldPrice: "310 €",
          price: "250 €",
          icon: "Plane",
          features: [
            "Call pré-voyage de 1h (questions, conseils, planning)",
            "Accueil à l'aéroport et taxi vers votre hôtel (zéro arnaque)",
            "Aide à l'installation et briefing local",
            "Guide PDF personnalisé de Sofia (~15 pages)",
            "1 journée complète d'accompagnement francophone",
          ],
          notes:
            "Idéal pour découvrir Sofia avant de décider d'une expatriation.",
        },
        {
          name: "Installation Bulgarie",
          subtitle: "Pour vous installer sereinement",
          oldPrice: "800 €",
          price: "650 €",
          icon: "Home",
          highlighted: true,
          features: [
            "Tout le package Découverte",
            "4 leçons de bulgare en ligne (par une native francophone)",
            "Assistance à la recherche de logement",
            "Mise en relation avec notre avocat partenaire",
            "Accompagnement à votre dossier de carte de résidence",
            "Checklist administrative complète",
          ],
          notes:
            "Honoraires de l'avocat facturés séparément, en toute transparence.",
        },
        {
          name: "Expat Business",
          subtitle: "Pour entreprendre en Bulgarie",
          oldPrice: "1 850 €",
          price: "1 490 €",
          icon: "Building2",
          features: [
            "Tout le package Installation",
            "Création complète de votre EOOD",
            "Mise en relation avec notre comptable partenaire (anglophone)",
            "Assistance à la recherche de logement et de locaux",
            "Accompagnement opérationnel 6 à 12 mois",
            "Suivi NAP, facturation, déclarations courantes",
          ],
          notes:
            "Frais de constitution et honoraires comptable indiqués séparément.",
        },
      ],
    },
    custom: {
      kicker: "ACCOMPAGNEMENT SUR MESURE",
      title: "Votre cas n'est pas dans nos packages ? On gère aussi.",
      subtitle:
        "Mariage, naissance, véhicule, immobilier… Les démarches de la vraie vie en Bulgarie, accompagnées en français.",
      items: [
        { icon: "IdCard", title: "Numéro EGN + sécu sociale", price: "à partir de 50 €" },
        { icon: "Heart", title: "Inscription médecin / NZOK", price: "à partir de 50 €" },
        { icon: "Dog", title: "Importation d'un animal", price: "à partir de 50 €" },
        { icon: "Baby", title: "Déclaration de naissance", price: "à partir de 50 €" },
        { icon: "Car", title: "Conversion du permis de conduire", price: "à partir de 50 €" },
        { icon: "Landmark", title: "Ouverture de compte bancaire", price: "à partir de 50 €" },
        { icon: "Truck", title: "Immatriculation d'un véhicule", price: "à partir de 50 €" },
        { icon: "HeartHandshake", title: "Mariage mixte franco-bulgare", price: "à partir de 50 €" },
        { icon: "Key", title: "Accompagnement achat immobilier", price: "à partir de 50 €" },
      ],
      note:
        "Tarifs d'accompagnement uniquement. Frais officiels (taxes administratives, traductions assermentées, honoraires de professionnels habilités) facturés en sus.",
      disclaimer:
        "Réussir à Sofia est une société d'accompagnement administratif. Nous ne sommes ni avocats ni notaires : pour les actes nécessitant une expertise réglementée, nous vous mettons en relation avec nos partenaires habilités.",
      cta: "Discuter de mon cas",
    },
    how: {
      kicker: "COMMENT ÇA MARCHE",
      title: "Un parcours clair, en quatre étapes.",
      steps: [
        {
          n: "01",
          title: "Premier contact",
          text: "Un message pour comprendre votre projet et vos contraintes.",
        },
        {
          n: "02",
          title: "Choix de la formule",
          text: "Nous vous proposons le package le plus adapté — ou un sur-mesure si nécessaire.",
        },
        {
          n: "03",
          title: "Préparation",
          text: "Documents, calendrier, mise en relation avec nos partenaires, planning d'arrivée.",
        },
        {
          n: "04",
          title: "Accueil & suivi",
          text: "Accueil sur place à Sofia, accompagnement actif, et suivi pendant toute la durée prévue.",
        },
      ],
    },
    about: {
      kicker: "QUI NOUS SOMMES",
      title: "Un Français et une Bulgare. À Sofia. Pour de vrai.",
      text1:
        "Lui est Français, installé à Sofia depuis plusieurs années. Développeur web, ancien spécialiste support clientèle francophone, il a porté à Sofia un projet culturel ambitieux autour de l'histoire du pays. Il connaît la galère du nouvel arrivant — il l'a vécue.",
      text2:
        "Elle est Bulgare, francophone et hispanophone, professeure de français, de bulgare et d'espagnol. Native de Sofia, elle a étudié et vécu en Espagne avant de revenir. Pas de cours académique froid — une vraie immersion humaine.",
      text3:
        "Ensemble, nous avons créé ce que nous aurions aimé trouver à notre arrivée : un accompagnement humain, complet, francophone, qui ne lâche pas son client au bout de 48h.",
    },
    faq: {
      kicker: "QUESTIONS FRÉQUENTES",
      title: "Tout ce que vous voulez savoir.",
      items: [
        {
          q: "Combien ça coûte vraiment au total ?",
          a: "Les prix affichés sont fermes pour notre prestation d'accompagnement. Les frais tiers (avocat, comptable, frais de constitution d'EOOD ~150-200 €, honoraires comptable mensuels ~100-150 BGN) sont facturés séparément, directement par les prestataires concernés. Tout est détaillé dans votre devis avant signature.",
        },
        {
          q: "Faut-il parler bulgare pour s'installer en Bulgarie ?",
          a: "Non, ce n'est pas obligatoire. Beaucoup de Bulgares à Sofia parlent anglais, et nous gérons les démarches administratives en bulgare pour vous. Cela dit, apprendre les bases ouvre énormément de portes — c'est pourquoi nous incluons 4 cours dans nos packages Installation et Business.",
        },
        {
          q: "Combien de temps pour obtenir la carte de résidence ?",
          a: "Pour un citoyen UE, la procédure prend généralement entre 4 et 12 semaines selon la complétude du dossier et la période de l'année. Notre rôle est de préparer un dossier complet en amont avec notre avocat partenaire, pour éviter les allers-retours.",
        },
        {
          q: "Et si je ne suis pas sûr de mon projet ?",
          a: "C'est précisément à cela que sert le package Découverte. Venez quelques jours, on vous fait visiter, on répond à toutes vos questions, et vous décidez ensuite à tête reposée. Pas de pression commerciale.",
        },
        {
          q: "Travaillez-vous uniquement à Sofia ?",
          a: "Sofia est notre base et notre spécialité. Nous pouvons accompagner des projets sur Plovdiv, Varna ou Bansko, mais avec un degré de connaissance terrain moindre. Nous le précisons toujours en amont.",
        },
        {
          q: "Comment se passe le paiement ?",
          a: "Acompte de 30% à la signature, solde au démarrage de la prestation. Virement bancaire ou paiement en ligne. Facture émise par notre société bulgare (EOOD).",
        },
      ],
    },
    finalCta: {
      title: "Prêt à parler de votre projet ?",
      subtitle:
        "Le premier échange est gratuit, sans engagement.",
      email: "Email",
    },
    footer: {
      tagline: "L'expatriation en Bulgarie, accompagnée par un vrai couple franco-bulgare.",
      legal: "Mentions légales · CGV · Politique de confidentialité",
      copy: "© 2026 Réussir à Sofia · Tous droits réservés",
    },
  },
  en: {
    nav: {
      why: "Why us",
      packages: "Packages",
      custom: "Custom",
      how: "How it works",
      about: "About",
      faq: "FAQ",
      cta: "Contact",
    },
    hero: {
      tag: "Available · French-Bulgarian couple in Sofia",
      title1: "Make your move to",
      title2: "Bulgaria",
      title3: "actually",
      title4: "work.",
      subtitle:
        "A French-Bulgarian couple guides you on the ground — from your first call to setting up your company. From tourism to business expat.",
      ctaPrimary: "See packages",
      ctaSecondary: "Contact",
    },
    trust: [
      { value: "FR · EN · BG · ES", label: "Four languages" },
      { value: "On the ground", label: "Really in Sofia" },
      { value: "A couple", label: "French + Bulgarian" },
      { value: "Network", label: "Lawyer & accountant" },
    ],
    why: {
      kicker: "WHY US",
      title: "Not a cold agency, not an amateur blog.",
      subtitle:
        "A real couple, on the ground, who walked the path before you — and walks it again with you.",
      pillars: [
        {
          icon: "Users",
          title: "Humans first",
          text: "You speak to a couple, not a call center. Available, French-speaking, present before, during and after.",
        },
        {
          icon: "MapPin",
          title: "Truly on the ground",
          text: "Living in Sofia for several years. We know the streets, the right addresses, the right people in administrations.",
        },
        {
          icon: "Briefcase",
          title: "From tourism to business",
          text: "One team to discover the country, settle in, or set up your EOOD. No need to re-explain your project at every step.",
        },
      ],
    },
    packagesSection: {
      kicker: "PACKAGES",
      title: "Three formulas, one journey.",
      subtitle:
        "Whether you're scouting, settling in, or starting a business — we have the right level of support.",
      launchBadge: "Launch offer -20%",
      popular: "Most chosen",
      cta: "Choose this plan",
      addonsTitle: "À la carte options",
      addons: [
        { label: "Extra Bulgarian lesson", price: "30 €" },
        { label: "Admin appointment support (per hour)", price: "50 €" },
        { label: "Extra Sofia accompaniment day", price: "120 €" },
        { label: "Housing search (residential)", price: "from 250 €" },
        { label: "Office space search", price: "from 400 €" },
      ],
      list: [
        {
          name: "Sofia Discovery",
          subtitle: "For your scouting trip",
          oldPrice: "310 €",
          price: "250 €",
          icon: "Plane",
          features: [
            "1h pre-trip call (questions, advice, planning)",
            "Airport pickup and taxi to your hotel (no scams)",
            "Hotel check-in support and local briefing",
            "Custom Sofia PDF guide (~15 pages)",
            "1 full day of French-speaking accompaniment",
          ],
          notes: "Perfect to scout Sofia before deciding to move.",
        },
        {
          name: "Bulgaria Move-in",
          subtitle: "Settle in with peace of mind",
          oldPrice: "800 €",
          price: "650 €",
          icon: "Home",
          highlighted: true,
          features: [
            "Everything in Discovery",
            "4 online Bulgarian lessons (with a native French-speaking teacher)",
            "Housing search assistance",
            "Introduction to our partner lawyer",
            "Support for your residence card application",
            "Full administrative checklist",
          ],
          notes: "Lawyer fees billed separately, fully transparently.",
        },
        {
          name: "Business Expat",
          subtitle: "For starting a company",
          oldPrice: "1 850 €",
          price: "1 490 €",
          icon: "Building2",
          features: [
            "Everything in Move-in",
            "Complete EOOD setup",
            "Introduction to our partner accountant (English-speaking)",
            "Housing and office space search assistance",
            "Operational support for 6 to 12 months",
            "NAP, invoicing, and routine filings follow-up",
          ],
          notes: "Setup fees and accountant fees stated separately.",
        },
      ],
    },
    custom: {
      kicker: "CUSTOM SUPPORT",
      title: "Your case isn't in our packages? We handle that too.",
      subtitle:
        "Marriage, birth, vehicle, real estate… Real-life Bulgarian admin, supported in French and English.",
      items: [
        { icon: "IdCard", title: "EGN number + health insurance", price: "from 50 €" },
        { icon: "Heart", title: "Doctor / NZOK registration", price: "from 50 €" },
        { icon: "Dog", title: "Pet import", price: "from 50 €" },
        { icon: "Baby", title: "Birth declaration", price: "from 50 €" },
        { icon: "Car", title: "Driver's license conversion", price: "from 50 €" },
        { icon: "Landmark", title: "Bank account opening", price: "from 50 €" },
        { icon: "Truck", title: "Vehicle registration", price: "from 50 €" },
        { icon: "HeartHandshake", title: "Mixed French-Bulgarian marriage", price: "from 50 €" },
        { icon: "Key", title: "Real estate purchase support", price: "from 50 €" },
      ],
      note:
        "Support fees only. Official costs (administrative taxes, sworn translations, fees of licensed professionals) billed separately.",
      disclaimer:
        "Réussir à Sofia is an administrative support company. We are not lawyers or notaries: for matters requiring regulated expertise, we connect you with our licensed partners.",
      cta: "Discuss my case",
    },
    how: {
      kicker: "HOW IT WORKS",
      title: "A clear path, in four steps.",
      steps: [
        {
          n: "01",
          title: "First contact",
          text: "A message to understand your project and constraints.",
        },
        {
          n: "02",
          title: "Choose your plan",
          text: "We propose the most suitable package — or a custom one if needed.",
        },
        {
          n: "03",
          title: "Preparation",
          text: "Documents, calendar, partner introductions, arrival planning.",
        },
        {
          n: "04",
          title: "Welcome & follow-up",
          text: "On-site welcome in Sofia, active support, and follow-up throughout.",
        },
      ],
    },
    about: {
      kicker: "ABOUT US",
      title: "A Frenchman and a Bulgarian. In Sofia. For real.",
      text1:
        "He is French, settled in Sofia for several years. Web developer, former French-speaking customer support specialist, he led an ambitious cultural project on the country's history. He knows the newcomer's struggle — he lived it.",
      text2:
        "She is Bulgarian, French and Spanish-speaking, teaching French, Bulgarian and Spanish. A native of Sofia, she studied and lived in Spain before coming back. No cold academic class — real human immersion.",
      text3:
        "Together, we built what we wished we'd found when we arrived: a human, complete, French-speaking support that doesn't drop you after 48 hours.",
    },
    faq: {
      kicker: "FREQUENTLY ASKED QUESTIONS",
      title: "Everything you might want to know.",
      items: [
        {
          q: "What's the real total cost?",
          a: "The displayed prices are firm for our support service. Third-party fees (lawyer, accountant, EOOD setup ~150-200 €, monthly accountant ~100-150 BGN) are billed separately, directly by the relevant providers. Everything is detailed in your quote before signing.",
        },
        {
          q: "Do I need to speak Bulgarian to settle here?",
          a: "No, it's not mandatory. Many Bulgarians in Sofia speak English, and we handle administrative steps in Bulgarian for you. That said, learning the basics opens many doors — that's why we include 4 lessons in our Move-in and Business packages.",
        },
        {
          q: "How long for the residence card?",
          a: "For an EU citizen, the process usually takes 4 to 12 weeks depending on document completeness and season. Our role is to prepare a complete file upfront with our partner lawyer, to avoid back-and-forth.",
        },
        {
          q: "What if I'm not sure about my project?",
          a: "That's exactly what the Discovery package is for. Spend a few days here, we show you around, answer all your questions, and you decide later. No sales pressure.",
        },
        {
          q: "Do you only work in Sofia?",
          a: "Sofia is our base and specialty. We can support projects in Plovdiv, Varna or Bansko, but with less ground-level expertise. We always say so upfront.",
        },
        {
          q: "How does payment work?",
          a: "30% deposit on signing, balance when the service starts. Bank transfer or online payment. Invoice issued by our Bulgarian company (EOOD).",
        },
      ],
    },
    finalCta: {
      title: "Ready to talk about your project?",
      subtitle:
        "The first conversation is free, with no commitment.",
      email: "Email",
    },
    footer: {
      tagline: "Bulgaria expat life, supported by a real French-Bulgarian couple.",
      legal: "Legal · Terms · Privacy",
      copy: "© 2026 Réussir à Sofia · All rights reserved",
    },
  },
  es: {
    nav: {
      why: "Por qué nosotros",
      packages: "Paquetes",
      custom: "A medida",
      how: "Cómo funciona",
      about: "Nosotros",
      faq: "FAQ",
      cta: "Contacto",
    },
    hero: {
      tag: "Disponible · Pareja franco-búlgara en Sofía",
      title1: "Logra tu",
      title2: "expatriación",
      title3: "en Bulgaria,",
      title4: "sin complicaciones.",
      subtitle:
        "Una pareja franco-búlgara te acompaña sobre el terreno — desde la primera llamada hasta la creación de tu empresa. Del turismo a la expatriación business.",
      ctaPrimary: "Ver los paquetes",
      ctaSecondary: "Contacto",
    },
    trust: [
      { value: "FR · EN · BG · ES", label: "Cuatro idiomas" },
      { value: "Sobre el terreno", label: "En Sofía, de verdad" },
      { value: "Pareja", label: "Franco-búlgara" },
      { value: "Red", label: "Abogado y contable" },
    ],
    why: {
      kicker: "POR QUÉ NOSOTROS",
      title: "Ni una agencia fría, ni un blog amateur.",
      subtitle:
        "Una pareja real, sobre el terreno, que ha hecho el camino antes que tú — y lo recorre contigo, en español.",
      pillars: [
        {
          icon: "Users",
          title: "Lo humano primero",
          text: "Hablas con una pareja, no con un centro de llamadas. Disponibles, hispanohablantes, presentes antes, durante y después.",
        },
        {
          icon: "MapPin",
          title: "Realmente sobre el terreno",
          text: "Instalados en Sofía desde hace varios años. Conocemos las calles, las buenas direcciones, los buenos contactos administrativos.",
        },
        {
          icon: "Briefcase",
          title: "Del turismo al business",
          text: "Un solo equipo para descubrir el país, instalarte, o crear tu EOOD. Sin tener que volver a explicar tu proyecto en cada etapa.",
        },
      ],
    },
    packagesSection: {
      kicker: "NUESTROS PAQUETES",
      title: "Tres fórmulas, un recorrido.",
      subtitle:
        "Ya sea para una visita exploratoria, una instalación o emprender — tenemos el nivel de acompañamiento adecuado.",
      launchBadge: "Oferta lanzamiento -20%",
      popular: "El más elegido",
      cta: "Elegir esta fórmula",
      addonsTitle: "Opciones a la carta",
      addons: [
        { label: "Clase de búlgaro adicional", price: "30 €" },
        { label: "Acompañamiento cita administrativa (por hora)", price: "50 €" },
        { label: "Día de acompañamiento Sofía", price: "120 €" },
        { label: "Búsqueda de vivienda (residencial)", price: "desde 250 €" },
        { label: "Búsqueda de local profesional", price: "desde 400 €" },
      ],
      list: [
        {
          name: "Descubrimiento Sofía",
          subtitle: "Para una visita exploratoria",
          oldPrice: "310 €",
          price: "250 €",
          icon: "Plane",
          features: [
            "Llamada previa al viaje de 1h (preguntas, consejos, planning)",
            "Recepción en el aeropuerto y taxi al hotel (sin estafas)",
            "Ayuda con la instalación y briefing local",
            "Guía PDF personalizada de Sofía (~15 páginas)",
            "1 día completo de acompañamiento en español",
          ],
          notes: "Ideal para descubrir Sofía antes de decidir expatriarse.",
        },
        {
          name: "Instalación Bulgaria",
          subtitle: "Para instalarte con tranquilidad",
          oldPrice: "800 €",
          price: "650 €",
          icon: "Home",
          highlighted: true,
          features: [
            "Todo el paquete Descubrimiento",
            "4 clases de búlgaro online (con profesora hispanohablante)",
            "Asistencia en la búsqueda de vivienda",
            "Contacto con nuestro abogado colaborador",
            "Acompañamiento del expediente de tarjeta de residencia",
            "Checklist administrativa completa",
          ],
          notes:
            "Honorarios del abogado facturados aparte, con total transparencia.",
        },
        {
          name: "Expat Business",
          subtitle: "Para emprender en Bulgaria",
          oldPrice: "1 850 €",
          price: "1 490 €",
          icon: "Building2",
          features: [
            "Todo el paquete Instalación",
            "Creación completa de tu EOOD",
            "Contacto con nuestra contable colaboradora (anglófona)",
            "Asistencia en la búsqueda de vivienda y locales",
            "Acompañamiento operativo de 6 a 12 meses",
            "Seguimiento NAP, facturación, declaraciones corrientes",
          ],
          notes:
            "Gastos de constitución y honorarios contables indicados aparte.",
        },
      ],
    },
    custom: {
      kicker: "ACOMPAÑAMIENTO A MEDIDA",
      title: "¿Tu caso no está en nuestros paquetes? También lo gestionamos.",
      subtitle:
        "Matrimonio, nacimiento, vehículo, inmobiliario… Las gestiones de la vida real en Bulgaria, acompañadas en español.",
      items: [
        { icon: "IdCard", title: "Número EGN + seguridad social", price: "desde 50 €" },
        { icon: "Heart", title: "Inscripción médico / NZOK", price: "desde 50 €" },
        { icon: "Dog", title: "Importación de un animal", price: "desde 50 €" },
        { icon: "Baby", title: "Declaración de nacimiento", price: "desde 50 €" },
        { icon: "Car", title: "Conversión del permiso de conducir", price: "desde 50 €" },
        { icon: "Landmark", title: "Apertura de cuenta bancaria", price: "desde 50 €" },
        { icon: "Truck", title: "Matriculación de un vehículo", price: "desde 50 €" },
        { icon: "HeartHandshake", title: "Matrimonio mixto hispano-búlgaro", price: "desde 50 €" },
        { icon: "Key", title: "Acompañamiento compra inmobiliaria", price: "desde 50 €" },
      ],
      note:
        "Tarifas de acompañamiento únicamente. Gastos oficiales (tasas administrativas, traducciones juradas, honorarios de profesionales habilitados) facturados aparte.",
      disclaimer:
        "Réussir à Sofia es una empresa de acompañamiento administrativo. No somos abogados ni notarios: para los actos que requieren experiencia regulada, te ponemos en contacto con nuestros colaboradores habilitados.",
      cta: "Hablar de mi caso",
    },
    how: {
      kicker: "CÓMO FUNCIONA",
      title: "Un recorrido claro, en cuatro etapas.",
      steps: [
        {
          n: "01",
          title: "Primer contacto",
          text: "Un mensaje para entender tu proyecto y tus restricciones.",
        },
        {
          n: "02",
          title: "Elección de la fórmula",
          text: "Te proponemos el paquete más adecuado — o uno a medida si es necesario.",
        },
        {
          n: "03",
          title: "Preparación",
          text: "Documentos, calendario, contacto con nuestros colaboradores, planning de llegada.",
        },
        {
          n: "04",
          title: "Recepción y seguimiento",
          text: "Recepción en Sofía, acompañamiento activo, y seguimiento durante toda la duración prevista.",
        },
      ],
    },
    about: {
      kicker: "QUIÉNES SOMOS",
      title: "Un francés y una búlgara. En Sofía. De verdad.",
      text1:
        "Él es francés, instalado en Sofía desde hace varios años. Desarrollador web, antiguo especialista en atención al cliente francófona, lideró en Sofía un ambicioso proyecto cultural sobre la historia del país. Conoce el calvario del recién llegado — lo ha vivido.",
      text2:
        "Ella es búlgara, francófona e hispanohablante, profesora de francés, búlgaro y español. Nativa de Sofía, estudió y vivió en España antes de regresar. Sin clases académicas frías — una verdadera inmersión humana.",
      text3:
        "Juntos, hemos creado lo que nos hubiera gustado encontrar a nuestra llegada: un acompañamiento humano, completo, en tu idioma, que no abandona a su cliente al cabo de 48h.",
    },
    faq: {
      kicker: "PREGUNTAS FRECUENTES",
      title: "Todo lo que quieres saber.",
      items: [
        {
          q: "¿Cuánto cuesta realmente en total?",
          a: "Los precios indicados son firmes para nuestra prestación de acompañamiento. Los gastos de terceros (abogado, contable, gastos de constitución de EOOD ~150-200 €, honorarios contables mensuales ~100-150 BGN) se facturan aparte, directamente por los prestadores correspondientes. Todo está detallado en tu presupuesto antes de la firma.",
        },
        {
          q: "¿Hay que hablar búlgaro para instalarse en Bulgaria?",
          a: "No, no es obligatorio. Muchos búlgaros en Sofía hablan inglés, y nosotros gestionamos los trámites administrativos en búlgaro por ti. Dicho esto, aprender lo básico abre muchas puertas — por eso incluimos 4 clases en nuestros paquetes Instalación y Business.",
        },
        {
          q: "¿Cuánto tiempo para obtener la tarjeta de residencia?",
          a: "Para un ciudadano de la UE, el proceso suele tardar entre 4 y 12 semanas según la complejidad del expediente y la época del año. Nuestro papel es preparar un expediente completo previamente con nuestro abogado colaborador, para evitar idas y vueltas.",
        },
        {
          q: "¿Y si no estoy seguro de mi proyecto?",
          a: "Para eso sirve precisamente el paquete Descubrimiento. Ven unos días, te llevamos a visitar, respondemos a todas tus preguntas, y luego decides con calma. Sin presión comercial.",
        },
        {
          q: "¿Trabajan únicamente en Sofía?",
          a: "Sofía es nuestra base y nuestra especialidad. Podemos acompañar proyectos en Plovdiv, Varna o Bansko, pero con un nivel de conocimiento del terreno menor. Lo precisamos siempre desde el principio.",
        },
        {
          q: "¿Cómo funciona el pago?",
          a: "30% de adelanto a la firma, resto al inicio de la prestación. Transferencia bancaria o pago online. Factura emitida por nuestra empresa búlgara (EOOD).",
        },
      ],
    },
    finalCta: {
      title: "¿Listo para hablar de tu proyecto?",
      subtitle:
        "La primera conversación es gratuita, sin compromiso.",
      email: "Email",
    },
    footer: {
      tagline: "La expatriación en Bulgaria, acompañada por una pareja franco-búlgara real.",
      legal: "Aviso legal · Condiciones · Privacidad",
      copy: "© 2026 Réussir à Sofia · Todos los derechos reservados",
    },
  },
};

/* ---------- ICÔNES ---------- */
const iconMap = {
  Plane, Home, Building2, Users, MapPin, Briefcase,
  IdCard, Heart, Dog, Baby, Car, Landmark, Truck, HeartHandshake, Key,
};

/* ==================== PHOTOS DE SOFIA ====================
   ---- INVERSION custom ↔ about appliquée ----
   - section "Sur mesure" → photo panorama urbain
   - section "À propos"   → photo mural (détail authentique)
============================================================= */
const PHOTOS = {
  hero:     "/images/sofia/hero-cathedrale.jpg",
  why:      "/images/sofia/why-rue-vitosha.jpg",
  packages: "/images/sofia/packages-cafe-sofia.jpg",
  custom:   "/images/sofia/about-panorama-sofia.jpg",  // ← panorama urbain (inversé)
  about:    "/images/sofia/custom-mural-sofia.jpg",    // ← mural (inversé)
  cta:      "/images/sofia/cta-sofia-by-night.jpg",
};

/* ==================== COMPOSANT FADE-IN IMAGE ====================
   Animation au scroll + paramètre objectPosition pour contrôler le cadrage.
   `eager` : à réserver à l'image visible au chargement (hero = LCP).
================================================================= */
const FadeInImage = ({ src, alt, className = "", aspectClass = "aspect-[4/3]", objectPosition = "center", eager = false }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden rounded-2xl ${aspectClass} ${className} transition-all duration-1000 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <img
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : "auto"}
        style={{ objectPosition }}
        className={`w-full h-full object-cover transition-transform duration-1000 ${
          visible ? "scale-100" : "scale-105"
        }`}
      />
    </div>
  );
};

/* ---------- COMPOSANTS UTILITAIRES ---------- */
const FaqItem = ({ q, a, isOpen, onToggle }) => (
  <div className="border-b border-[#3D352822]">
    <button
      onClick={onToggle}
      className="w-full flex items-start justify-between gap-6 py-6 text-left group"
    >
      <span className="font-display text-xl md:text-2xl text-[#2C2620] leading-snug group-hover:text-[#6B7F4A] transition-colors">
        {q}
      </span>
      <ChevronDown
        className={`w-6 h-6 mt-1 text-[#6B7F4A] flex-shrink-0 transition-transform duration-300 ${
          isOpen ? "rotate-180" : ""
        }`}
      />
    </button>
    <div
      className={`grid transition-all duration-300 ease-out ${
        isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
      }`}
    >
      <div className="overflow-hidden">
        <p className="text-[#3D3528] leading-relaxed text-base md:text-lg max-w-3xl">{a}</p>
      </div>
    </div>
  </div>
);

/* ---------- COMPOSANT PRINCIPAL ---------- */
export default function ReussirASofia() {
  const [lang, setLang] = useState("fr");
  const [openFaq, setOpenFaq] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = content[lang];

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const onPlaceLabel =
    lang === "fr" ? "Sur place à"
    : lang === "es" ? "Sobre el terreno en"
    : "On the ground in";

  return (
    <div className="min-h-screen bg-[#F5EFE0] text-[#2C2620]">
      {/* Métadonnées de la route / + données structurées (hissées vers <head> par React 19) */}
      <Seo
        title="Expatriation en Bulgarie sans la galère · Réussir à Sofia"
        description="Couple franco-bulgare basé à Sofia. Tourisme, expatriation, carte de résidence, création d'EOOD. Accompagnement humain et complet en français, sur place. À partir de 250 €."
        canonical="https://reussir-sofia.fr/"
        ogTitle="Réussir à Sofia · Votre expatriation en Bulgarie, sans la galère"
      />
      <StructuredData />


      {/* ---------- NAVBAR ---------- */}
      <nav className="sticky top-0 z-50 bg-[#F5EFE0]/85 backdrop-blur-md border-b border-[#3D352815]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
          <div className="font-display text-xl md:text-2xl font-semibold text-[#2C2620] tracking-tight">
            Réussir<span className="text-[#C8985C]">·</span>Sofia
          </div>

          {/* Menu desktop */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#3D3528]">
            <a href="#why" className="hover:text-[#6B7F4A] transition-colors">{t.nav.why}</a>
            <a href="#packages" className="hover:text-[#6B7F4A] transition-colors">{t.nav.packages}</a>
            <a href="#custom" className="hover:text-[#6B7F4A] transition-colors">{t.nav.custom}</a>
            <a href="#how" className="hover:text-[#6B7F4A] transition-colors">{t.nav.how}</a>
            <a href="#about" className="hover:text-[#6B7F4A] transition-colors">{t.nav.about}</a>
            <a href="#faq" className="hover:text-[#6B7F4A] transition-colors">{t.nav.faq}</a>
          </div>

          {/* Actions à droite */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* Sélecteur 3 langues */}
            <div className="flex items-center bg-[#EDE4D0] rounded-full p-1 text-xs font-semibold">
              {["fr", "en", "es"].map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-2.5 py-1 rounded-full transition-all uppercase ${
                    lang === l ? "bg-[#6B7F4A] text-[#F5EFE0]" : "text-[#3D3528]"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 bg-[#2C2620] text-[#F5EFE0] px-4 py-2 rounded-full text-sm font-medium hover:bg-[#6B7F4A] transition-colors"
            >
              {t.nav.cta}
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full hover:bg-[#EDE4D0] transition-colors"
              aria-label="Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#2C2620]" />
              ) : (
                <Menu className="w-6 h-6 text-[#2C2620]" />
              )}
            </button>
          </div>
        </div>

        {/* Menu mobile (drawer) */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
            mobileMenuOpen ? "max-h-96 border-t border-[#3D352815]" : "max-h-0"
          }`}
        >
          <div className="px-6 py-4 flex flex-col gap-1 bg-[#F5EFE0]">
            <a href="#why" onClick={closeMobileMenu} className="py-3 text-base font-medium text-[#3D3528] hover:text-[#6B7F4A] border-b border-[#3D352810]">
              {t.nav.why}
            </a>
            <a href="#packages" onClick={closeMobileMenu} className="py-3 text-base font-medium text-[#3D3528] hover:text-[#6B7F4A] border-b border-[#3D352810]">
              {t.nav.packages}
            </a>
            <a href="#custom" onClick={closeMobileMenu} className="py-3 text-base font-medium text-[#3D3528] hover:text-[#6B7F4A] border-b border-[#3D352810]">
              {t.nav.custom}
            </a>
            <a href="#how" onClick={closeMobileMenu} className="py-3 text-base font-medium text-[#3D3528] hover:text-[#6B7F4A] border-b border-[#3D352810]">
              {t.nav.how}
            </a>
            <a href="#about" onClick={closeMobileMenu} className="py-3 text-base font-medium text-[#3D3528] hover:text-[#6B7F4A] border-b border-[#3D352810]">
              {t.nav.about}
            </a>
            <a href="#faq" onClick={closeMobileMenu} className="py-3 text-base font-medium text-[#3D3528] hover:text-[#6B7F4A] border-b border-[#3D352810]">
              {t.nav.faq}
            </a>
            <a href="#contact" onClick={closeMobileMenu} className="mt-3 inline-flex items-center justify-center gap-2 bg-[#2C2620] text-[#F5EFE0] px-4 py-3 rounded-full text-sm font-medium">
              {t.nav.cta}
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </nav>

      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grain opacity-50 pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#C8985C] opacity-20 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -left-40 w-80 h-80 rounded-full bg-[#6B7F4A] opacity-15 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-20 md:pt-32 pb-24 md:pb-40">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#EDE4D0] border border-[#6B7F4A40] rounded-full px-4 py-1.5 text-xs font-semibold text-[#6B7F4A] mb-8">
                <span className="w-2 h-2 rounded-full bg-[#6B7F4A] animate-pulse" />
                {t.hero.tag}
              </div>

              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[0.95] tracking-tight text-[#2C2620]">
                {t.hero.title1}{" "}
                <em className="italic font-normal text-[#6B7F4A]">{t.hero.title2}</em>{" "}
                {t.hero.title3}
                <br />
                <span className="font-semibold">{t.hero.title4}</span>
              </h1>

              <p className="mt-8 text-lg md:text-xl text-[#3D3528] max-w-xl leading-relaxed">
                {t.hero.subtitle}
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a href="#packages" className="inline-flex items-center justify-center gap-2 bg-[#6B7F4A] text-[#F5EFE0] px-7 py-4 rounded-full text-sm font-semibold hover:bg-[#5A6B3F] transition-all hover:translate-x-0.5 group">
                  {t.hero.ctaPrimary}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-[#F5EFE0] border-2 border-[#2C2620] text-[#2C2620] px-7 py-4 rounded-full text-sm font-semibold hover:bg-[#2C2620] hover:text-[#F5EFE0] transition-all">
                  <MessageCircle className="w-4 h-4" />
                  {t.hero.ctaSecondary}
                </a>
              </div>
            </div>

            <div className="relative">
              <FadeInImage
                src={PHOTOS.hero}
                alt="Cathédrale Alexandre-Nevski à Sofia, Bulgarie"
                aspectClass="aspect-[4/5] md:aspect-[3/4]"
                className="shadow-2xl"
                eager
              />
              <div className="hidden md:flex absolute -bottom-6 -left-6 items-center gap-3 bg-[#F5EFE0] rounded-2xl px-5 py-3 shadow-xl border border-[#3D352820]">
                <div className="w-10 h-10 rounded-full bg-[#6B7F4A] flex items-center justify-center text-[#F5EFE0]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#3D352899] font-semibold">
                    {onPlaceLabel}
                  </div>
                  <div className="font-display text-lg font-semibold text-[#2C2620]">Sofia, BG</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-[#3D352820] border border-[#3D352820] rounded-2xl overflow-hidden">
            {t.trust.map((item, i) => (
              <div key={i} className="bg-[#F5EFE0] px-6 py-6">
                <div className="font-display text-2xl md:text-3xl font-medium text-[#6B7F4A] tracking-tight">
                  {item.value}
                </div>
                <div className="text-xs uppercase tracking-wider text-[#3D352899] mt-1 font-semibold">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- POURQUOI NOUS (titre overlay sur image + pillars) ---------- */}
      <section id="why" className="relative bg-[#EDE4D0]">
        {/* Bandeau image avec titre overlay */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-12 md:pt-16">
          <div className="relative">
            <FadeInImage
              src={PHOTOS.packages}
              alt="Rue de Sofia sous la neige en hiver"
              aspectClass="aspect-[16/9] md:aspect-[21/9]"
              className="shadow-xl"
              objectPosition="center 60%"
            />
            {/* Overlay gradient pour lisibilité */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/75 via-black/40 to-black/30 pointer-events-none" />
            {/* Texte centré */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 md:px-10">
              <div className="text-xs uppercase tracking-[0.25em] text-[#C8985C] font-bold mb-4">
                {t.why.kicker}
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-light leading-tight text-white max-w-3xl">
                {t.why.title}
              </h2>
              <p className="mt-4 md:mt-6 text-sm sm:text-base md:text-lg text-white/90 leading-relaxed max-w-2xl hidden sm:block">
                {t.why.subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Pillars */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {t.why.pillars.map((p, i) => {
              const Icon = iconMap[p.icon];
              return (
                <div key={i} className="relative bg-[#F5EFE0] rounded-2xl p-8 md:p-10 border border-[#3D352815] hover:border-[#6B7F4A] transition-all hover:-translate-y-1 duration-300">
                  <div className="absolute -top-5 left-8 w-12 h-12 bg-[#6B7F4A] rounded-xl flex items-center justify-center text-[#F5EFE0]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="font-display text-2xl font-medium text-[#2C2620] mt-4 mb-3">
                    {p.title}
                  </div>
                  <p className="text-[#3D3528] leading-relaxed">{p.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- PACKAGES (titre overlay sur image + cards) ---------- */}
      <section id="packages" className="relative bg-[#F5EFE0]">
        {/* Bandeau image avec titre overlay */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-12 md:pt-16">
          <div className="relative">
            <FadeInImage
              src={PHOTOS.why}
              alt="Rue Vitosha, artère commerçante de Sofia"
              aspectClass="aspect-[16/9] md:aspect-[21/9]"
              className="shadow-xl"
              objectPosition="center 65%"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/75 via-black/40 to-black/30 pointer-events-none" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 md:px-10">
              <div className="text-xs uppercase tracking-[0.25em] text-[#C8985C] font-bold mb-4">
                {t.packagesSection.kicker}
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-light leading-tight text-white max-w-3xl">
                {t.packagesSection.title}
              </h2>
              <p className="mt-4 md:mt-6 text-sm sm:text-base md:text-lg text-white/90 leading-relaxed max-w-2xl hidden sm:block">
                {t.packagesSection.subtitle}
              </p>
              <div className="mt-4 md:mt-6 inline-flex items-center gap-2 bg-[#C8985C] text-[#2C2620] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                {t.packagesSection.launchBadge}
              </div>
            </div>
          </div>
        </div>

        {/* Cards packages */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {t.packagesSection.list.map((p, i) => {
              const Icon = iconMap[p.icon];
              const isHighlighted = p.highlighted;
              return (
                <div key={i} className={`relative rounded-2xl p-8 md:p-10 transition-all duration-300 hover:-translate-y-1 ${
                  isHighlighted
                    ? "bg-[#2C2620] text-[#F5EFE0] border-2 border-[#C8985C] shadow-2xl lg:scale-105"
                    : "bg-[#EDE4D0] text-[#2C2620] border border-[#3D352820]"
                }`}>
                  {isHighlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C8985C] text-[#2C2620] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap">
                      ★ {t.packagesSection.popular}
                    </div>
                  )}

                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                    isHighlighted ? "bg-[#C8985C] text-[#2C2620]" : "bg-[#6B7F4A] text-[#F5EFE0]"
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="font-display text-3xl font-medium leading-tight">{p.name}</div>
                  <div className={`text-sm mt-1 mb-6 ${
                    isHighlighted ? "text-[#F5EFE0]/70" : "text-[#3D352899]"
                  }`}>
                    {p.subtitle}
                  </div>

                  <div className="flex items-baseline gap-3 mb-6">
                    <div className={`font-display text-5xl font-semibold ${
                      isHighlighted ? "text-[#C8985C]" : "text-[#6B7F4A]"
                    }`}>
                      {p.price}
                    </div>
                    <div className={`text-base line-through ${
                      isHighlighted ? "text-[#F5EFE0]/50" : "text-[#3D352866]"
                    }`}>
                      {p.oldPrice}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {p.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm leading-relaxed">
                        <Check className={`w-4 h-4 mt-1 flex-shrink-0 ${
                          isHighlighted ? "text-[#C8985C]" : "text-[#6B7F4A]"
                        }`} />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className={`text-xs italic mb-6 ${
                    isHighlighted ? "text-[#F5EFE0]/60" : "text-[#3D352877]"
                  }`}>
                    {p.notes}
                  </div>

                  <a href="#contact" className={`block w-full text-center px-5 py-3 rounded-full text-sm font-semibold transition-all ${
                    isHighlighted
                      ? "bg-[#C8985C] text-[#2C2620] hover:bg-[#D4A574]"
                      : "bg-[#2C2620] text-[#F5EFE0] hover:bg-[#6B7F4A]"
                  }`}>
                    {t.packagesSection.cta}
                  </a>
                </div>
              );
            })}
          </div>

          <div className="mt-16 bg-[#EDE4D0] rounded-2xl p-8 md:p-10 border border-[#3D352815]">
            <div className="font-display text-2xl font-medium text-[#2C2620] mb-6">
              {t.packagesSection.addonsTitle}
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {t.packagesSection.addons.map((a, i) => (
                <div key={i} className="bg-[#F5EFE0] rounded-xl p-4 border border-[#3D352815] hover:border-[#6B7F4A] transition-colors">
                  <div className="text-xs text-[#3D352899] mb-1">{a.label}</div>
                  <div className="font-display text-xl font-semibold text-[#6B7F4A]">{a.price}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- ACCOMPAGNEMENT SUR MESURE ---------- */}
      <section id="custom" className="relative py-24 md:py-32 bg-[#EDE4D0] overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-[#6B7F4A] opacity-10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-[#C8985C] opacity-15 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-[#C8985C] font-bold mb-4">
                {t.custom.kicker}
              </div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-[#2C2620]">
                {t.custom.title}
              </h2>
              <p className="mt-6 text-lg text-[#3D3528] leading-relaxed">
                {t.custom.subtitle}
              </p>
            </div>
            <div>
              <FadeInImage
                src={PHOTOS.custom}
                alt="Vue panoramique sur Sofia et le mont Vitosha"
                aspectClass="aspect-[4/3]"
                className="shadow-xl"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {t.custom.items.map((item, i) => {
              const Icon = iconMap[item.icon];
              return (
                <div key={i} className="group bg-[#F5EFE0] rounded-2xl p-6 md:p-7 border border-[#3D352815] hover:border-[#6B7F4A] hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-11 h-11 bg-[#6B7F4A]/10 rounded-xl flex items-center justify-center group-hover:bg-[#6B7F4A] transition-colors">
                      <Icon className="w-5 h-5 text-[#6B7F4A] group-hover:text-[#F5EFE0] transition-colors" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-display text-lg font-medium text-[#2C2620] leading-tight">
                        {item.title}
                      </div>
                      <div className="mt-2 text-sm font-semibold text-[#C8985C]">
                        {item.price}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="mt-10 text-sm text-[#3D352899] italic max-w-3xl mx-auto text-center leading-relaxed">
            {t.custom.note}
          </p>

          <div className="mt-10 text-center">
            <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-[#2C2620] text-[#F5EFE0] px-7 py-4 rounded-full text-sm font-semibold hover:bg-[#6B7F4A] transition-all hover:-translate-y-0.5 group">
              {t.custom.cta}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="mt-12 max-w-3xl mx-auto bg-[#F5EFE0]/60 border border-[#3D352815] rounded-xl p-5">
            <p className="text-xs text-[#3D352899] leading-relaxed text-center">
              ⚖️ {t.custom.disclaimer}
            </p>
          </div>
        </div>
      </section>

      {/* ---------- COMMENT ÇA MARCHE ---------- */}
      <section id="how" className="relative py-24 md:py-32 bg-[#2C2620] text-[#F5EFE0] overflow-hidden">
        <div className="absolute inset-0 grain opacity-30 pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#6B7F4A] opacity-20 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-3xl mb-20">
            <div className="text-xs uppercase tracking-[0.25em] text-[#C8985C] font-bold mb-4">
              {t.how.kicker}
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-light leading-tight">
              {t.how.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
            {t.how.steps.map((s, i) => (
              <div key={i} className="relative">
                <div className="font-display text-7xl font-light text-[#C8985C] mb-4 leading-none">
                  {s.n}
                </div>
                <div className="font-display text-2xl font-medium mb-3">{s.title}</div>
                <p className="text-[#F5EFE0]/70 leading-relaxed text-sm">{s.text}</p>
                {i < t.how.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-5 w-10 h-px bg-[#C8985C]/40" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- À PROPOS ---------- */}
      <section id="about" className="relative py-24 md:py-32 bg-[#F5EFE0]">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-5">
              <div className="text-xs uppercase tracking-[0.25em] text-[#C8985C] font-bold mb-4">
                {t.about.kicker}
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-light leading-tight text-[#2C2620]">
                {t.about.title}
              </h2>

              <FadeInImage
                src={PHOTOS.about}
                alt="Théâtre national Ivan Vazov à Sofia"
                aspectClass="aspect-[4/5]"
                className="mt-10 shadow-xl"
              />
            </div>

            <div className="md:col-span-7 md:pt-20">
              <div className="space-y-6 text-[#3D3528] text-lg leading-relaxed">
                <p className="first-letter:font-display first-letter:text-6xl first-letter:font-medium first-letter:float-left first-letter:mr-3 first-letter:leading-none first-letter:text-[#6B7F4A]">
                  {t.about.text1}
                </p>
                <p>{t.about.text2}</p>
                <p className="text-xl font-display italic text-[#2C2620]">{t.about.text3}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section id="faq" className="relative py-24 md:py-32 bg-[#EDE4D0]">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs uppercase tracking-[0.25em] text-[#C8985C] font-bold mb-4">
              {t.faq.kicker}
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-light leading-tight text-[#2C2620]">
              {t.faq.title}
            </h2>
          </div>

          <div>
            {t.faq.items.map((item, i) => (
              <FaqItem
                key={i}
                q={item.q}
                a={item.a}
                isOpen={openFaq === i}
                onToggle={() => setOpenFaq(openFaq === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA FINAL ---------- */}
      <section id="contact" className="relative py-24 md:py-32 bg-[#2C2620] text-[#F5EFE0] overflow-hidden">
        <div className="absolute inset-0 opacity-80">
          <img
            src={PHOTOS.cta}
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#2C2620]/55 via-[#2C2620]/45 to-[#6B7F4A]/40" />
        <div className="absolute inset-0 grain opacity-20 pointer-events-none" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#C8985C] opacity-15 blur-3xl pointer-events-none" />

        <div className="relative max-w-3xl mx-auto px-6 md:px-10 text-center">
          <Sparkles className="w-10 h-10 mx-auto mb-6 text-[#C8985C]" />
          <h2 className="font-display text-4xl md:text-6xl font-light leading-tight">
            {t.finalCta.title}
          </h2>
          <p className="mt-6 text-lg md:text-xl text-[#F5EFE0]/80 leading-relaxed">
            {t.finalCta.subtitle}
          </p>

          <div className="mt-12">
            <ContactForm lang={lang} />
          </div>
        </div>
      </section>

      {/* ---------- FOOTER ---------- */}
      <footer className="bg-[#2C2620] text-[#F5EFE0]/70 py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            <div>
              <div className="font-display text-2xl font-semibold text-[#F5EFE0]">
                Réussir<span className="text-[#C8985C]">·</span>Sofia
              </div>
              <p className="text-sm mt-2 max-w-md">{t.footer.tagline}</p>
            </div>
            <div className="text-sm space-y-2 md:text-right">
              <Link to="/legal" className="hover:text-[#C8985C] transition-colors">
                {t.footer.legal}
              </Link>
              <div className="text-xs text-[#F5EFE0]/40">{t.footer.copy}</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}