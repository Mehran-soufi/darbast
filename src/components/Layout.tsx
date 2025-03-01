import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import "../utils/nprogress"; // وارد کردن فایل nprogress برای مدیریت نوار لودینگ

interface Ilayout {
  children: React.ReactNode;
}

const Layout: React.FC<Ilayout> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
