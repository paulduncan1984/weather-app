import { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = "http://api.weatherapi.com/v1/forecast.json?";
const API_KEY = process.env.REACT_APP_WAPI_KEY;

function useSearchForecast(queryText) {
  const [weather, setWeather] = useState(null);
  const [isLoaded, setIsloaded] = useState(false);
  const [error, setError] = useState(null);



  useEffect(() => {
    setIsloaded(false);
    axios
      .get(BASE_URL, {
        params: {
          q: queryText,
          key: API_KEY,
          days: 5,
          lang: "en",
        },
      })
      .then((res) => {
        setWeather(res.data);
        setIsloaded(true);
      });
  }, [queryText]);

  return { weather, isLoaded, error };
}

export default useSearchForecast;
