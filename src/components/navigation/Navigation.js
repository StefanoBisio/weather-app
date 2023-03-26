import React from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import logo from '../../logo.svg';


const NavContainer = styled.nav`
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
  
  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
      li {
        margin: 0 1rem;
        a {
          text-decoration: none;
          color: #000;
            &.active {
              font-weight: bold;
            }
        }
      }
`;
const Logo = styled.img`
  width: 4rem;
  animation: App-logo-spin infinite 20s linear;
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

// Simple navigation component switching between Home and About
function Navigation() {
  return (
    <header>
      <NavContainer>
        <Logo src={logo} />
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="about">About</NavLink>
          </li>
        </ul>
      </NavContainer>
    </header>
  );
}

export default Navigation;
