import React from "react";
import Image from "next/image";

import podcast from "@/assets/podcast/podcast.jpg";
import castbox from "@/assets/podcast/castbox-logo.png";
import googlepodcasts from "@/assets/podcast/Google-Podcasts-Logo.png";
import applepodcasts from "@/assets/podcast/Apple-Podcasts-Logo.png";

function Podcast() {
  return (
    <div className="w-full my-8">
      <div className="w-full lg:h-[60vh] sm:h-[50vh] h-[30vh] relative">
        <Image
          src={podcast}
          alt="بنر پادکست"
          className="w-full h-full object-cover"
        ></Image>
        <div className="w-full h-full flex md:justify-end justify-center absolute top-0 left-0 bg-gradient-to-l from-black/10 to-black/60">
          <div className="lg:w-1/2 md:w-3/5 w-full h-full flex flex-col items-center justify-center gap-4">
            <div className="w-full flex flex-col justify-center items-center gap-2 select-none">
              <p className="text-white lg:text-5xl md:text-4xl text-2xl font-bold">
                پــادکـــســت دربست!
              </p>
              <span className="lg:text-2xl md:text-xl text-lg text-white mix-blend-overlay z-50">
                همراه پادکست های هیجان انگیز سفری ما باشید.
              </span>
            </div>
            <div className="w-full flex justify-center items-center gap-4">
              <Image
                src={castbox}
                alt="castbox"
                className="cursor-pointer lg:w-32 md:w-28 sm:w-24 w-20 lg:h-11 md:h-10 h-8 bg-slate-300 rounded-md p-1"
              ></Image>
              <Image
                src={googlepodcasts}
                alt="castbox"
                className="cursor-pointer lg:w-32 md:w-28 sm:w-24 w-20 lg:h-11 md:h-10 h-8 bg-slate-300 rounded-md p-1"
              ></Image>
              <Image
                src={applepodcasts}
                alt="castbox"
                className="cursor-pointer lg:w-32 md:w-28 sm:w-24 w-20 lg:h-11 md:h-10 h-8 bg-slate-300 rounded-md p-1"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Podcast;
