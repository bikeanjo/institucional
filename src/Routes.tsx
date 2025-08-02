import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Layout from "./pages/Layout/layout";
import UnavailablePage from "./pages/UnavailablePage/UnavailablePage";
import SocialMedia from "./pages/SocialMedia";
import DicasParaPedalar from "./pages/DicasParaPedalar";
import DicasParaBikeAnjo from "./pages/DicasParaBikeAnjo";
import Contact from "./pages/Contato";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/socialmedia" element={<SocialMedia />} />
          <Route path="/dicasbikeanjo" element={<DicasParaBikeAnjo />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="*" element={<UnavailablePage />} />
          <Route path="dicas" element={<DicasParaPedalar />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
