import React from "react";
import "./App.css";
import hairBlesserOfficial from "./assets/hairBlesserOfficial.png";


export const App = () => {
  return (
    <div
      className="home container-fluid d-flex justify-content-center align-items-center"
      style={{
        backgroundImage: `url(${hairBlesserOfficial})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div className="book-nowBtn">
        <button type="button" className="custom-btn btn-lg">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default App;
