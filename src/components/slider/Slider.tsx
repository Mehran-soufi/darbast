"use client";
import React, { useRef } from "react";
import { Swiper as SwiperType } from "swiper";
import Detail from "./Detail";
import Slides from "./Slides";

export interface Accommodation {
  id: string;
  title: string;
  rating: number;
  price: number;
  discount: number;
  city: string;
  province: string;
  main_image_url: string;
  category: string;
  additional_images: string[];
}

function Slider({ data }: { data: Accommodation[] }) {
  const swiperRef = useRef<SwiperType | null>(null);

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  return (
    <section className="section relative">
      <Detail handleNext={handleNext} handlePrev={handlePrev} />
      <Slides setSwiperRef={(swiper: SwiperType) => (swiperRef.current = swiper)} data={data} />
    </section>
  );
}

export default Slider;
