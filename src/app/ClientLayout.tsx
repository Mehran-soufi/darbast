"use client";
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import "./globals.css";

interface Ilayout {
  children: React.ReactNode;
}

const ClientLayout: React.FC<Ilayout> = ({ children }) => {
  return (
    <>
      {children}
      <ProgressBar height="4px" color="#29d" options={{ showSpinner: false }} shallowRouting />
    </>
  );
};

export default ClientLayout;
