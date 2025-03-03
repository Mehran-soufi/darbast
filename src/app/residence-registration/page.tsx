"use client";
import React, { useRef, useState } from "react";
import {
  Button,
  styled,
  TextField,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  Slider,
} from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Input = styled("input")({
  display: "none",
});

const CustomFileInput = styled(Box)(({ theme }) => ({
  width: "50px",
  height: "50px",
  backgroundColor: "#f1f5f9",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  border: "2px dashed #ccc",
  overflow: "hidden",
  "&:hover": {
    backgroundColor: "#cbd5e1",
  },
  [theme.breakpoints.up("sm")]: {
    width: "80px",
    height: "80px",
  },
  [theme.breakpoints.up("md")]: {
    width: "90px",
    height: "90px",
  },
  [theme.breakpoints.up("lg")]: {
    width: "110px",
    height: "110px",
  },
}));

const CustomRadio = styled(Radio)({
  color: "#c2410c ",
  "&.Mui-checked": {
    color: "#ea580c",
  },
});

const CustomCheckbox = styled(Checkbox)({
  color: "#c2410c",
  "&.Mui-checked": {
    color: "#ea580c",
  },
});

const marks = [
  { value: 8, label: "8 AM" },
  { value: 9, label: "9 AM" },
  { value: 10, label: "10 AM" },
  { value: 11, label: "11 AM" },
  { value: 12, label: "12 PM" },
  { value: 13, label: "1 PM" },
  { value: 14, label: "2 PM" },
  { value: 15, label: "3 PM" },
  { value: 16, label: "4 PM" },
  { value: 17, label: "5 PM" },
  { value: 18, label: "6 PM" },
  { value: 19, label: "7 PM" },
  { value: 20, label: "8 PM" },
  { value: 21, label: "9 PM" },
];

