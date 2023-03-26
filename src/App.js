import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from 'axios';

import Navigation from './components/navigation/Navigation';
import Home from './pages/Home';
import About from './pages/About';

import '@csstools/normalize.css';
import './App.css';
import styled from 'styled-components';


const GlobalAppStyling = styled.div`
  font-family: 'Roboto', sans-serif;
  color: #333;
`;
const MaxWidthWrapper = styled.main`
  max-width: 1000px;
  margin: 2rem auto;
`;

function App() {

  const [weather, setWeather] = useState([]);
  const [location, setLocation] = useState({loadingState:true});

  useEffect(() => {

    //new promise. If the user's location is fetched, the promise is resolved and the weather data is fetched. If the user's location is not fetched, the promise is rejected and an error message is logged to the console.
    new Promise((resolve, reject) => {
      fetchUserLocation();
      resolve();
    }).then(() => {
      fetchWeather();
    }).catch(() => {
      console.log('could not fetch weather data');
    });

    
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  
  //Uses the browser's geolocation API to get the user's location. If the browser doesn't support geolocation, it uses the ipapi.co API to get the user's location.
  function fetchUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
      async function showPosition(position) {
        //Assigns the user's latitude and longitude to the state variables using setLocation
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          loadingState: false
        });
      }
    } else {
      console.log("Geolocation is not supported by this browser. Tying to get your location using your IP address...");
      axios.get('https://ipapi.co/json/')
        .then(res => {
          setLocation({
            latitude: res.data.latitude,
            longitude: res.data.longitude
          });
        })
        .catch(error => {
          console.log('could not get location from ip address');
        });
    }
  }

  //Uses the weatherapi to get the weather data for the user's location
  function fetchWeather() {
    axios.get(`https://api.weatherapi.com/v1/forecast.json?key=9605465c425b41c0828193555232603&q=${location.latitude},${location.longitude}&days=7&aqi=yes&alerts=no`)
      .then(res => {
        setWeather(res.data);
        console.log({weather})
      })
      .catch(error => {
        console.log('could not get weather data. Error was: ', error);
      });
  }

  return (
    <div className="App">
      <GlobalAppStyling>  
        <BrowserRouter>

          <Navigation />

          <MaxWidthWrapper>
            <Routes>
              <Route path="/" element={
                <Home loadingState={location.loadingState} location={location} />} />
              <Route path="about" element={
                <About />} />
            </Routes>
          </MaxWidthWrapper>

        </BrowserRouter>
      </GlobalAppStyling>  

    </div>
  );
}

export default App;
