"use client";

import { Button } from "@mui/material";
import { IoHomeOutline } from "react-icons/io5";
import notFoundImg from "@/assets/notFound/error-404.avif";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Updated for the app directory

export default function Custom404() {
  const router = useRouter();

  return (
    <div className="w-full h-screen flex flex-col gap-4 justify-center items-center">
      <Image src={notFoundImg.src} width={280} height={200} alt="error...." />
      <p className="lg:text-3xl sm:text-2xl text-xl text-gray-800">
        به نظر میرسد گم شده اید....
      </p>
      <Button
        variant="contained"
        onClick={() => router.push("/")}
        className="flex justify-center items-center gap-2"
      >
        <IoHomeOutline />
        رفتن به صفحه اصلی
      </Button>
    </div>
  );
}
