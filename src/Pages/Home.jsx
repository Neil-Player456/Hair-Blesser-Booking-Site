import React, { useEffect, useState } from "react";
import hairBlesserOfficial from "../assets/hairBlesserOfficial.png";
import { Link } from "react-router-dom";

export const Home = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    setShowButton(true);
  }, []);

  return (
    <div className="home container-fluid d-flex justify-content-center align-items-center">
      {/* Background */}
      <div
        className="home-bg"
        style={{ backgroundImage: `url(${hairBlesserOfficial})` }}
      />

      {/* Stars overlay */}
      <div className="stars-overlay" />

      {/* Button */}
      <div className="position-relative d-flex justify-content-center align-items-center w-100 h-100">
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