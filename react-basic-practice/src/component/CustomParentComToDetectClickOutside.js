import React, { useState, useRef } from "react";
import CustomChildComToDetectClickOutside from "./CustomChildComToDetectClickOutside";

const CustomParentComToDetectClickOutside = () => {
  const [visible, setVisible] = useState(true);
  const ref = useRef();
  const handleClick = () => {
    if (visible === false) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  return (
    <>
      <center ref={ref}>
        <p>CustomParentComToDetectClickOutside</p>
        <button type="button" onClick={handleClick}>
          Click to change visibility of child component
        </button>
        {visible && <CustomChildComToDetectClickOutside />}
      </center>
    </>
  );
};

export default CustomParentComToDetectClickOutside;
