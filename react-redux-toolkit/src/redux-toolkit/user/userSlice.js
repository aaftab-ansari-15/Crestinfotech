import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  users: [],
  error: "",
};
const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message;
    });
  },
});
const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    // Returning the user IDs
    return response.data;
  } catch (error) {
    // If there's an error, it will be passed to the rejected action in the thunk's lifecycle
    throw Error("Failed to fetch users: " + error.message);
  }
});
// const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
//   return axios
//     .get("https://jsonplaceholder.typicode.com/users")
//     .then((response) => {
//       return response.data.map((user) => user.id);
//     });
// });

export default userSlice;
export { fetchUsers };
