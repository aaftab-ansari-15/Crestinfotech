import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../context/store";
const ReactReduxThunk11 = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchData()); // Dispatch the async thunk on mount
  }, [dispatch]);

  return (
    <div>
      <h1>Async Thunk Example</h1>
      {status === "loading" && <p>Loading...</p>}
      {status === "succeeded" && <pre>{JSON.stringify(data, null, 2)}</pre>}
      {status === "failed" && <p>Error fetching data</p>}
    </div>
  );
};

export default ReactReduxThunk11;
