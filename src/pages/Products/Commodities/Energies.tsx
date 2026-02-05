import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const Energies: React.FC = () => {
  return (
    <>
      <section
        className="text-white d-flex align-items-center"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.45)), url(/assets/energy-banner.jpg)',
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "60vh",
          fontFamily: "Segoe UI, sans-serif",
        }}
      >
        <div className="container text-center">
          <h1 className="fw-bold display-4">
            Trade <span className="text-warning">Energy Products</span>
          </h1>
          <p className="lead mb-4">
            Explore leveraged CFD trading on oil, gas, and other energies with AvaTrade’s powerful platforms.
          </p>
          <a href="#energy-guide" className="btn btn-warning fw-semibold px-4 py-2 rounded-pill shadow">
            Start Now
          </a>
        </div>
      </section>

      <section
        id="energy-guide"
        className="py-5 text-light"
        style={{ background: "linear-gradient(to bottom right, #111, #1c1c1c)", fontFamily: "Segoe UI, sans-serif" }}
      >
        <div className="container">
          <h2 className="fw-bold text-center mb-5" style={{ color: "#FFD700" }}>
            Energy Products CFD Trading
          </h2>

          <div className="mb-5">
            <h3 className=" mb-3" style={{ color: "#00BFA6" }}>Popular Energy Instruments & Leverage</h3>
            <ul className="fs-5">
              <li><strong>CrudeOIL:</strong> Leverage up to 400:1</li>
              <li><strong>BRENT_OIL:</strong> Leverage up to 400:1</li>
              <li><strong>NATURAL_GAS:</strong> Leverage up to 400:1</li>
              <li><strong>HEATING_OIL:</strong> Leverage up to 400:1</li>
              <li><strong>GASOLINE:</strong> Leverage up to 400:1</li>
            </ul>
          </div>

          <div className="mb-5">
            <h3 className="mb-3" style={{ color: "#00BFA6" }}>Why Trade Energy CFDs?</h3>
            <ul className="fs-5">
              <li>📈 Leverage up to 200:1</li>
              <li>💡 Platforms include MT4, MT5, AvaTradeGO</li>
              <li>🔁 Copy trading supported</li>
              <li>💹 Competitive spreads and advanced trading tools</li>
              <li>📱 Mobile access from anywhere</li>
              <li>💼 Short selling available — profit from falling markets</li>
            </ul>
          </div>

          <div className="mb-5">
            <h3 className="mb-3" style={{ color: "#00BFA6" }}>What is Petroleum?</h3>
            <p className="fs-5">
              Petroleum is a fossil fuel formed from the remains of ancient organisms under intense heat and pressure. It consists mainly of hydrocarbons and is refined into products like gasoline, diesel, and jet fuel.
            </p>
          </div>

          <div className="mb-5">
            <h3 className=" mb-3" style={{ color: "#00BFA6" }}>Sectors Driving Oil Demand</h3>
            <ul className="fs-5">
              <li>🚗 <strong>Transportation:</strong> Largest consumer, steady till 2040</li>
              <li>🏗️ <strong>Construction & Mining:</strong> Second-largest sector</li>
              <li>🏢 <strong>Residential/Commercial/Agriculture:</strong> ~11% share</li>
              <li>✈️ <strong>Aviation:</strong> Expected demand growth</li>
              <li>🔌 <strong>Electricity:</strong> Steady short-term, long-term decline</li>
              <li>🌏 <strong>India & China:</strong> Rising demand from growing economies</li>
            </ul>
          </div>

          <div className="mb-5">
            <h3 className=" mb-3" style={{ color: "#00BFA6" }}>What Affects Energy Prices?</h3>
            <ul className="fs-5">
              <li>📊 <strong>Demand:</strong> Seasonal and EIA-based projections</li>
              <li>🛢️ <strong>Supply:</strong> OPEC, U.S. shale production</li>
              <li>⛽ <strong>Reserves:</strong> Strategic stocks impact future access</li>
              <li>🌍 <strong>Global Events:</strong> Wars, disasters, and crises</li>
              <li>💵 <strong>USD Strength:</strong> Energy is USD-priced globally</li>
            </ul>
          </div>

          <div className="bg-dark rounded p-4 shadow text-center mt-5">
            <h5 className="fw-bold mb-3" style={{ color: "#FFD700" }}>
              📬 Get Energy Market Insights
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

export default Energies;
