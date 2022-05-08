import React, { useState } from "react";
import { Input } from "@chakra-ui/react";

const SearchBar = ({ setSearchTerm }) => {
  const [term, setTerm] = useState("");
  const handleInputChange = (event) => {
    setTerm(event.target.value);
    setSearchTerm(event.target.value);
  };
  return (
    <Input
      variant="filled"
      placeholder="Search a term"
      value={term}
      onChange={handleInputChange}
    />
  );
};

export default SearchBar;
