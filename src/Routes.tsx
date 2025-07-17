import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Layout from "./pages/Layout/layout";
import UnavailablePage from "./pages/UnavailablePage/UnavailablePage";
import DicasParaPedalar from "./pages/DicasParaPedalar";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<UnavailablePage />} />
          <Route path="dicas" element={<DicasParaPedalar />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
