import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Modal from "react-modal";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NoteState from "./context/NoteState";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Footer from "./components/Footer";

Modal.setAppElement("#root"); // Ensure this matches the root element of your app

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <div className="wrapper">
          <Navbar />
          <div className="content">
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="About" element={<About />}></Route>
              <Route exact path="Login" element={<Login />}></Route>
              <Route exact path="Signup" element={<Signup />}></Route>
            </Routes>
          </div>
          <Footer />
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
