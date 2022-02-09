import React from "react";
// Hooks
import useSearchForecast from "../hooks/useSearchForecast";
import WeatherCard from "./WeatherCard";

function SearchedWeather() {
  const { weather, isLoaded, error, city } = useSearchForecast();
  return (
    <div>
      <h1>SearchedWeather</h1>
      {isLoaded ? <WeatherCard /> : <p>Loading...</p>}
    </div>
  );
}

export default SearchedWeather;
