"use client";
import { Box, Button, TextField } from "@mui/material";
import React, { useState, ChangeEvent, useRef, useEffect } from "react";

const ConfirmCode: React.FC = () => {
  const [code, setCode] = useState<string[]>(["", "", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (
    index: number,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    if (/^\d$/.test(value) || value === "") {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      if (value !== "" && index < code.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const isFormValid = code.every((digit) => digit !== "");

  return (
    <>
      <Box
        component="form"
        autoComplete="off"
        className="lg:w-1/2 w-4/5 gap-1 flex justify-center items-center"
        dir="ltr"
      >
        {code.map((digit, index) => (
          <TextField
            key={index}
            id={`codeField${index}`}
            variant="standard"
            className="w-1/5 bg-slate-100 rounded-md"
            type="text"
            value={digit}
            onChange={(event) => handleChange(index, event)}
            inputProps={{
              maxLength: 1,
              ref: (el: HTMLInputElement | null) => (inputRefs.current[index] = el),
            }}
          />
        ))}
      </Box>
      <Button
        variant="contained"
        className="lg:w-1/2 w-4/5"
        disabled={!isFormValid}
      >
        ورود
      </Button>
    </>
  );
};

export default ConfirmCode;
