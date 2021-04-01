import React, {useState} from "react";
import axios from "axios";
import Search from "./Search";
import Forecast from "./Forecast";
import Footer from "./Footer";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState ({ ready : false});

  function handleResponse (response){
    setWeatherData({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humditiy: response.data.main.humditiy,
      description: response.data.weather[0].main,
      ready: true,
    })
  
  }
  
  if (weatherData.ready){
    return (
    <div className="container">
      <Search />
      <h1>{weatherData.city}</h1>
      <p className="currentTemperature">
        <span id="current-temperature">{Math.round(weatherData.temperature)}</span>
        <span className="celsius">
          <a href="some/valid/uri" id="celsius-link" className="active">
            °C |
          </a>
        </span>
        <span className="fahrenheit">
          <a href="some/valid.uri" id="fahrenheit-link">
            {" "}
            °F{" "}
          </a>
        </span>
      </p>
      <p className="currentWeather" id="current-icon">
      </p>

      <div className="currentForecast">
        <div className="row row-cols-auto">
          <div className="col-6">
            <span id="current-date"> Sat Mar 27 </span>
            <br />
            <span id="description">{weatherData.description}</span>
          </div>
          <div className="col-6">
            <div className="humidity">
              Humidity:
              <span id="humidity"> {weatherData.humditiy}</span>%{" "}
              <i class="fas fa-tint"></i>
              <br />
              Wind:
              <span id="wind-speed"> {Math.round(weatherData.wind)}</span>
              mph <i class="fas fa-wind"></i>
            </div>
          </div>
        </div>
      </div>
      <Forecast />
    <Footer />
    </div>
    );
  } else {

  const apiKey= "75d7bfe843745f5a8219306b602ef7d5";
  let apiURL= `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
  axios.get(apiURL).then(handleResponse);
  
  return "Loading...";
}
}