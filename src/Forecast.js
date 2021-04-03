import React from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";

export default function Forecast(props) {
  function handleResponse(response){
    console.log(response.data);
  }

  let apiKey="75d7bfe843745f5a8219306b602ef7d5";
  let longitude= props.coordinates.lon;
  let latitude= props.coordinates.lat;
  let apiURL= `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiURL).then(handleResponse);

  return(
    <div className="Forecast">
      <div className="row">
        <div className="col">
          <div className="Forecast-day">Sun</div>
          <WeatherIcon code="01d" size={45} />
          <div className="Forecast-temperatures">
            <span className="Forecast-temperature-max">25°</span>
            <span className="Forecast-temperature-min">19°</span>
          </div>
        </div>
      </div>
    </div>
  )

}