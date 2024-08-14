// new way
import { configureStore, createSlice } from "@reduxjs/toolkit";

const cakeSlice = createSlice({
  name: "cake",
  initialState: {
    numberOfCakes: 10,
    numberOfIceCreams: 10,
  },
  reducers: {
    buyCake: (state) => {
      state.numberOfCakes -= 1;
    },
    buyIceCream: (state) => {
      state.numberOfIceCreams -= 1;
    },
  },
});

export const { buyCake, buyIceCream } = cakeSlice.actions;

const store = configureStore({
  reducer: cakeSlice.reducer,
});

export default store;

//old way//////////////////////////////////////////////////////////////////////////////

// import { configureStore } from "@reduxjs/toolkit";
// import cakeReducer from "./cake/cakeReducer";

// // Create and export the store
// const store = configureStore({
//   // reducer: cakeSlice.reducer,
//   reducer: cakeReducer,
// });

// export default store;