export default function CreateAd() {
  const [previews, setPreviews] = useState<(string | null)[]>(
    Array(5).fill(null)
  );
  const fileInputRefs = useRef<(HTMLInputElement | null)[]>(
    Array(5).fill(null)
  );

  const handleFileUpload = (index: number) => {
    if (fileInputRefs.current[index]) {
      fileInputRefs.current[index]?.click();
    }
  };

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const newPreviews = [...previews];
          newPreviews[index] = reader.result as string;
          setPreviews(newPreviews);
        };
        reader.readAsDataURL(file);
      } else {
        alert("لطفاً فقط فایل‌های تصویری را انتخاب کنید.");
      }
    }
  };

  const [checkIn, setCheckIn] = React.useState<number>(8);
  const [checkOut, setCheckOut] = React.useState<number>(8);

  const handleCheckInChange = (event: Event, newValue: number | number[]) => {
    setCheckIn(newValue as number);
  };

  const handleCheckOutChange = (event: Event, newValue: number | number[]) => {
    setCheckOut(newValue as number);
  };

  return (
    <div className="w-full min-h-screen">
      <section className="section">
        <div className="w-full my-4 flex justify-between items-center border-b py-4">
          <p className="lg:text-2xl sm:text-xl text-lg">ثبت اقامتگاه</p>
          <Button className="header-btn" variant="contained">
            پاک سازی فرم
          </Button>
        </div>
        <div className="w-full flex justify-start items-start flex-wrap">
          <div className="w-full search lg:w-1/2 lg:h-full flex flex-col items-start justify-start gap-8">
            <TextField
              id="title"
              label="عنوان اقامتگاه"
              variant="standard"
              className="bg-slate-100 lg:w-4/5 w-full text-lg rounded-md p-1"
            />
            <TextField
              id="title"
              rows={4}
              label="توضیحات اقامتگاه"
              variant="standard"
              multiline
              className="bg-slate-100 lg:w-4/5 w-full text-lg rounded-md"
            />
            <TextField
              id="title"
              label="مکان"
              variant="standard"
              className="bg-slate-100 lg:w-4/5 w-full text-lg rounded-md p-1"
            />
            <TextField
              id="title"
              label="قیمت (هرشب)"
              variant="standard"
              className="bg-slate-100 lg:w-4/5 w-full text-lg rounded-md p-1"
            />
            <TextField
              id="title"
              label="قیمت (نفر اضافه)"
              variant="standard"
              className="bg-slate-100 lg:w-4/5 w-full text-lg rounded-md p-1"
            />
          </div>
          <div className="search w-full lg:w-1/2 lg:h-full flex flex-col items-end justify-start gap-8 lg:mt-0 mt-8">
            <div className="w-full flex flex-wrap lg:justify-end justify-center items-center gap-2">
              <div className="w-full lg:pr-[15%]">
                <p className="lg:text-2xl sm:text-xl text-lg flex flex-col">
                  انتخاب عکس
                </p>
                <span>حداقل 3 مورد انتخاب کنید.</span>
              </div>
              {previews.map((preview, index) => (
                <CustomFileInput
                  key={index}
                  onClick={() => handleFileUpload(index)}
                >
                  {preview ? (
                    <img
                      src={preview}
                      alt="پیش‌نمایش"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <AddPhotoAlternateIcon className="text-gray-500 lg:text-2xl sm:text-xl text-lg" />
                  )}
                  <Input
                    ref={(el) => {
                      fileInputRefs.current[index] = el;
                    }}
                    type="file"
                    accept="image/*"
                    onChange={(event) => handleFileChange(event, index)}
                  />
                </CustomFileInput>
              ))}
            </div>
            <Accordion className="lg:w-4/5 w-full" style={{ direction: "rtl" }}>
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography component="span">تعداد اتاق</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <FormControl>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    className="w-full flex justify-center items-center"
                  >
                    <FormControlLabel
                      value="one"
                      control={<CustomRadio />}
                      label="یک 1"
                    />
                    <FormControlLabel
                      value="two"
                      control={<CustomRadio />}
                      label="دو 2"
                    />
                    <FormControlLabel
                      value="three"
                      control={<CustomRadio />}
                      label="سه 3"
                    />
                    <FormControlLabel
                      value="four"
                      control={<CustomRadio />}
                      label="چهار 4"
                    />
                  </RadioGroup>
                </FormControl>
              </AccordionDetails>
            </Accordion>
            <Accordion className="lg:w-4/5 w-full" style={{ direction: "rtl" }}>
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography component="span">مکانات رفاهی</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <FormControl>
                  <div className="w-full flex justify-center items-center flex-wrap">
                    <FormControlLabel
                      value="parking"
                      control={<CustomCheckbox />}
                      label="پارکینگ"
                    />
                    <FormControlLabel
                      value="pool"
                      control={<CustomCheckbox />}
                      label="استخر"
                    />
                    <FormControlLabel
                      value="market"
                      control={<CustomCheckbox />}
                      label="دسترسی به سوپرمارکت"
                    />
                    <FormControlLabel
                      value="wifi"
                      control={<CustomCheckbox />}
                      label="وای فای رایگان"
                    />
                    <FormControlLabel
                      value="gym"
                      control={<CustomCheckbox />}
                      label="باشگاه ورزشی"
                    />
                    <FormControlLabel
                      value="beach"
                      control={<CustomCheckbox />}
                      label="دسترسی به ساحل"
                    />
                  </div>
                </FormControl>
              </AccordionDetails>
            </Accordion>
            <Accordion className="lg:w-4/5 w-full" style={{ direction: "rtl" }}>
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography component="span">مجوزهای اقامتگاه</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <FormControl>
                  <div className="w-full flex justify-center items-center flex-wrap">
                    <FormControlLabel
                      value="smook"
                      control={<CustomCheckbox />}
                      label="استعمال دخانیات"
                    />
                    <FormControlLabel
                      value="pet"
                      control={<CustomCheckbox />}
                      label="ورود حیوانات خانگی"
                    />
                    <FormControlLabel
                      value="party"
                      control={<CustomCheckbox />}
                      label="برگزاری مراسمات"
                    />
                  </div>
                </FormControl>
              </AccordionDetails>
            </Accordion>
            <Accordion className="lg:w-4/5 w-full" style={{ direction: "rtl" }}>
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography component="span">ساعت ورود و خروج</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <FormControl className="w-full flex flex-col items-center">
                  <Box className="w-full flex flex-col md:flex-row justify-center items-center">
                  <Typography component="span">ساعت ورود</Typography>
                  <Slider
                    value={checkIn}
                    onChange={handleCheckInChange}
                    valueLabelDisplay="auto"
                    marks={marks.slice(0, 5)}
                    min={8}
                    max={12}
                    className="w-4/5"
                    />
                    </Box>
                  <Typography component="span">ساعت خروج</Typography>
                  <Slider
                    value={checkOut}
                    onChange={handleCheckOutChange}
                    valueLabelDisplay="auto"
                    marks={marks}
                    min={8}
                    max={21}
                    className="w-4/5"
                  />
                </FormControl>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}
