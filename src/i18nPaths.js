/**
 * Table unique des URL par langue.
 * Toute la navigation multilingue passe par ici : selecteur de langue,
 * lien vers les mentions legales, retour a l'accueil.
 * Une seule source de verite = pas de lien qui perd la langue.
 */
export const LANGS = ["fr", "en", "es"];

export const PATHS = {
  home: { fr: "/", en: "/en", es: "/es" },
  legal: { fr: "/legal", en: "/en/legal", es: "/es/legal" },
};
