"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Menu() {
  const menuBtn = [
    {
      title: "صفحه اصلی",
      link: "/",
    },
    {
      title: "ویلا",
      link: "/villa",
    },
    {
      title: "هتل",
      link: "/hotel",
    },
    {
      title: "جنگلی",
      link: "/jungle",
    },
  ];

  const pathName = usePathname();

  return (
    <menu
      className="lg:w-3/5 sm:w-4/5 w-full lg:h-14 md:h-12 absolute lg:-bottom-14 md:-bottom-12 
    -bottom-0 md:rounded-es-full md:rounded-se-none rounded-se-full md:rounded-ee-full md:rounded-ss-none 
    rounded-ss-full border flex justify-center items-center gap-8 px-10 py-2 lg:text-lg bg-white"
    >
      {menuBtn.map((item, index) => (
        <Link
          href={item.link}
          key={index}
          className={`font-bold transition duration-300 ease-in custom-menu ${
            pathName === item.link
              ? "after:w-full text-orange-600"
              : "after:w-0"
          } hover:after:w-full  hover:text-orange-600`}
        >
          {item.title}
        </Link>
      ))}
    </menu>
  );
}

export default Menu;
