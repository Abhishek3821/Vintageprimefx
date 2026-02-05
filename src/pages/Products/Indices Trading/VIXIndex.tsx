import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
const VIXIndex: React.FC = () => {
  return (
    <>
      <section
        className="text-white d-flex align-items-center"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.45)), url(/assets/vix-banner.jpg)',
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "60vh",
          fontFamily: "Segoe UI, sans-serif",
        }}
      >
        <div className="container text-center">
          <h1 className="fw-bold display-4" >
            VIX <span className="text-warning">Index</span>
          </h1>
          <p className="lead mb-4 text-white">
            Understand and trade market volatility with the CBOE Volatility Index
          </p>
          <a href="#vix-info" className="btn btn-warning fw-semibold px-4 py-2 rounded-pill shadow">
            Learn About VIX
          </a>
        </div>
      </section>

      <section id="vix-info" className="py-5" style={{ backgroundColor: "#121212" }}>
        <div className="container text-white">
          <h2 className="fw-bold mb-4" style={{ color: "#00BFA6" }}>What is the VIX?</h2>
          <p className="text-white-50">
            The VIX (Volatility Index) is a key indicator of market sentiment and expected volatility, derived from S&P 500 index options. Often referred to as the "fear gauge," the VIX rises during times of market uncertainty.
          </p>

          <h4 className="mt-4" style={{ color: "#00BFA6" }}>Understanding the VIX</h4>
          <p className="text-white-50">
            A VIX value above 30 indicates high volatility; below 30 suggests stability. It tends to move inversely to the S&P 500, and traders use it to gauge fear and predict potential reversals.
          </p>

          <h4 className="mt-4" style={{ color: "#00BFA6" }}>How the VIX is Calculated</h4>
          <p className="text-white-50">
            The VIX is calculated using SPX options with expiries between 23-37 days. It averages weighted prices of these options to estimate expected 30-day volatility.
          </p>

          <h4 className="mt-4" style={{ color: "#00BFA6" }}>Trading the VIX</h4>
          <p className="text-white-50">
            You can trade volatility via ETNs like VXXB, which tracks VIX futures. AvaTrade offers VXXB with leverage up to 400:1, allowing you to trade on volatility without directly trading the VIX itself.
          </p>

          <h4 className="mt-4" style={{ color: "#00BFA6" }}>Trading Strategies Using VIX</h4>
          <ul className="text-white-50">
            <li>Buy VIX/VXXB when volatility is rising (fear in the market)</li>
            <li>Short VIX/VXXB when markets are stable or recovering</li>
            <li>Use the VIX with indicators like the Put-Call ratio for sentiment analysis</li>
            <li>Use VIX spikes to time market entries/exits</li>
          </ul>

          <h4 className="mt-4" style={{ color: "#00BFA6" }}>Why Trade VIX via AvaTrade?</h4>
          <ul className="text-white-50">
            <li>Access to VXXB with leverage up to 400:1</li>
            <li>Powerful platforms and tools for analysis</li>
            <li>Multilingual support and free demo account</li>
            <li>Trade on mobile, desktop, or web</li>
            <li>Trusted and regulated global broker</li>
          </ul>

          <div className="bg-black p-4 rounded text-center mt-5">
            <h5 className="fw-bold mb-3" style={{ color: "#00BFA6" }}>
              📈 Ready to Trade Volatility?
            </h5>
            <p className="text-white-50">
              Open an AvaTrade account and start trading volatility through the VIX-linked VXXB instrument.
            </p>
            <a href="/register" className="btn btn-warning fw-semibold rounded-pill px-4 py-2">
              Trade VXXB Now
            </a>
          </div>

          <div className="container mt-5">
            <h4 className="fw-bold mb-3 text-center" style={{ color: "#00BFA6" }}>Explore More</h4>
            <div className="d-flex flex-column align-items-center gap-2">
              <Link to="/how-to-trade-cfds" className="text-decoration-none fw-semibold text-warning" >
                ➡️ How to Trade CFDs
              </Link>
              <Link to="/what-are-indices" className="text-decoration-none fw-semibold text-warning" >
                ➡️ What Are Indices
              </Link>
              <Link to="/how-to-trade-indices" className="text-decoration-none fw-semibold text-warning" >
                ➡️ How to Trade Indices
              </Link>
              <Link to="/etfs-trading" className="text-decoration-none fw-semibold text-warning" >
                ➡️ ETFs Trading
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VIXIndex;
