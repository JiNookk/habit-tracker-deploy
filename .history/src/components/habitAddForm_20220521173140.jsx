import React, { Component } from "react";

class HabitAddForm extends Component {
  onSubmit = (event) => {
    console.log("submit!!");
  };
  render() {
    return (
      <form className="add-form" onSubmit={this.onSubmit}>
        <input type="text" className="add-input" placeholder="Habit" />
        <button className="add-button">Add</button>
      </form>
      //   form에서는 버튼이 눌리면 submit이라는 이벤트가 발생한다. 따라서 onSubmit를 활용할 수 잇다.
    );
  }
}

export default HabitAddForm;
