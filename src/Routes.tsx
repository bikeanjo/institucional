import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Layout from "./pages/Layout/layout";
import UnavailablePage from "./pages/UnavailablePage/UnavailablePage";
import DicasParaBikeAnjo from "./pages/DicasParaBikeAnjo";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/dicasbikeanjo" element={<DicasParaBikeAnjo />} />
          <Route path="*" element={<UnavailablePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
