import React, { useState } from "react";
import { Dock } from "react-dock"; // Assuming you are using a library like react-dock

const ReactDock15 = () => {
  const [dock, setDock] = useState({
    isVisible: false,
    position: "left",
    dimMode: "opaque",
  });

  // Handle checkbox changes
  const handleCheckboxChange = (event) => {
    const { name, type, checked, value } = event.target;

    setDock((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div>
      {/* Controls for Dock */}
      <div>
        <label>
          <input
            type="checkbox"
            name="isVisible"
            checked={dock.isVisible}
            onChange={handleCheckboxChange}
          />
          Is Visible
        </label>
        <br />

        <label>
          Position:
          <select
            name="position"
            value={dock.position}
            onChange={handleCheckboxChange}
          >
            <option value="left">Left</option>
            <option value="right">Right</option>
            <option value="top">Top</option>
            <option value="bottom">Bottom</option>
          </select>
        </label>
        <br />

        <label>
          Dim Mode:
          <select
            name="dimMode"
            value={dock.dimMode}
            onChange={handleCheckboxChange}
          >
            <option value="opaque">Opaque</option>
            <option value="transparent">Transparent</option>
          </select>
        </label>
      </div>

      {/* Dock component */}
      <Dock
        position={dock.position}
        isVisible={dock.isVisible}
        dimMode={dock.dimMode}
      >
        {/* You can pass a function as a child here */}
        <div
          onClick={() =>
            setDock((prevState) => ({ ...prevState, isVisible: false }))
          }
        >
          Close Dock
        </div>
      </Dock>
    </div>
  );
};

export default ReactDock15;
