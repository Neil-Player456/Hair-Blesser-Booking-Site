import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent fixed-top">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          HairBlesser Fashioned by Jorgia
        </NavLink>

        {/* Hamburger button (mobile only automatically) */}
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

        {/* Collapsible links */}
        <div
          className="collapse navbar-collapse mt-2 mt-lg-0"
          id="main-navbar"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center text-lg-start">
            <li className="nav-item">
              <NavLink to="/" end className="nav-link">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">
                Contact
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/book" className="nav-link">
                Book
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}