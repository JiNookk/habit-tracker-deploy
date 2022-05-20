import React, { Component } from "react";

// habits의 count가 1이상이다 >> +1
// 배열과 for문을 버무려서 확인해보자.
// 0이하이다 >> -1

class Nav extends Component {
  handleIncrement = () => {
    this.props.onNavIncrement(this.props.habits);
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
