import React, { useEffect, useState } from "react";
import hairBlesserOfficial from "../assets/hairBlesserOfficial.png";
import { Link } from "react-router-dom";

export const Home = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

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

      <div className="stars-overlay" ></div>

      <div className="hair-blesser-intro welcome-script">❤️WELCOME❤️</div>

      <div
        className="position-relative z-2 d-flex justify-content-center align-items-center w-100 h-100"
        style={{ zIndex: 2 }}
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
