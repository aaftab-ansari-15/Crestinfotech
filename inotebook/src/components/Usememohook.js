import React, { useState } from "react";
import ExpensiveComponent from "./ExpensiveComponent";

const Usememohook = (props) => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(1);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setNumber(number + 1)}>Increment Number</button>
      <ExpensiveComponent number={number} />
      <p>Count: {count}</p>
      <p>Number: {number}</p>
      <div>{props.children}</div>
      <div>{props.footer}</div>
    </div>
  );
};

export default Usememohook;
