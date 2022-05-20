import React, { Component } from "react";

// 클래스 이름은 항상 대문자로 시작!
class Habit extends Component {
  render() {
    return (
      <>
        <span className="habit-name">Reading</span>
        <span className="habit-count">8</span>
        <button>
          <i className="fa-solid fa-square-plus"></i>
          {/* fontawesome 사용시 className 조심할 것 */}
        </button>
        <button>
          <i className="fa-solid fa-square-minus"></i>
        </button>
        <button>
          <i className="fa-solid fa-trash-can"></i>
        </button>
      </>
    );
  }
}

export default Habit;
