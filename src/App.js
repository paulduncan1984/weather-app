import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

// require("dotenv").config();

function App() {
  // URL Breakup
  const BASE_URL = "http://api.weatherapi.com/v1/forecast.json?";
  const API_KEY = process.env.REACT_APP_WAPI_KEY;

  console.log(process.env);

  const [weather, setWeather] = useState(null);
  useEffect(() => {
    axios
      .get(`${BASE_URL}`, {
        params: {
          key: API_KEY,
          q: "London",
          days: 5,
          lang: "en",
        },
      })
      .then((res) => {
        console.log(res.data);
        setWeather(res);
      });
  }, []);

  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;

/*

1. Set up GIT - DONE
2. Make first commit - DONE
3. Pull in data from API - DONE
4. Hide API key using .env - DONE
5. Commit
6. Plan out app

*/
