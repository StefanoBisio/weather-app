import React from "react";
import { NavLink } from "react-router-dom";

// Function component called Navigation. Simple react router navigation component, switching between Home and About
function Navigation() {
  return (
    <header className="App-header">
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="about">About</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
