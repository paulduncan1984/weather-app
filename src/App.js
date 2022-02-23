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

Thursday
 - Remove console logs
 - Remove unused imports 
 - Fix CSS
  - naming convention
  - Sizes etc

To do: 
 - Handle errors when typing a mistake

Maybe: 
 - Save cities 

*/
