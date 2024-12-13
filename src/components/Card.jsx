import React from 'react'

const Card = ({props}) => {
  return (
    <div className="info container d-flex justify-content-around">
      <p>
        {props? props.main.feels_like:""}
        <br />
        <span>Feels Like</span>
      </p>
      <p>{props? props.main.humidity : ""} <br /> <span>Humidity</span></p>
      <p>
        {props? props.wind.speed : ""}  <br /> <span>Wind Speed</span>
      </p>
    </div>
  
  )
}

export default Card