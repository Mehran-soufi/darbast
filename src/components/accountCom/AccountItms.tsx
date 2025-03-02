import React from "react";
import Image from "next/image";
import Link from "next/link";

import { MdOutlinePayments, MdOutlineSupportAgent } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { PiChats } from "react-icons/pi";
import { LiaAdSolid } from "react-icons/lia";

import accountImg from "@/assets/account/user-account.webp";
import { Button } from "@mui/material";
import { CiLogin } from "react-icons/ci";

interface BtnData {
  title: string;
  icon: React.ReactElement;
  link: string;
}

// btn data
const btnData: BtnData[] = [
  {
    title: "پروفایل من",
    icon: <CgProfile />,
    link: "/profile",
  },
  {
    title: "چت های من",
    icon: <PiChats />,
    link: "/profile",
  },
  {
    title: "آگهی های من",
    icon: <LiaAdSolid />,
    link: "/profile",
  },
  {
    title: "پرداخت های من",
    icon: <MdOutlinePayments />,
    link: "/profile",
  },
];

function AccountItms() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-start p-8">
      <div className="w-full flex justify-start items-center gap-4 py-4">
        <div className="w-12 h-1w-12 rounded-full p-2 bg-slate-200">
          <Image src={accountImg} alt="user image"></Image>
        </div>
        <div>
          <p className="font-bold text-lg">مهران صوفی</p>
        </div>
      </div>
      <div className="w-full flex flex-col items-start justify-center gap-8 border-b border-t py-4">
        {btnData.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="flex items-center justify-start gap-2 text-lg text-slate-600 hover:text-slate-950"
          >
            {item.icon}
            {item.title}
          </Link>
        ))}
      </div>
      <div className="w-full flex flex-col items-start justify-center gap-8 py-4">
        <button className="flex items-center justify-start gap-2 text-lg text-slate-600 hover:text-slate-950">
          <MdOutlineSupportAgent />
          تماس با پشتیبانی
        </button>
        <button className="flex items-center justify-start gap-2 text-lg text-slate-600 hover:text-slate-950">
          <CiLogin />
          خروج از حساب کاربری
        </button>
      </div>
    </div>
  );
}

export default AccountItms;
