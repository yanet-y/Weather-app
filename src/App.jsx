import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./components/Card";

function App() {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    if (!location) {
      setError("Please enter a location.");
      return;
    }

    setError("");
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=76f24b825fe67bcba5be07feada69061`
      );
      if (!response.ok) {
        throw new Error("Location not found.");
      }
      const data = await response.json();
      console.log(data)
      setWeatherData(data);
    } catch (err) {
      setWeatherData(null);
      setError(err.message);
    }
  };

  return (
    <div className="body">
      <div className=" background container mt-0 pt-5">
        <h1 className="text-center text-light fw-bold mb-5">Weather App</h1>
        <div className="m-3 d-flex gap-3 justify-content-center">
          <input
            type="text"
            placeholder="Enter location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />

          <button className="button w-25" onClick={fetchWeather}>
            Get Weather
          </button>
        </div>


        {error && <div className="alert alert-danger mt-3">{error}</div>}



        {weatherData && 
          <div className="mt-5">
            <div className="d-flex justify-content-between">
              <div>
                <p className="text-light fw-bold fs-2">{weatherData.name}</p>
                <p className="text-light fw-bold fs-1">{weatherData.main.feels_like}</p>
              </div>
              <p className=" p1 fw-bold fs-3">{weatherData.weather[0].description}</p>
            </div>
          </div>}

          <Card props={weatherData}/>
      </div>
    </div>
  );
}

export default App;
