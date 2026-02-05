import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const ETFsTrading: React.FC = () => {
  return (
    <>
      <section
        className="text-white d-flex align-items-center"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.45)), url(/assets/etf-banner.jpg)',
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "60vh",
          fontFamily: "Segoe UI, sans-serif",
        }}
      >
        <div className="container text-center">
          <h1 className="fw-bold display-4">
            ETF <span className="text-warning">Trading</span>
          </h1>
          <p className="lead mb-4">
            Trade baskets of assets in one go. Diversify your exposure and trade like a pro with AvaTrade.
          </p>
          <a href="#intro" className="btn btn-warning fw-semibold px-4 py-2 rounded-pill shadow">
            Start Exploring
          </a>
        </div>
      </section>

      <section
        id="intro"
        className="py-5 text-light"
        style={{ background: "linear-gradient(to bottom right, #0a0a0a, #1f1f1f)", fontFamily: "Segoe UI, sans-serif" }}
      >
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-10">
              <h2 className="fw-bold mb-4" style={{ color: "#00BFA6" }}>
                Trade ETFs with AvaTrade
              </h2>
              <p className="fs-5">
                ETFs (Exchange Traded Funds) allow you to invest in multiple assets — indices, commodities, stocks, bonds — through a single instrument. Traded like stocks, ETFs offer intraday liquidity and flexibility.
              </p>
              <p className="fs-5">
                Whether you're speculating on sectors or tracking entire indices, ETFs provide a convenient and cost-effective way to diversify your portfolio.
              </p>
            </div>
          </div>

          <div className="alert alert-warning text-dark text-center fw-semibold rounded-pill">
            ⚠️ ETF trading involves risk and can lead to loss of capital.
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h3 className=" mt-5" style={{ color: "#198754" }}>Why Trade ETFs?</h3>
              <ul className="fs-5">
                <li><strong>Diversification:</strong> One ETF can give you exposure to dozens of assets.</li>
                <li><strong>Liquidity:</strong> Trade ETFs like stocks — buy and sell any time the market is open.</li>
                <li><strong>Cost-Effective:</strong> Tight spreads, low fees, and no stamp duty in many regions.</li>
                <li><strong>Transparency:</strong> Holdings of ETFs are usually published daily.</li>
                <li><strong>Versatility:</strong> Choose sector-specific, index-based, or commodity ETFs.</li>
              </ul>

              <h3 className="mt-5" style={{ color: "#198754" }}>How ETF Trading Works</h3>
              <p className="fs-5">When you trade ETFs with AvaTrade, you're trading them as CFDs. This means you can go long or short, use leverage, and speculate on price movements without owning the actual assets.</p>

              <h5 className="mt-4" style={{ color: "#00BFA6" }}>Popular ETF Types</h5>
              <ul className="fs-5">
                <li><strong>Index ETFs:</strong> Track major indices like S&P 500 or NASDAQ.</li>
                <li><strong>Commodity ETFs:</strong> Exposure to gold, oil, natural gas.</li>
                <li><strong>Sector ETFs:</strong> Focused on industries like tech, energy, healthcare.</li>
                <li><strong>Inverse & Leveraged ETFs:</strong> Designed to profit in bear markets or magnify returns.</li>
              </ul>

              <h5 className="mt-4" style={{ color: "#00BFA6" }}>Trading Conditions at AvaTrade</h5>
              <ul className="fs-5">
                <li>Leverage up to 20:1 on ETF CFDs</li>
                <li>Negative balance protection</li>
                <li>Access to MetaTrader 4/5, WebTrader & AvaTradeGO</li>
                <li>Real-time charts and market analysis</li>
              </ul>

              <h3 className="mt-5" style={{ color: "#198754" }}>ETF vs Mutual Funds</h3>
              <p className="fs-5">ETFs trade like stocks on an exchange, offering more flexibility. Mutual funds are typically bought through brokers, have higher fees, and limited trading windows.</p>

              <h3 className=" mt-5" style={{ color: "#198754" }}>Start Trading ETFs</h3>
              <p className="fs-5">Open a free demo account to explore ETF CFDs risk-free. When ready, transition to a live account and take advantage of AvaTrade’s professional tools and support.</p>

              <div className="container mt-5">
                <h4 className="fw-bold mb-3 text-center text-accent">Explore More</h4>
                <div className="d-flex flex-column align-items-center gap-2">
                  <Link to="/what-are-cfds" className="text-decoration-none text-warning fw-semibold">
                    ➡️ What are CFDs
                  </Link>
                  <Link to="/how-to-trade-cfds" className="text-decoration-none text-warning fw-semibold">
                    ➡️ How to Trade CFDs
                  </Link>
                  <Link to="/bonds-and-treasuries" className="text-decoration-none text-warning fw-semibold">
                    ➡️ Bonds & Treasuries
                  </Link>
                  <Link to="/etfs-trading" className="text-decoration-none text-warning fw-semibold">
                    ➡️ ETFs Trading
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default ETFsTrading;
