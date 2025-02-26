import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";

interface Ilayout {
  children: React.ReactNode;
}

function Layout({ children }: Ilayout) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
