import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from 'axios';

import Navigation from './components/navigation/Navigation';
import Home from './pages/Home';
import About from './pages/About';

import '@csstools/normalize.css';
import './App.css';
import styled from 'styled-components';


const GlobalContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  color: #333;
  padding: 0 1rem;
`;
const MaxWidthWrapper = styled.main`
  max-width: 1000px;
  margin: 2rem auto;
`;

function App() {

  const [weather, setWeather] = useState([]);
  const [location, setLocation] = useState([]);
  const [loadingState, setLoadingState] = useState(true);

  // https://ipapi.co
  // https://api.weatherapi.com/v1/forecast.json?key=9605465c425b41c0828193555232603&q=${location.latitude},${location.longitude}&days=7&aqi=yes&alerts=no

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(response => response.json())
      .then(data => {
        setLocation({
          latitude: data.latitude,
          longitude: data.longitude
        });
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {

      axios.get(`https://api.weatherapi.com/v1/forecast.json?key=9605465c425b41c0828193555232603&q=${location.latitude},${location.longitude}&days=7&aqi=yes&alerts=no`)
        .then(response => {
          setWeather(response.data);
          setLoadingState(false);
        })
        .catch(error => {
          console.log(error);
        });

  }, [location.latitude, location.longitude]);

  return (
    <div className="App">
      <GlobalContainer>  
        <BrowserRouter>

          <Navigation />

          <MaxWidthWrapper>
            <Routes>
              <Route path="/" element={
                <Home loadingState={loadingState} weatherData={weather} />} />
              <Route path="about" element={
                <About />} />
            </Routes>
          </MaxWidthWrapper>

        </BrowserRouter>
      </GlobalContainer>  

    </div>
  );
}

export default App;
