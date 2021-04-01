import React, {useState} from "react";
import axios from "axios";
import Search from "./Search";
import Forecast from "./Forecast";
import Footer from "./Footer";
import "./Weather.css";

export default function Weather() {
  const apiKey= "75d7bfe843745f5a8219306b602ef7d5";
  let city = "Phoenix";
  let apiURL= `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  return 
    <div className="container">
      <Search />
      <h1> {weatherData.city} </h1>
      <p className="currentTemperature">
        <span id="current-temperature">{weatherData.temperature}</span>
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
        {weatherData.icon}
      </p>

      <div className="currentForecast">
        <div className="row row-cols-auto">
          <div className="col-6">
            <span id="current-date"> {weatherData.date} </span>
            <br />
            <span id="description"> {weatherData.description} </span>
          </div>
          <div className="col-6">
            <div className="humidity">
              Humidity:
              <span id="humidity"> {weatherData.humidity} </span>%{" "}
              <i class="fas fa-tint"></i>
              <br />
              Wind:
              <span id="wind-speed"> {weatherData.wind} </span>
              mph <i class="fas fa-wind"></i>
            </div>
          </div>
        </div>
      </div>
      <Forecast />
    <Footer />
    </div>
  );}
