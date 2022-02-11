import React from "react";
import useSearchForecast from "../hooks/useSearchForecast";
import WeatherCard from "./WeatherCard";

import { useParams } from "react-router-dom";

function SearchedWeather() {
  const params = useParams();
  const { weather, isLoaded, error } = useSearchForecast(params.queryText);

  console.log(weather);
  return (
    <div>{isLoaded ? <WeatherCard data={weather} /> : <p>Loading...</p>}</div>
  );
}

export default SearchedWeather;
