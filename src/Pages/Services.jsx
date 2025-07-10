import React, { useState } from "react";
import hairBlesserOfficial from "../assets/hairBlesserOfficial.png";

// Example styles – replace with your real images and style names
// import style1 from "../assets/styles/braids.jpg";
// import style2 from "../assets/styles/twist.jpg";
// import style3 from "../assets/styles/locs.jpg";

const hairstyles = [
  {
    name: "Crochet",
    image: style1,
    variations: ["Hair Not Included", "Hair Included", "Illusion Method"],
    disclaimer: "Pease have hair washed - blow dried. Soft locs-$200 if you would like me to include hair. Individuals are only for loc styles !! prices listed for individuals are for hair Not included.",
  },
  {
    name: "Invisible Locs",
    image: style2,
    variations: ["BOHO Bob Invisible Locs", "Small Mid Length BOHO","Small Bob (No BOBHO)", "Small Mid Length (No BOHO)"],
    disclaimer: "There is a $30 deposit for all BOHO styles as of June 1st, 2025 due to an increase in price for 100% human hait. (Zelle, Cash App, Apple Pay) Hair included plese have hair washed - blow dried.",
  },
  {
    name: "Kids Braided Styles",
    image: style3,
    variations: ["Small Knotless", "Medium Knotless", "Fulani Braids (curls at the Ends)", "Fulani Braids W/beads", "Medium Boho Knotless", "Smedium BOHO", "Small BOHO Knotless", "Large Knotless", "Braided style Reach out for $", "Soft Locs Medium size", "Soft Locs Small size", "Butterfly Loc Smedium", "Quick Weave W/crochet No Glue", "Butterfly Loc Medium", "Micro Twist/ Synthetic hair Added", "Natural Twist"],
    disclaimer: "Plese have hair washed - blow dried. Hair/accessories included. All styles are mid-arm pit length, if you would like a waist lenth please reach out for final price. Please reach out to let me know what accessories if any you need. Deposit is required for human hair micro twist",
  },
  {
    name: "All Loc Services",
    image: style4,
    variations: ["Loc Attachments/human Locs FullHead", "Loc Attachments/human Locs HalfHead", "Retwist Half Head", "Starter Locs", "Loc Removing (20-60locs)", "Loc Removing (60-120locs)", "Micro Locs"],
    disclaimer: "Attachments - $40 non refundable deposit required. If you need me to provide the hair. If you have the hair, provide at least 80 locs. Retwist - come washed. Loc removing is a 3-4 day service. At least half will be due after the first appointment.",
  },
  {
    name: "Wicks",
    image: style5,
    variations: ["Starter Service", "Maintenance"],
    disclaimer: "Plese have hair washed - blow dried for starter service. For a maintenance service wash is included. Your hair has to be at least 3 inches for the starter service.",
  },
  {
    name: "Men Braids/Styles",
    image: style6,
    variations: ["Straight Back", "Finger Coils", "Box Braids", "Two Strand Twist"],
    disclaimer: "Pease have hair washed - blow dried.",
  },
    {
    name: "Sew In",
    image: style7,
    variations: ["With Closure", "Leave Out"],
    disclaimer: "Pease have hair washed - blow dried. I do not include the bundles. if you need the bundles provided, the cost of the bundles are to be paid at time of purchase.",
  },
    {
    name: "Sleek Pony Tail",
    image: style8,
    variations: ["Need hair provided", "Hair not provided"],
    disclaimer: "Pease have hair washed - blow dried. Natural hair must be at least 6inches.",
  },
    {
    name: "Box Braids Services",
    image: style9,
    variations: ["Small Mid Length", "Small Waist Length", "Small Butt Length", "Small Thight Length", "X Small Mid Length", "X Small Waist Length", "Smedium Mid Length"],
    disclaimer: "Pease have hair washed - blow dried.",
  },
    {
    name: "Knotless Braids Services",
    image: style10,
    variations: ["Large Knotless Waist Length", "Large Knotless Thigh Length", "Medium Mid Length", "Medum Waist Length", "Medium Butt Length", "Medium Thigh Length", "Medium Knee Length", "Smedium Mid Length", "Smedium Waist Length", "Smedium Butt Lenght", "Smedium Thigh Length", "Small Mid Length", "Small Waist Length", "Small Butt Length", "Small Thigh Length", "Small/Smedium Bob (no BOHO)", "Extra Small Mid Lenght", "Extra Small Waist Length", "Extram small Butt Length"],
    disclaimer: "Hair included! Pease have hair washed - blow dried.",
  },
    {
    name: "BOHO KNOTLESS BRAID SERVICES",
    image: style11,
    variations: ["Bob Kntless Medium BOB", "BOHO Knotless Small BOB", "BOHO Knotless BOB for Long hair", "BOHO Small Mid Length", "BOHO Small Waist Length", "BOHO Small Butt Length", "BOHO Smedium Mid Length", "BOHO Smedium Waist Length", "BOHO Smedium Butt Length", "BOHO Smedium Thigh Length", "BOHO Medium Mid Length", "BOHO Medium Waist Length", "BOHO Medium Butt Length", "BOHO Medium Thigh Lenght", "BOHO Large Butt Length", "BOHO Large Thigh Length", "BOHO Large Waist Length"],
    disclaimer: "Hair included, There is a $40 non refundable deposit that is due at least 48HRS before your appointment or appointment will be canceled. Cancellation fee will be charged. Pease have hair washed - blow dried. For 2 colors the curls only there will be an extra $60 charge. Any color(s) available for the braiding hair (no extra charge) Bob length is for natural hair that DOES NOT  pass the top of your shoulders. There WILL be an extra charge if your hair passes your shoulers. Definitely deep wave is used, plese Let Me Know if you would like something else.",
  },
    {
    name: "Men Braids/Styles",
    image: style,
    variations: ["Straight Back", "Finger Coils", "Box Braids", "Two Strand Twist"],
    disclaimer: "Pease have hair washed - blow dried.",
  },
];

