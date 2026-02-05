import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const HowToTradeStocks: React.FC = () => {
  return (
    <>
      <section
        className="text-white d-flex align-items-center"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.45)), url(/assets/stock-cfd-banner.jpg)',
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "60vh",
          fontFamily: "Segoe UI, sans-serif",
        }}
      >
        <div className="container text-center">
          <h1 className="fw-bold display-4">
            How to <span className="text-warning">Trade Stock CFDs</span>
          </h1>
          <p className="lead mb-4">
            Learn to trade stock CFDs with confidence — benefit from both rising and falling markets.
          </p>
          <a href="#steps" className="btn btn-warning fw-semibold px-4 py-2 rounded-pill shadow">
            Start Trading
          </a>
        </div>
      </section>

      <section
        id="steps"
        className="py-5 text-light"
        style={{ background: "linear-gradient(to bottom right, #0a0a0a, #1f1f1f)", fontFamily: "Segoe UI, sans-serif" }}
      >
        <div className="container">
          <div className="mb-5">
            <h2 className="text-warning mb-3">What are Stock CFDs?</h2>
            <p className="fs-5">
              Stock CFDs allow you to speculate on stock prices without owning the underlying shares. You can profit from rising and falling prices, making them ideal for short to medium-term strategies.
            </p>
            <p className="fs-5">
              They provide access to global markets, high flexibility, and the ability to trade with leverage, all through your broker’s trading platform.
            </p>
          </div>

          <div className="mb-5">
            <h2 className="mb-3" style={{ color: "#198754" }}>Steps to Start Trading Stock CFDs</h2>
            <ol className="fs-5">
              <li><strong>Choose a broker:</strong> Pick a regulated broker like AvaTrade for a secure trading environment and essential tools.</li>
              <li><strong>Set up your account:</strong> Register, complete KYC, and start with a demo account or fund your live trading account.</li>
              <li><strong>Select your stocks:</strong> Choose from global companies including high-growth and blue-chip stocks.</li>
              <li><strong>Perform analysis:</strong> Use technical or fundamental analysis to plan your position — go long or short.</li>
              <li><strong>Place and monitor trades:</strong> Set stop-loss and take-profit levels to manage risk. Monitor the trade and close when ready.</li>
            </ol>
          </div>

          <div className="mb-5">
            <h2 className="mb-3"  style={{ color: "#198754" }}>Defining Your Trading Goals</h2>
            <p className="fs-5">
              Clear, realistic, and process-focused goals help you maintain discipline and improve decision-making. Instead of aiming for specific returns, focus on actions like performing analysis or reviewing trades.
            </p>
            <p className="fs-5">
              Your goals should align with your risk profile and adapt to market conditions. Review them regularly to stay on course.
            </p>
          </div>

          <div className="bg-dark rounded p-4 shadow text-center mt-5">
            <h5 className="fw-bold mb-3" style={{ color: "#00BFA6" }}>
              📬 Stay Updated with AvaTrade Insights
            </h5>
            <form
              className="d-flex flex-column flex-sm-row justify-content-center mx-auto gap-2"
              style={{ maxWidth: "500px" }}
            >
              <input
                type="email"
                className="form-control rounded"
                placeholder="Enter your email"
                style={{ backgroundColor: "#2a2a2a", border: "1px solid #444", color: "#fff" }}
              />
              <button
                type="submit"
                className="btn btn-warning fw-semibold px-4 text-dark rounded"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowToTradeStocks;
