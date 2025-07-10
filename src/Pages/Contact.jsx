import React from "react";
import hairBlesserOfficial from "../assets/hairBlesserOfficial.png";

export const Contact = () => {
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
        <div
          className="section bg-dark bg-opacity-75 p-5 rounded-4 shadow-lg text-white w-100"
          style={{ maxWidth: "500px" }}
        >
          <h1 className="askAQuestion text-center mb-4">
            Ask Hair Blesser A Question
          </h1>

          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingName"
              placeholder="Your name"
            />
            <label htmlFor="floatingName">Name</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingEmail"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingEmail">Email</label>
          </div>

          <div className="form-floating mb-4">
            <textarea
              className="form-control"
              placeholder="Leave your message here"
              id="floatingMessage"
              style={{ height: "150px" }}
            ></textarea>
            <label htmlFor="floatingMessage">Message</label>
          </div>
          <div className="hairBlesserMessage text-center">
            <span>Hair blesser will recieve an email with your message</span>
          </div>

          <button
            type="submit"
            className="sendEmailBtn btn btn-hotpink w-100 fw-bold text-white"
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
