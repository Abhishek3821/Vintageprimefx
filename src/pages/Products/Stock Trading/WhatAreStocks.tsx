import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const WhatAreStocks: React.FC = () => {
  return (
    <>
      <section
        className="text-white d-flex align-items-center"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.45)), url(/assets/stocks-banner.jpg)',
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "60vh",
          fontFamily: "Segoe UI, sans-serif",
        }}
      >
        <div className="container text-center">
          <h1 className="fw-bold display-4">
            What Are <span className="text-warning">Stocks, Shares & Equities?</span>
          </h1>
          <p className="lead mb-4">
            Unlock the secrets of the stock market — from basic terminology to powerful strategies for building wealth.
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
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-9">
              <h2 className="fw-bold mb-4" style={{ color: "#00BFA6" }}>
                Understand the Market with AvaTrade
              </h2>
              <p className="fs-5">
                In the world of finance, terms like stocks, shares, and equities often overlap. Here’s how to make sense of them:
              </p>
              <ul className="text-start fs-5">
                <li><strong>Equity:</strong> Your ownership value in a company after debts are paid. Own more equity = own more of the company.</li>
                <li><strong>Stocks:</strong> Your share of a company’s ownership. Buying stocks = owning part of the company.</li>
                <li><strong>Shares:</strong> The actual units of stock you hold. Shares are indivisible and represent pieces of your stock investment.</li>
              </ul>
              <p className="fs-5">Buying shares = buying stocks = having equity in a company.</p>
            </div>
          </div>

          <div className="mb-5">
            <h3 className=" mb-3" style={{ color: "#198754" }}>The Process of Buying & Selling Stocks</h3>
            <p className="fs-5">
              Stocks can be bought during an IPO or from secondary markets. IPOs help companies raise capital, and investors get in at the beginning of a company’s public journey.
            </p>
            <p className="fs-5">
              Companies go public to expand, innovate, pay off debts, or reward early investors. But IPOs come with risk, due to market volatility and investor sentiment.
            </p>
          </div>

          <div className="mb-5">
            <h3 className=" mb-3" style={{ color: "#198754" }}>Investing vs. Speculative Trading</h3>
            <p className="fs-5">
              <strong>Long-Term Investing:</strong> Focuses on appreciation and dividends. You ride out short-term volatility for long-term gains.
            </p>
            <p className="fs-5">
              <strong>Speculative Trading:</strong> A short-term high-risk approach that capitalizes on fast market moves. Requires technical skill and strict risk management.
            </p>
          </div>

          <div className="mb-5">
            <h3 className="mb-3" style={{ color: "#198754" }}>Risk Management Essentials</h3>
            <ul className="fs-5">
              <li>🎯 Know your risk tolerance</li>
              <li>📊 Diversify your portfolio</li>
              <li>🛑 Use stop-loss and take-profit tools</li>
              <li>📚 Keep learning and stay informed</li>
              <li>🔁 Regularly review your strategy</li>
            </ul>
          </div>

          <div className="mb-5">
            <h3 className=" mb-3" style={{ color: "#198754" }}>Leveraged Stock Trading with Derivatives</h3>
            <p className="fs-5">
              Derivatives like CFDs allow traders to control large positions with small capital thanks to leverage. While this magnifies gains, it also amplifies losses.
            </p>
            <p className="fs-5">
              Example: $1,000 with 10:1 leverage gives you $10,000 market exposure. A small price shift can mean big wins or losses — risk management is crucial.
            </p>
          </div>

          <div className="mb-5">
            <h3 className="mb-3" style={{ color: "#198754" }}>Why Trade Stocks with AvaTrade</h3>
            <ul className="fs-5">
              <li>🌐 Globally Regulated & Secure</li>
              <li>📚 Access to AvaAcademy & Webinars</li>
              <li>🛠 Innovative Platforms: MT4, MT5, WebTrader, AvaTrade App</li>
              <li>📈 Real-Time Analysis & AvaProtect</li>
              <li>🏆 Award-Winning Support</li>
            </ul>
          </div>

          <div className="bg-dark rounded p-4 shadow text-center mt-5">
            <h5 className="fw-bold mb-3" style={{ color: "#00BFA6" }}>
              📬 Get The Freshest AvaTrade News
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

export default WhatAreStocks;
