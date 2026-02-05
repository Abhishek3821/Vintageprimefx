import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const HowToTradeCommodities: React.FC = () => {
  return (
    <>
      <section
        className="text-white d-flex align-items-center"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.45)), url(/assets/commodities-banner.jpg)',
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "60vh",
          fontFamily: "Segoe UI, sans-serif",
        }}
      >
        <div className="container text-center">
          <h1 className="fw-bold display-4">
            How To <span className="text-warning">Trade Commodities</span>
          </h1>
          <p className="lead mb-4">
            Learn how to trade metals, energy, and agricultural products effectively with AvaTrade.
          </p>
          <a href="#guide" className="btn btn-warning fw-semibold px-4 py-2 rounded-pill shadow">
            Start Learning
          </a>
        </div>
      </section>

      <section
        id="guide"
        className="py-5 text-light"
        style={{ background: "linear-gradient(to bottom right, #0a0a0a, #1f1f1f)", fontFamily: "Segoe UI, sans-serif" }}
      >
        <div className="container">
          <div className="mb-5">
            <h2 className=" mb-3" style={{ color: "#00BFA6" }}>What is Commodity Trading?</h2>
            <p className="fs-5">
              Commodity trading is the act of buying and selling tangible goods like gold, oil, and wheat to profit from price changes driven by supply and demand. Traded historically and now on global exchanges like CME and NYMEX, commodity trading continues to be a vital part of global finance.
            </p>
          </div>

          <div className="mb-5">
            <h3 className=" mb-3" style={{ color: "#00BFA6" }}>Types of Commodities</h3>
            <ul className="fs-5">
              <li><strong>Metals:</strong> Gold, silver, copper — mined and used in construction, electronics, and investment.</li>
              <li><strong>Energy:</strong> Oil and natural gas — power industries, transportation, and homes.</li>
              <li><strong>Agriculture:</strong> Wheat, sugar, livestock — used for food and industrial products.</li>
            </ul>
          </div>

          <div className="mb-5">
            <h3 className=" mb-3" style={{ color: "#00BFA6" }}>Commodity Markets</h3>
            <ul className="fs-5">
              <li><strong>Spot Market:</strong> Trade commodities at current market prices.</li>
              <li><strong>Futures:</strong> Buy/sell contracts for future delivery.</li>
              <li><strong>Options:</strong> Rights to buy/sell, not obligations.</li>
              <li><strong>Forwards:</strong> Custom OTC contracts between two parties.</li>
            </ul>
          </div>

          <div className="mb-5">
            <h3 className=" mb-3 " style={{ color: "#00BFA6" }}>What Affects Commodity Prices?</h3>
            <ul className="fs-5">
              <li>🌍 Global economic health</li>
              <li>📈 Consumer trends</li>
              <li>💵 USD strength (inverse correlation)</li>
              <li>⚖️ Political and regulatory events</li>
              <li>🌦️ Weather and natural conditions</li>
            </ul>
          </div>

          <div className="mb-5">
            <h3 className=" mb-3" style={{ color: "#00BFA6" }}>Building a Commodities Trading Strategy</h3>
            <p className="fs-5">
              Combine fundamental analysis (e.g., supply/demand trends, weather, political decisions) and technical analysis (charts, indicators) for informed decision-making. Strategies vary between long-term investments and short-term trades.
            </p>
          </div>

          <div className="mb-5">
            <h3 className="mb-3" style={{ color: "#00BFA6" }}>Why Trade Commodity CFDs?</h3>
            <ul className="fs-5">
              <li>⚡ Leverage to amplify profits (and losses)</li>
              <li>🔄 Go long or short without owning the asset</li>
              <li>🛡️ Built-in risk management tools</li>
              <li>💧 High liquidity</li>
              <li>💸 Low trading costs</li>
            </ul>
          </div>

          <div className="bg-dark rounded p-4 shadow text-center mt-5">
            <h5 className="fw-bold mb-3" style={{ color: "#00BFA6" }}>
              📬 Ready to Dive into Commodity Markets?
            </h5>
            <p className="fs-5 mb-4">Open a free demo or real account and start trading with AvaTrade.</p>
            <a href="/register" className="btn btn-warning fw-semibold px-4 text-dark rounded">
              Start Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowToTradeCommodities;
