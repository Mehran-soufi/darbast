import Image from "next/image";
import React from "react";

import writer from "@/assets/announcement/writer.jpg";
import padcast from "@/assets/announcement/padcast.jpg";

function Announcement() {
  return (
    <section className="section">
      <div className="w-full flex justify-between items-center flex-wrap gap-4">
        <div className="sm:w-[48%] w-11/12 mx-auto lg:h-[70vh] h-[45vh] rounded-2xl border border-slate-300 cursor-pointer">
          <div className="w-full lg:h-4/5 h-2/3">
            <Image
              src={writer}
              alt=""
              className="w-full h-full rounded-ss-2xl rounded-se-2xl"
            ></Image>
          </div>
          <div className="w-full lg:h-1/5 h-1/3 p-4">
          <h2 className="lg:text-lg font-bold">با نوشتن کسب درآمد کنید.</h2>
          <p className="text-slate-800">با نوشتن مطالب مناسب در وب سایت دربست کسب درآمد کنید.</p>
          </div>
        </div>
        <div className="sm:w-[48%] w-11/12 mx-auto lg:h-[70vh] h-[45vh] rounded-2xl border border-slate-300 cursor-pointer">
          <div className="w-full lg:h-4/5 h-2/3">
            <Image
              src={padcast}
              alt=""
              className="w-full h-full rounded-ss-2xl rounded-se-2xl"
            ></Image>
          </div>
          <div className="w-full lg:h-1/5 h-1/3 p-4">
          <h2 className="lg:text-lg font-bold">مهمان دربست باشید.</h2>
          <p className="text-slate-800">جهت شرکت در پادکست از شما همسفر گرامی دعوت به عمل می آید.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Announcement;
