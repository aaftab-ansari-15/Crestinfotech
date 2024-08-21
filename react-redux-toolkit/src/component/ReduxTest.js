import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../redux-toolkit/user/userSlice";

import React, { useEffect } from "react";

const ReduxTest = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  // console.log(store.dispatch(fetchUsers()));
  return (
    <div>
      <h2>List of users</h2>
      {user.loading && <div>...loading</div>}
      {!user.loading && user.error ? <div>Error: {user.error}</div> : null}
      {!user.loading && user.users.length ? (
        <ul>
          {console.log(user)}
          {user.users.map((user, index) => (
            <li key={index}>{user.name}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default ReduxTest;
