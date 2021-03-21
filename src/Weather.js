import Search from "./Search";
import Forecast from "./Forecast";
import Footer from "./Footer";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Phoenix",
    temperature: 20,
    date: "Monday 10:00",
    description: "Sunny",
    humidity: 17,
    wind: 5,
    icon: <i class="fas fa-sun"></i>
  };

  return (
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
  );
}
