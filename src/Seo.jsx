import { LANGS, PATHS } from "./i18nPaths";

const BASE = "https://reussir-sofia.fr";
const OG_IMAGE = `${BASE}/og-image.jpg`;

const OG_LOCALE = { fr: "fr_FR", en: "en_US", es: "es_ES" };

/**
 * Metadonnees par page ET par langue.
 * React 19 hisse nativement <title>, <meta> et <link> vers le <head> :
 * le prerender les capture, chaque fichier HTML a donc les siennes.
 */
const META = {
  home: {
    fr: {
      title: "Expatriation en Bulgarie sans la galère · Réussir à Sofia",
      description:
        "Couple franco-bulgare basé à Sofia. Tourisme, expatriation, carte de résidence, création d'EOOD. Accompagnement humain et complet en français, sur place. À partir de 250 €.",
      ogTitle: "Réussir à Sofia · Votre expatriation en Bulgarie, sans la galère",
    },
    en: {
      title: "Moving to Bulgaria, made simple · Réussir à Sofia",
      description:
        "A French-Bulgarian couple based in Sofia. Tourism, relocation, residence card, EOOD company setup. Complete, human support on the ground. From €250.",
      ogTitle: "Réussir à Sofia · Make your move to Bulgaria actually work",
    },
    es: {
      title: "Expatriación a Bulgaria sin complicaciones · Réussir à Sofia",
      description:
        "Pareja franco-búlgara en Sofía. Turismo, expatriación, tarjeta de residencia, creación de EOOD. Acompañamiento humano y completo sobre el terreno. Desde 250 €.",
      ogTitle: "Réussir à Sofia · Tu expatriación en Bulgaria, sin complicaciones",
    },
  },
  legal: {
    fr: {
      title: "Mentions légales, CGV & confidentialité · Réussir à Sofia",
      description:
        "Mentions légales, conditions générales de vente et politique de confidentialité de Réussir à Sofia — SOC TRADE BULGARIA EOOD, Sofia, Bulgarie.",
    },
    en: {
      title: "Legal notice, terms & privacy · Réussir à Sofia",
      description:
        "Legal notice, terms and conditions of sale and privacy policy of Réussir à Sofia — SOC TRADE BULGARIA EOOD, Sofia, Bulgaria.",
    },
    es: {
      title: "Aviso legal, condiciones y privacidad · Réussir à Sofia",
      description:
        "Aviso legal, condiciones generales de venta y política de privacidad de Réussir à Sofia — SOC TRADE BULGARIA EOOD, Sofía, Bulgaria.",
    },
  },
};

export default function Seo({ lang = "fr", page = "home" }) {
  const m = META[page][lang];
  const canonical = BASE + PATHS[page][lang];
  const ogTitle = m.ogTitle ?? m.title;

  return (
    <>
      <title>{m.title}</title>
      <meta name="description" content={m.description} />
      <meta name="author" content="Réussir à Sofia" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonical} />

      {/* hreflang reciproques : chaque version pointe vers les trois autres */}
      {LANGS.map((l) => (
        <link
          key={l}
          rel="alternate"
          hrefLang={l}
          href={BASE + PATHS[page][l]}
        />
      ))}
      <link rel="alternate" hrefLang="x-default" href={BASE + PATHS[page].fr} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={m.description} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content={OG_LOCALE[lang]} />
      <meta property="og:site_name" content="Réussir à Sofia" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:description" content={m.description} />
      <meta name="twitter:image" content={OG_IMAGE} />
    </>
  );
}