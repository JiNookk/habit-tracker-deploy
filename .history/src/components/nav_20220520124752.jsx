import React, { Component } from "react";

class Nav extends Component {
  handleIncrement = () => {
    this.props.onNavIncrement(this.props.nav);
  };

  render() {
    const count = this.props.nav;
    return (
      <>
        <nav className="navbar">
          <span>
            <i className="fa-solid fa-leaf"></i>
          </span>
          <span>Habit Tracker</span>
          <span className="navbar-count" onClick={this.handleIncrement}>
            {count}
          </span>
        </nav>
      </>
    );
  }
}

export default Nav;
