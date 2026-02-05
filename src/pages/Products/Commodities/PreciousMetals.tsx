import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const PreciousMetals: React.FC = () => {
  return (
    <>
      <section
        className="text-white d-flex align-items-center"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.45)), url(/assets/metals-banner.jpg)',
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "60vh",
          fontFamily: "Segoe UI, sans-serif",
        }}
      >
        <div className="container text-center">
          <h1 className="fw-bold display-4">
            Trade <span className="text-warning">Precious Metals</span>
          </h1>
          <p className="lead mb-4">
            Explore the power of gold, silver, platinum, and more — leverage up to 400:1 with AvaTrade.
          </p>
          <a href="#metals-guide" className="btn btn-warning fw-semibold px-4 py-2 rounded-pill shadow">
            Start Trading
          </a>
        </div>
      </section>

      <section
        id="metals-guide"
        className="py-5 text-light"
        style={{ background: "linear-gradient(to bottom right, #111, #1c1c1c)", fontFamily: "Segoe UI, sans-serif" }}
      >
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-10">
              <h2 className="fw-bold mb-4" style={{ color: "#FFD700" }}>
                Trading Precious Metals with AvaTrade
              </h2>
              <p className="fs-5">
                Precious metals like gold, silver, platinum, palladium, and copper are rare, valuable, and sought after by industries and investors alike. Trade them with AvaTrade’s advanced tools and competitive spreads.
              </p>
            </div>
          </div>

          <div className="mb-5">
            <h3 className="mb-3" style={{ color: "#00BFA6" }}>Available Precious Metals CFDs</h3>
            <ul className="fs-5">
              <li><strong>GOLD</strong> – MT4/MT5 Symbol: GOLD – Leverage: 400:1</li>
              <li><strong>SILVER</strong> – MT4/MT5 Symbol: SILVER – Leverage: 400:1</li>
              <li><strong>PLATINUM</strong> – MT4/MT5 Symbol: PLATINUM – Leverage: 400:1</li>
              <li><strong>PALLADIUM</strong> – MT4/MT5 Symbol: PALLADIUM – Leverage: 400:1</li>
              <li><strong>COPPER</strong> – MT4/MT5 Symbol: COPPER – Leverage: 400:1</li>
            </ul>
          </div>

          <div className="mb-5">
            <h3 className=" mb-3" style={{ color: "#00BFA6" }}>Why Trade Precious Metals?</h3>
            <ul className="fs-5">
              <li>💱 Trade long or short depending on your market outlook.</li>
              <li>📈 Use leverage to maximize your exposure up to 400:1.</li>
              <li>📉 Benefit from short selling in bearish markets.</li>
              <li>🤖 Automate your trading with AvaSocial and ZuluTrade.</li>
              <li>📊 Diversify your trading alongside forex and indices.</li>
            </ul>
          </div>

          <div className="mb-5">
            <h3 className="mb-3" style={{ color: "#00BFA6" }}>Factors Affecting Precious Metals</h3>
            <ul className="fs-5">
              <li>📉 <strong>Supply:</strong> Mining disruptions or political instability can reduce availability.</li>
              <li>📈 <strong>Demand:</strong> Comes from jewellery, electronics, and safe-haven investing.</li>
              <li>💵 <strong>USD Strength:</strong> Most metals are priced in USD — stronger dollar usually means weaker metal prices.</li>
              <li>📉 <strong>Market Volatility:</strong> Investors seek metals during uncertainty for stability.</li>
            </ul>
          </div>

          <div className="mb-5">
            <h3 className="mb-3" style={{ color: "#00BFA6" }}>Top Uses of Precious Metals</h3>
            <ul className="fs-5">
              <li>⚙️ <strong>Silver:</strong> Solar panels, electronics, surgical tools.</li>
              <li>💍 <strong>Gold:</strong> Jewellery, electronics, awards.</li>
              <li>🚗 <strong>Palladium & Platinum:</strong> Catalytic converters in cars.</li>
              <li>🔌 <strong>Copper:</strong> Wiring, electronics, industrial applications.</li>
            </ul>
          </div>

          <div className="mb-5">
            <h3 className="mb-3"  style={{ color: "#00BFA6" }}>Getting Started in 4 Easy Steps</h3>
            <ol className="fs-5">
              <li>📝 Open your AvaTrade account.</li>
              <li>💳 Fund your account securely.</li>
              <li>🔍 Choose your preferred metal to trade.</li>
              <li>🚀 Start trading with advanced platforms and tools.</li>
            </ol>
          </div>

          <div className="bg-dark rounded p-4 shadow text-center mt-5">
            <h5 className="fw-bold mb-3" style={{ color: "#FFD700" }}>
              📬 Subscribe for Metals Market Insights
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

export default PreciousMetals;
