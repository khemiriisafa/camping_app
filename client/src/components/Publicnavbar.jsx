import React from "react";
import { NavLink } from "react-router-dom";

function Publicnavbar() {
  return (
    <div className="navbar">
      <div className="logo-title">
        <img src="./assets/logo.svg" alt="logo" />
      </div>

      <ul className="links">
        <NavLink
          to="/"
          style={({ isActive }) => {
            return {
              all: "unset",
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "red" : "black",
              cursor: "pointer",
            };
          }}
        >
          home
        </NavLink>

        <NavLink
          to="/about-us"
          style={({ isActive }) => {
            return {
              all: "unset",
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "red" : "black",
              cursor: "pointer",
            };
          }}
        >
          about us
        </NavLink>
        <NavLink
          to="/events"
          style={({ isActive }) => {
            return {
              all: "unset",
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "red" : "black",
              cursor: "pointer",
            };
          }}
        >
          events
        </NavLink>
        <NavLink
          to="/login"
          style={({ isActive }) => {
            return {
              all: "unset",
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "red" : "black",
              cursor: "pointer",
            };
          }}
        >
          login
        </NavLink>
        <NavLink
          to="/register"
          style={({ isActive }) => {
            return {
              all: "unset",
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "red" : "black",
              cursor: "pointer",
            };
          }}
        >
          register
        </NavLink>
        <NavLink
          to="/contact-us"
          style={({ isActive }) => {
            return {
              all: "unset",
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "red" : "black",
              cursor: "pointer",
            };
          }}
        >
          contact us
        </NavLink>
      </ul>
    </div>
  );
}

export default Publicnavbar;
