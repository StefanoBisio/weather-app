import React from "react";
import styled from 'styled-components';

const HomeContainer = styled.div`
  h1 {
    margin-bottom: 2rem;
  }
  h2 span {
    font-weight: 300;
  }
`;

function Home({loadingState, weatherData}) {

  //destructure the weather object in array of objects
  const {location, current, forecast} = weatherData;
  
  //if loadingState is true, return loading message
  return (
    <HomeContainer>
      <h1>React weather app</h1>
      <h2>{loadingState ? 'Loading...' : <div><span>The weather in: </span>{location.name}</div>}
      </h2>
    </HomeContainer>
  )
   
}

export default Home;