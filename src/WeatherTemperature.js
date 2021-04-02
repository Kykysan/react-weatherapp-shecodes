import React from "react";

export default function WeatherTemperature (props){
    return (
        <div className= "WeatherTemp">
            <p className="currentTemperature">
        <span id="current-temperature">{Math.round(props.celsius)}</span>
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
        </div>
    );
}