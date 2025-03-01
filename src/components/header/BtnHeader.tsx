"use client";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FaPlus, FaUser } from "react-icons/fa";

const btns = [
  {
    title: "حساب کاربری",
    href: "/login",
    icon: <FaUser />,
  },
  {
    title: "ثبت آگهی",
    href: "/",
    icon: <FaPlus />,
  },
];

function BtnHeader() {
  // const router = useRouter();

  return (
    <div className="flex justify-end items-center sm:gap-2 gap-1">
      {btns.map((btn, index) => (
        <Button
          // onClick={() => router.push(`${btn.href}`)}
          title={btn.title}
          key={index}
          variant="contained"
          className="header-btn"
        >
          <Link
            href={btn.href}
            className="flex justify-center items-center gap-2"
          >
            {btn.icon}
            <span className="hidden sm:block">{btn.title}</span>
          </Link>
        </Button>
      ))}
    </div>
  );
}

export default BtnHeader;
