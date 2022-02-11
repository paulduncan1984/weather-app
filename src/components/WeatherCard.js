import React from "react";
import SearchBar from "./SearchBar";
import { FaMapMarkerAlt, FaWind } from "react-icons/fa";
import { GiWaterDrop } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

function WeatherCard(props) {
  console.log(props);
  const navigate = useNavigate();

  const bgToggle = () => {
    const isDay = props.data.current.is_day;
    if (isDay === 1) {
      return "__day";
    } else {
      return "__night";
    }
  };

  return (
    <div className={`weatherCard${bgToggle()}`}>
      <SearchBar />
      <FaMapMarkerAlt onClick={() => navigate("/")} />
      <p>
        {props.data.location.name}, {props.data.location.country}
      </p>
      <img src={props.data.current.condition.icon} />
      <p>{props.data.current.condition.text}</p>
      <p>{props.data.current.temp_c}°C</p>
      <p>
        <FaWind />
        {props.data.current.wind_kph} kmp/h
      </p>
      <p>
        <GiWaterDrop />
        {props.data.current.precip_mm} mm
      </p>
    </div>
  );
}

export default WeatherCard;
