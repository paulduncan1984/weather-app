import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import LocalWeather from "./components/LocalWeather";
import SearchedWeather from "./components/SearchedWeather";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LocalWeather />} />
        <Route path="/search/:queryText" element={<SearchedWeather />} />
      </Routes>
    </div>
  );
}

export default App;

/*

Thursday
 - Create a function to produce 3 day forecast - IS THIS REALLY NEEDED? 
 - Remove console logs
 - Remove unused imports 
 - Fix CSS
  - naming convention - IN PROGRESS
  - convert ox to rem
  - Fix sizing 

To do: 
 - Handle errors when typing a mistake

Maybe: 
 - Save cities 

*/
