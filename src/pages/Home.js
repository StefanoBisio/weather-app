import React from "react";
import styled from 'styled-components';

const HomeContainer = styled.div`
  h1 {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }
  h2 {
    font-size: 2rem;
    margin-top: 3rem;
    margin-bottom: 3rem;
    
      span {
        font-weight: 300;
      }
  }
`;

const ForecastPanel = styled.div`
li {
  margin-bottom: 0.5rem;
}
`;

//function that takes a date and returns the day of the week
const getDayOfWeek = (date) => {
  const dayOfWeek = new Date(date).getDay();
  return isNaN(dayOfWeek) ? null :
    ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
}

function Home({ loadingState, weatherData }) {

  //destructure the weather object in array of objects
  const { location, current, forecast } = weatherData;

  //check if loadingState is true, if so, return statement with loading message
  if (loadingState) {
    return (
      <HomeContainer>
        <h1>Weather App</h1>
        <h2>Loading...</h2>
      </HomeContainer>
    )
  }
  //if loadingState is false, return JSX with weather data
  else {
    return (
      <HomeContainer>
        <h1>Weather App</h1>
        <h2><span>The weather in: </span>{location.name}</h2>
        <ForecastPanel>
          <p><span>The weather right now is: </span>{current.condition.text} with a temperature of {current.temp_c}°C.</p>
          <p><span>The forecast for the next 7 days is:</span></p>
          <ul>
            {forecast.forecastday.map((day, index) => {
              return (
                <li key={index}>
                  <span>{getDayOfWeek(day.date)}</span> - {day.day.condition.text}
                </li>
              )
            })}
          </ul>
        </ForecastPanel>
      </HomeContainer>
    )
  }

}

export default Home;