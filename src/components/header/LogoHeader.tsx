import React from "react";

import logo from "../../assets/logo/logo.png";
import Link from "next/link";

function LogoHeader() {
  return (
    <Link href="/">
      <img src={logo.src} alt="darbast logo" className="lg:w-40 sm:w-32 w-24" />
    </Link>
  );
}

export default LogoHeader;
