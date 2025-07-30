import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Layout from "./pages/Layout/layout";
import UnavailablePage from "./pages/UnavailablePage/UnavailablePage";
import SocialMedia from "./pages/SocialMedia";
import DicasParaPedalar from "./pages/DicasParaPedalar";
import DicasParaBikeAnjo from "./pages/DicasParaBikeAnjo";
import EscolaBikeAnjo from "./pages/EscolaBikeAnjo";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/socialmedia" element={<SocialMedia />} />
          <Route path="/dicasbikeanjo" element={<DicasParaBikeAnjo />} />
          <Route path="/escolabikeanjo" element={<EscolaBikeAnjo />} />
          <Route path="*" element={<UnavailablePage />} />
          <Route path="/dicasparapedalar" element={<DicasParaPedalar />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
