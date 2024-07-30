import React from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<TextForm />} />
        <Route path="About" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
