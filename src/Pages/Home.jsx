import React from "react";
import hairBlesserOfficial from "../assets/hairBlesserOfficial.png";
import { Link } from "react-router-dom";

export const Home = () => {
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
      <Link to="/book">
        <button type="button" className="custom-btn btn-lg">
          Book Now
        </button>
      </Link>
    </div>
  );
};

export default Home;
