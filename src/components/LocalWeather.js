import React from "react";
import WeatherCard from "./WeatherCard";
import useLocalForecast from "../hooks/useLocalForecast";
import Loader from "./Loader";

function LocalWeather() {
  const { localWeather, isLoaded } = useLocalForecast();

  return (
    <div>{isLoaded ? <WeatherCard data={localWeather} /> : <Loader />}</div>
  );
}

export default LocalWeather;
