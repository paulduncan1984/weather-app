import React from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
// Weather icons
import { FaMapMarkerAlt, FaWind, FaSmog } from "react-icons/fa";
import { GiWaterDrop } from "react-icons/gi";
import { BiMoon } from "react-icons/bi";
import {
  WiDaySunny,
  WiDayRain,
  WiNightAltRain,
  WiDayCloudy,
  WiNightAltCloudy,
  WiDaySnow,
  WiNightSnow,
} from "react-icons/wi";

function WeatherCard(props) {
  const navigate = useNavigate();

  // Background colour change
  const bgToggle = () => {
    const isDay = props.data.current.is_day;
    if (isDay === 1) {
      return "weather-card--day";
    } else {
      return "weather-card--night";
    }
  }; // EO bgToggle

  // Icon change based on weather condition
  const iconDisplay = (weather, size) => {
    const isDay = props.data.current.is_day;

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
  }; // EO iconDispaly

  // Render day name based on epoch time from API
  const createDay = (timeStr) => {
    const day = new Date(0);
    day.setUTCSeconds(timeStr);
    return day.toLocaleDateString("en-US", { weekday: "long" });
  }; // EO createDay

  // Render hour based on time
  const createHour = (timeStr) => {
    const time = new Date(timeStr.replace(/-/g, "/"));
    return time.toLocaleTimeString("en-US", {
      hour: "numeric",
      hour12: "false",
    });
  }; // EO createHour

  // Render JSX for hourly forecast
  const createHourly = (apiTime) => {
    const localTime = props.data.location.localtime_epoch;
    const hourly = apiTime.map((data) => {
      if (data.time_epoch > localTime) {
        return (
          <div className="weather-card__hour">
            <p className="weather-card__format-hour">{createHour(data.time)}</p>
            <p className="weather-card__max-temp">{Math.round(data.temp_c)}</p>
          </div>
        );
      }
    });
    return hourly;
  }; // EO createHourly

  return (
    <div className={`weather-card ${bgToggle()}`}>
      <div className="container">
        <div className="search">
          <SearchBar />
          <FaMapMarkerAlt
            style={{
              color: "white",
              marginTop: "1.1rem",
              marginLeft: "0.7rem",
              fontSize: "2rem",
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
            onMouseOver={({ target }) => (target.style.color = "lightgrey")}
            onMouseOut={({ target }) => (target.style.color = "white")}
          />
        </div>

        <div className="weather-card__main">
          <h1>
            {props.data.location.name}, {props.data.location.country}
          </h1>
          <div className="weather-card__temp">
            <h2>{Math.round(props.data.current.temp_c)}°</h2>
            <span className="weather-card__icon">
              {iconDisplay(props.data.current.condition.text, 120)}
            </span>
            <h3 className="weather-card__description">
              {props.data.current.condition.text}
            </h3>
            <div className="weather-card__subinfo">
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

        <div className="weather-card__weather-hourly">
          {createHourly(props.data.forecast.forecastday[0].hour)}
        </div>

        <div className="weather-card__daily-forecast">
          <div className="weather-card__tile">
            <p className="weather-card__day">
              {createDay(props.data.forecast.forecastday[0].date_epoch)}
            </p>
            <p className="weather-card__day-icon">
              {iconDisplay(
                props.data.forecast.forecastday[0].day.condition.text,
                30
              )}
            </p>
            <p className="weather-card__day-max">
              {Math.round(props.data.forecast.forecastday[0].day.maxtemp_c)}
            </p>
            <p>
              {Math.round(props.data.forecast.forecastday[0].day.mintemp_c)}
            </p>
          </div>

          <div className="weather-card__tile">
            <p className="weather-card__day">
              {createDay(props.data.forecast.forecastday[1].date_epoch)}
            </p>
            <p className="weather-card__day-icon">
              {iconDisplay(
                props.data.forecast.forecastday[1].day.condition.text,
                30
              )}
            </p>
            <p className="weather-card__day-max">
              {Math.round(props.data.forecast.forecastday[1].day.maxtemp_c)}
            </p>
            <p>
              {Math.round(props.data.forecast.forecastday[1].day.mintemp_c)}
            </p>
          </div>
          <div className="weather-card__tile">
            <p className="weather-card__day">
              {createDay(props.data.forecast.forecastday[2].date_epoch)}
            </p>
            <p className="weather-card__day-icon">
              {iconDisplay(
                props.data.forecast.forecastday[2].day.condition.text,
                30
              )}
            </p>
            <p className="weather-card__day-max">
              {Math.round(props.data.forecast.forecastday[2].day.maxtemp_c)}
            </p>
            <p>
              {Math.round(props.data.forecast.forecastday[0].day.mintemp_c)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