export const Services = () => {
  const [selectedStyle, setSelectedStyle] = useState(null);

  const handleCardClick = (style) => {
    setSelectedStyle(style);
  };

  const handleClose = () => {
    setSelectedStyle(null);
  };

  return (
    <div
      className="home container-fluid position-relative text-white"
      style={{ minHeight: "100vh", overflow: "hidden" }}
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

    
      <div className="position-relative z-2 container py-5" style={{ zIndex: 2 }}>
        <h1 className="text-center mb-4">Our Hairstyles</h1>
        <p className="text-center mb-5">Click on a style to view variations</p>

        <div className="row g-4 justify-content-center">
          {hairstyles.map((style, index) => (
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3"
              key={index}
              onClick={() => handleCardClick(style)}
              style={{ cursor: "pointer" }}
            >
              <div className="card bg-dark text-white border-0 shadow rounded-4 h-100">
                <img
                  src={style.image}
                  className="card-img-top rounded-top-4"
                  alt={style.name}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{style.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedStyle && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
          onClick={handleClose}
        >
          <div
            className="modal-dialog modal-lg modal-dialog-centered"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content bg-dark text-white rounded-4">
              <div className="modal-header border-0">
                <h5 className="modal-title">{selectedStyle.name}</h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={handleClose}
                ></button>
              </div>
              <div className="modal-body text-center">
                <img
                  src={selectedStyle.image}
                  alt={selectedStyle.name}
                  className="img-fluid rounded mb-4"
                  style={{ maxHeight: "300px", objectFit: "cover" }}
                />
                <p className="mb-3 text-warning">
                  <strong>Note:</strong> {selectedStyle.disclaimer}
                </p>
                <h6>Style Variations:</h6>
                <ul className="list-unstyled">
                  {selectedStyle.variations.map((variation, i) => (
                    <li key={i}>• {variation}</li>
                  ))}
                </ul>
              </div>
              <div className="modal-footer border-0 justify-content-center">
                <button className="btn btn-hotpink" onClick={handleClose}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;