import React from "react";
import { OneResidence } from "./Residence";
import { Box, Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const labels: { [index: string]: string } = {
  0.5: "خیلی ضعیف",
  1: "ضعیف",
  1.5: "نامناسب",
  2: "معمولی",
  2.5: "متوسط",
  3: "قابل قبول",
  3.5: "خوب",
  4: "ممتاز",
  4.5: "فوق العاده",
  5: "کم نظیر",
};

function ResidenceDetials({ residence }: OneResidence) {
  return (
    <div className="w-full grid lg:grid-cols-3 grid-cols-2">
      <div className="lg:col-span-2 col-span-2 p-2">
        <div className="w-full h-full p-2 bg-gray-100 rounded-lg">
          <div className="w-full flex justify-center items-center py-2 border-b border-gray-300">
            <h1 className="font-bold lg:text-2xl sm:text-xl text-lg">
              {residence.title}
            </h1>
          </div>
          <div className="w-full">
            <p className="p-4 md:text-lg">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
              و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
            </p>
          </div>
        </div>
      </div>
      <div className="lg:col-span-1 col-span-2 p-2">
        <div className="w-full h-full p-2 bg-gray-100 rounded-lg">
          <div className="w-full flex justify-between items-center flex-wrap gap-2 p-2 border-b border-gray-300">
            <div className="flex items-center gap-2">
              <p>استان {residence.province}</p>
              <p className="text-slate-700">/ {residence.city}</p>
            </div>
            <Box
              sx={{ display: "flex", alignItems: "center", direction: "rtl" }}
            >
              <Box sx={{ ml: 1 }}>{labels[residence.rating]}</Box>
              <Rating
                name="text-feedback"
                value={Math.min(Math.max(residence.rating, 0), 5)}
                readOnly
                precision={0.5}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
                sx={{ direction: "ltr" }}
              />
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResidenceDetials;
