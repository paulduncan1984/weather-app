import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import LocalWeather from "./components/LocalWeather";
import SearchedWeather from "./components/SearchedWeather";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<LocalWeather />} />
        <Route path="/search/:queryText" element={<SearchedWeather />} />
      </Routes>
    </div>
  );
}

export default App;

/*

Friday 11th Feb:

- Show local weather by default and search on submit - DONE
- Get background toggle working - DONE

Backlog
 - Add button (map icon) to return to home (default view)
 - Add 3 day forecast
 - Add loading component

- Styling: 
  - Layout using flexbox 
  - Build WeatherCard out




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
