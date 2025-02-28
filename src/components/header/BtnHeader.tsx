import { Button } from "@mui/material";
import React from "react";
import { FaPlus, FaUser } from "react-icons/fa";

const btns = [
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
    <div className="flex justify-end items-center sm:gap-2 gap-1">
      {btns.map((btn, index) => (
        <Button
          title={btn.title}
          key={index}
          variant="contained"
          className="header-btn flex justify-center items-center gap-2"
        >
          {btn.icon}
          <span className="hidden sm:block">{btn.title}</span>
        </Button>
      ))}
    </div>
  );
}

export default BtnHeader;
