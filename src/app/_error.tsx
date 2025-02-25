"use client";

import { Button } from "@mui/material";
import { IoReload } from "react-icons/io5";

import errorImg from "@/assets/error/error.png";
import Image from "next/image";

function ErrorPage() {
  return (
    <div className="w-full h-screen flex flex-col gap-4 justify-center items-center">
      <Image
        src={errorImg.src}
        width={280}
        height={200}
        alt="error...."
      />
      <p className="lg:text-3xl sm:text-2xl text-xl text-gray-800">
        به نظر میرسد مشکلی پیش آمده....
      </p>
      <Button
        variant="contained"
        onClick={() => window.location.reload()}
        className="flex justify-center items-center gap-2"
      >
        <IoReload />
        تلاش مجدد
      </Button>
    </div>
  );
}

export default ErrorPage;
