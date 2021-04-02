import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";
import "./WeatherInfo.css";


export default function WeatherInfo(props){
    return(
        <div className="WeatherInfo">
            <h1>{props.data.city}</h1>
            <WeatherTemperature celsius ={props.data.temperature}/>
      <p className="currentWeather" id="current-icon">
        <WeatherIcon code= {props.data.icon}/>
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