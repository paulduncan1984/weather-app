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

Friday 
- Display current day's hourly forecast using a horizontal slider
 - Write a function that takes the time and produces JSX containing a div that displays both time (converted to "Xam/pm") and temp_c
 - This functions only executes if the time passed into the function is equal to or greater than current time 

 const hours = (timeStr) => {
  const currentTime = get time JS method;
  if (currentTime >= timeStr) {
    retrun  - logic here
  }
 }

 Refactor createHour into a Loop

To do: 
 - Add hover effect to Map button
 - Build loading component
 - Handle errors when typing a mistake

Done:
- Styled backgrounds - DONE




Maybe: Save cities 

Backlog
 - Add 3 day forecast
 - Add loading component

- Styling: 
  - Layout using flexbox 
  - Build WeatherCard out

Pending decisions 
  - Use API icons or use React icons


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
   - screen for default view 
   - screen for searched data

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
