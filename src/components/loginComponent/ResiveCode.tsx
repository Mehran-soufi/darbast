"use client";
import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

interface ResiveCodeProps {
  setConfirm: (confirm: boolean) => void;
}

const ResiveCode: React.FC<ResiveCodeProps> = ({ setConfirm }) => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(false);

  const handlePhoneNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const input = event.target.value;
    setPhoneNumber(input);
    // Regular expression to validate phone number (11 digits starting with 0)
    const phonePattern = /^0[0-9]{10}$/;
    setIsValid(phonePattern.test(input));
  };

  const handleInput = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const charCode = event.key.charCodeAt(0);
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
  };

  return (
    <>
      <TextField
        id="phoneField"
        label="شماره تماس"
        variant="standard"
        className="lg:w-1/2 w-4/5 bg-slate-100 rounded-md"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        onKeyPress={handleInput}
        inputProps={{ maxLength: 11 }}
      />
      <Button
        variant="contained"
        className="lg:w-1/2 w-4/5"
        style={{
          cursor: isValid ? "pointer" : "not-allowed",
          pointerEvents: isValid ? "auto" : "none",
        }}
        onClick={() => setConfirm(true)}
      >
        دریافت کد
      </Button>
    </>
  );
};

export default ResiveCode;
