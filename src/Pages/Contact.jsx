import React from "react";
import hairBlesserOfficial from "../assets/hairBlesserOfficial.png";

export const Contact = () => {
  return (
    <div className="contact-page">
      <div
        className="contact-bg"
        style={{ backgroundImage: `url(${hairBlesserOfficial})` }}
      />

      <div className="contact-content container-fluid d-flex justify-content-center align-items-center">
        <div className="section bg-dark bg-opacity-75 p-5 rounded-4 shadow-lg text-white w-100" style={{ maxWidth: "500px" }}>
          <h1 className="askAQuestion text-center mb-4">
            Ask Hair Blesser A Question
          </h1>

          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="floatingName" placeholder="Your name" />
            <label htmlFor="floatingName">Name</label>
          </div>

          <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingEmail" placeholder="name@example.com" />
            <label htmlFor="floatingEmail">Email</label>
          </div>

          <div className="form-floating mb-4">
            <textarea className="form-control" id="floatingMessage" placeholder="Leave your message here" style={{ height: "150px" }} />
            <label htmlFor="floatingMessage">Message</label>
          </div>

          <div className="hairBlesserMessage text-center mb-3">
            <span>Hair Blesser will receive an email with your message</span>
          </div>

          <button type="submit" className="sendEmailBtn btn btn-hotpink w-100 fw-bold text-white">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
