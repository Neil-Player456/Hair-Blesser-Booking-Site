import React from "react";
import "./App.css";
import Navbar from "./components/NavBar";
import { AppRoutes } from "./routes/AppRoutes";


export const App = () => {
  return (
    <>
      <Navbar />
      <AppRoutes />
    </>
  );
};

export default App;
