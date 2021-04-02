import React, {useState} from "react";
import "./Search.css";

export default function Search(props) {
  const[city, setCity] = useState(props.defaultCity);
  function handleSubmit(event){
    event.preventDefault();
  }

  function handleCityChange(event){ 
    setCity(event.target.value);
  }
  return (
    <form className="searchEngine" id="search-engine" onSubmit={handleSubmit}>
      <input
        type="search"
        id="search-input"
        placeholder="Enter City"
        autofocus="on"
        onChange={handleCityChange}
      />
      <button className="searchButton" type="submit">
        <i class="fas fa-search-location"></i>
      </button>
      <button
        className="currentLocationButton"
        id="location-button"
        type="submit"
      >
        <i class="fas fa-map-marked-alt"></i>
      </button>
    </form>
  );
}
