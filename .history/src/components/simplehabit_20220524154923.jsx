
import React from 'react';

const SimpleHabit = (props) => {
  const [count, setCount] = useState(0)


const  handleIncrement = () => {
    this.setState({ count: this.state.habit.count++ });
  };


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

export default SimpleHabit;



// 클래스 이름은 항상 대문자로 시작!
class SimpleHabit extends PureComponent {
  state = {
    habit: { count: 0, name: "Reading" },
  };
  render() {
    const { name, count } = this.state.habit;

  }
}

export default SimpleHabit;
