"use client";
import React, { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { DatePicker } from "react-datepicker2";
import moment from "moment-jalaali";

moment.loadPersian({ dialect: "persian-modern" });

const inputItems = [
  { label: "جستجوی شهر، استان یا نام اقامتگاه", labelName: "city" },
  { label: "تاریخ ورود", labelName: "enter" },
  { label: "تاریخ خروج", labelName: "exit" },
];

function Search() {
  const [selectInput, setSelectInput] = useState<string>("");
  const [dates, setDates] = useState<{ enter: moment.Moment | null; exit: moment.Moment | null }>({
    enter: null,
    exit: null,
  });
  const inputRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        !(event.target as HTMLElement).closest(".input-container") &&
        !(event.target as HTMLElement).closest(".datepicker-wrapper")
      ) {
        setSelectInput("");
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="search lg:w-3/5 sm:w-4/5 w-11/12 rounded-xl flex justify-between items-center sm:flex-row flex-col z-50"
      onClick={(e) => {
        e.stopPropagation();
        setSelectInput("");
      }}
    >
      {inputItems.map((item, index) => (
        <div
          key={index}
          className={`input-container ${
            item.labelName === "city"
              ? "sm:w-2/5 w-full sm:rounded-s-xl max-sm:rounded-ss-xl max-sm:rounded-se-xl"
              : "sm:w-1/5 w-full input-cus"
          } ${selectInput && selectInput !== item.labelName ? "bg-gray-300" : "bg-white"} h-12`}
          onClick={(e) => {
            e.stopPropagation();
            setSelectInput(item.labelName);
          }}
          ref={(el) => (inputRefs.current[item.labelName] = el)}
        >
          <Box component="form" noValidate autoComplete="off">
            {item.labelName === "city" ? (
              <TextField
                id={item.labelName}
                label={item.label}
                variant="standard"
                onFocus={() => setSelectInput(item.labelName)}
                className={`${
                  item.labelName === "city" ? "rounded-s-xl" : "rounded-none"
                } w-full h-full max-sm:border-b max-sm:border-gray-300 outline-none sm:border-none`}
              />
            ) : (
              <>
                <TextField
                  id={item.labelName}
                  label={item.label}
                  variant="standard"
                  value={dates[item.labelName as keyof typeof dates]?.format("jYYYY/jMM/jDD") || ""}
                  onFocus={() => setSelectInput(item.labelName)}
                  className="w-full h-full max-sm:border-b max-sm:border-gray-300 outline-none sm:border-none"
                  readOnly
                />
                {selectInput === item.labelName && (
                  <div className="datepicker-wrapper absolute z-50 bg-white p-2 rounded-lg shadow-lg">
                    <DatePicker
                      isGregorian={false} // استفاده از تقویم شمسی
                      timePicker={false} // غیر فعال کردن انتخاب زمان
                      value={dates[item.labelName as keyof typeof dates]}
                      onChange={(date) =>
                        setDates({ ...dates, [item.labelName]: date })
                      }
                    />
                  </div>
                )}
              </>
            )}
          </Box>
        </div>
      ))}
      <div className="sm:w-1/5 w-full h-12 overflow-hidden bg-orange-600 sm:rounded-e-xl max-sm:rounded-es-xl">
        <Button
          variant="contained"
          className="w-full h-full sm:rounded-e-xl max-sm:rounded-es-xl max-sm:rounded-ee-xl"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation();
            setSelectInput("");
          }}
        >
          جستجو
        </Button>
      </div>
    </div>
  );
}

export default Search;
