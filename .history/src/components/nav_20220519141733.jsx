import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <>
        <nav className="navbar">
          <span className="nav__Avatar">Habit Tracker</span>
          <span className="nav__title">Habit Tracker</span>
          <span className="habit__count">count</span>
        </nav>
      </>
    );
  }
}

export default Nav;
