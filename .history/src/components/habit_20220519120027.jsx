import React, { Component } from "react";

// 클래스 이름은 항상 대문자로 시작!
class Habit extends Component {
  render() {
    console.log(this.props.habit);
    const { name, count } = this.props.habit;
    // 자체적인 state는 없고 외부에서 받은 props들만 보여주는 컴포넌트
    // 따라서 클릭이 발생하면 내부에서 데이터를 처리하기 보다는 함수만 호출해주면 된다.
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
        <button
          className="habit-button habit-delete"
          onClick={this.handleDelete}
        >
          <i className="fa-solid fa-trash-can"></i>
        </button>
      </>
    );
  }
}

export default Habit;
