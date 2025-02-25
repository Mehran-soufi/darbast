import React from "react";
import { FaHeadphones } from "react-icons/fa";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import splash from "@/assets/property/spalsh.png";

const propertyItems = [
  {
    title: "پشتیبانی",
    description: "با پشتیبانی سریع و به موقع همیشه در خدمت شماهستیم.",
    icon: <FaHeadphones />,
  },
  {
    title: "پشتیبانی",
    description: "با پشتیبانی سریع و به موقع همیشه در خدمت شماهستیم.",
    icon: <FaMoneyBillTransfer />,
  },
  {
    title: "پشتیبانی",
    description: "با پشتیبانی سریع و به موقع همیشه در خدمت شماهستیم.",
    icon: <FaHeadphones />,
  },
];

function Property() {
  return (
    <section className="section flex sm:flex-row flex-col justify-center items-center lg:gap-8 gap-2 lg:p-4 sm:p-2">
      {propertyItems.map((item, index) => (
        <div
          key={index}
          className="sm:w-1/3 w-full h-[15vh] select-none transition duration-500 ease-linear overflow-hidden flex justify-start items-center rounded-md shadow-md shadow-slate-400 p-2 border border-transparent hover:shadow-orange-700"
        >
          <div className="w-1/3 flex justify-center items-center relative">
            <img
              src={splash.src}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <span className="lg:text-4xl sm:text-3xl text-2xl text-slate-700 z-50 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
              {item.icon}
            </span>
          </div>
          <div className="w-2/3 flex flex-col justify-center items-start gap-2">
            <p className="text-slate-900 font-bold sm:text-xl text-base">{item.title}</p>
            <p className="text-slate-700 text-sm sm:text-base">{item.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Property;
