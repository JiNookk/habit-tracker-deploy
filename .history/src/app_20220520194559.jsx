import { createRef, useRef, Component, Children } from "react";
import "./app.css";
import Habit from "./components/habit";
import Habits from "./components/habits";
import Nav from "./components/nav";
import SearchField from "./components/searchField";

// jsx파일을 왜쓰는가 ?
//   순수 js로직을 다루는 파일 >> js
//   react의 컴포넌트파일 >> jsx
//   이 둘을 구분하기 위해 사용!

class App extends Component {
  constructor(props) {
    super(props);
    this.grandChild = createRef();
  }

  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
    navCount: 0,
    inputBasic: { id: "", name: "", count: 0 },
  };

  handleNavCount = () => {
    const habits = [...this.state.habits];
    let navCount = 0;
    habits.forEach((habit) => {
      if (habit.count > 0) {
        navCount++;
      }
    });
    this.setState({ navCount });
    console.log("hi");
  };

  handleInput = () => {
    console.log(this.grandChild.current.value);

    const habitsInput = { ...this.state.habits };
    const inputBasic = { ...this.state.inputBasic };
    const id = this.state.habits.length + 1;
    const name = this.grandChild.current.value;
    const count = 0;

    inputBasic.id = id;
    inputBasic.name = name;
    inputBasic.count = count;

    console.log(habitsInput);
    habitsInput.push("q");

    this.setState({ inputBasic });

    // habits.push(inputBasic);
    // this.setState({ habits });
  };

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
    habits[index].count = count < 0 ? 0 : count;
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    console.log(`handleDelete ${habit.name}`);

    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    // array.filter(item => (조건 (불리언)) : 조건에 맞는 녀석들만 뽑아내서 새로운 배열로 반환

    this.setState({ habits });
    // const index = habits.indexOf(habit);
    // habits.splice(index, 1);
  };

  render() {
    return (
      <div onClick={this.handleNavCount}>
        <header>
          <Nav
            habits={this.state.habits}
            navCount={this.state.navCount}
            onNavCount={this.handleNavCount}
          />
        </header>

        <main>
          <SearchField
            onInput={this.handleInput}
            grandChildRef={this.grandChild}
          />
          <Habits
            habits={this.state.habits}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />

          <button className="habits-reset">Reset All</button>
        </main>
      </div>
    );
  }
}
// 원래는 React.createElement('h1', {}, 'Hello:)!!') 이렇게 표현해야 했으나 편의성을 위해 jsx를 개발!
// jsx와 html의 차이점
//  attribute 주는 방법
//   class => className, onclick => onClick
//   camelCase를 사용한다!!
//  html은 마크업 언어이지만 jsx는 js임 (babel로 변화된)
// js코드 이므로 변수 사용가능. {}로 묶으면 됨.
// 형제 노드(다수의 태그를 리턴)를 쓸 수 없음. >> 쓸꺼면 묶어서 써야됨. <React.Fragment>로 묶으면 됨.
// 의미없이 진짜 그룹만 묶을 거라면 <>로 묶어주면 된다.
// {}를 이용하여 비즈니스 로직도 작성 가능 -> js처럼 쓸수 있다는 말
// 접근에 오류가 있다면 {}부터 생각해보자!
export default App;

// state를 여기로 가져와서 이안에 navbar, input field reset버튼 추가해서 만들어보기
// 다만 컴포넌트 클래스로 변경 후 사용해야 한다.

// 처리과정
// state(data)가 있는 곳에서 콜백 선언!
// props로 콜백 전달
// 하위 컴포넌트에서도 함수를 선언하되, propname콜백과 props로 받아온 데이터를 전달.
