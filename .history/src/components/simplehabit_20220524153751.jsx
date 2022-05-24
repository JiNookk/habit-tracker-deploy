import React, { PureComponent } from "react";

// 클래스 이름은 항상 대문자로 시작!
class SimpleHabit extends PureComponent {
  state = {
    habit: { count: 0, name: "Reading" },
  };

  handleIncrement = () => {
    this.setState({ count: habit.count++ });
  };
  render() {
    const { name, count } = this.state.habit;
    return (
      <>
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncrement}
        >
          <i className="fa-solid fa-square-plus"></i>
        </button>
      </>
    );
  }
}

export default SimpleHabit;
