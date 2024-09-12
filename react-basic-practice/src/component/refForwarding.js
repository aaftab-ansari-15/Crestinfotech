import React, { useRef, forwardRef } from "react";

// Child component with forwarded ref
const CustomInput = forwardRef((props, ref) => {
  return (
    <div>
      <label>Custom Input: </label>
      <input ref={ref} type="text" />
    </div>
  );
});

const ParentComponent = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <h3>Forwarding Refs Example</h3>
      <CustomInput ref={inputRef} />
      <button onClick={focusInput}>Focus the Input</button>
    </div>
  );
};

export default ParentComponent;
