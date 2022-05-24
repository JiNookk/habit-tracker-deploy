import React from "react";

const SimpleHabit = (props) => {
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
};

export default SimpleHabit;
