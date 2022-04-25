import React, { useState } from "react";
import { Box } from "@mui/system";
import { TextField } from "@mui/material";

const SearchBar = ({ onTermSubmit }) => {
  const [term, setTerm] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    onTermSubmit(term);
  };
  const handleInputChange = (event) => {
    setTerm(event.target.value);
  };
  return (
    <Box sx={{ m: 2 }} component="form" onSubmit={handleSubmit}>
      <TextField
        id="filled-search"
        type="search"
        variant="filled"
        placeholder="Enter your CF Handle"
        sx={{ color: "black", borderColor: "black" }}
        inputProps={{ style: { color: "black", backgroundColor: "white" } }}
        focused
        value={term}
        onChange={handleInputChange}
      />
    </Box>
  );
};

export default SearchBar;
