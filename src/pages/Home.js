import React from "react";
// import styled from 'styled-components';

function Home({loadingState, location}) {
  return (
    <div>
      <h1>{loadingState ? "Loading..." : "The weather where you are"}</h1>
      <p>Latitude: {location.latitude}</p>
      <p>Longitude: {location.longitude}</p>
    </div>
  );
}

export default Home;