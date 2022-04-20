import React from "react";
import SingleImage from "./SingleImage";
import "./ImageList.css";
const ImageList = (props) => {
  const images = props.images.map((image) => {
    return <SingleImage key={image.id} image={image} />;
  });
  return <div className="image_container">{images}</div>;
};

export default ImageList;
