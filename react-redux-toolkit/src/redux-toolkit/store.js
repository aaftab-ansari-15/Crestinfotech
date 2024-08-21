import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/userSlice";
const userReducer = userSlice.reducer;

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
export default store;
