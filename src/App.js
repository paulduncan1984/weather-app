// Styles
import "./App.css";
// Router
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// Components
import WeatherCard from "./components/WeatherCard";
import LocalWeather from "./components/LocalWeather";
import SearchedWeather from "./components/SearchedWeather";
import SearchBar from "./components/SearchBar";
// Hooks
import useSearchForecast from "./hooks/useSearchForecast";
import useLocalForecast from "./hooks/useLocalForecast";

function App() {
  const { weather, isLoaded, error, city } = useSearchForecast();
  const { localWeather } = useLocalForecast();

  if (error) {
    <div>
      <p>Error: {error}</p>
    </div>;
  }

  const bgToggle = () => {
    const isDay = weather.current.is_day;
    console.log(isDay);
    if (isDay === 1) {
      return "__day";
    } else {
      return "__night";
    }
  };

  return (
    // <div className={`container${bgToggle()}`}>
    <div className={`container}`}>
      <SearchBar />
      <SearchedWeather />
      {/* {city === true ? <SearchedWeather /> : <LocalWeather />} */}
      {/* <Routes>
        <Route path="/" element={<LocalWeather />} />
        <Route path="/search/:queryText" element={<SearchedWeather />} />
      </Routes> */}
    </div>
  );
}

export default App;

/*

Thursday 10th Feb:

- Why is the API call taking so long? 
- Fix search function (if struggling, concentrate on local weather)



1. Set up GIT - DONE
2. Make first commit - DONE
3. Pull in data from API - DONE
4. Hide API key using .env - DONE
5. Commit - DONE
6. Plan out app - DONE (below)

 - what data will I display
   - City name and country
   - Icon based on weather condition
   - Temperature in celcius
   - Wind speed (kmph) & Percipitation (mm)
   - hourly forecast - time, icon and temp
   - Next 3 days of weather (tabbed)

 - How many screens
   - 1 screen for default view and searched data

 - How many components
   - App to hold elements
   - Weather card
   - Search bar
   - Search results
   - default view
   - 2x custom hooks
   - Loading 

 - What are the features
   - light and dark mode (including icons)
   - Are we dealing with time - at this point, yes. looks like the API data holds converted local time
   - Search by city
   - Default local weather - To be investigated

*/
