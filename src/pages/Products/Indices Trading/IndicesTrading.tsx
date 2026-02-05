import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const IndicesTrading: React.FC = () => {
  return (
    <>
      <section
        className="text-white d-flex align-items-center"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.45)), url(/assets/indices-banner.jpg)',
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "60vh",
          fontFamily: "Segoe UI, sans-serif",
        }}
      >
        <div className="container text-center">
          <h1 className="fw-bold display-4" >
            What are <span className="text-warning">Indices?</span>
          </h1>
          <p className="lead mb-4 text-white">
            Join us on an exploration of index trading. Learn how these benchmarks impact trading and influence trading decisions in our informative guide.
          </p>
          <a href="#content" className="btn btn-warning fw-semibold px-4 py-2 rounded-pill shadow">
            Learn More
          </a>
        </div>
      </section>

      <section id="content" className="py-5" style={{ backgroundColor: "#121212" }}>
        <div className="container text-white">
          <h2 className="fw-bold mb-4" style={{ color: "#00BFA6" }}>Introduction to Indices</h2>
          <p className="lead text-white-50">
            Indices are financial instruments designed to track the overall price performance of a basket of stocks. They offer broad market exposure, diversification, and benchmark stock market performance across regions or sectors.
          </p>

          <h4 className="mt-5" style={{ color: "#00BFA6" }}>How Are Indices Compiled?</h4>
          <p className="text-white-50">An index is composed of select stocks. They may be broad-based (e.g., Technology sector) or narrow. Examples include:</p>
          <ul className="text-white-50">
            <li><strong>Global Indices</strong>: Dow Jones Global Titans 50</li>
            <li><strong>Regional Indices</strong>: Euro STOXX 50</li>
            <li><strong>National Indices</strong>: ASX100 (Australia)</li>
            <li><strong>Sector Indices</strong>: e.g., Global Cannabis Giants Index</li>
          </ul>

          <h4 className="mt-4" style={{ color: "#00BFA6" }}>How Are Indices Calculated?</h4>
          <p className="text-white-50">Index prices depend on their components and weighting method:</p>
          <ul className="text-white-50">
            <li><strong>Market Capitalization-weighted</strong> (e.g., S&P 500)</li>
            <li><strong>Price-weighted</strong> (e.g., DJIA)</li>
            <li><strong>Equal-weighted</strong> (all stocks weighted equally)</li>
            <li><strong>Fundamentally weighted</strong> (based on fundamentals like P/E ratio)</li>
          </ul>

          <h4 className="mt-4" style={{ color: "#00BFA6" }}>Popular Indices</h4>
          <p className="text-white-50">Some of the most traded indices globally include:</p>
          <ul className="text-white-50">
            <li><strong>S&P 500 (US)</strong> – Tech-heavy, includes Apple, Amazon</li>
            <li><strong>FTSE 100 (UK)</strong> – Includes Barclays, Shell</li>
            <li><strong>Nasdaq 100 (US)</strong> – Focused on tech and innovation</li>
            <li><strong>DAX 40 (Germany)</strong> – Includes Siemens, BMW</li>
            <li><strong>Nikkei 225 (Japan)</strong> – Includes Toyota, Sony</li>
          </ul>

          <h4 className="mt-4" style={{ color: "#00BFA6" }}>What is Index Trading?</h4>
          <p className="text-white-50">Traders speculate on index direction using instruments like:</p>
          <ul className="text-white-50">
            <li><strong>Index Funds</strong> – Pooled investments managed to track an index</li>
            <li><strong>ETFs</strong> – Exchange-traded funds that track indices and trade like stocks</li>
            <li><strong>CFDs</strong> – Contracts for Difference allow speculation on price movements without ownership</li>
          </ul>

          <h4 className="mt-4" style={{ color: "#00BFA6" }}>What Moves Index Prices?</h4>
          <ul className="text-white-50">
            <li>Market sentiment and macroeconomic factors</li>
            <li>Company news from high-weighted constituents</li>
            <li>Index rebalancing periods</li>
            <li>Sector and commodity performance</li>
            <li>Political and global events</li>
          </ul>

          <h4 className="mt-4" style={{ color: "#00BFA6" }}>Why Trade Indices?</h4>
          <ul className="text-white-50">
            <li>Easy diversification</li>
            <li>Broad/niche exposure</li>
            <li>Smoother price action</li>
            <li>High liquidity and tight spreads</li>
            <li>Vast news coverage and benchmarking</li>
          </ul>

          <div className="bg-black p-4 rounded text-center mt-5">
            <h5 className="fw-bold mb-3" style={{ color: "#00BFA6" }}>
              📘 Ready to Trade Indices?
            </h5>
            <p className="text-white-50">
              Open an AvaTrade account and start trading index CFDs with leverage, advanced tools, and expert support.
            </p>
            <a href="/register" className="btn btn-warning fw-semibold rounded-pill px-4 py-2">
              Open Account Now
            </a>
          </div>

          <div className="container mt-5">
            <h4 className="fw-bold mb-3 text-center" style={{ color: "#00BFA6" }}>Explore More</h4>
            <div className="d-flex flex-column align-items-center gap-2">
              <Link to="/how-to-trade-cfds" className="text-decoration-none fw-semibold" style={{ color: "#00BFA6" }}>
                ➡️ How to Trade CFDs
              </Link>
              <Link to="/etfs-trading" className="text-decoration-none fw-semibold" style={{ color: "#00BFA6" }}>
                ➡️ ETFs Trading
              </Link>
              <Link to="/bonds-and-treasuries" className="text-decoration-none fw-semibold" style={{ color: "#00BFA6" }}>
                ➡️ Bonds & Treasuries
              </Link>
              <Link to="/what-are-indices" className="text-decoration-none fw-semibold" style={{ color: "#00BFA6" }}>
                ➡️ What Are Indices
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IndicesTrading;
