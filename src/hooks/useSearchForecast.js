import { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = "http://api.weatherapi.com/v1/forecast.json?";
const API_KEY = process.env.REACT_APP_WAPI_KEY;

function useSearchForecast(queryText) {
  const [weather, setWeather] = useState(null);
  const [isLoaded, setIsloaded] = useState(false);
  const [error, setError] = useState(null);

  console.log("Fired");

  // useEffect(() => {
  //   setIsloaded(false);
  //   const fetchWeather = async () => {
  //     await axios
  //       .get(`${BASE_URL}`, {
  //         params: {
  //           q: queryText,
  //           key: API_KEY,
  //           days: 5,
  //           lang: "en",
  //         },
  //       })
  //       .then((res) => {
  //         setWeather(res.data);
  //         setIsloaded(true);
  //         console.log(res.data);
  //       });
  //   };
  //   fetchWeather();
  // }, [queryText]);

  useEffect(() => {
    console.log("useEffect started");
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
        console.log("Is loaded = true");
        console.log(res.data);
      });
  }, [queryText]);

  return { weather, isLoaded, error };
}

export default useSearchForecast;
