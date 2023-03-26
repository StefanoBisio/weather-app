import React from "react"; 
import styled from 'styled-components';

const AboutContainer = styled.div`
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
  li {
    margin-bottom: 0.5rem;
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
        </AboutContainer>
    );
    }

export default About;