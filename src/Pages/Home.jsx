import React, { useEffect, useState } from "react";
import hairBlesserOfficial from "../assets/hairBlesserOfficial.png";
import { Link } from "react-router-dom";

export const Home = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    setShowButton(true);
  }, []);

  return (
    <div
      className="home container-fluid d-flex justify-content-center align-items-center position-relative"
      style={{
        minHeight: "100dvh", // uses dynamic viewport height
        width: "100vw",
        overflow: "hidden",
      }}
    >
      {/* Background */}
      <div
        style={{
          position: "fixed", // fill viewport on all devices
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundImage: `url(${hairBlesserOfficial})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 0, // behind everything
        }}
      />

      <div className="stars-overlay" />

      {/* Main content / button */}
      <div
        className="position-relative d-flex justify-content-center align-items-center w-100 h-100"
        style={{ zIndex: 1 }} // above background, below navbar
      >
        {showButton && (
          <Link to="/book">
            <button type="button" className="custom-btn btn-lg fade-in">
              Book Now
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Home;