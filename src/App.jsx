import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReussirASofia from "./ReussirASofia";
import LegalPages from "./LegalPages";

/**
 * Une route = une URL = un fichier HTML genere par le prerender.
 * La langue n'est plus un etat React : elle est portee par l'URL,
 * ce qui la rend visible pour Google et partageable par lien.
 */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ReussirASofia lang="fr" />} />
        <Route path="/en" element={<ReussirASofia lang="en" />} />
        <Route path="/es" element={<ReussirASofia lang="es" />} />
        <Route path="/legal" element={<LegalPages lang="fr" />} />
        <Route path="/en/legal" element={<LegalPages lang="en" />} />
        <Route path="/es/legal" element={<LegalPages lang="es" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;