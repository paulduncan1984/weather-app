import "./App.css";
// Components
import WeatherCard from "./components/WeatherCard";
import LocalWeather from "./components/LocalWeather";
// Hooks
import useSearchForecast from "./hooks/useSearchForecast";
import useLocalForecast from "./hooks/useLocalForecast";

function App() {
  const { weather, isLoaded, error } = useSearchForecast();
  const { localWeather } = useLocalForecast();

  if (error) {
    <div>
      <p>Error: {error}</p>
    </div>;
  }
  return (
    <div className="App">
      {/* {isLoaded ? <WeatherCard weather={weather} /> : <p>Is loading...</p>} */}
      <LocalWeather weather={localWeather} />
    </div>
  );
}

export default App;

/*

Wednesday 9th Feb:

- Create local api request custom hook - IN PROGRESS
 - Latitude and longitude not coming through - fix this issue first. 
- Write a condition:
    if there is no search data ? show default local data : show search
     - how would I include the loading component as well? 

Backlog
- Create background colour change based on time of day 

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
