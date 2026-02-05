import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
 
// Import placeholder image (replace with actual image when added)
import GlobeImage from "../assets/PipzoMarketLogo.png"; // Fallback for globe.png
// Add this image to src/assets/
import ActualGlobeImage from "../assets/globe.png"; // Add this file

const regulations = [
  ["FFAJ", "The Financial Futures Association of Japan", "Japan"],
  ["CySEC", "Cyprus Securities and Exchange Commission", "Cyprus"],
  ["ISA", "Israel Securities Authority", "Israel"],
  ["IIROC", "Investment Industry Regulatory Organization of Canada", "Canada"],
  [
    "ADGM",
    "Abu Dhabi Global Markets Financial Services Regulatory Authority",
    "UAE",
  ],
  ["CBI", "Central Bank of Ireland", "Ireland"],
  ["BVIFSC", "British Virgin Islands Financial Services Commission", "BVI"],
  ["FSCA", "South Africa’s Financial Sector Conduct Authority", "South Africa"],
  ["ASIC", "Australian Securities and Investments Commission", "Australia"],
];

const TrustSection: React.FC = () => {
  return (
    <div
      className="py-5 text-white"
      style={{
        background: "linear-gradient(to bottom right, #000000, #1a1a1a)",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <div className="container">
        <h2 className="fw-bold display-5 text-center mb-3">
          You're in <span style={{ color: "#00BFA6" }}>Safe Hands</span>
        </h2>
        <p className="lead text-center text-light mb-4">
           Vintageprimefx is regulated in 9 jurisdictions worldwide,
          <br /> ensuring trust, compliance, and security.
        </p>

        <div className="text-center mb-5">
          <Link
            to="/register"
            className="btn fw-bold px-4 py-2"
            style={{
              backgroundColor: "#00BFA6",
              color: "#000",
              borderRadius: "30px",
              transition: "0.3s",
              textDecoration: "none",
            }}
          >
            Register Now
          </Link>
        </div>

        <div className="row align-items-center">
          {/* Image */}
          <div className="col-lg-6 mb-4 mb-lg-0 d-flex justify-content-center">
            <div
              className="rounded-4 shadow-lg overflow-hidden"
              style={{
                maxHeight: "400px",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <img
                src={ActualGlobeImage || GlobeImage}
                alt="Global Regulation Map"
                className="img-fluid"
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "contain",
                  padding: "20px",
                }}
              />
            </div>
          </div>

          {/* List */}
          <div className="col-lg-6 text-start">
            <div
              className="p-4 rounded-4 shadow"
              style={{
                maxHeight: "400px",
                overflowY: "auto",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <ul className="list-unstyled mb-0">
                {regulations.map(([code, name, country], index) => (
                  <li
                    key={index}
                    className="d-flex align-items-start mb-3"
                    style={{ gap: "14px" }}
                  >
                    <span
                      className="py-2 px-3 rounded-pill text-dark fw-bold small"
                      style={{
                        backgroundColor: "#00BFA6",
                        minWidth: "60px",
                        textAlign: "center",
                        fontSize: "0.75rem",
                      }}
                    >
                      {code}
                    </span>
                    <div>
                      <div className="fw-semibold text-white">{name}</div>
                      <small
                        className="text-light"
                        style={{ fontSize: "0.75rem" }}
                      >
                        {country}
                      </small>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustSection;
