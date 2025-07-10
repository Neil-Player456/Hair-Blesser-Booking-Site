import React from "react";
import hairBlesserOfficial from "../assets/hairBlesserOfficial.png";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div
      className="home container-fluid d-flex justify-content-center align-items-center position-relative"
      style={{
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
      }}
    >
      <div
        className="position-absolute w-100 h-100"
        style={{
          backgroundImage: `url(${hairBlesserOfficial})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 1,
        }}
      />
      <div
        className="position-relative z-2 d-flex justify-content-center align-items-center w-100 h-100"
        style={{ zIndex: 2 }}
      >
        <Link to="/book">
          <button type="button" className="custom-btn btn-lg">
            Book Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
