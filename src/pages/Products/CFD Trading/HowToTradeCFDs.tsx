import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
const HowToTradeCFDs: React.FC = () => {
  const steps = [
    {
      title: "Learn About the Forex Market",
      content:
        "Understand the structure of the forex market, the major and minor currency pairs, how prices move, and what economic and geopolitical factors influence them. Learn key terms like pips, lots, leverage, and margin.",
    },
    {
      title: "Choose How You Want to Trade Forex",
      content:
        "Decide between trading Forex CFDs or FX Options. CFDs allow you to speculate on price movements without owning the underlying asset. Options grant you the right (but not the obligation) to buy or sell at a set price in the future.",
    },
    {
      title: "Choose a Broker",
      content:
        "Pick a regulated broker offering a user-friendly trading platform, competitive spreads, robust educational tools, and responsive customer support. AvaTrade, for example, offers MT4, MT5, WebTrader, and AvaTradeGO.",
    },
    {
      title: "Open a Trading Account",
      content:
        "Start with a demo account to practice without risking real money. Then open a live account by verifying your identity and depositing funds via secure payment methods like cards, bank transfer, or e-wallets.",
    },
    {
      title: "Prepare a Trading Plan",
      content:
        "Build a detailed strategy including your financial goals, preferred markets, risk tolerance, trade entry/exit rules, and psychology management. Stick to your plan consistently.",
    },
    {
      title: "Choose a Forex Pair",
      content:
        "Begin with major currency pairs like EUR/USD or GBP/USD that offer high liquidity and lower spreads. Research which pairs suit your strategy and time zone.",
    },
    {
      title: "Analyse the Market",
      content:
        "Use technical indicators (moving averages, RSI, MACD), economic data (GDP, NFP), and sentiment tools (COT report, news) to identify trends, reversals, and breakout opportunities.",
    },
    {
      title: "Buy or Sell",
      content:
        "Go long (buy) if your analysis expects prices to rise, or go short (sell) if a drop is anticipated. Always ensure alignment with your trading plan and market conditions.",
    },
    {
      title: "Risk Management",
      content:
        "Use stop-loss, take-profit, trailing stops, and proper position sizing to protect capital. Risk no more than 1–2% of your account per trade to avoid major losses.",
    },
    {
      title: "Monitor Your Positions",
      content:
        "Keep an eye on open trades using real-time charts, alerts, news updates, and platform notifications. Adjust your strategy if market conditions change.",
    },
    {
      title: "Close Your Trade",
      content:
        "Exit your trade manually or via take-profit/stop-loss levels based on your strategy. Review your performance to learn from both winning and losing trades.",
    },
  ];

  return (
    <>
   <section
        className="text-white d-flex align-items-center"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.45)), url(/assets/forex-banner.jpg)',
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "60vh",
          fontFamily: "Segoe UI, sans-serif",
        }}
      >
        <div className="container text-center">
          <h1 className="fw-bold display-4">
            How to <span className="text-warning">Trade CFDs??</span>
          </h1>
          <p className="lead mb-4">
          Master the tools, strategies, and steps to begin your CFD trading journey
          </p>
          <a href="#intro" className="btn btn-warning fw-semibold px-4 py-2 rounded-pill shadow">
            Start Learning
          </a>
        </div>
      </section>

    


      <section id="intro" className="py-5" style={{ backgroundColor: "#121212" }}>
        <div className="container">
          <div className="text-center mb-5">
          <h2 className="fw-bold mb-3" style={{ color: "#00BFA6" }}>
                Step-by-Step Guide to Start Trading
              </h2>
            <p className="text-white-50 lead">Your roadmap to becoming a confident and skilled forex trader starts here.</p>
          </div>

          <div className="alert alert-warning text-dark text-center fw-semibold rounded-pill">
            ⚠️ CFD and FX trading involves risk and may result in the loss of your capital.
          </div>

          {steps.map((step, i) => (
            <div className="my-5 border-bottom border-secondary pb-5" key={i}>
              <div className="d-flex flex-column flex-md-row align-items-start">
                <div className="flex-shrink-0 text-warning display-6 fw-bold me-4">{i + 1}</div>
                <div>
                  <h4 className="text-light fw-bold">{step.title}</h4>
                  <p className="text-white-50 lead">{step.content}</p>
                </div>
              </div>
            </div>
          ))}

          <div className="bg-black mt-5 p-4 rounded text-center">
          <h5 className="fw-bold mb-3" style={{ color: "#00BFA6" }}>
              📬 Stay Updated with AvaTrade Insights
            </h5>
            <form className="d-flex flex-column flex-sm-row justify-content-center gap-2 mx-auto" style={{ maxWidth: "500px" }}>
              <input type="email" className="form-control rounded bg-dark text-white border-secondary" placeholder="Enter your email" />
              <button type="submit" className="btn btn-warning fw-semibold rounded">Subscribe</button>
            </form>
          </div>
<div className="container mt-5">
          <h4 className="fw-bold mb-3 text-center text-accent">Explore More</h4>
          <div className="d-flex flex-column align-items-center gap-2">
            <Link to="/what-is-forex" className="text-decoration-none text-warning fw-semibold">
              ➡️ What is Forex
            </Link>
            <Link to="/how-to-trade-forex" className="text-decoration-none text-warning fw-semibold">
              ➡️ How to Trade Forex
            </Link>
            <Link to="/open-forex-account" className="text-decoration-none text-warning fw-semibold">
              ➡️ How to Open a Forex Account
            </Link>
            <Link to="/forex-trading-tips" className="text-decoration-none text-warning fw-semibold">
              ➡️ Forex Trading Tips
            </Link>
            <Link to="/vanilla-options" className="text-decoration-none text-warning fw-semibold">
              ➡️ Vanilla Options
            </Link>
          </div>
        </div>
        </div>
      </section>
    </>
  );
};

export default HowToTradeCFDs;
