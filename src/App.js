import "./App.css";
import { Route, Routes } from "react-router-dom";
import LocalWeather from "./components/LocalWeather";
import SearchedWeather from "./components/SearchedWeather";

function App() {
  return (
    <div>
      <Routes basename={"/weather-app/"}>
        <Route path="/" element={<LocalWeather />} />
        <Route path="/search/:queryText" element={<SearchedWeather />} />
      </Routes>
    </div>
  );
}

export default App;

/*

Thursday
 - Remove console logs
 - Remove unused imports 

To do: 
 - Handle errors when typing a mistake

Maybe: 
 - Save cities 

*/
