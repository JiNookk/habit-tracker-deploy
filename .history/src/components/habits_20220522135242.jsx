import React, { Component } from "react";
import Habit from "./habit";
import HabitAddForm from "./habitAddForm";

class Habits extends Component {
  // 데이터를 가진 쪽에서 데이터를 처리하는 로직을 구현해야한다!!!

  //Habits 라는 컨테이너 컴포넌트를 만들었음.
  // render안에서는 habits들을 빙글빙글 돌면서 render에 있는 habit들과 연결시켜주었다.
  // map에서 habit이라는 state data들을 하나씩 전달하게 된다.
  //   객체에 아이디를 꼭 부여해야 한다!
  // 배열의 인덱스는 절대절대절대 쓰면 안된다!!!

  // 1. + 누르면 >> 눌린 녀석(habit)의 정보 전달
  // 2. habit의 count++(setState)

  handleAdd = (name) => {
    this.props.onAdd(name);
  };
  //이벤트 핸들러를 선언하지 않고 바로 props에서 선언하면 안될까? >> 안되는 경우가 존재 : react hook에서 배울 것!

  render() {
    return (
      <>
        <HabitAddForm onAdd={this.handleAdd} />
        <ul>
          {/* 이부분이 잘  안되는 것  같다!! 배열(객체)안에 어떤 것이든 자유자재로 담아서 활용하는 것! */}
          {this.props.habits.map((habit) => (
            <li>
              <Habit
                key={habit.id}
                // 컴포넌트에 순서를 부여하기 위해 key 사용
                habit={habit}
                // .map을 이용해서 habits의 요소 객체를 habit으로 받아옴
                // 받아온 habit을 habit props로 자손에 전달
                habits={this.props.habits}
                // 스테이트는 또 따로 props으로 전달해줌.
                onIncrement={this.props.onIncrement}
                onDecrement={this.props.onDecrement}
                onDelete={this.props.onDelete}
              />
            </li>
          ))}
        </ul>
        <button className="habits-reset" onClick={this.props.onReset}>
          Reset All
        </button>
      </>
    );
  }
}

export default Habits;
