import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import ClientLayout from "../app/ClientLayout";

interface Ilayout {
  children: React.ReactNode;
}

const Layout: React.FC<Ilayout> = ({ children }) => {
  return (
    <ClientLayout>
      <Header />
      {children}
      <Footer />
    </ClientLayout>
  );
};

export default Layout;
