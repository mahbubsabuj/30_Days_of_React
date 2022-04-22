import React, { useState } from "react";
const SearchBar = ({onFormSubmit}) => {
  const [term, setTerm] = useState("");
  const handleChange = (event) => {
    setTerm(event.target.value);
  };
  const handleSumit = (event) => {
      event.preventDefault();
      onFormSubmit(term);
  }
  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={handleSumit}>
        <div className="field">
          <label> Search </label>
          <input
            type="text"
            value={term}
            onChange={handleChange}
            placeholder="Search a term"
          ></input>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
