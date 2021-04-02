import React from "react";

export default function FormattedDate (props){
    let days =["Sun", "Mon","Tue","Wed","Thu","Fri","Sat"];
    let months = ["Jan", "Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"]
    let day = days[props.date.getDay()];
    let month = months[props.date.getMonth()];
    let hours = props.date.getHours();
    if (hours <10){
        hours = `0${hours}`;
    }
    let minutes =props.date.getMinutes();
    if (minutes <10){
        minutes = `0${minutes}`;
    }
    return <div>{day}, {month} {hours}:{minutes}</div>;
}