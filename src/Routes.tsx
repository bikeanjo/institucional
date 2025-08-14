import { Route, Routes, useLocation } from "react-router";
import Home from "./pages/Home";
import Layout from "./pages/Layout/layout";
import UnavailablePage from "./pages/UnavailablePage/UnavailablePage";
import SocialMedia from "./pages/SocialMedia";
import DicasParaPedalar from "./pages/DicasParaPedalar";
import DicasParaBikeAnjo from "./pages/DicasParaBikeAnjo";
import Contact from "./pages/Contato";
import EscolaBikeAnjo from "./pages/EscolaBikeAnjo";
import PedalaOuRepassa from "./pages/PedalaOuRepassa";
import { useEffect } from "react";
import AjudeComoInstituicao from "./pages/AjudeComoInstituicao";
import DiaMundialSemCarro from "./pages/DiaMundialSemCarro";
import BikeAnjas from "./pages/BikeAnjas";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/ajude-como-instituicao"
            element={<AjudeComoInstituicao />}
          />
          <Route path="/social-media" element={<SocialMedia />} />
          <Route path="/dicas-bike-anjo" element={<DicasParaBikeAnjo />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/escola-bike-anjo" element={<EscolaBikeAnjo />} />
          <Route path="/pedala-ou-repassa" element={<PedalaOuRepassa />} />
          <Route path="/dicas-para-pedalar" element={<DicasParaPedalar />} />
          <Route path="*" element={<UnavailablePage />} />
          <Route
            path="/dia-mundial-sem-carro"
            element={<DiaMundialSemCarro />}
          />
          <Route path="/bike-anjas" element={<BikeAnjas />} />
        </Route>
      </Routes>
    </>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default App;
