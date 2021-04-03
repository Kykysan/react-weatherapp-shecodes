import React, {useState} from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay"
import "./Forecast.css";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const[forecast, setForecast] = useState(null);

  function handleResponse(response){
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded){
    return(
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function(dailyForecast,index){return(
            <div className="col"><WeatherForecastDay data={dailyForecast} /></div>
          )})}
        </div>
      </div>
    );
  }else{
    let apiKey="75d7bfe843745f5a8219306b602ef7d5";
  let longitude= props.coordinates.lon;
  let latitude= props.coordinates.lat;
  let apiURL= `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  
  axios.get(apiURL).then(handleResponse);

  return null;
  }

}