import Image, { StaticImageData } from "next/image";
import React from "react";
import { MdInstallMobile } from "react-icons/md";

// images
import bazar from "@/assets/app/bazar.png";
import googleplay from "@/assets/app/googleplay.png";
import mayket from "@/assets/app/mayket.png";
import sibapp from "@/assets/app/sibapp.png";
import sibche from "@/assets/app/sibche.png";

// data type
interface AppDataType {
  name: string;
  img: StaticImageData;
}

// app data
const appData: AppDataType[] = [
  {
    name: "caffe bazar",
    img: bazar,
  },
  {
    name: "google play",
    img: googleplay,
  },
  {
    name: "mayket",
    img: mayket,
  },
  {
    name: "sib app",
    img: sibapp,
  },
  {
    name: "sibche",
    img: sibche,
  },
];

function FooterApp() {
  return (
    <div className="w-full p-2">
      <div className="w-11/12 mx-auto flex lg:flex-row flex-col justify-between items-center rounded-md bg-gray-600 p-4 text-white">
        <div className="flex items-center lg:justify-start justify-center lg:mb-0 mb-4">
          <p className="font-bold flex items-center gap-2 text-lg">
            <span className="text-2xl">
              <MdInstallMobile />
            </span>
            دانلود اپلیکیشن دربست
          </p>
        </div>
        <div className="flex items-center lg:justify-end justify-center flex-wrap gap-4">
          {appData.map((item, index) => (
            <Image
              src={item.img}
              alt={item.name}
              key={index}
              width={130}
              className="cursor-pointer"
            ></Image>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FooterApp;
