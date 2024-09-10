import React, { useState } from "react";
import ChildCom from "./ChildCom";
import { ChildMemoCom, MemoizedChild } from "./ChildMemoCom";

const ParentCom = () => {
  const [counter, setCounter] = useState(0);
  const handleClick = () => {
    setCounter(counter + 1);
  };
  console.log("Parent");
  return (
    <>
      <div>ParentCom</div>
      <button type="button" onClick={handleClick}>
        {counter}
      </button>
      <ChildCom />
      <ChildMemoCom />
      <MemoizedChild />
    </>
  );
};

export default ParentCom;
