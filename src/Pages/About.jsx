import React, { useState } from "react";
import hairBlesserOfficial from "../assets/hairBlesserOfficial.png";

export const About = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [reviews, setReviews] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating > 0 && reviewText.trim() !== "") {
      setReviews([...reviews, { rating, text: reviewText }]);
      setRating(0);
      setHover(0);
      setReviewText("");
      setShowForm(false);
    }
  };

  return (
    <div
      className="home container-fluid position-relative"
      style={{
        minHeight: "100vh",
        width: "100vw",
        overflowX: "hidden",
      }}
    >
      <div
        className="position-fixed top-0 start-0 w-100 h-100"
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
        className="position-relative z-2 d-flex flex-column align-items-center w-100"
        style={{ zIndex: 2, paddingBottom: "5rem" }}
      >
        <div className="section py-5 text-center text-white w-100 px-3">
          <div>
            <h1 className="reviews">Leave A Review</h1>
            <div className="text-white mb-4">
              {!showForm ? (
                <button
                  className="custom-btn w-100"
                  onClick={() => setShowForm(true)}
                  style={{ maxWidth: "300px" }}
                >
                  Leave a Review
                </button>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  style={{ maxWidth: "500px", margin: "0 auto" }}
                >
                  <div className="mb-2">
                    {[...Array(5)].map((_, i) => {
                      const starValue = i + 1;
                      return (
                        <label key={i}>
                          <input
                            type="radio"
                            name="rating"
                            value={starValue}
                            onClick={() => setRating(starValue)}
                            style={{ display: "none" }}
                          />
                          <span
                            style={{
                              fontSize: "2rem",
                              color:
                                starValue <= (hover || rating)
                                  ? "deeppink"
                                  : "#e4e5e9",
                              cursor: "pointer",
                            }}
                            onMouseEnter={() => setHover(starValue)}
                            onMouseLeave={() => setHover(0)}
                          >
                            ★
                          </span>
                        </label>
                      );
                    })}
                  </div>

                  <textarea
                    className="form-control mb-2"
                    rows="2"
                    placeholder="Leave your review here..."
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    required
                    style={{
                      resize: "none",
                      fontSize: "0.9rem",
                      backgroundColor: "deeppink",
                      color: "white",
                      border: "2px solid white",
                    }}
                  />

                  <div className="d-flex gap-2">
                    <button type="submit" className="custom-btn w-100">
                      Submit Review
                    </button>
                    <button
                      type="button"
                      className="custom-btn w-100"
                      onClick={() => {
                        setShowForm(false);
                        setRating(0);
                        setHover(0);
                        setReviewText("");
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}
            </div>

            <div
              style={{
                height: "2px",
                backgroundColor: "white",
                width: "60%",
                margin: "1.5rem auto",
              }}
            ></div>

            <h1 className="buisnessHours">Business Hours</h1>
            <ul
              style={{
                listStyleType: "none",
                padding: 0,
                maxWidth: "400px",
                margin: "0 auto",
                fontSize: "1rem",
              }}
            >
              {[["Monday", "9AM - 12AM"],
                ["Tuesday", "Closed"],
                ["Wednesday", "9AM - 4:30PM"],
                ["Thursday", "9:30AM - 12AM"],
                ["Friday", "9:30AM - 12AM"],
                ["Saturday", "10AM - 12AM"],
                ["Sunday", "Closed"]].map(([day, hours], i) => (
                <li
                  key={i}
                  className={`d-flex justify-content-between py-1 fw-bold ${
                    day === "Tuesday" || day === "Sunday" ? "text-muted" : ""
                  }`}
                >
                  <span>{day}</span>
                  <span>{hours}</span>
                </li>
              ))}
            </ul>

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
                  fontSize: "0.95rem",
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
            <div
              className="text-start text-white mt-4"
              style={{ maxWidth: "700px", margin: "0 auto" }}
            >
              {reviews.map((review, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: "rgba(255,255,255,0.1)",
                    padding: "1rem",
                    borderRadius: "10px",
                    marginBottom: "1rem",
                  }}
                >
                  <div style={{ color: "deeppink", fontSize: "1.2rem" }}>
                    {"★".repeat(review.rating)}
                    <span style={{ color: "#e4e5e9" }}>
                      {"★".repeat(5 - review.rating)}
                    </span>
                  </div>
                  <p className="mb-0" style={{ fontSize: "0.95rem" }}>
                    {review.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;