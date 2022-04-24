import React, { useState } from "react";
import { Grid } from "@mui/material";
import { TextField } from "@mui/material";

const SearchBar = ({ onTermSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleFormSumit = (event) => {
    event.preventDefault();
    onTermSubmit(searchTerm);
  };
  return (
    <Grid
      container
      justifyContent="center"
      sx={{ p: 5, m: 5 }}
      component="form" onSubmit={handleFormSumit}
    >
      <Grid item xs={5} md={5}>
        <TextField
          variant="filled"
          color="success"
          focused
          fullWidth
          placeholder="Enter Contest ID"
          onChange={handleInputChange}
          value={searchTerm}
        />
      </Grid>
    </Grid>
  );
};

export default SearchBar;
