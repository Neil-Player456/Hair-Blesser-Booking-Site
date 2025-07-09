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
            <h1 className="reviews">Reviews</h1>
            <div
              style={{
                height: "2px",
                backgroundColor: "white",
                width: "60%",
                margin: "1.5rem auto",
              }}
            ></div>
            <h1 className="buisnessHours">Buisness Hours</h1>
            <div>
              <ul style={{ listStyleType: "none", padding: 0 }}>
                <li className="d-flex justify-content-between py-1 fw-bold">
                  <span className="col1">Monday</span>
                  <span className="col2">9AM - 12AM</span>
                </li>
                <li className="d-flex justify-content-between py-1 text-muted fw-bold">
                  <span className="col1">Tuesday</span>
                  <span className="col2">Closed</span>
                </li>
                <li className="d-flex justify-content-between py-1 fw-bold">
                  <span className="col1">Wednesday</span>
                  <span className="col2">9AM - 4:30PM</span>
                </li>
                <li className="d-flex justify-content-between py-1 fw-bold">
                  <span className="col1">Thursday</span>
                  <span className="col2">9:30AM - 12AM</span>
                </li>
                <li className="d-flex justify-content-between py-1 fw-bold">
                  <span className="col1">Friday</span>
                  <span className="col2">9:30AM - 12AM</span>
                </li>
                <li className="d-flex justify-content-between py-1 fw-bold">
                  <span className="col1">Saturday</span>
                  <span className="col2">10AM - 12AM</span>
                </li>
                <li className="d-flex justify-content-between py-1 text-muted fw-bold">
                  <span className="col1">Sunday</span>
                  <span className="col2">Closed</span>
                </li>
              </ul>
            </div>
            <div
              style={{
                height: "2px",
                backgroundColor: "white",
                width: "60%",
                margin: "1.5rem auto",
              }}
            ></div>
            <h1 className="cancellationPolicy">Cancellation Policy</h1>
            <div className="d-flex justify-content-center">
              <p
                className="fw-bold text-white text-center"
                style={{
                  maxWidth: "700px",
                  padding: "1rem",
                  lineHeight: "1.6",
                  backgroundColor: "rgba(0, 0, 0, 0.4)",
                  borderRadius: "12px",
                }}
              >
                If you cancel or reschedule within the 48-hour time frame, you
                will be charged 20% of the style you were getting — 50% for Boho
                styles. There is no booking fee unless you book Boho. Your card
                will not be charged when you book, only if you cancel or
                reschedule within 48 hours. No call, no shows will be charged
                full price.
              </p>
            </div>
            <div
              style={{
                height: "2px",
                backgroundColor: "white",
                width: "60%",
                margin: "1.5rem auto",
              }}
            ></div>
            <h1 className="ratingAndReviews">Rating & Reviews</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
