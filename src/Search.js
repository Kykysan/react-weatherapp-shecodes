import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <form className="searchEngine" id="search-engine">
      <input
        type="search"
        id="search-input"
        placeholder="Enter City"
        autofocus
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
