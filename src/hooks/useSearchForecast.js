import { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = "http://api.weatherapi.com/v1/forecast.json?";
const API_KEY = process.env.REACT_APP_WAPI_KEY;

function useSearchForecast() {
  const [weather, setWeather] = useState(null);
  const [isLoaded, setIsloaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await axios
        .get(`${BASE_URL}`, {
          params: {
            key: API_KEY,
            q: "London",
            days: 5,
            lang: "en",
          },
        })
        .then((res) => {
          setIsloaded(true);
          setWeather(res.data);
          console.log(res.data);
        });
    };
    fetchWeather();
  }, []);

  return { weather, isLoaded, error };
}

export default useSearchForecast;
