import { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = "https://api.weatherapi.com/v1/forecast.json?";
const API_KEY = process.env.REACT_APP_WAPI_KEY;

function useLocalForecast() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [localWeather, setLocalWeather] = useState(null);
  const [isLoaded, setIsloaded] = useState(false);
  const [error, setError] = useState([]);

  useEffect(() => {
    setIsloaded(false);
    const fetchLocalWeather = async () => {
      window.navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await axios
        .get(`${BASE_URL}`, {
          params: {
            key: API_KEY,
            q: `${lat},${long}`,
            days: 6,
            lang: "en",
          },
        })
        .then((res) => {
          setLocalWeather(res.data);
          setIsloaded(true);
        })
        .catch((err) => {
          setError(err.response.data.error.message);
          console.log(error);
        });
    };
    fetchLocalWeather();
  }, [lat, long]);

  return { localWeather, isLoaded, error };
}

export default useLocalForecast;
