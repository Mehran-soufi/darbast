import Link from "next/link";
import React from "react";
import logo from "../../assets/logo/logo.png";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import FooterCall from "./FooterCall";

const reservation = [
  {
    name: "راهنمای رزرو",
  },
  {
    name: "شیوه پرداخت",
  },
  {
    name: "لغو رزرو",
  },
];
const registration = [
  {
    name: "راهنمای ثبت",
  },
  {
    name: "شیوه پرداخت",
  },
  {
    name: "لغو اقامتگاه",
  },
];
const links = [
  {
    name: "پرسش های متداول",
  },
  {
    name: "درباره ما",
  },
  {
    name: "قوانین ما",
  },
  {
    name: "فرصت های شغلی",
  },
  {
    name: "حریم خصوصی",
  },
];
const social = [
  {
    name: "Instagram",
    icon: <FaInstagram />,
  },
  {
    name: "X twitter",
    icon: <FaXTwitter />,
  },
  {
    name: "linkedin",
    icon: <FaLinkedinIn />,
  },
];

function Footer() {
  return (
    <footer className="w-full border-t bg-gradient-to-r from-gray-200 to-white border-gray-300">
      <div className="w-full flex justify-around items-start p-8">
        <div className="flex flex-col items-center">
          <Link href="/">
            <img
              src={logo.src}
              alt="darbast logo"
              className="lg:w-40 sm:w-32 w-24"
            />
          </Link>
          <p className="font-bold my-4">
            دربست را در شبکه های اجتماعی دنبال کنید
          </p>
          <div className="flex justify-center items-center gap-4">
            {social.map((item, index) => (
              <p
                title={item.name}
                key={index}
                className="text-xl cursor-pointer bg-slate-200 rounded-md p-1"
              >
                {item.icon}
              </p>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-start">
          <h2 className="text-lg font-bold text-gray-800 gap-4">
            نحوه رزرو اقامتگاه
          </h2>
          {reservation.map((item, index) => (
            <p
              key={index}
              className="text-slate-700 transition duration-300 ease-linear hover:text-slate-800 cursor-pointer"
            >
              {item.name}
            </p>
          ))}
        </div>
        <div className="flex flex-col items-start">
          <h2 className="text-lg font-bold text-gray-800 gap-4">
            نحوه ثبت اقامتگاه
          </h2>
          {registration.map((item, index) => (
            <p
              key={index}
              className="text-slate-700 transition duration-300 ease-linear hover:text-slate-800 cursor-pointer"
            >
              {item.name}
            </p>
          ))}
        </div>
        <div className="flex flex-col items-start">
          <h2 className="text-lg font-bold text-gray-800 gap-4">
            لینک های مفید
          </h2>
          {links.map((item, index) => (
            <p
              key={index}
              className="text-slate-700 transition duration-300 ease-linear hover:text-slate-800 cursor-pointer"
            >
              {item.name}
            </p>
          ))}
        </div>
      </div>
      <FooterCall/>
    </footer>
  );
}

export default Footer;
