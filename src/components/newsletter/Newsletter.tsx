import React from "react";
import { SlEnvolopeLetter } from "react-icons/sl";

import backgroundImg from "@/assets/newsletter/newsletter.jpg";
import { Button, TextField } from "@mui/material";

function Newsletter() {
  return (
    <section className="section flex justify-center items-center p-4">
      <div className="w-2/3 h-[60vh] newsletter relative">
        <div className="w-20 h-20 flex justify-center items-end p-2 rounded-full absolute -top-9 left-1/2 -translate-x-1/2 z-[1000] bg-gray-300 shadow-md shadow-gray-400">
          <span className="text-black text-3xl">
            <SlEnvolopeLetter />
          </span>
        </div>
        <div className="w-full h-full absolute top-0 left-0">
          <img
            src={backgroundImg.src}
            alt="Newsletter"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full h-full flex flex-col gap-4 justify-center items-center bg-slate-200/80 z-50 relative">
          <div className="w-3/5 mx-auto flex justify-center items-start flex-col gap-4">
            <div className="w-full">
              <h2 className="text-3xl text-black font-bold">خبرنامه دربست</h2>
              <p className="text-xl">
                با عضویت در خبرنامه، از جدیدترین تخفیفات و بهترین آفرها در سریع
                ترین زمان ممکن باخبر شوید
              </p>
            </div>
            <div className="w-full rounded-md bg-gray-700">
              <TextField
                id="filled-basic"
                label="Filled"
                variant="filled"
                className="w-4/5 rounded-s-md text-right text-white bg-transparent"
              />
              <Button variant="contained" className="w-1/5 h-full rounded-e-md">
                جستجو
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
