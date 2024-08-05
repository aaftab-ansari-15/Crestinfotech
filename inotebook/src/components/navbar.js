import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  let location = useLocation();
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/About" ? "active" : ""
                  }`}
                  to="/About"
                >
                  About
                </Link>
              </li>
            </ul>
            <div className="d-flex">
              <Link
                type="button"
                to="/Login"
                className={`btn btn-primary mx-2 ${
                  location.pathname === "/About" ? "active" : ""
                }`}
              >
                Login
              </Link>
              <Link
                type="button"
                to="/Signup"
                className={`btn btn-primary mx-2 ${
                  location.pathname === "/About" ? "active" : ""
                }`}
              >
                Signup
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
