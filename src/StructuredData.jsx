/**
 * Données structurées de la page d'accueil (JSON-LD), localisées.
 * Utilisation : <StructuredData lang={lang} /> juste sous <Seo ... />
 */

const BASE = "https://reussir-sofia.fr";
const PATH = { fr: "/", en: "/en", es: "/es" };
const IN_LANGUAGE = { fr: "fr-FR", en: "en", es: "es" };

const SERVICE = {
  fr: {
    description:
      "Accompagnement expatriation et création d'entreprise en Bulgarie pour francophones. Couple franco-bulgare basé à Sofia.",
    serviceType: [
      "Conseil en expatriation",
      "Création d'entreprise EOOD",
      "Cours de bulgare",
      "Accompagnement touristique",
    ],
  },
  en: {
    description:
      "Relocation and company formation support in Bulgaria. French-Bulgarian couple based in Sofia.",
    serviceType: [
      "Relocation consulting",
      "EOOD company formation",
      "Bulgarian language lessons",
      "Guided tourism support",
    ],
  },
  es: {
    description:
      "Acompañamiento en expatriación y creación de empresas en Bulgaria. Pareja franco-búlgara instalada en Sofía.",
    serviceType: [
      "Asesoría de expatriación",
      "Creación de empresa EOOD",
      "Clases de búlgaro",
      "Acompañamiento turístico",
    ],
  },
};

