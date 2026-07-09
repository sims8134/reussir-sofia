import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReussirASofia from "./ReussirASofia";
import LegalPages from "./LegalPages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ReussirASofia />} />
        <Route path="/legal" element={<LegalPages />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;