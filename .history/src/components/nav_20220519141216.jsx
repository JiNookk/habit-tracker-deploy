import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <>
        <span className="nav__Avatar">Habit Tracker</span>
        <h3 className="nav__title">Habit Tracker</h3>
        <span className="habit__count">count</span>
      </>
    );
  }
}

export default Nav;
