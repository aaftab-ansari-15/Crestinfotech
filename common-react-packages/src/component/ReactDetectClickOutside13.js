import React from "react";
import { useDetectClickOutside } from "react-detect-click-outside";
const ReactDetectClickOutside13 = ({ closeToggle }) => {
  const ref = useDetectClickOutside({ onTriggered: closeToggle });
  return (
    <div className="dropdown" ref={ref}>
      <p>I'm a dropdown!</p>
    </div>
  );
};
export default ReactDetectClickOutside13;
