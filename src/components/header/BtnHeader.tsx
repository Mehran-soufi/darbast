"use client";
import { Button } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import { FaPlus, FaUser } from "react-icons/fa";

const BtnHeader: React.FC = () => {
  const [account, setAccount] = useState<boolean>(true);

  return (
    <div className="flex justify-end items-center sm:gap-2 gap-1">
      <Button title="حساب کاربری" variant="contained" className="header-btn">
        <Link
          href={account ? "/account" : "/login"}
          className="flex justify-center items-center gap-2"
        >
          <FaUser />
          <span className="hidden sm:block">حساب کاربری</span>
        </Link>
      </Button>
      <Button title="ثبت اقامتگاه" variant="contained" className="header-btn">
        <Link href="/residence-registration" className="flex justify-center items-center gap-2">
          <FaPlus />
          <span className="hidden sm:block">ثبت اقامتگاه</span>
        </Link>
      </Button>
    </div>
  );
};

export default BtnHeader;
