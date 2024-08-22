import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dex from "./pages/Dex";
import NotFoundPage from "./NotFoundPage";
import PokemonDetail from "./pages/PokemonDetail";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<NotFoundPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/dex" element={<Dex />} />
        <Route path="/detail" element={<PokemonDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
