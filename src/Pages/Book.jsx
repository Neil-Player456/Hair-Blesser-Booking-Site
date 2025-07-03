import React from "react";
import hairBlesserOfficial from "../assets/hairBlesserOfficial.png";

export const Book = () => {
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
      <button type="button" className="custom-btn btn-lg">
        Book Now
      </button>
    </div>
  );
}

export default Book;


