import { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = "http://api.weatherapi.com/v1/forecast.json?";
const API_KEY = process.env.REACT_APP_WAPI_KEY;

function useLocalForecast() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [localWeather, setLocalWeather] = useState(null);
  const [isLoaded, setIsloaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsloaded(false);
    const fetchLocalWeather = async () => {
      window.navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
        // console.log(lat, long);
      });

      await axios
        .get(`${BASE_URL}`, {
          params: {
            key: API_KEY,
            q: `${lat},${long}`,
            days: 5,
            lang: "en",
          },
        })
        .then((res) => {
          setLocalWeather(res.data);
          setIsloaded(true);
          //   console.log(res.data);
        });
    };
    fetchLocalWeather();
  }, [lat, long]);

  return { localWeather, isLoaded, error };
}

export default useLocalForecast;
