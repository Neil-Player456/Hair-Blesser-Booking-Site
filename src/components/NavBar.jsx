import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent fixed-top">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          HairBlesser Fashioned by Jorgia
        </NavLink>

        {/* Hamburger button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main-navbar"
          aria-controls="main-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="main-navbar">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/book"
                end
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
              >
                Book
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}