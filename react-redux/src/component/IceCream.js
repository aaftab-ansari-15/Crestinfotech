// new way
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyIceCream } from "../redux/store"; // Import the action creator

const IceCream = () => {
  // Use useSelector to access the state
  const numberOfIceCreams = useSelector((state) => state.numberOfIceCreams);

  // Use useDispatch to get the dispatch function
  const dispatch = useDispatch();

  // Function to handle button click
  const handleBuyCake = () => {
    dispatch(buyIceCream());
  };

  return (
    <div>
      <h1>Number of IceCreams: {numberOfIceCreams}</h1>
      <button onClick={handleBuyCake}>Buy Cake</button>
    </div>
  );
};
export default IceCream;
