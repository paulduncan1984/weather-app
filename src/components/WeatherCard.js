import React from "react";

function WeatherCard({ ...props }) {
  //   console.log(props.weather.location.name);
  return (
    <div>
      <h1>Weather Card</h1>
      {/* <p>City: {WeatherCard.location.name}</p> */}
    </div>
  );
}

export default WeatherCard;
