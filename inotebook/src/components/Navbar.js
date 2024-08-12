import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  let location = useLocation();
  const authToken = sessionStorage.getItem("authToken");
  const handleLogout = ()=> {
    // Clear all values in sessionStorage
      sessionStorage.clear();
    window.location.reload();

  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Inotebook
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
            {!authToken && (
              <div className="d-flex">
                <Link
                  type="button"
                  to="/Login"
                  className={`btn btn-primary mx-2`}
                >
                  Login
                </Link>
                <Link
                  type="button"
                  to="/Signup"
                  className={`btn btn-primary mx-2`}
                >
                  Signup
                </Link>
              </div>
            )}
            {authToken && (
              <Link
              type="button"
              to="/"
              className={`btn btn-primary mx-2`}
              onClick={handleLogout}
            >
              Logout
            </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
