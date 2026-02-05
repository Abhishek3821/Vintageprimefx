import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// Import placeholder image (replace with actual image when added)
import ForexBanner from "../../../assets/forex-banner.jpg"; // Fallback for forex-banner.jpg
// Add this image to src/assets/
import ActualForexBanner from "../../../assets/forex-banner.jpg"; // Add this file

const HowToTradeForex: React.FC = () => {
  interface Step {
    title: string;
    content: string;
  }

  const steps: Step[] = [
    {
      title: "Learn About the Forex Market",
      content:
        "Understand market structure, key players, terminology, and influencing factors. A solid grasp of the basics helps assess risks and rewards.",
    },
    {
      title: "Choose How You Want to Trade Forex",
      content:
        "Pick between Forex CFDs and FX Options. CFDs allow speculation without ownership; options give rights to buy/sell at specific prices.",
    },
    {
      title: "Choose a Broker",
      content:
        "Ensure regulation, robust platforms, useful resources, secure payments, and responsive customer support. AvaTrade offers all of these.",
    },
    {
      title: "Open a Trading Account",
      content:
        "Start with a demo account. Switch to a real account once confident. Choose account types based on your trading needs.",
    },
    {
      title: "Prepare a Trading Plan",
      content:
        "Define goals, strategy, risk rules, and trading psychology. Stay disciplined and avoid emotional trading.",
    },
    {
      title: "Choose a Forex Pair",
      content:
        "Begin with major pairs like EUR/USD. They’re liquid, have tighter spreads, and are easier to follow in the news.",
    },
    {
      title: "Analyse the Market",
      content:
        "Use technical, fundamental, and sentiment analysis to find trade opportunities and ideal entry/exit points.",
    },
    {
      title: "Buy or Sell",
      content:
        "Go long (buy) if you expect a price rise or short (sell) if expecting a drop. Decisions depend on your analysis.",
    },
    {
      title: "Risk Management",
      content:
        "Limit exposure using stop-loss, position sizing, and avoiding over-leverage. Focus on risk/reward ratios.",
    },
    {
      title: "Monitor Your Positions",
      content:
        "Keep track using alerts, charts, news, and tools. Monitor trades to act on fast-changing conditions.",
    },
    {
      title: "Close Your Trade",
      content:
        "Exit trades with a plan. Profit targets, stop-loss triggers, or news shifts should guide your decision.",
    },
  ];

  return (
    <>
      <section
        className="text-white d-flex align-items-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${ActualForexBanner || ForexBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "60vh",
          fontFamily: "Segoe UI, sans-serif",
        }}
      >
        <div className="container text-center">
          <h1 className="fw-bold display-4">
            How to <span className="text-warning">Trade Forex?</span>
          </h1>
          <p className="lead mb-4" style={{ fontSize: "1.5rem" }}>
            Ready to master the art of Forex trading? Discover strategies,
            tools, and tips to succeed in the global currency market.
          </p>
          <Link
            to="/learn"
            className="btn btn-warning fw-semibold px-4 py-2 rounded-pill shadow"
            style={{ fontSize: "0.9rem", textDecoration: "none" }}
          >
            Start Learning
          </Link>
        </div>
      </section>

      <section
        id="intro"
        className="py-5"
        style={{ backgroundColor: "#121212" }}
      >
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-3" style={{ color: "#00BFA6" }}>
              Step-by-Step Guide to Start Trading
            </h2>
            <p className="text-white-50 lead" style={{ fontSize: "0.9rem" }}>
              Your roadmap to becoming a confident and skilled forex trader
              starts here.
            </p>
          </div>

          <div
            className="alert alert-warning text-dark text-center fw-semibold rounded-pill"
            style={{ fontSize: "0.75rem" }}
          >
            ⚠️ Trading CFDs and FX Options entails risk and could result in the
            loss of your capital.
          </div>

          {steps.map((step, i) => (
            <div className="my-5 border-bottom border-secondary pb-5" key={i}>
              <div className="d-flex flex-column flex-md-row align-items-start">
                <div className="flex-shrink-0 text-warning display-6 fw-bold me-4">
                  {i + 1}
                </div>
                <div>
                  <h4 className="text-light fw-bold">{step.title}</h4>
                  <p
                    className="text-white-50 lead"
                    style={{ fontSize: "1.5rem" }}
                  >
                    {step.content}
                  </p>
                </div>
              </div>
            </div>
          ))}

          <div className="bg-black mt-5 p-4 rounded text-center">
            <h5 className="fw-bold mb-3" style={{ color: "#00BFA6" }}>
              📬 Stay Updated with  Vintageprimefx Insights
            </h5>
            <form
              className="d-flex flex-column flex-sm-row justify-content-center gap-2 mx-auto"
              style={{ maxWidth: "500px" }}
            >
              <input
                type="email"
                className="form-control rounded bg-dark text-white border-secondary"
                placeholder="Enter your email"
                style={{ fontSize: "0.9rem" }}
              />
              <button
                type="submit"
                className="btn btn-warning fw-semibold rounded"
                style={{ fontSize: "0.9rem" }}
              >
                Subscribe
              </button>
            </form>
          </div>

          <div className="container mt-5">
            <h4 className="fw-bold mb-3 text-center text-white">
              Explore More
            </h4>
            <div className="d-flex flex-column align-items-center gap-2">
              <Link
                to="/WhatIsForex"
                className="text-decoration-none text-warning fw-semibold"
                style={{ fontSize: "1.5rem" }}
              >
                ➡️ What is Forex
              </Link>
              <Link
                to="/HowToTradeForex"
                className="text-decoration-none text-warning fw-semibold"
                style={{ fontSize: "1.5rem" }}
              >
                ➡️ How to Trade Forex
              </Link>

              <Link
                to="/VanillaOptions"
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

export default HowToTradeForex;
