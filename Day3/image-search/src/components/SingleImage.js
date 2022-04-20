import React from "react";
import './SingleImage.css';

const SingleImage = ({ image }) => {
  return <img height={250} width={220} alt={image.alt_description} src={image.urls.small} />;
};
export default SingleImage;
