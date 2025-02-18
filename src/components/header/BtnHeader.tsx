import Link from "next/link";
import React from "react";
import { FaPlus, FaSearch, FaUser } from "react-icons/fa";

const btns = [
  {
    title: "جستجو",
    href: "/",
    icon: <FaSearch />,
  },
  {
    title: "حساب کاربری",
    href: "/",
    icon: <FaUser />,
  },
  {
    title: "ثبت آگهی",
    href: "/",
    icon: <FaPlus />,
  },
];

function BtnHeader() {
  return (
    <div className="flex justify-end items-center sm:gap-4 gap-1">
      {btns.map((btn, index) => (
        <Link
          href={btn.href}
          title={btn.title}
          key={index}
          className="p-2 border rounded-md transition duration-300 ease-in hover:bg-slate-200 flex justify-between items-center gap-2 sm:text-base text-sm"
        >
          {btn.icon}
          <span className="hidden sm:block">{btn.title}</span>
        </Link>
      ))}
    </div>
  );
}

export default BtnHeader;
