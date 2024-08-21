// new way
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
// const reduxLogger = require("redux-logger");

const logger = createLogger({
  level: "info",
  collapsed: true,
  duration: true,
  timestamp: true,
  predicate: (getState, action) => action.type !== "IGNORE_ACTION_TYPE",
});
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
