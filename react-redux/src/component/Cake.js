// new way
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../redux/store"; // Import the action creator

const Cake = () => {
  // Use useSelector to access the state
  const numberOfCakes = useSelector((state) => state.numberOfCakes);

  // Use useDispatch to get the dispatch function
  const dispatch = useDispatch();

  // Function to handle button click
  const handleBuyCake = () => {
    dispatch(buyCake());
  };

  return (
    <div>
      <h1>Number of Cakes: {numberOfCakes}</h1>
      <button onClick={handleBuyCake}>Buy Cake</button>
    </div>
  );
};

export default Cake;

//old way//////////////////////////////////////////////////

// import React from "react";
// import { connect } from "react-redux";
// import buyCake from "../redux/cake/cakeAction";
// const Cake = (props) => {
//   console.log("Cake", props);
//   const handleBuyCake = () => {
//     props.buyCake();
//   };
//   return (
//     <div>
//       <h1>Number of Cakes: {props.numberOfCakes}</h1>
//       <button type="button" onClick={handleBuyCake}>
//         Buy Cake
//       </button>
//     </div>
//   );
// };

// const mapStateToProps = (state) => {
//   console.log("state", state);
//   return {
//     numberOfCakes: state.numberOfCakes,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   console.log("dispatch", dispatch);
//   return {
//     buyCake: () => dispatch(buyCake()),
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(Cake);