const FAQ = {
  fr: [
    [
      "Combien ça coûte vraiment au total ?",
      "Les prix affichés sont fermes pour notre prestation d'accompagnement. Les frais tiers (avocat, comptable, frais de constitution d'EOOD ~150-200 €, honoraires comptable mensuels ~100-150 BGN) sont facturés séparément, directement par les prestataires concernés. Tout est détaillé dans votre devis avant signature.",
    ],
    [
      "Faut-il parler bulgare pour s'installer en Bulgarie ?",
      "Non, ce n'est pas obligatoire. Beaucoup de Bulgares à Sofia parlent anglais, et nous gérons les démarches administratives en bulgare pour vous. Cela dit, apprendre les bases ouvre énormément de portes — c'est pourquoi nous incluons 4 cours dans nos packages Installation et Business.",
    ],
    [
      "Combien de temps pour obtenir la carte de résidence ?",
      "Pour un citoyen UE, la procédure prend généralement entre 4 et 12 semaines selon la complétude du dossier et la période de l'année. Notre rôle est de préparer un dossier complet en amont avec notre avocat partenaire, pour éviter les allers-retours.",
    ],
    [
      "Et si je ne suis pas sûr de mon projet ?",
      "C'est précisément à cela que sert le package Découverte. Venez quelques jours, on vous fait visiter, on répond à toutes vos questions, et vous décidez ensuite à tête reposée. Pas de pression commerciale.",
    ],
    [
      "Travaillez-vous uniquement à Sofia ?",
      "Sofia est notre base et notre spécialité. Nous pouvons accompagner des projets sur Plovdiv, Varna ou Bansko, mais avec un degré de connaissance terrain moindre. Nous le précisons toujours en amont.",
    ],
    [
      "Comment se passe le paiement ?",
      "Acompte de 30% à la signature, solde au démarrage de la prestation. Virement bancaire ou paiement en ligne. Facture émise par notre société bulgare (EOOD).",
    ],
  ],
  en: [
    [
      "What's the real total cost?",
      "The displayed prices are firm for our support service. Third-party fees (lawyer, accountant, EOOD setup ~150-200 €, monthly accountant ~100-150 BGN) are billed separately, directly by the relevant providers. Everything is detailed in your quote before signing.",
    ],
    [
      "Do I need to speak Bulgarian to settle here?",
      "No, it's not mandatory. Many Bulgarians in Sofia speak English, and we handle administrative steps in Bulgarian for you. That said, learning the basics opens many doors — that's why we include 4 lessons in our Move-in and Business packages.",
    ],
    [
      "How long for the residence card?",
      "For an EU citizen, the process usually takes 4 to 12 weeks depending on document completeness and season. Our role is to prepare a complete file upfront with our partner lawyer, to avoid back-and-forth.",
    ],
    [
      "What if I'm not sure about my project?",
      "That's exactly what the Discovery package is for. Spend a few days here, we show you around, answer all your questions, and you decide later. No sales pressure.",
    ],
    [
      "Do you only work in Sofia?",
      "Sofia is our base and specialty. We can support projects in Plovdiv, Varna or Bansko, but with less ground-level expertise. We always say so upfront.",
    ],
    [
      "How does payment work?",
      "30% deposit on signing, balance when the service starts. Bank transfer or online payment. Invoice issued by our Bulgarian company (EOOD).",
    ],
  ],
  es: [
    [
      "¿Cuánto cuesta realmente en total?",
      "Los precios indicados son firmes para nuestra prestación de acompañamiento. Los gastos de terceros (abogado, contable, gastos de constitución de EOOD ~150-200 €, honorarios contables mensuales ~100-150 BGN) se facturan aparte, directamente por los prestadores correspondientes. Todo está detallado en tu presupuesto antes de la firma.",
    ],
    [
      "¿Hay que hablar búlgaro para instalarse en Bulgaria?",
      "No, no es obligatorio. Muchos búlgaros en Sofía hablan inglés, y nosotros gestionamos los trámites administrativos en búlgaro por ti. Dicho esto, aprender lo básico abre muchas puertas — por eso incluimos 4 clases en nuestros paquetes Instalación y Business.",
    ],
    [
      "¿Cuánto tiempo para obtener la tarjeta de residencia?",
      "Para un ciudadano de la UE, el proceso suele tardar entre 4 y 12 semanas según la complejidad del expediente y la época del año. Nuestro papel es preparar un expediente completo previamente con nuestro abogado colaborador, para evitar idas y vueltas.",
    ],
    [
      "¿Y si no estoy seguro de mi proyecto?",
      "Para eso sirve precisamente el paquete Descubrimiento. Ven unos días, te llevamos a visitar, respondemos a todas tus preguntas, y luego decides con calma. Sin presión comercial.",
    ],
    [
      "¿Trabajan únicamente en Sofía?",
      "Sofía es nuestra base y nuestra especialidad. Podemos acompañar proyectos en Plovdiv, Varna o Bansko, pero con un nivel de conocimiento del terreno menor. Lo precisamos siempre desde el principio.",
    ],
    [
      "¿Cómo funciona el pago?",
      "30% de adelanto a la firma, resto al inicio de la prestación. Transferencia bancaria o pago online. Factura emitida por nuestra empresa búlgara (EOOD).",
    ],
  ],
};

export default function StructuredData({ lang = "fr" }) {
  const s = SERVICE[lang];

  const professionalServiceLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Réussir à Sofia",
    description: s.description,
    url: BASE + PATH[lang],
    email: "contact@reussir-sofia.fr",
    inLanguage: IN_LANGUAGE[lang],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sofia",
      addressCountry: "BG",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 42.6977,
      longitude: 23.3219,
    },
    areaServed: [
      { "@type": "Country", name: "Bulgaria" },
      { "@type": "City", name: "Sofia" },
    ],
    availableLanguage: ["French", "English", "Bulgarian", "Spanish"],
    priceRange: "€€",
    serviceType: s.serviceType,
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "250",
      highPrice: "1490",
      priceCurrency: "EUR",
      offerCount: "3",
    },
  };

  // Les 6 questions affichées sur la page, dans la langue de la page.
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: IN_LANGUAGE[lang],
    mainEntity: FAQ[lang].map(([name, text]) => ({
      "@type": "Question",
      name,
      acceptedAnswer: { "@type": "Answer", text },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
    </>
  );
}