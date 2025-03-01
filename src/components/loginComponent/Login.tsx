"use client";
import React, { useState } from "react";
import logo from "@/assets/logo/logo.png";
import Link from "next/link";
import ResiveCode from "./ResiveCode";
import ConfirmCode from "./ConfirmCode";

const Login: React.FC = () => {
  const [confirm, setConfirm] = useState<boolean>(false);
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="search bg-white p-4 rounded-lg shadow-md w-96 flex flex-col justify-center items-center gap-4">
        <Link href="/">
          <img
            src={logo.src}
            alt="darbast logo"
            className="lg:w-40 sm:w-32 w-24"
          />
        </Link>
        <p className="md:text-lg font-bold">ورود | ایجاد حساب کاربری</p>
        {confirm ? <ConfirmCode /> : <ResiveCode setConfirm={setConfirm} />}
      </div>
    </div>
  );
}

export default Login;
