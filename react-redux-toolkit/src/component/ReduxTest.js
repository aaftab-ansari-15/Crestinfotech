import store from "../redux-toolkit/store";
import { fetchUsers } from "../redux-toolkit/user/userSlice";

import React from "react";

const ReduxTest = () => {
  console.log(store.dispatch(fetchUsers()));
  return <div>testRedux</div>;
};

export default ReduxTest;
