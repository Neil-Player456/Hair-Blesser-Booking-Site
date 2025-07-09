import React from "react";
import hairBlesserOfficial from "../assets/hairBlesserOfficial.png";

export const About = () => {
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
          filter: "blur(2px)",
          zIndex: 1,
        }}
      />
      <div
        className="position-relative z-2 d-flex justify-content-center align-items-center w-100 h-100"
        style={{ zIndex: 2 }}
      >
        {/* You can add content here like a button or heading */}
        <div className="section py-5 text-center text-white">
          <div>
            <h1>Reviews</h1>
            <div
              style={{
                height: "2px",
                backgroundColor: "white",
                width: "60%",
                margin: "1.5rem auto",
              }}
            ></div>
            <h1>Buisness Hours</h1>
             <div
              style={{
                height: "2px",
                backgroundColor: "white",
                width: "60%",
                margin: "1.5rem auto",
              }}
            ></div>
            <h1>Cancellation Policy</h1>
             <div
              style={{
                height: "2px",
                backgroundColor: "white",
                width: "60%",
                margin: "1.5rem auto",
              }}
            ></div>
            <h1>Rating & Reviews</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
