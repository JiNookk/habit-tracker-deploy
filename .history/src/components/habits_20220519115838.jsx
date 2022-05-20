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
  render() {
    return (
      <ul>
        {this.state.habits.map((habit) => (
          <Habit habit={habit} />
        ))}
      </ul>
    );
  }
}

export default Habits;
