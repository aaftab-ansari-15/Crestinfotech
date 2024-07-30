import React from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <TextForm />
      </div>
    </>
  );
};

export default App;
