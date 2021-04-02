import React, {useState} from "react";
import axios from "axios";
import Search from "./Search";
import WeatherInfo from "./WeatherInfo";
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
      date: new Date(response.data.dt*1000),
      ready: true,
    })
  
  }
  
  if (weatherData.ready){
    return (
    <div className="container">
      <Search />
      <WeatherInfo data={weatherData}/>
      <Forecast />
     <Footer />
    </div>
    );
  } else {

  const apiKey= "75d7bfe843745f5a8219306b602ef7d5";
  let apiURL= `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiURL).then(handleResponse);
  
  return "Loading...";
}
}