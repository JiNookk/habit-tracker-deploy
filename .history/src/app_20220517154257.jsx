import "./app.css";

// jsx파일을 왜쓰는가 ?
//   순수 js로직을 다루는 파일 >> js
//   react의 컴포넌트파일 >> jsx
//   이 둘을 구분하기 위해 사용!

function App() {
  const name = wook;
  <>
    return <h1>Hello :)</h1>
    {name && <h1>Hello! {name} :) </h1>}
  </>;
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

export default App;
