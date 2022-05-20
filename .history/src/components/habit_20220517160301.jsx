import React, { Component } from "react";

// 클래스 이름은 항상 대문자로 시작!
class Habit extends Component {
  render() {
    return (
      <>
        <span className="habit-name">Reading</span>
        <span className="habit-count"></span>
      </>
    );
  }
}

export default Habit;
