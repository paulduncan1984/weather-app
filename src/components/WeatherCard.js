import React from "react";
import SearchBar from "./SearchBar";
import { FaBluetooth, FaMapMarkerAlt, FaWind, FaSmog } from "react-icons/fa";
import { GiWaterDrop } from "react-icons/gi";

// Weather icons
import { WiDaySunny, WiDayRain, WiNightAltRain, WiDayCloudy, WiNightAltCloudy, WiDaySnow, WiNightSnow } from "react-icons/wi";
import { BiMoon } from "react-icons/bi";
import { RiMistFill } from "react-icons/ri"

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

  const iconDisplay = () => {
    const isDay = props.data.current.is_day;
    const weather = props.data.current.condition.text;

    // const isDay = 1;
    // const weather = "Overcast";

    if (weather.includes("Sunny")) {
      return <WiDaySunny size={200} />;
    } else if (weather.includes("Clear")) {
      return isDay === 1 ? <WiDaySunny size={200} /> : <BiMoon size={200} />;
    } else if (weather.includes("drizzle") || weather.includes("rain")) {
      return isDay === 1 ? (
        <WiDayRain size={200} />
      ) : (
        <WiNightAltRain size={200} />
      ); 
    } else if (weather.includes("Overcast") ||( weather.includes("cloud"))) {
      return isDay === 1 ? <WiDayCloudy size={200} /> : <WiNightAltCloudy size={200} />   
     } else if (weather.includes("snow")) {
       return isDay === 0 ? <WiDaySnow size={200} /> : <WiNightSnow size={200} /> 
     } else if (weather.includes("Mist")) {
       return <FaSmog size={200} />
     }
  };

  return (
    <div className={`weatherCard${bgToggle()}`}>
      <div className="search">
        <SearchBar />
        <FaMapMarkerAlt
          style={{
            color: "blue",
            marginTop: "15px",
            marginLeft: "5",
            fontSize: "20px",
          }}
          onClick={() => navigate("/")}
        />
      </div>

      <p>
        {props.data.location.name}, {props.data.location.country}
      </p>
      {/* <img
        style={{ height: "150px" }}
        src={props.data.current.condition.icon}
      /> */}
      <p>{iconDisplay()}</p>
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
