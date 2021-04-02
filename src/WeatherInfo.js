import React from "react";
import FormattedDate from "./FormattedDate";
import "./WeatherInfo.css";


export default function WeatherInfo(props){
    return(
        <div className="WeatherInfo">
            <h1>{props.data.city}</h1>
      <p className="currentTemperature">
        <span id="current-temperature">{Math.round(props.data.temperature)}</span>
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
            <span id="current-date"> <FormattedDate date={props.data.date}/> </span>
            <span className="text-captalize" id="description">{props.data.description}</span>
          </div>
          <div className="col-6">
            <div className="humidity">
              Humidity:
              <span id="humidity"> {props.data.humidity}</span>% {" "}
              <i class="fas fa-tint"></i>
              <br />
              Wind:
              <span id="wind-speed"> {Math.round(props.data.wind)}</span>
              kph <i class="fas fa-wind"></i>
            </div>
          </div>
        </div>
      </div>
        </div>
    )
}