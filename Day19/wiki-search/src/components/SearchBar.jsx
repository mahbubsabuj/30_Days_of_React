import React, { useState } from "react";
import { Input, FormControl } from "@chakra-ui/react";

const SearchBar = ({ onTermSubmit }) => {
  const [term, setTerm] = useState("");
  const handleInputChange = (event) => {
    setTerm(event.target.value);
  };
  return (
    <form onSubmit={(event) => onTermSubmit(event, term)}>
      <Input
        variant="filled"
        placeholder="Search a term"
        value={term}
        onChange={handleInputChange}
      />
    </form>
  );
};

export default SearchBar;
