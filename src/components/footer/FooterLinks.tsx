import React from "react";
import logo from "../../assets/logo/logo.png";
import Link from "next/link";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// types
type NType = {
  name: string;
};
type IType = {
  name: string;
  icon: React.JSX.Element;
};
// items data
const reservation: NType[] = [
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
const registration: NType[] = [
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
const links: NType[] = [
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
const social: IType[] = [
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

function FooterLinks() {
  return (
    <div className="w-full flex flex-wrap justify-around items-start  p-8">
      <div className="w-full lg:w-1/4 flex flex-col items-center lg:mb0 mb-4">
        {" "}
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
          ))}{" "}
        </div>
      </div>
      <div className="w-full md:w-1/3 lg:w-1/4 flex flex-col items-center lg:items-start">
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
      <div className="w-full md:w-1/3 lg:w-1/4 flex flex-col items-center lg:items-start">
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
      <div className="w-full md:w-1/3 lg:w-1/4 flex flex-col items-center lg:items-start">
        <h2 className="text-lg font-bold text-gray-800 gap-4">لینک های مفید</h2>
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
  );
}

export default FooterLinks;
