import React, { useMemo } from "react";

const ExpensiveComponent = ({ number }) => {
  const expensiveCalculation = (num) => {
    console.log(number, num, "Calculating...");
    return num * 2;
  };

  const memoizedValue = useMemo(() => expensiveCalculation(number), [number]);

  return (
    <div>
      <p>Result: {memoizedValue}</p>
    </div>
  );
};

export default ExpensiveComponent;
