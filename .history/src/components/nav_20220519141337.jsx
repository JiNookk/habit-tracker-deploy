import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <>
        <span className="nav__Avatar">Habit Tracker</span>
        <span className="nav__title">Habit Tracker</span>
        <span className="habit__count">count</span>
      </>
    );
  }
}

export default Nav;
