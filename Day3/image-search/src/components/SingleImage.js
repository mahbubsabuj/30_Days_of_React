import React from "react";

const SingleImage = ({ image }) => {
  return <img src={image.urls.small} />;
};
export default SingleImage;
