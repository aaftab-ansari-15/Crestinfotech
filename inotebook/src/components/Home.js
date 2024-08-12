import React from "react";
import Notes from "./Notes";
export const Home = () => {
  const authToken = sessionStorage.getItem('authToken');
  
  return (
    <div className="home">
{authToken && <Notes />}
{!authToken && <><h2>You need to login to add or see your notes.</h2><h2>Try creating new Account if you dont have one.</h2></>}
    </div>
  );
};

export default Home;
