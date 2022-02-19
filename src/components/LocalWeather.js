import React, { useState } from "react";
import WeatherCard from "./WeatherCard";
import useLocalForecast from "../hooks/useLocalForecast";
import {css} from "@emotion/react";
import Loader from "./Loader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function LocalWeather({ ...props }) {
  const { localWeather, isLoaded, error } = useLocalForecast();
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

  return (
    <div>
      {isLoaded ? <WeatherCard data={localWeather} /> : <Loader />}
    </div>
  );
}

export default LocalWeather;
