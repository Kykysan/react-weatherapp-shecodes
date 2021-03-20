import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <h2>Forecast</h2> >
    <div className="row row-cols-6 forecastWeek" id="forecast"></div>
  );
}