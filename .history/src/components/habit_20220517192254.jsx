import React, { Component } from "react";

// 클래스 이름은 항상 대문자로 시작!
class Habit extends Component {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
    //   setState를 통해 업데이트 해주어야 한다!! 그냥 state안의 변수를 변경한다고 state가 업데이트 되지않음.
    // setState를 쓰면 자동으로 state에 접근된 상태이므로 this안써도 된다.
  };

  handleDecrement = () => {
    const count = this.state.count - 1;
    this.setState({ count: count < 0 ? 0 : count });
    // setState안에서는 = 대신 :을 써야함에 주의하라!
  };
  render() {
    console.log(this.props.habit);
    return (
      <>
        <span className="habit-name">Reading</span>
        <span className="habit-count">{this.state.count}</span>
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
