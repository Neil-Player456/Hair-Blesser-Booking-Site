import React from "react";
import { Routes, Route } from "react-router-dom";

import About from "../Pages/About";
import Services from "../Pages/Services";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import Book from "../Pages/Book";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="services" element={<Services />} />
      <Route path="contact" element={<Contact />} />
      <Route path="book" element={<Book />} />
    </Routes>
  );
}