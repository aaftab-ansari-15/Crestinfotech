import React from "react";

const InputForm = ({ inputNumber, handleChange, getCurrentResult }) => (
  <div className="input-area bg-light w-75 my-2 p-3">
    <div className="d-flex justify-content-center align-items-center">
      <div>
        <h2 className="my-4">Enter a number to get the result</h2>
        <form>
          <div className="input-group mb-3">
            <span className="input-group-text">
              <button
                className="btn btn-light"
                onClick={getCurrentResult}
                type="button"
              >
                Enter your Number
              </button>
            </span>
            <input
              type="number"
              className="form-control"
              placeholder="Number"
              aria-label="userNumber"
              value={inputNumber}
              onChange={handleChange}
              id="userNumber"
              name="userNumber"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
);

export default InputForm;
