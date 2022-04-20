import "./App.css";
import React, { useState } from "react";
function App() {
  const apiKey = "YOUR API KEY"; // you can get it from here https://www.weatherapi.com/
  const [location, setLocation] = useState("dhaka");
  const [errorMessage, setErrorMessage] = useState(null);
  const [weatherDetails, setWeatherDetails] = useState({
    cityName: null,
    countryName: null,
    temperature: null,
  });
  const handleChange = (event) => {
    event.preventDefault();
    setLocation(event.target.value);
  };
  const handleClick = (event) => {
    event.preventDefault();
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          setErrorMessage("Please Enter a valid city/country name");
        } else {
          console.log(data.location.name);
          const weatherObject = {
            cityName: data.location.name,
            countryName: data.location.country,
            temperature: data.current.temp_c,
          };
          setErrorMessage(null);
          setWeatherDetails(weatherObject);
        }
        console.log(data);
      })
      .catch((error) => {
        setErrorMessage("Please check your internet connection!");
      });
  };
  return (
    <div className="main-container">
      <div className="grid-container">
        <input
          type="input"
          placeholder="Search for a city"
          className="input-field"
          onChange={handleChange}
        ></input>
        <button type="button" className="btn" onClick={handleClick}>
          SUBMIT
        </button>
      </div>
      <div className="card">
        <div className="container">
          {/* <img
          src="https://images.pexels.com/photos/1152359/pexels-photo-1152359.jpeg?cs=srgb&dl=pexels-marctutorials-1152359.jpg&fm=jpg"
          alt="Girl in a jacket"
          width="200"
          height="150"
        /> */}
          <h4>{errorMessage && errorMessage}</h4>
          <h4>
            {weatherDetails.cityName && (
              <b>{`${weatherDetails.cityName}, ${weatherDetails.countryName}`}</b>
            )}
          </h4>
          {weatherDetails.temperature && (
            <p>Temprature: {weatherDetails.temperature}°C</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
