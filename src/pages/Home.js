import React from "react";
// import styled from 'styled-components';

function Home({location}) {
  return (
    <div>
      <h1>Home</h1>
      <p>Latitude: {location.latitude}</p>
      <p>Longitude: {location.longitude}</p>
    </div>
  );
}

export default Home;