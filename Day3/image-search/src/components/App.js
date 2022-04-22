import React, { useState } from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import "./App.css";
const App = () => {
  const [images, setImages] = useState([]);
  const handleSearchSubmit = async (query) => {
    const response = await unsplash.get("/search/photos", {
      params: {
        query: query,
      },
    });
    setImages(response.data.results);
    console.log(images);
  };
  return (
    <div className="app_container">
      <SearchBar onSubmit={handleSearchSubmit} />
      <ImageList images={images} />
    </div>
  );
};

export default App;
