import React, {useState} from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";
import Footer from "./Footer";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState ({ ready : false});
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse (response){
    setWeatherData({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt*1000),
      icon: response.data.weather[0].icon,
      coordinates: response.data.coord,
      ready: true,
    });  
  }

  function handleSubmit(event){
    event.preventDefault();
    search();
  }

  function handleCityChange(event){ 
    setCity(event.target.value);
  }

  function search(){
  const apiKey= "75d7bfe843745f5a8219306b602ef7d5";
  let apiURL= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiURL).then(handleResponse);
  }
  
  if (weatherData.ready){
    return (
    <div className="container">
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
      <WeatherInfo data={weatherData}/>
      <Forecast coordinates ={weatherData.coordinates} />
     <Footer />
    </div>
    );
  } else {
    search();  
  return "Loading...";}
}