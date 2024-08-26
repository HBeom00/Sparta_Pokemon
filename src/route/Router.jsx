import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import NotFoundPage from "../NotFoundPage";
import Dex from "../pages/Dex";
import PokemonDetail from "../pages/PokemonDetail";

const Router = () => {
  return (
    // eslint-disable-next-line no-undef
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/*" element={<NotFoundPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/dex" element={<Dex />} />
        <Route path="/detail" element={<PokemonDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
