import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import './App.css';
import './scripts.js';
import React,{ Component } from "react";


 function App(){

  const apiKey = "f56f24967aaf51182d1d4df628297c6d"
  const [inputCity, setInputCity] = useState("")
  const [data, setData] = useState({})
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const getWetherDetails = (cityName) => {
    if (!cityName) return

    const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey
    axios.get(apiURL).then((res) => {
      console.log("response", res.data)
      setData(res.data)
    }).catch((err) => {
      console.log("err", err)
    })
  }
  
  const handleChangeInput = (e) => {
    console.log("value", e.target.value)
    setInputCity(e.target.value)
 
  }
  const handleSearch = () => {
    getWetherDetails(inputCity)
  }
  return (
    <div className="col-md-12">
       <div className="wetherBg">
           <div class="container">
              <div class="current-info">
              <h1 className="heading" >LIVE WEATHER APP </h1>
              <div>
                 <div class="date-container">
                      <div class="time" id="time">
                           7:40 <span id="am-pm">PM</span>
                      </div>
                      <div class="date" id="date">
                          Monday, 25 April
                      </div>
                 </div>
                 </div>
             </div>
             <div className="d-grid gap-3 col-4 mt-4">
             <h5>Enter here the Name of city/country </h5>
             <div>
          <input type="text" className="form-control"
            value={inputCity}
            onChange={handleChangeInput} />

            <button className="btn btn-primary" type="button5"  onClick={handleSearch} > Search </button>
            </div>
          </div>
            </div>
            </div>
        
         
      
        {Object.keys(data).length > 0 &&
              <div className="col-md-12 text-center mt-5">
      
                <div className="shadow rounded wetherResultBox">
                  <img className="weathorIcon"
                    src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png" />
      
                  <h7 className="weathorCity">
                    {data?.name}
                  </h7>
                  <div className="temp">
                 
                  {data.main ? <h2>{((data?.main?.temp) - 273.15).toFixed(2)}°C</h2> : null} 
               
                  <div className="feels">
                  <h7>Feels Like</h7>
                    {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°F</p> : null}
                   
                  </div>
                  <div className="humidity">
                  <h7>Humidity</h7>
                    {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
                
                  </div>
                  <div className="wind">
                  <h7>Wind Speed</h7>
                    {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
                   
                  </div>
                </div>
                </div>
              </div>
            }
            <div>
              <div>
       <div class="future-forecast">
            <div class="today" id="current-temp">
                <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="weather icon" class="w-icon" />
                <div class="other">
                    <div class="day">Monday</div>
                    <div class="temp">Night - 25.6&#176; C</div>
                    <div class="temp">Day - 35.6&#176; C</div>
                </div>
                </div> 
    
            <div class="weather-forecast" id="weather-forecast">
                <div class="weather-forecast-item">
                    <div class="day">Tue</div>
                    <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="weather icon" class="w-icon" />
                    <div class="temp">Night - 25.6&#176; C</div>
                    <div class="temp">Day - 35.6&#176; C</div>
                </div>
                <div class="weather-forecast-item">
                    <div class="day">Wed</div>
                    <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="weather icon" class="w-icon" />
                    <div class="temp">Night - 25.6&#176; C</div>
                    <div class="temp">Day - 35.6&#176; C</div>
                </div>
                <div class="weather-forecast-item">
                    <div class="day">Thur</div>
                    <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="weather icon" class="w-icon" />
                    <div class="temp">Night - 25.6&#176; C</div>
                    <div class="temp">Day - 35.6&#176; C</div>
                </div>
                <div class="weather-forecast-item">
                    <div class="day">Fri</div>
                    <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="weather icon" class="w-icon" />
                    <div class="temp">Night - 25.6&#176; C</div>
                    <div class="temp">Day - 35.6&#176; C</div>
                </div>
                <div class="weather-forecast-item">
                    <div class="day">Sat</div>
                    <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="weather icon" class="w-icon" />
                    <div class="temp">Night - 25.6&#176; C</div>
                    <div class="temp">Day - 35.6&#176; C</div>
                </div>
    
            </div> 
            </div>
            </div>
            </div>
            </div>



);

}
export default App

