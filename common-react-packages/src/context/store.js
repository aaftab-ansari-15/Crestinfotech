import {
  configureStore,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";

// Define an async thunk to fetch data
export const fetchData = createAsyncThunk("data/fetchData", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  return await response.json();
});

// Create a slice with extraReducers to handle async state
const dataSlice = createSlice({
  name: "data",
  initialState: { data: {}, status: "idle" },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state) => {
        state.status = "failed";
      });
  },
});

// Create store
const store = configureStore({
  reducer: {
    data: dataSlice.reducer,
  },
});
export default store;
