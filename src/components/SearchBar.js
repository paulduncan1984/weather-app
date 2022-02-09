import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import SearchedWeather from "./SearchedWeather";

function SearchBar() {
  const [queryText, setQueryText] = useState(null);
  //   const navigate = useNavigate();

  const handleChange = (e) => {
    setQueryText(e.target.value);
    console.log(queryText);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(queryText);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Search by city name"
          type="text"
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default SearchBar;
