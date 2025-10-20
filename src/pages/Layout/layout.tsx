import React from "react";
import { Outlet } from "react-router";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import SEO from "@components/Seo/seo";

const Layout: React.FC = () => {
  return (
    <>
      <SEO />

      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
