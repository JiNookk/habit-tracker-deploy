import React, { useState } from "react";

const SimpleHabit = (props) => {
  const [count, setCount] = useState(0);
  const spanRef = React.createRef();

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <>
      <span className="habit-name">Reading</span>
      <span ref={spanRef} className="habit-count">
        {count}
      </span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fa-solid fa-square-plus"></i>
      </button>
    </>
  );
};

export default SimpleHabit;
