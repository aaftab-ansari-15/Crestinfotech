import React, { useState } from "react";
import { useDetectClickOutside } from "react-detect-click-outside";

const ReactDetectClickOutside13 = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClickOutside = () => {
    setIsVisible(false);
  };
  const handleClickButton = () => {
    setIsVisible(true);
  };

  const ref = useDetectClickOutside({ onTriggered: handleClickOutside });

  return (
    <div>
      <button ref={ref} type="button" onClick={handleClickButton}>
        Show Box
      </button>

      {isVisible && (
        <div style={{ padding: "20px", backgroundColor: "lightblue" }}>
          Click outside this box to close it.
        </div>
      )}
    </div>
  );
};

export default ReactDetectClickOutside13;
