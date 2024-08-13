// src/components/ResultsList.js
import React from "react";

const ResultsList = ({ userAllInputArr, printCurrentResult, getAllResult }) => (
  <div className="result-area bg-light w-50 my-3 p-3">
    <div className="d-flex justify-content-center align-items-center">
      <div className="">
        <div className="w-100">
          <div className="box">
            <h2>Result:</h2>
          </div>
          {userAllInputArr.length > 0 ? (
            <>
              {userAllInputArr.map((input, index) => (
                <button
                  type="button"
                  className="btn btn-primary w-100 my-2"
                  onClick={(e) => printCurrentResult(e, input.userInput)}
                  key={index}
                >
                  {input.userInput}
                </button>
              ))}
              <button
                className="w-100 btn btn-success"
                onClick={getAllResult}
                type="button"
              >
                Get All Result
              </button>
            </>
          ) : (
            <p>No results available</p>
          )}
        </div>
      </div>
    </div>
  </div>
);

export default ResultsList;
