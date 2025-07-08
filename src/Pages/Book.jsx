import React from "react";
import hairBlesserOfficial from "../assets/hairBlesserOfficial.png";

export const Book = () => {
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
      </div>
    </div>
  );
};

export default Book;
