import React from "react";
 
import "bootstrap/dist/css/bootstrap.min.css";

const TradingPlatforms: React.FC = () => {
  return (
    <div
      className="trading-section py-5 text-white"
      style={{
        background: "linear-gradient(to bottom right, #000000, #1a1a1a)",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <div className="container">
        <h2 className="fw-bold display-5 text-center mb-2">
          Endless Trading Opportunities{" "}
          <span style={{ color: "#00BFA6" }}>Await</span>
        </h2>
        <p className="text-center text-light mb-5">
          Try our advanced platforms and never miss a trade!
        </p>

        <div className="row g-4">
          <div className="col-lg-8">
            <div
              className="position-relative rounded-4 overflow-hidden shadow d-flex align-items-center justify-content-center"
              style={{
                height: "400px",
                backgroundColor: "rgba(255,255,255,0.05)",
              }}
            >
              <img
                src="/assets/track.jpg"
                alt="WebTrader"
                className="img-fluid"
                style={{
                  maxHeight: "85%",
                  maxWidth: "85%",
                  objectFit: "contain",
                }}
              />
              <div
                className="position-absolute bottom-0 start-0 w-100 p-4"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0))",
                }}
              >
                <h4 className="fw-bold">WebTrader</h4>
                <p className="mb-1 small">
                  A sleek, easy-to-use desktop trading platform
                </p>
                <a href="#" className="text-warning fw-semibold small">
                  Learn More &rsaquo;
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 d-flex flex-column gap-4">
            {[
              {
                title: "MetaTrader 4",
                desc: "No.1 trading platform",
              },
              {
                title: "MetaTrader 5",
                desc: "Advanced trading across 1,250+ assets",
              },
            ].map((platform, i) => (
              <div
                key={i}
                className="position-relative rounded-4 overflow-hidden shadow d-flex align-items-center justify-content-center"
                style={{
                  height: "180px",
                  backgroundColor: "rgba(255,255,255,0.05)",
                }}
              >
                <img
                  src="/assets/track.jpg"
                  alt={platform.title}
                  className="img-fluid"
                  style={{
                    maxHeight: "75%",
                    maxWidth: "75%",
                    objectFit: "contain",
                  }}
                />
                <div
                  className="position-absolute bottom-0 start-0 w-100 p-3"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0))",
                  }}
                >
                  <h6 className="fw-bold mb-0">{platform.title}</h6>
                  <small className="d-block mb-1">{platform.desc}</small>
                  <a href="#" className="text-warning fw-semibold small">
                    Learn More &rsaquo;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Smaller Cards */}
        <div className="row g-4 mt-4">
          {[
            {
              title: "DupliTrade™",
              desc: "Mirror the strategies of expert traders automatically.",
              image: "/assets/track.jpg",
            },
            {
              title: " VintageprimefxOptions",
              desc: "Balance risk and reward to match your market view.",
              image: "/assets/track.jpg",
            },
          ].map((item, i) => (
            <div className="col-md-6" key={i}>
              <div
                className="position-relative rounded-4 overflow-hidden shadow d-flex align-items-center"
                style={{
                  height: "160px",
                  backgroundColor: "rgba(255,255,255,0.05)",
                }}
              >
                <div className="px-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="img-fluid rounded"
                    style={{
                      maxHeight: "90px",
                      width: "auto",
                      objectFit: "contain",
                    }}
                  />
                </div>
                <div className="px-2">
                  <h6 className="fw-bold mb-1">{item.title}</h6>
                  <p className="small mb-1 text-light">{item.desc}</p>
                  <a href="#" className="text-warning fw-semibold small">
                    Learn More &rsaquo;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TradingPlatforms;
