import React from "react";
import WeatherCard from "./WeatherCard";
import useLocalForecast from "../hooks/useLocalForecast";

function LocalWeather({ ...props }) {
  const { localWeather, isLoaded, error } = useLocalForecast();

  return (
    <div>
      <h1>LocalWeather</h1>
      {isLoaded ? <WeatherCard data={localWeather} /> : <p>Is loading...</p>}
    </div>
  );
}

export default LocalWeather;
