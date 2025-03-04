import React from "react";

import house from "@/assets/banner/house-key.png";
import Image from "next/image";

function HostBanner() {
  return (
    <section className="section flex justify-center items-center">
      <div className="w-full h-[35vh] cursor-pointer select-none my-8 rounded-2xl bg-gradient-to-br from-violet-600 via-pink-700 to-orange-800 flex items-center md:flex-row flex-col-reverse">
        <div className="sm:w-2/3 w-full sm:h-full h-2/3 flex justify-center items-start flex-col p-8 gap-4">
          <p className="text-white font-bold lg:text-3xl sm:text-2xl">
            ثبت رایگان
            <br />
            اقامتگاه، ویلا ، سوئیت و آپارتمان
          </p>
          <p className="py-2 px-4 bg-orange-600 text-white sm:text-lg rounded-md">
            ثبت رایگان
          </p>
        </div>
        <div className="sm:w-1/3 w-full sm:h-full h-1/3 flex justify-center items-center">
          <Image src={house} alt="ثبت اقامتگاه" className="w-1/2 sm:w-11/12 lg:w-3/5"></Image>
        </div>
      </div>
    </section>
  );
}

export default HostBanner;
