// new way
import { configureStore, createSlice } from "@reduxjs/toolkit";
import logger from "redux-logger";

const cakeSlice = createSlice({
  name: "cake",
  initialState: {
    numberOfCakes: 100,
    numberOfIceCreams: 200,
  },
  reducers: {
    buyCake: (state) => {
      state.numberOfCakes -= 5;
    },
    buyIceCream: (state) => {
      state.numberOfIceCreams -= 10;
    },
  },
});

export const { buyCake, buyIceCream } = cakeSlice.actions;

const store = configureStore({
  reducer: cakeSlice.reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
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
