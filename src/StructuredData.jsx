const professionalServiceLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Réussir à Sofia",
  description:
    "Accompagnement expatriation et création d'entreprise en Bulgarie pour francophones. Couple franco-bulgare basé à Sofia.",
  url: "https://reussir-sofia.fr",
  email: "contact@reussir-sofia.fr",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sofia",
    addressCountry: "BG",
  },
  geo: { "@type": "GeoCoordinates", latitude: 42.6977, longitude: 23.3219 },
  areaServed: [
    { "@type": "Country", name: "Bulgaria" },
    { "@type": "City", name: "Sofia" },
  ],
  availableLanguage: ["French", "English", "Bulgarian", "Spanish"],
  priceRange: "€€",
  serviceType: [
    "Conseil en expatriation",
    "Création d'entreprise EOOD",
    "Cours de bulgare",
    "Accompagnement touristique",
  ],
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "250",
    highPrice: "1490",
    priceCurrency: "EUR",
    offerCount: "3",
  },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Combien coûte un accompagnement expatriation en Bulgarie ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nos packages vont de 250 € (Découverte Sofia) à 1490 € (Expat Business avec création d'EOOD). Les frais tiers (avocat, comptable) sont facturés séparément.",
      },
    },
    {
      "@type": "Question",
      name: "Faut-il parler bulgare pour s'installer en Bulgarie ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Non, ce n'est pas obligatoire. Beaucoup de Bulgares à Sofia parlent anglais, et nous gérons les démarches administratives en bulgare pour vous. Nous incluons aussi 4 cours de bulgare dans nos packages Installation et Business.",
      },
    },
    {
      "@type": "Question",
      name: "Combien de temps pour obtenir la carte de résidence bulgare ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pour un citoyen UE, la procédure prend généralement entre 4 et 12 semaines selon la complétude du dossier.",
      },
    },
  ],
};

export default function StructuredData() {
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