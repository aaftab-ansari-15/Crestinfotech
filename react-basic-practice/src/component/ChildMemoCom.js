import React from "react";

export const ChildMemoCom = () => {
  console.log("children memo");
  return <div>ChildMemoCom</div>;
};

export const MemoizedChild = React.memo(ChildMemoCom);
