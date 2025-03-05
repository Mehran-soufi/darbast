import React from "react";
import { OneResidence } from "./Residence";

function ResidenceImg({ residence }: OneResidence) {
  return (
    <div className="w-full lg:h-[70vh] sm:h-[60vh] h-[50vh] grid lg:grid-cols-3 grid-cols-2 lg:grid-rows-2 grid-rows-3">
      <div className="lg:col-span-2 col-span-2 lg:row-span-3 row-span-2">
        <div className="w-full h-full rounded-lg p-2">
          <img
            src={residence.main_image_url}
            alt={residence.title}
            className="w-full h-full rounded-lg cursor-pointer"
            loading="lazy"
          />
        </div>
      </div>
      {residence.additional_images.slice(0, 2).map((imgMain, index) => (
        <div key={index} className="col-span-1 row-span-1">
          <div className="w-full h-full rounded-lg p-2">
            <img
              src={imgMain}
              alt={`${residence.title} - Additional Image ${index + 1}`}
              className="w-full h-full rounded-lg cursor-pointer"
              loading="lazy"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default ResidenceImg;
