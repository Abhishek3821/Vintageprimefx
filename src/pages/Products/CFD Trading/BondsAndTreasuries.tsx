import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const BondsAndTreasuries: React.FC = () => {
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
            Welcome to <span className="text-warning">Forex Trading</span>
          </h1>
          <p className="lead mb-4">
            Treasuries (bonds) trading via CFDs at AvaTrade – flexible leverage, expert platforms, and global bond markets.
          </p>
          <a href="#content" className="btn btn-warning fw-semibold px-4 py-2 rounded-pill shadow">
            Start Trading
          </a>
        </div>
      </section>

      <section
        id="content"
        className="py-5 text-light"
        style={{
          background: "linear-gradient(to bottom right, #0a0a0a, #1f1f1f)",
          fontFamily: "Segoe UI, sans-serif",
        }}
      >
        <div className="container">
          <div className="mb-5">
            <h2 className="fw-bold mb-1" style={{ color: "#198754" }}>What Are Treasuries?</h2>
            <h5 className="mb-3" style={{ color: "#00BFA6" }}>Understanding Government-Issued Bonds</h5>
            <p>Government treasuries, also known as bonds, are considered among the safest long-term investments. By buying a government bond, investors lend money to the government and receive regular interest payments until maturity. Treasuries are popular for their stability and liquidity.</p>
          </div>

          <div className="mb-5">
            <h2 className="fw-bold mb-1" style={{ color: "#198754" }}>Stocks vs. Bonds</h2>
            <h5 className="mb-3" style={{ color: "#00BFA6" }}>Key Differences in Financial Instruments</h5>
            <p>Stocks represent partial ownership in a company, while bonds are a loan made to a company or government. Stocks may pay dividends and offer capital appreciation, while bonds pay fixed interest and are repaid at maturity. Stocks are generally riskier but offer higher returns; bonds are more stable and predictable.</p>
          </div>

          <div className="mb-5">
            <h2 className="fw-bold mb-1" style={{ color: "#198754" }}>How Do Bonds Work?</h2>
            <h5 className="mb-3" style={{ color: "#00BFA6" }}>The Mechanics of Bonds and Coupons</h5>
            <p>Bonds are issued by entities seeking capital and repay the principal at maturity. The bondholder receives regular interest (coupon) payments. Bonds can be traded on the secondary market, and their prices fluctuate based on interest rates, inflation, and credit risk.</p>
          </div>

          <div className="mb-5">
            <h2 className="fw-bold mb-1" style={{ color: "#198754" }}>How Does the Bond Market Work?</h2>
            <h5 className="mb-3" style={{ color: "#00BFA6" }}>Primary vs. Secondary Market Dynamics</h5>
            <p>Issuers sell bonds to raise funds, and investors can trade them in primary and secondary markets. Bond yields move inversely to prices. Major players include governments, central banks, and institutions. U.S. Treasuries, like the 10-year note, are benchmark instruments tied to many interest rates.</p>
          </div>

          <div className="mb-5">
            <h2 className="fw-bold mb-1" style={{ color: "#198754" }}>Trading Bond CFDs with AvaTrade</h2>
            <h5 className="mb-3" style={{ color: "#00BFA6" }}>Speculating on Bond Movements Without Ownership</h5>
            <p>CFDs allow traders to speculate on bond price movements without owning the underlying asset. AvaTrade offers access to U.S., European, and Japanese bonds with competitive spreads and leverage up to 20:1 via MT4, MT5, and WebTrader platforms. Both manual and automated trading options are available.</p>
            <ul>
              <li>Euro-Bund</li>
              <li>Japan Government Bond</li>
            </ul>
          </div>

          <div className="mb-5">
            <h2 className="fw-bold mb-3" style={{ color: "#198754" }}>Bond Trading FAQs</h2>

            <h5 className="mt-4" style={{ color: "#00BFA6" }}>How are bonds different from stocks?</h5>
            <p>Stocks offer ownership and dividends, while bonds are loans offering fixed interest. Stocks are more volatile; bonds offer stable income and are ranked by agencies like S&P, Moody’s, and Fitch.</p>

            <h5 className="mt-4" style={{ color: "#00BFA6" }}>Which bonds are best to trade?</h5>
            <p>Government bonds offer safety. Lower-rated corporate or municipal bonds may offer higher returns and are often preferred for trading due to price volatility and yield potential.</p>

            <h5 className="mt-4" style={{ color: "#00BFA6" }}>What are some bond trading strategies?</h5>
            <p>Popular strategies include swaps (to improve yield or tax position), barbells (combining short- and long-term bonds), ladders (staggering maturities), and rolling down the yield curve (buying long-term bonds and selling after price appreciation).</p>
          </div>

          <div className="alert alert-warning text-dark text-center fw-semibold rounded-pill">
            ⚠️ Trading CFDs and FX Options entails risk and could result in the loss of your capital.
          </div>

          <div className="bg-dark rounded p-4 shadow text-center mt-5">
            <h5 className="fw-bold mb-3" style={{ color: "#198754" }}>
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
                style={{
                  backgroundColor: "#2a2a2a",
                  border: "1px solid #444",
                  color: "#fff",
                }}
              />
              <button
                type="submit"
                className="btn btn-warning fw-semibold px-4 text-dark rounded"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div className="container mt-5">
            <h4 className="fw-bold mb-3 text-center" style={{ color: "#198754" }}>Explore More</h4>
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

export default BondsAndTreasuries;
