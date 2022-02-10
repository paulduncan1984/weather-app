import React from "react";

function WeatherCard(props) {
  // console.log(props.data.location.name);
  return (
    <div>
      <h1>Weather Card</h1>
      <p>
        {props.data.location.name}, {props.data.location.country}
      </p>
      <img src={props.data.current.condition.icon} />
      <p>{props.data.current.condition.text}</p>
      <p>{props.data.current.wind_kph} kmp/h</p>
      <p>{props.data.current.precip_mm} mm</p>
    </div>
  );
}

export default WeatherCard;
