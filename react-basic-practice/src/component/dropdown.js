import React from "react";
import Select from "react-select";

const options = [
  { value: "action-1", label: "Action 1" },
  { value: "action-2", label: "Action 2" },
  { value: "action-3", label: "Action 3" },
];

const DropdownSelectExample = () => {
  return <Select className="d-flex" options={options} />;
};

export default DropdownSelectExample;
