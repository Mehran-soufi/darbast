import React from "react";
import LogoHeader from "./LogoHeader";
import BtnHeader from "./BtnHeader";
import Menu from "./Menu";

function Header() {
  return (
    <header className="w-full shadow-md p-4 md:relative flex justify-center">
      <nav className="w-11/12 mx-auto flex justify-between items-center">
        <LogoHeader />
        <BtnHeader />
      </nav>
      <Menu/>
    </header>
  );
}

export default Header;
