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
`;
const MaxWidthWrapper = styled.main`
  max-width: 1000px;
  margin: 2rem auto;
`;

function App() {

  const [weather, setWeather] = useState([]);
  const [location, setLocation] = useState([]);

  useEffect(() => {
     //Uses the browser's geolocation API to get the user's location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
      //Assigns the user's latitude and longitude to the state variables using setLocation
      async function showPosition(position) {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
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
  }, []);

  return (
    <div className="App">
      <GlobalAppStyling>  
        <BrowserRouter>

          <Navigation />

          <MaxWidthWrapper>
            <Routes>
              <Route path="/" element={
                <Home location={location} />} />
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
