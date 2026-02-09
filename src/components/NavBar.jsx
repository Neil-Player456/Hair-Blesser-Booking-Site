import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  useEffect(() => {
    if (window.innerWidth <= 768) {
      const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
      const navbarCollapse = document.getElementById("main-navbar");

      navLinks.forEach((link) => {
        link.addEventListener("click", () => {
          if (navbarCollapse.classList.contains("show")) {
            const collapse = new window.bootstrap.Collapse(navbarCollapse, {
              toggle: true,
            });
            collapse.hide();
          }
        });
      });
    }
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent fixed-top">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          HairBlesser Fashioned by Jorgia
        </NavLink>

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