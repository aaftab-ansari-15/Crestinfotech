import store from "./store";
import { fetchUsers } from "./user/userSlice";

store.dispatch(fetchUsers());
