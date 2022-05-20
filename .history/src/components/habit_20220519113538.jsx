import React, { Component } from "react";

// 클래스 이름은 항상 대문자로 시작!
class Habit extends Component {
  handleIncrement = () => {};

  handleDecrement = () => {};
  render() {
    console.log(this.props.habit);
    const { name, count } = this.props.habit;
    return (
      <>
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncrement}
        >
          <i className="fa-solid fa-square-plus"></i>
          {/* fontawesome 사용시 className 조심할 것 */}
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.handleDecrement}
        >
          <i className="fa-solid fa-square-minus"></i>
        </button>
        <button className="habit-button habit-delete">
          <i className="fa-solid fa-trash-can"></i>
        </button>
      </>
    );
  }
}

export default Habit;
