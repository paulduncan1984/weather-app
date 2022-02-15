import React from "react";
import SearchBar from "./SearchBar";
import { FaBluetooth, FaMapMarkerAlt, FaWind, FaSmog } from "react-icons/fa";
import { GiWaterDrop } from "react-icons/gi";

// Weather icons
import {
  WiDaySunny,
  WiDayRain,
  WiNightAltRain,
  WiDayCloudy,
  WiNightAltCloudy,
  WiDaySnow,
  WiNightSnow,
} from "react-icons/wi";
import { BiMoon } from "react-icons/bi";
import { RiMistFill } from "react-icons/ri";

import { useNavigate } from "react-router-dom";

function WeatherCard(props) {
  console.log(props);
  const navigate = useNavigate();

  // Functions
  const bgToggle = () => {
    const isDay = props.data.current.is_day;
    if (isDay === 1) {
      return "__day";
    } else {
      return "__night";
    }
  };

  const iconDisplay = (weather, size) => {
    const isDay = props.data.current.is_day;
    // const isDay = 1;
    // const weather = "Overcast";

    if (weather.includes("Sunny")) {
      return <WiDaySunny size={size} />;
    } else if (weather.includes("Clear")) {
      return isDay === 1 ? <WiDaySunny size={size} /> : <BiMoon size={size} />;
    } else if (weather.includes("drizzle") || weather.includes("rain")) {
      return isDay === 1 ? (
        <WiDayRain size={size} />
      ) : (
        <WiNightAltRain size={size} />
      );
    } else if (weather.includes("Overcast") || weather.includes("cloud")) {
      return isDay === 1 ? (
        <WiDayCloudy size={size} />
      ) : (
        <WiNightAltCloudy size={size} />
      );
    } else if (weather.includes("snow")) {
      return isDay === 0 ? (
        <WiDaySnow size={size} />
      ) : (
        <WiNightSnow size={size} />
      );
    } else if (weather.includes("Mist")) {
      return <FaSmog size={size} />;
    }
  };

  // const day = 1644883200;
  // const d = new Date(0);
  // d.setUTCSeconds(day);
  // console.log(d);

  const createDay = (timeStr) => {
    const day = new Date(0);
    day.setUTCSeconds(timeStr);
    const formatDay = String(day);
    if (formatDay.includes("Mon")) {
      return "Monday";
    } else if (formatDay.includes("Tue")) {
      return "Tuesday";
    } else if (formatDay.includes("Wed")) {
      return "Wednesday";
    } else if (formatDay.includes("Thu")) {
      return "Thursday";
    } else if (formatDay.includes("Fri")) {
      return "Friday";
    } else if (formatDay.includes("Sat")) {
      return "Saturday";
    } else if (formatDay.includes("Sun")) {
      return "Sunday";
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
      <p>{iconDisplay(props.data.current.condition.text, 200)}</p>
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

      <p>{createDay(props.data.forecast.forecastday[0].date_epoch)}</p>
      <p>
        {iconDisplay(props.data.forecast.forecastday[0].day.condition.text, 50)}
      </p>
      <p>{props.data.forecast.forecastday[0].day.maxtemp_c}</p>

      <p>{createDay(props.data.forecast.forecastday[1].date_epoch)}</p>
      <p>
        {iconDisplay(props.data.forecast.forecastday[1].day.condition.text, 50)}
      </p>
      <p>{props.data.forecast.forecastday[1].day.maxtemp_c}</p>

      <p>{createDay(props.data.forecast.forecastday[2].date_epoch)}</p>
      <p>
        {iconDisplay(props.data.forecast.forecastday[2].day.condition.text, 50)}
      </p>
      <p>{props.data.forecast.forecastday[2].day.maxtemp_c}</p>
    </div>
  );
}

export default WeatherCard;
