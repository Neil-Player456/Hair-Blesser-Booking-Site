import React from "react";
import { Routes, Route } from "react-router-dom";

import About from "../Pages/About";
import Services from "../Pages/Services";
import Contact from "../Pages/Contact";
import Book from "../Pages/Book";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Book />} />
      <Route path="about" element={<About />} />
      <Route path="services" element={<Services />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  );
}