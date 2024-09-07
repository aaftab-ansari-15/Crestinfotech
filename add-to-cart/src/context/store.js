import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'
const store = configureStore({
  reducer: {
    cart: cartReducer, // Use the imported reducer here
  },
  });
  export default store;