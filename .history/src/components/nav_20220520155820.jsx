import React, { Component } from "react";

// state에 nav의 내용을 추가해줘야함!! 현재 habit의 수를 자동으로 tracking
// habits의 count가 1이상이다 >> +1
// 배열과 for문을 버무려서 확인해보자.
// 0이하이다 >> -1

class Nav extends Component {
  handleNavCount = () => {
    this.props.onNavCount(this.props.habits);
    // 이벤트가 발생한 컴포넌트가 아닌 외부의 물성치에 접근하는 방법을 생각해보자!
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
          <span className="navbar-count" onClick={this.handleNavCount}>
            {this.propt.navCount}
          </span>
        </nav>
      </>
    );
  }
}

export default Nav;
