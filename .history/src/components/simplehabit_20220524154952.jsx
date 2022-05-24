import React from "react";

const SimpleHabit = (props) => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setState({ count: state.habit.count++ });
  };

  return (
    <>
      <span className="habit-name">{name}</span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fa-solid fa-square-plus"></i>
      </button>
    </>
  );
};

export default SimpleHabit;
