import "./App.css";
import React, { useState, useCallback } from "react";
import debounce from "lodash/debounce";
import InputForm from "./componenet/InputForm";
import ResultsList from "./componenet/ResultsList";
const App = () => {
  const [inputNumber, setInputNumber] = useState(0);
  const [userAllInputArr, setUserAllInputArr] = useState([]);

  // Debounced functions
  const debouncedGetCurrentResult = useCallback(
    debounce((userInput) => {
      if (
        userInput <= 0 ||
        userAllInputArr.some((data) => data.userInput === userInput)
      )
        return;

      const result = Array.from({ length: userInput }, (_, i) => {
        const index = i + 1;
        if (index % 15 === 0) return "FizzBuzz";
        if (index % 3 === 0) return "Fizz";
        if (index % 5 === 0) return "Buzz";
        return `${index}`;
      });

      const totalWords = result.filter((item) =>
        ["Fizz", "Buzz", "FizzBuzz"].includes(item)
      ).length;

      const newResult = { userInput: `${userInput}`, result, totalWords };
      setUserAllInputArr((prev) =>
        [...prev, newResult].sort((a, b) => a.userInput - b.userInput)
      );

      console.log(`Entries for user input ${userInput}:`, result);
      console.log(`Total Words: ${totalWords}`);
    }, 1000),
    [userAllInputArr]
  );

  const debouncedGetAllResult = useCallback(
    debounce(() => {
      if (userAllInputArr.length === 0) {
        console.log("No data");
        return;
      }

      let totalWords = 0;
      userAllInputArr.forEach((data, index) => {
        console.log(`${index + 1}. Result for user input: ${data.userInput}`);
        data.result.forEach((res, i) => console.log(`\t${i + 1}. ${res}`));
        console.log(`\tTotal words in this input: ${data.totalWords}`);
        totalWords += data.totalWords;
      });
      console.log(`Total words in all inputs: ${totalWords}`);
    }, 1000),
    [userAllInputArr]
  );

  const getCurrentResult = (e) => {
    e.preventDefault();
    debouncedGetCurrentResult(parseInt(inputNumber, 10));
  };

  const getAllResult = (e) => {
    e.preventDefault();
    debouncedGetAllResult();
  };

  const handleChange = (e) => {
    setInputNumber(e.target.value);
  };

  return (
    <div className="d-flex mt-5 justify-content-center align-items-center">
      <div className="box w-100">
        <div className="d-flex justify-content-center align-items-center">
          <InputForm
            inputNumber={inputNumber}
            handleChange={handleChange}
            getCurrentResult={getCurrentResult}
          />
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <ResultsList
            userAllInputArr={userAllInputArr}
            getAllResult={getAllResult}
          />
        </div>
      </div>
    </div>
  );
};
// function App() {
//   const [inputNumber, setInputNumber] = useState(0);
//   // const [userInputArr, setUserInputArr] = useState([]);
//   const [userAllInputArr, setUserAllInputArr] = useState([]);

//   // Debounced functions
//   const debouncedGetCurrentResult = useCallback(
//     debounce((userInput) => {
//       const checkEntry = userAllInputArr.find(
//         (data) => data.userInput === userInput
//       );

//       if (userInput > 0 && !checkEntry) {
//         const tempArr = [];
//         let counter = 0;
//         console.log(`Entries for user input ${userInput}:`);

//         for (let index = 1; index <= userInput; index++) {
//           if (index % 3 !== 0 && index % 5 !== 0) {
//             tempArr.push(`${index}`);
//           } else if (index % 3 === 0 && index % 5 === 0) {
//             tempArr.push("FizzBuzz");
//             counter++;
//           } else if (index % 3 === 0) {
//             tempArr.push("Fizz");
//             counter++;
//           } else if (index % 5 === 0) {
//             tempArr.push("Buzz");
//             counter++;
//           }
//           console.log(`${index}. ${tempArr[index-1]}`);
//         }
//         console.log(`Total Words: ${counter}`);

//         const userNewInputResult = {
//           userInput: `${userInput}`,
//           result: tempArr,
//           totalWords: counter,
//         };
//         const newArray = [...userAllInputArr, userNewInputResult];
//         const sortedArray = newArray.sort(
//           (a, b) => parseInt(a.userInput, 10) - parseInt(b.userInput, 10)
//         );
//         setUserAllInputArr(sortedArray);
//       }
//     }, 1000),
//     [userAllInputArr]
//   );

//   const debouncedGetAllResult = useCallback(
//     debounce(() => {
//       const checkData = userAllInputArr.length > 0;
//       if (checkData) {
//         let totalWords = 0;
//         console.log("All Results: \n");
//         userAllInputArr.forEach((data, index) => {
//           console.log(`${index + 1}. Result for user input: ${data.userInput}`);
//           data.result.forEach((arrData, arrIndex) => {
//             console.log(`\t${arrIndex + 1}. ${arrData}`);
//           });
//           console.log(`\tTotal words in this input: ${data.totalWords}`);
//           totalWords += data.totalWords;
//         });
//         console.log(`Total words in all inputs: ${totalWords}`);
//       } else {
//         console.log("No data");
//       }
//     }, 1000),
//     [userAllInputArr]
//   );

//   const getCurrentResult = (e) => {
//     e.preventDefault();
//     const userInput = inputNumber;
//     debouncedGetCurrentResult(userInput);
//   };

//   const getAllResult = (e) => {
//     e.preventDefault();
//     debouncedGetAllResult();
//   };
//   const handleChange = (e) => {
//     e.preventDefault();
//     setInputNumber(e.target.value);
//   };
//   return (
//     <>
//       <div className="d-flex mt-5 justify-content-center align-items-center">
//         <div className="input-area bg-light w-50 my-2 p-3">
//           <div className="d-flex justify-content-center align-items-center">
//             <div className="">
//               <h2 className="my-4">Enter a number to get the result</h2>
//               <form>
//                 <div className=" input-group mb-3">
//                   <span className="input-group-text">
//                     <button className="btn btn-light" onClick={getCurrentResult} type="button">
//                       Enter your Number
//                     </button>
//                   </span>
//                   <input
//                     type="number"
//                     className="form-control"
//                     placeholder="Number"
//                     aria-label="userNumber"
//                     value={inputNumber}
//                     onChange={handleChange}
//                     id="userNumber"
//                     name="userNumber"
//                   />
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="d-flex justify-content-center align-items-center">
//         <div className="result-area bg-light w-50 my-3 p-3">
//           <div className="d-flex justify-content-center align-items-center">
//             <div className="">
//               <div className="w-100">
//                 <div className="box">
//                   <h2>Result:</h2>
//                 </div>
//                 {(userAllInputArr.length > 0)
//                   ? userAllInputArr.map((input, index) => {
//                       return(
//                         <div className="box" key={index}>
//                           {input.userInput}
//                         </div>
//                       );
//                     })
//                   : null}
//                 <button className="w-100 btn btn-success" onClick={getAllResult} type="button">
//                   Get All Result
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

export default App;
