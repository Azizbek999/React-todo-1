import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <div>
        <h1>Todo App</h1>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </div>
    );
  }
}

export default Header;
