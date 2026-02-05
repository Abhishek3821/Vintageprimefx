import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// Import images (replace with actual images when added)
import OptionsBanner from "../../../assets/forex-banner.jpg"; // Fallback for options-banner.jpg
import CallPutIllustration from "../../../assets/ActualCallPutIllustration.png"; // Fallback for call-put-illustration.png
// Add these images to src/assets/
import ActualOptionsBanner from "../../../assets/forex-banner.jpg"; // Add this file
import ActualCallPutIllustration from "../../../assets/ActualCallPutIllustration.png"; // Add this file

const VanillaOptions: React.FC = () => {
  interface Strategy {
    title: string;
    desc: string;
  }

  const strategies: Strategy[] = [
    {
      title: "Straddle",
      desc: "Buy call & put at same strike to profit from large price swings.",
    },
    {
      title: "Strangle",
      desc: "Buy call & put at different strikes for a lower cost strategy.",
    },
    {
      title: "Covered Call",
      desc: "Own the asset and sell a call to generate income.",
    },
  ];

  const navigate = useNavigate();

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Placeholder for form submission logic
    navigate("/subscribe");
  };

  return (
    <>
      <section
        className="text-white d-flex align-items-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${ActualOptionsBanner || OptionsBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "60vh",
          fontFamily: "Segoe UI, sans-serif",
        }}
      >
        <div className="container text-center">
          <h1 className="fw-bold" style={{ fontSize: "2rem" }}>
            Vanilla <span className="text-warning">Options</span>
          </h1>
          <p className="lead mb-4" style={{ fontSize: "1.2rem" }}>
            Contracts that give you the right—but not the obligation—to trade at
            a set price/time.
          </p>
          <Link
            to="/learn"
            className="btn btn-warning fw-semibold px-4 py-2 rounded-pill shadow"
            style={{ fontSize: "1.5rem", textDecoration: "none" }}
          >
            Learn More
          </Link>
        </div>
      </section>

      <section
        id="intro"
        className="py-5 text-light"
        style={{
          background: "linear-gradient(to bottom right, #000000, #1a1a1a)",
          fontFamily: "Segoe UI, sans-serif",
        }}
      >
        <div className="container">
          <div className="row justify-content-left text-left mb-5">
            <div className="col-lg-8">
              <h2
                className="fw-bold mb-3"
                style={{ color: "#00BFA6", fontSize: "1.75rem" }}
              >
                What Are Vanilla Options?
              </h2>
              <p className="lead" style={{ fontSize: "1.5rem" }}>
                Vanilla options give traders the right, without obligation, to
                buy or sell an asset at a predefined price or time.
              </p>
              <p style={{ fontSize: "1.5rem" }}>
                They are derivative contracts referencing an underlying
                asset—like Forex—similar to insurance contracts with an upfront
                premium.
              </p>
            </div>
          </div>

          <div className="row align-items-center mb-5">
            <div className="col-md-6 mb-4">
              <h4
                className="fw-bold mb-3"
                style={{ color: "#00BFA6", fontSize: "1.5rem" }}
              >
                Calls & Puts
              </h4>
              <ul className="list-unstyled" style={{ fontSize: "1.5rem" }}>
                <li>
                  <strong>Call Option:</strong> Right to buy. Buyer pays a
                  premium.
                </li>
                <li>
                  <strong>Put Option:</strong> Right to sell. Buyer pays a
                  premium.
                </li>
              </ul>
              <p style={{ fontSize: "1rem" }}>
                Options derive value from an underlying asset but don’t obligate
                purchase or sale.
              </p>
            </div>
            <div className="col-md-6 text-center">
              <img
                src={ActualCallPutIllustration || CallPutIllustration}
                alt="Call and Put Options"
                className="img-fluid rounded shadow-sm"
                style={{ maxHeight: "auto" }}
              />
            </div>
          </div>

          <div className="mb-5">
            <h4
              className="fw-bold mb-3"
              style={{ color: "#00BFA6", fontSize: "1.5rem" }}
            >
              Other Concepts
            </h4>
            <h6 style={{ fontSize: "1.5rem" }}>Spread</h6>
            <p style={{ fontSize: "1.2rem" }}>
              Spread = Ask – Bid. It's the cost to open and close an option
              position. Tight spreads mean lower cost.
            </p>
            <h6 style={{ fontSize: "1.5rem" }}>Order Types</h6>
            <ul style={{ fontSize: "1.2rem" }}>
              <li>
                <strong>Market Order</strong>: Execute immediately.
              </li>
              <li>
                <strong>Limit/Stop Order</strong>: Execute at your desired
                price.
              </li>
              <li>
                <strong>GTC:</strong> Valid until canceled.
              </li>
            </ul>
            <h6 style={{ fontSize: "1.5rem" }}>Leverage</h6>
            <p style={{ fontSize: "1.2rem" }}>
              Leverage amplifies gains and losses by letting you control a
              larger exposure with smaller capital—use with caution.
            </p>
          </div>

          <div className="mb-5">
            <h4
              className="fw-bold mb-4"
              style={{ color: "#00BFA6", fontSize: "1.75rem" }}
            >
              Popular Strategies
            </h4>
            <div className="row g-4">
              {strategies.map((item, i) => (
                <div className="col-md-4" key={i}>
                  <div
                    className="p-4 rounded-4 h-100 shadow-sm"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.05)",
                      backdropFilter: "blur(8px)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    <h6
                      className="fw-bold mb-2 text-accent"
                      style={{ fontSize: "1.5rem" }}
                    >
                      {item.title}
                    </h6>
                    <p
                      className="small text-light mb-0"
                      style={{ fontSize: "1.2rem" }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-dark rounded p-4 shadow text-center mt-5">
            <h5
              className="fw-bold mb-3"
              style={{ color: "#00BFA6", fontSize: "1.5rem" }}
            >
              📬 Stay Updated with  Vintageprimefx Insights
            </h5>
            <form
              className="d-flex flex-column flex-sm-row justify-content-center mx-auto gap-2"
              style={{ maxWidth: "500px" }}
              onSubmit={handleSubscribe}
            >
              <input
                type="email"
                className="form-control rounded"
                placeholder="Enter your email"
                style={{
                  backgroundColor: "#2a2a2a",
                  border: "1px solid #444",
                  color: "#fff",
                  fontSize: "1.5rem",
                }}
              />
              <button
                type="submit"
                className="btn btn-warning fw-semibold px-4 text-dark rounded"
                style={{ fontSize: "1.5rem" }}
              >
                Subscribe
              </button>
            </form>
          </div>

          <div className="container mt-5">
            <h4
              className="fw-bold mb-3 text-center text-accent"
              style={{ fontSize: "1.5rem" }}
            >
              Explore More
            </h4>
            <div className="d-flex flex-column align-items-center gap-2">
              <Link
                to="/what-is-forex"
                className="text-decoration-none text-warning fw-semibold"
                style={{ fontSize: "1.5rem" }}
              >
                ➡️ What is Forex
              </Link>
              <Link
                to="/how-to-trade-forex"
                className="text-decoration-none text-warning fw-semibold"
                style={{ fontSize: "1.5rem" }}
              >
                ➡️ How to Trade Forex
              </Link>
              <Link
                to="/open-forex-account"
                className="text-decoration-none text-warning fw-semibold"
                style={{ fontSize: "1.5rem" }}
              >
                ➡️ How to Open a Forex Account
              </Link>
              <Link
                to="/forex-trading-tips"
                className="text-decoration-none text-warning fw-semibold"
                style={{ fontSize: "1.5rem" }}
              >
                ➡️ Forex Trading Tips
              </Link>
              <Link
                to="/vanilla-options"
                className="text-decoration-none text-warning fw-semibold"
                style={{ fontSize: "1.5rem" }}
              >
                ➡️ Vanilla Options
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VanillaOptions;
