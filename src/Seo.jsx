export default function Seo({
  title,
  description,
  canonical,
  ogTitle,
  ogDescription,
  ogImage = "https://reussir-sofia.fr/og-image.jpg",
}) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Réussir à Sofia" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonical} />
      <link rel="alternate" hrefLang="fr" href={canonical} />
      <link rel="alternate" hrefLang="x-default" href={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={ogTitle ?? title} />
      <meta property="og:description" content={ogDescription ?? description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:site_name" content="Réussir à Sofia" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={ogTitle ?? title} />
      <meta name="twitter:description" content={ogDescription ?? description} />
      <meta name="twitter:image" content={ogImage} />
    </>
  );
}