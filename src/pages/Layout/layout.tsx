import React from "react";
import { Outlet } from "react-router";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
