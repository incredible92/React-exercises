import React from "react";
import Header from "./component/Header";
import Content from "./component/Content.jsx";
import Total from "./component/Total.jsx";

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content parts={part1} exercises={exercises1} />
      <Content parts={part2} exercises={exercises2} />
      <Content parts={part3} exercises={exercises3} />
      <Total
        exercise1={exercises1}
        exercise2={exercises2}
        exercise3={exercises3}
      />
    </div>
  );
};

export default App;
