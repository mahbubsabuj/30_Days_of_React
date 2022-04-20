import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({onSubmit}) => {
  const [query, setQuery] = useState("");
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };
  const handleSubmit = (event) => {
    onSubmit(query);
    event.preventDefault();
  };
  return (
    <div className="input-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search something"
          className="input"
          value={query}
          onChange={handleInputChange}
        ></input>
      </form>
    </div>
  );
};

export default SearchBar;
