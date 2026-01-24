import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-transparent px-4 position-fixed w-100" style={{ zIndex: 1000, top: 0 }}
    >
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          HairBlesser Fashioned by Jorgia
        </NavLink>

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