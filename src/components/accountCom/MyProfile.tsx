import React from "react";
import AccountHeader from "./AccountHeader";
import { FaRegEdit } from "react-icons/fa";
import Image from "next/image";

import accountImg from "@/assets/account/user-account.webp";

interface MyProfileProps {
  title: string;
}

const MyProfile: React.FC<MyProfileProps> = ({ title }) => {
  return (
    <div className="w-full h-full p-8 border-2 rounded-md">
      <AccountHeader title={title} />
      <div className="w-full flex justify-between items-center flex-wrap my-8">
        <div className="w-11/12 my-2 flex justify-center items-center gap-2">
          <div className="w-16 h-16 rounded-full p-2 bg-slate-200 flex justify-center items-center">
            <Image src={accountImg} alt="user image" />
          </div>
          <div>
            <button className="text-lg" title="ویرایش اطلاعات">
              <FaRegEdit />
            </button>
          </div>
        </div>
        <div className="w-1/2 flex flex-col items-start justify-center gap-2 my-2">
          <div className=" w-4/5 flex justify-between items-center">
            <label htmlFor="name" className="text-lg">
              نام:
            </label>
            <button className="text-lg" title="ویرایش اطلاعات">
              <FaRegEdit />
            </button>
          </div>
          <div className="w-4/5 relative">
            <input
              type="text"
              id="name"
              className="w-full p-4 rounded-md bg-slate-100 border-none outline-none"
              value={"مهران"}
              readOnly
            />
            <span className="py-1 px-3 rounded bg-green-600 text-white absolute top-1/2 transform -translate-y-1/2 left-2">تایید شده</span>
          </div>
        </div>
        <div className="w-1/2 flex flex-col items-start justify-center gap-2 my-2">
          <div className=" w-4/5 flex justify-between items-center">
            <label htmlFor="family" className="text-lg">
              نام خانوادگی:
            </label>
            <button className="text-lg" title="ویرایش اطلاعات">
              <FaRegEdit />
            </button>
          </div>
          <div className="w-4/5 relative">
            <input
              type="text"
              id="family"
              className="w-full p-4 rounded-md bg-slate-100 border-none outline-none"
              value={"صوفی قادری"}
              readOnly
            />
              <span className="py-1 px-3 rounded bg-green-600 text-white absolute top-1/2 transform -translate-y-1/2 left-2">تایید شده</span>
          </div>
        </div>
        <div className="w-1/2 flex flex-col items-start justify-center gap-2 my-2">
          <div className=" w-4/5 flex justify-between items-center">
            <label htmlFor="phone" className="text-lg">
              شماره تماس
            </label>
            <button className="text-lg" title="ویرایش اطلاعات">
              <FaRegEdit />
            </button>
          </div>
          <div className="w-4/5 relative">
            <input
              type="text"
              id="phone"
              className="w-full p-4 rounded-md bg-slate-100 border-none outline-none"
              value={"09213821182"}
              readOnly
            />
             <span className="py-1 px-3 rounded bg-green-600 text-white absolute top-1/2 transform -translate-y-1/2 left-2">تایید شده</span>
          </div>
        </div>
        <div className="w-1/2 flex flex-col items-start justify-center gap-2 my-2">
          <div className=" w-4/5 flex justify-between items-center">
            <label htmlFor="National code" className="text-lg">
              کد ملی:
            </label>
            <button className="text-lg" title="ویرایش اطلاعات">
              <FaRegEdit />
            </button>
          </div>
          <div className="w-4/5 relative">
            <input
              type="text"
              id="National code"
              className="w-full p-4 rounded-md bg-slate-100 border-none outline-none"
              value={"2920445936"}
              readOnly
            />
             <span className="py-1 px-3 rounded bg-green-600 text-white absolute top-1/2 transform -translate-y-1/2 left-2">تایید شده</span>
          </div>
        </div>
        <div className="w-1/2 flex flex-col items-start justify-center gap-2 my-2">
          <div className=" w-4/5 flex justify-between items-center">
            <label htmlFor="bank" className="text-lg">
              شماره شبا:
            </label>
            <button className="text-lg" title="ویرایش اطلاعات">
              <FaRegEdit />
            </button>
          </div>
          <div className="w-4/5 relative">
            <input
              type="text"
              id="bank"
              className="w-full p-4 rounded-md bg-slate-100 border-none outline-none"
              value={"IR56156456316145"}
              readOnly
            />
             <span className="py-1 px-3 rounded bg-green-600 text-white absolute top-1/2 transform -translate-y-1/2 left-2">تایید شده</span>
          </div>
        </div>
        <div className="w-1/2 flex flex-col items-start justify-center gap-2 my-2">
          <div className=" w-4/5 flex justify-between items-center">
            <label htmlFor="email" className="text-lg">
              آدرس ایمیل
            </label>
            <button className="text-lg" title="ویرایش اطلاعات">
              <FaRegEdit />
            </button>
          </div>
          <div className="w-4/5 relative">
            <input
              type="text"
              id="email"
              className="w-full p-4 rounded-md bg-slate-100 border-none outline-none"
              value={"mehransoufi1@gmail.com"}
              readOnly
            />
             <span className="py-1 px-3 rounded bg-green-600 text-white absolute top-1/2 transform -translate-y-1/2 left-2">تایید شده</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
