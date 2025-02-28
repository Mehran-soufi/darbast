import React from "react";
import { Box, Button, TextField } from "@mui/material";

function Newsletter() {
  return (
    <section className="section flex justify-center items-center p-4">
      <div className="lg:w-3/5 w-11/12 newsletter relative sm:h-[60vh] h-[80vh] bg-gradient-to-br from-gray-200 to-transparent">
        <div className="ribbon lg:text-lg font-bold text-white lg:px-8 sm:px-6 px-4 flex justify-center items-center py-1">
          <p>خبرنامه دربست</p>
        </div>
        <div className="w-4/5 mx-auto h-full flex flex-col justify-center items-center gap-8">
          <Box
            component="form"
            noValidate
            autoComplete="off"
            className="search rounded-md w-full flex justify-center items-center sm:flex-row flex-col bg-white"
          >
            <TextField
              id="emailField"
              label="آدرس ایمیل"
              variant="standard"
              className="sm:w-2/5 w-full"
            />
            <TextField
              id="phoneField"
              label="شماره تماس"
              variant="standard"
              className="sm:w-2/5 w-full"
            />
            <Button variant="contained" className="sm:w-1/5 w-full">
              عضویت
            </Button>
          </Box>
          <div className="w-full flex justify-center items-center">
            <p className="lg:text-lg sm:text-base text-sm">
              با عضویت در خبرنامه، شما میتوانید از جدیدترین اخبار و تخفیفات سریع
              تر از همیشه مطلع باشید.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
