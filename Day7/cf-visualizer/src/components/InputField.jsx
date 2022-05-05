import React, { useState } from "react";
import { TextField } from "@mui/material";;

const InputField = ({ handleChange, placeholder }) => {
  const [cfHandle, setCfHandle] = useState("");
  const handleInputChange = (event) => {
    setCfHandle(event.target.value);
    handleChange(event.target.value);
  };
  return (
    <TextField
      id="filled-search"
      type="search"
      variant="filled"
      placeholder={placeholder}
      sx={{ color: "black", borderColor: "black" }}
      inputProps={{
        style: { color: "black", backgroundColor: "white" },
      }}
      focused
      value={cfHandle}
      onChange={handleInputChange}
    />
  );
};

export default InputField;
