import React, {useState} from "react";

export default function WeatherTemperature (props){
    const [unit, setUnit] = useState ("celsius");

    function convertToFahrenheit (event){
       event.preventDefault();
       setUnit("fahrenheit"); 
    }

    function convertToCelsius (event){
        event.preventDefault();
        setUnit("celsius");

    }

    if (unit === 'celsius'){
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
          <a href="some/valid.uri" id="fahrenheit-link" onClick={convertToFahrenheit}>
            {" "}
            °F{" "}
          </a>
        </span>
      </p>
        </div>
        );
    }else{
        let fahrenheit = (props.celsius *9)/5+32;
        return(
            <div className= "WeatherTemp">
            <p className="currentTemperature">
        <span id="current-temperature">{Math.round(fahrenheit)}</span>
        <span className="celsius">
          <a href="some/valid/uri" id="celsius-link" className="active" onClick={convertToCelsius}>
            °C 
          </a>
          |
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
}
