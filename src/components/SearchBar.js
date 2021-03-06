import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchedWeather from "./SearchedWeather";

function SearchBar() {
  const [queryText, setQueryText] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setQueryText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${queryText}`);
    return <SearchedWeather />;
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="search__input-box"
          placeholder="Search by city "
          type="text"
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default SearchBar;
