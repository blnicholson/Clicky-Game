import React from "react";
import "./Navbar.css";

const Navbar = props => (
  
  <nav className="navbar">
  
  <span className="navbar-brand mb-0 h1">Score: {props.playerScore}</span>
  <span className ="navbar-brand mb-0-h1">High Score: {props.highScore}</span>

</nav>
);

export default Navbar;