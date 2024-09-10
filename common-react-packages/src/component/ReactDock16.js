import React, { useState } from "react";
import { Dock } from "react-dock";
const ReactDock = () => {
  const [position, setPosition] = useState("left");
  const [dimMode, setDimMode] = useState("transparent");
  const [isVisible, setIsVisible] = useState(true);
  const handlePosition = () => {
    if (position === "left") {
      setPosition("right");
    } else {
      setPosition("left");
    }
  };
  const handleDimMode = () => {
    if (dimMode === "transparent") {
      setDimMode("opaque");
    } else {
      setDimMode("transparent");
    }
  };
  const handleCheckboxChange = () => {
    if (isVisible === true) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };
  return (
    <>
      <center>
        <h3>ReactDock</h3>
        <div>
          <ul
            className="container"
            style={{ listStyleType: "none", padding: 0, margin: 0 }}
          >
            <li>
              <div className="d-flex justify-content-center">
                <div>
                  <p>position: {position} </p>
                </div>
                <div>
                  <button type="button" onClick={handlePosition}>
                    CHANGE
                  </button>
                </div>
              </div>
            </li>
            <li>
              <div className="d-flex justify-content-center">
                <div>
                  <p>Dim Mode: {dimMode} </p>
                </div>
                <div>
                  <button type="button" onClick={handleDimMode}>
                    CHANGE
                  </button>
                </div>
              </div>
            </li>
            <li>
              <input
                type="checkbox"
                checked={isVisible}
                onChange={handleCheckboxChange}
              />{" "}
              is visible
            </li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </center>
      <Dock position={position} isVisible={isVisible} dimMode={dimMode}>
        <div>React - Dock</div>
      </Dock>
    </>
  );
};

export default ReactDock;
