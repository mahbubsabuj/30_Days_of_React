import React from "react";
import "./SeasonDisplay.css";

const seasonConfig = {
  winter: {
    text: "It's winter!",
    iconName: "snowflake",
  },
  summer: {
    text: "It's summer!",
    iconName: "sun",
  },
};

const getSeason = (lat, month) => {
  if (month >= 3 && month <= 9) {
    return lat > 0 ? "winter" : "summer";
  } else {
    return lat > 0 ? "summer" : "winter";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date());
  const { text, iconName } = seasonConfig[season];
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1 className="text-style">{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
