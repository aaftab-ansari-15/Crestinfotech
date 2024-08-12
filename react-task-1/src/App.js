import "./App.css";
import React, { useState } from "react";

function App() {
  const [inputNumber, setInputNumber] = useState(0);
  const [userInputArr, setUserInputArr] = useState([]);
  const [userAllInputArr, setUserAllInputArr] = useState([
    {
      userInput: 0,
      result: null,
    },
  ]);
  const handleClick = (e) => {
    e.preventDefault();
    const userInput = inputNumber;
    const checkEntry = userAllInputArr.find(
      (data) => data.userInput === userInput
    );

    if (userInput > 0 && !checkEntry) {
      const tempArr = [];
      setInputNumber(userInput);
      for (let index = 1; index <= userInput; index++) {
        if (index % 3 !== 0 && index % 5 !== 0) {
          tempArr.push(`${index}`);
          // setUserInputArr(userInputArr.concat(`${userInput}`));
        } else if (index % 3 === 0 && index % 5 === 0) {
          tempArr.push("FizzBuzz");
          // setUserInputArr(userInputArr.concat(..."FizzBuzz"));
        } else if (index % 3 === 0) {
          tempArr.push("Fizz");
          // setUserInputArr(userInputArr.concat(..."Fizz"));
        } else if (index % 5 === 0) {
          tempArr.push("Buzz");
          // setUserInputArr(userInputArr.concat(..."Buzz"));
        }
      }
      setUserInputArr(tempArr);
      const userNewInputResult = {
        userInput: `${userInput}`,
        result: tempArr,
      };
      const newArray = [...userAllInputArr, userNewInputResult];
      const sortedArray = newArray.sort(
        (a, b) => parseInt(a.userInput, 10) - parseInt(b.userInput, 10)
      );
      setUserAllInputArr(sortedArray);
    }
  };
  const handleChange = (e) => {
    e.preventDefault();
    setInputNumber(e.target.value);
  };
  return (
    <>
      <div className="d-flex mt-5 justify-content-center align-items-center">
        <div className="input-area bg-light w-50 my-2 p-3">
          <div className="d-flex justify-content-center align-items-center">
            <div className="">
              <h2 className="my-4">Enter a number to get the result</h2>
              <form>
                <div className=" input-group mb-3">
                  <span className="input-group-text">
                    <button className="btn" onClick={handleClick} type="button">
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
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <div className="result-area bg-light w-50 my-3 p-3">
          <div className="d-flex justify-content-center align-items-center">
            <div className="">
              <div className="w-100">
                <div className="box">
                  <h2>Result:</h2>
                </div>
                {userAllInputArr.length > 0
                  ? userAllInputArr.map((input, index) => {
                      return index === 0 ? null : (
                        <div className="box" key={index}>
                          {input.userInput}
                        </div>
                      );
                    })
                  : null}
                <button className="w-100 btn btn-success">
                  Get All Result
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
