"use client";
import { Button } from "@mui/material";
import React from "react";

function BackToUp() {
  const backToUPHandle = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <div className="my-4 w-full flex justify-center items-center0">
      <Button variant="contained" onClick={backToUPHandle} className="header-btn">
        برگشت به بالا
      </Button>
    </div>
  );
}

export default BackToUp;
