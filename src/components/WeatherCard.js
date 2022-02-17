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

  // Background colour change
  const bgToggle = () => {
    const isDay = props.data.current.is_day;
    if (isDay === 1) {
      return "__day";
    } else {
      return "__night";
    }
  };

  // Icon change based on weather condition
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

  // Render day name based on epoch time from API
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
      <div className="weatherCard__search">
        <SearchBar />
        <FaMapMarkerAlt
          style={{
            color: "white",
            marginTop: "17.5px",
            marginLeft: "12.5px",
            fontSize: "35px",
          }}
          onClick={() => navigate("/")}
        />
      </div>

      <div className="weatherCard__main">
        <h1>
          {props.data.location.name}, {props.data.location.country}
        </h1>
        <div className="weatherCard__main-icon-temp">
          <h2>{Math.round(props.data.current.temp_c)}°</h2>
          <icon className="icon-temp">
            {iconDisplay(props.data.current.condition.text, 120)}
          </icon>
          <h3 className="weatherCard__main-description">
            {props.data.current.condition.text}
          </h3>
          <div className="weatherCard__main-subinfo">
            <p>
              <FaWind style={{ marginRight: "10px" }} />
              {Math.round(props.data.current.wind_kph)} kmp/h
            </p>
            <p>
              <GiWaterDrop
                style={{ marginRight: "10px", marginLeft: "40px" }}
              />
              {Math.round(props.data.current.precip_mm)} mm
            </p>
          </div>
        </div>
      </div>

      <div className="daily-forecast">
        <div className="daily-forecast__tile">
          <p className="day">
            {createDay(props.data.forecast.forecastday[0].date_epoch)}
          </p>
          <p className="day-icon">
            {iconDisplay(
              props.data.forecast.forecastday[0].day.condition.text,
              30
            )}
          </p>
          <p className="day-max">
            {Math.round(props.data.forecast.forecastday[0].day.maxtemp_c)}
          </p>
          <p>{Math.round(props.data.forecast.forecastday[0].day.mintemp_c)}</p>
        </div>

        <div className="daily-forecast__tile">
          <p className="day">
            {createDay(props.data.forecast.forecastday[1].date_epoch)}
          </p>
          <p className="day-icon">
            {iconDisplay(
              props.data.forecast.forecastday[1].day.condition.text,
              30
            )}
          </p>
          <p className="day-max">
            {Math.round(props.data.forecast.forecastday[1].day.maxtemp_c)}
          </p>
          <p>{Math.round(props.data.forecast.forecastday[1].day.mintemp_c)}</p>
        </div>
        <div className="daily-forecast__tile">
          <p className="day">
            {createDay(props.data.forecast.forecastday[2].date_epoch)}
          </p>
          <p className="day-icon">
            {iconDisplay(
              props.data.forecast.forecastday[2].day.condition.text,
              30
            )}
          </p>
          <p className="day-max">
            {Math.round(props.data.forecast.forecastday[2].day.maxtemp_c)}
          </p>
          <p>{Math.round(props.data.forecast.forecastday[0].day.mintemp_c)}</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
