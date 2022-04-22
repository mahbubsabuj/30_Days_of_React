import React, { useEffect } from "react";
import "./ImageCard.css";

const ImageCard = ({ image }) => {
  const imageRef = React.useRef();
  useEffect(() => console.log(imageRef), []);
  return (
    <img ref={imageRef} alt={image.alt_description} src={image.urls.small} />
  );
};
export default ImageCard;
