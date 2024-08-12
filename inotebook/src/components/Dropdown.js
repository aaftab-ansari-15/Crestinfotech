import React, { useState } from "react";
const Dropdown = () => {
  const data = [
    { country: "India", value: "IN", state: ["Delhi", "Mumbai"] },
    { country: "Pakistan", value: "PAK", state: ["Lahore", "Karachi"] },
    {
      country: "United States of America",
      value: "USA",
      state: ["New York", "Las Vegas"],
    },
  ];
  const [selectedOption, setSelectedOption] = useState();
  const [state, setState] = useState();
  const handleChangeCountry = (event) => {
    console.log(event.target.value);
    const selectedValue = event.target.value;
    const object = data.find((item) => item.value === selectedValue);
    setSelectedOption(object);
  };
  const handleChangeState = (event) => {
    console.log(event.target.value);
    const selectedValue = event.target.value;
    setState(selectedValue);
  };
  return (
    <div className="dropdown-country">
      <label htmlFor="dropdown">Select an option:</label>
      <select
        id="dropdown"
        value={selectedOption ? selectedOption.value : ""}
        onChange={handleChangeCountry}
        style={{ padding: "10px", width: "200px" }}
      >
        <option value="" disabled>
          select an option
        </option>
        {data.map((d, index) => (
          <option key={index} value={d.value}>
            {d.country}
          </option>
        ))}
      </select>
      <select
        id="nextDropdown"
        value={state ? state : ""}
        onChange={handleChangeState}
        style={{ padding: "10px", width: "200px" }}
      >
        <option value="" disabled>
          {selectedOption ? selectedOption.country : "None selected"}
        </option>
        {selectedOption
          ? selectedOption.state.map((s, ind) => (
              <option key={ind} value={s}>
                {s}
              </option>
            ))
          : ""}
      </select>
      <div style={{ marginTop: "10px" }}>
        <strong>Selected country: </strong>
        {selectedOption ? selectedOption.country : "None selected"}
      </div>
      <div style={{ marginTop: "10px" }}>
        <strong>Selected state: </strong>
        {state ? state : "None selected"}
      </div>
    </div>
  );
};

export default Dropdown;
