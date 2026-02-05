import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const HowToTradeIndices: React.FC = () => {
  return (
    <>
      <section
        className="text-white d-flex align-items-center"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.45)), url(/assets/trade-indices-banner.jpg)',
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "60vh",
          fontFamily: "Segoe UI, sans-serif",
        }}
      >
        <div className="container text-center">
          <h1 className="fw-bold display-4" >
            How to <span className="text-warning">Trade Indices?</span>
          </h1>
          <p className="lead mb-4 text-white">
            Unlock the potential of index trading with our insightful guide and actionable tips.
          </p>
          <a href="#guide" className="btn btn-warning fw-semibold px-4 py-2 rounded-pill shadow">
            Start Trading
          </a>
        </div>
      </section>

      <section id="guide" className="py-5" style={{ backgroundColor: "#121212" }}>
        <div className="container text-white">
          <h2 className="fw-bold mb-4" style={{ color: "#00BFA6" }}>How Indices Are Traded</h2>
          <p className="text-white">
            Indices themselves are not tradable assets. However, you can trade their performance using instruments like CFDs and ETFs. AvaTrade offers both with flexible leverage and global access.
          </p>

          <h4 className="mt-5" style={{ color: "#00BFA6" }}>How to Start Trading Indices CFDs</h4>
          <ul className="text-white">
            <li><strong>Choose a Reliable Broker:</strong> AvaTrade is regulated globally and offers powerful tools and platforms.</li>
            <li><strong>Open and Fund Your Trading Account:</strong> Choose MT4, MT5 or WebTrader. Fund securely via multiple methods.</li>
            <li><strong>Choose the Index to Trade:</strong> Pick from major global indices with different sector exposure and volatility.</li>
            <li><strong>Open a Trade:</strong> Go long or short based on your analysis and strategy.</li>
            <li><strong>Monitor the Trade:</strong> Use stop-loss, take-profit and adjust your position as needed.</li>
            <li><strong>Close the Trade:</strong> Exit manually or based on set parameters to lock profits or cut losses.</li>
          </ul>

          <h4 className="mt-5" style={{ color: "#00BFA6" }}>Trade with AvaTrade</h4>
          <ul className="text-white">
            <li>Global Regulation</li>
            <li>Multiple Trading Platforms</li>
            <li>Attractive Trading Conditions</li>
            <li>Extensive Educational Resources</li>
            <li>Excellent Support & Demo Trading</li>
          </ul>

          <div className="bg-black p-4 rounded text-center mt-5">
            <h5 className="fw-bold mb-3" style={{ color: "#00BFA6" }}>
              🚀 Ready to Get Started?
            </h5>
            <p className="text-white-50">
              Open your AvaTrade account today and start trading global indices with confidence and ease.
            </p>
            <a href="/register" className="btn btn-warning fw-semibold rounded-pill px-4 py-2">
              Open Account
            </a>
          </div>

          <div className="container mt-5">
            <h4 className="fw-bold mb-3 text-center" style={{ color: "#00BFA6" }}>Explore More</h4>
            <div className="d-flex flex-column align-items-center gap-2">
              <Link to="/what-are-indices" className="text-decoration-none fw-semibold" style={{ color: "#00BFA6" }}>
                ➡️ What Are Indices
              </Link>
              <Link to="/etfs-trading" className="text-decoration-none fw-semibold" style={{ color: "#00BFA6" }}>
                ➡️ ETFs Trading
              </Link>
              <Link to="/how-to-trade-cfds" className="text-decoration-none fw-semibold" style={{ color: "#00BFA6" }}>
                ➡️ How to Trade CFDs
              </Link>
              <Link to="/bonds-and-treasuries" className="text-decoration-none fw-semibold" style={{ color: "#00BFA6" }}>
                ➡️ Bonds & Treasuries
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowToTradeIndices;
