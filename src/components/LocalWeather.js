import React from "react";
import WeatherCard from "./WeatherCard";
import useLocalForecast from "../hooks/useLocalForecast";

function LocalWeather({ ...props }) {
  const { localWeather, isLoaded, error } = useLocalForecast();

  return (
    <div>
      {isLoaded ? <WeatherCard data={localWeather} /> : <p style={{color: "black"}}>Is loading...</p>}
    </div>
  );
}

export default LocalWeather;
