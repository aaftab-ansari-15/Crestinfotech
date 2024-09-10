import React, { useState } from "react";
import { useDetectClickOutside } from "react-detect-click-outside";

const ReactDetectClickOutside13 = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClickOutside = () => {
    setIsVisible(false);
  };
  const handleClickButton = () => {
    console.log("button clicked", isVisible);
    setIsVisible(true);
    console.log("button clicked", isVisible);
  };

  const ref = useDetectClickOutside({ onTriggered: handleClickOutside });

  return (
    <div>
      <button type="button" onClick={handleClickButton}>
        Show Box
      </button>

      {isVisible && (
        <div
          ref={ref}
          style={{ padding: "20px", backgroundColor: "lightblue" }}
        >
          Click outside this box to close it.
        </div>
      )}
    </div>
  );
};

export default ReactDetectClickOutside13;
