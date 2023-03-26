import React from "react"; 
import styled from 'styled-components';

const AboutContainer = styled.div`
  h1 {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }
`;

function About() {
    return (
        <AboutContainer>
            <h1>About</h1>
            <p>This React app functions using the following:</p>
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