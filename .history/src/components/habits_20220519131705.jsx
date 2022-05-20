import React, { Component } from "react";
import Habit from "./habit";

class Habits extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
    // 데이터를 가진 쪽에서 데이터를 처리하는 로직을 구현해야한다!!!
  };
  //Habits 라는 컨테이너 컴포넌트를 만들었음.
  // render안에서는 habits들을 빙글빙글 돌면서 render에 있는 habit들과 연결시켜주었다.
  // map에서 habit이라는 state data들을 하나씩 전달하게 된다.
  //   객체에 아이디를 꼭 부여해야 한다!
  // 배열의 인덱스는 절대절대절대 쓰면 안된다!!!

  // 1. + 누르면 >> 눌린 녀석(habit)의 정보 전달
  // 2. habit의 count++(setState)

  handleIncrement = (habit) => {
    console.log(`handleIncrement ${habit.name}`);
    // habit.count++;
    // this.setState(this.state);
    // 이 방법도 가능하지만 React는 될 수 있으면 State를 직접적으로 변경하지 않는게 좋다!

    const habits = [...this.state.habits];
    // ... : 스프레드 연산자 >> 배열안의 아이템을 새로운 배열에 복사해온다.
    // 새로운 객체를 만들어 복사!
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({ habits });
    // habits : habits처럼 키 밸류 값이 같을 경우 생략가능!
    // 전자 : state안의 habits 후자 : 변수 habits

    // this.setState(this.state)
    // 이렇게 setState를 하면 state를 직접변경하는것과 마찬가지!
  };
  // 여기서 함수로직을 선언해줌!

  handleDecrement = (habit) => {
    console.log(`handleDecrement ${habit.name}`);

    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1;
    habits[index.count] = count < 0 ? 0 : count;
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    console.log(`handleDelete ${habit.name}`);
  };

  render() {
    return (
      <ul>
        {this.state.habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        ))}
      </ul>
    );
  }
}

export default Habits;
