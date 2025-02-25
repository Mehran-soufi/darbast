import React from "react";

import { Button, ButtonGroup } from "@mui/material";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface DetailProps {
  handleNext: () => void;
  handlePrev: () => void;
}
function Detail({ handleNext, handlePrev }: DetailProps) {
  return (
    <div className="w-full flex items-center justify-between">
      <div className="flex flex-col gap- items-center justify-start">
        <h2 className="lg:text-3xl md:text-2xl text-xl font-bold">
          ویلا در رشت
        </h2>
        <p className="italic md:text-base text-sm">اقامتی لذت بخش در رشت </p>
      </div>
      <div className="flex items-center justify-end">
        <ButtonGroup variant="contained" aria-label="Basic button group">
          <Button 
          onClick={handlePrev}
          >
            <FaChevronRight />
          </Button>
          <Button onClick={handleNext}>
            <FaChevronLeft />
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
}

export default Detail;
