import React from "react"; 
import styled from 'styled-components';
import gitHubLogo from '../github-mark.svg';

const AboutContainer = styled.div`
  max-width: 800px;
  margin: auto;

  h1 {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }
  h2 {
    font-size: 2rem;
    margin-top: 3rem;
    margin-bottom: 3rem;
    font-weight: 300;
  }
  ul {
    margin-bottom: 2rem;
  }
  li {
    margin-bottom: 0.5rem;
  }
  a {
    position: relative;
    font-weight: bold;
    color: #000;
    &:after {
      @media (min-width: 500px) {
        content: "";
      }
      position: absolute;
      width: 2rem; 
      height: 2rem;
      display: block;
      background: url(${gitHubLogo}) no-repeat center center;
      background-size: contain;
      right: -2.5rem;
      top: -6.8px;
    }
  }
`;

function About() {
    return (
        <AboutContainer>
            <h1>About</h1>
            <h2>This React app functions using the following:</h2>
            <ul>
                <li>React.JS</li>
                <li>React Router</li>
                <li>Styled Components</li>
                <li>Ipapi.co API</li>
                <li>Weatherapi API</li>
            </ul>
            <p>See the repository on: <a target="_blank" rel="noreferrer" href="https://github.com/StefanoBisio/weather-app">Github</a></p>
        </AboutContainer>
    );
    }

export default About;