import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <>
        <nav className="navbar">
          <span>
            <i className="fa-solid fa-leaf"></i>
          </span>
          <span>Habit Tracker</span>
          <span className="navbar-count">count</span>
        </nav>
      </>
    );
  }
}

export default Nav;
