import React from "react";

import FooterCall from "./FooterCall";
import FooterLinks from "./FooterLinks";
import FooterApp from "./FooterApp";


function Footer() {
  return (
    <footer className="w-full border-t bg-gradient-to-r from-gray-200 to-white border-gray-300">
      <FooterLinks/>
      <FooterApp/>
      <FooterCall/>
    </footer>
  );
}

export default Footer;
