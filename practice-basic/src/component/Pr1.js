import { useState } from "react";

export const Pr1 = () => {
  const [count, setCount] = useState(0);
  console.log("UseState render");
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>count - {count}</button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        count to 0
      </button>
      <button
        onClick={() => {
          setCount(5);
        }}
      >
        count to 5
      </button>
    </div>
  );
};
