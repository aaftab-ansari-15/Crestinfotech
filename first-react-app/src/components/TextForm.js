import React, { useState } from "react";

const TextForm = () => {
  const [text, setText] = useState("enter text");
  const handleClick = () => {
    const newText = text.toUpperCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div class="mb-3">
      <textarea
        class="form-control"
        value={text}
        onChange={handleOnChange}
        id="box1"
        rows="3"
      ></textarea>
      <button className="btn btn-primary" onClick={handleClick}>
        upercase
      </button>
    </div>
  );
};

export default TextForm;
