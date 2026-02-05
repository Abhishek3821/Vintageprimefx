import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const Agriculture: React.FC = () => {
  return (
    <>
      <section
        className="text-white d-flex align-items-center"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.45)), url(/assets/agriculture-banner.jpg)',
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "60vh",
          fontFamily: "Segoe UI, sans-serif",
        }}
      >
        <div className="container text-center">
          <h1 className="fw-bold display-4">
            How to <span className="text-warning">Trade Agricultural Commodities</span>
          </h1>
          <p className="lead mb-4">
            Learn how to trade key soft commodities like corn, wheat, and coffee — explore pricing drivers, trading tools, and strategies.
          </p>
          <a href="#agriculture-guide" className="btn btn-warning fw-semibold px-4 py-2 rounded-pill shadow">
            Start Learning
          </a>
        </div>
      </section>

      <section
        id="agriculture-guide"
        className="py-5 text-light"
        style={{ background: "linear-gradient(to bottom right, #111, #1c1c1c)", fontFamily: "Segoe UI, sans-serif" }}
      >
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-10">
              <h2 className="fw-bold mb-4" style={{ color: "#198754" }}>
                What Are Agricultural Commodities?
              </h2>
              <p className="fs-5">
                Agricultural commodities include essential soft commodities like corn, wheat, sugar, and coffee — grown or reared above ground and used as food or industrial inputs. Their prices are driven by supply, demand, weather, and technology.
              </p>
            </div>
          </div>

          <div className="mb-5">
            <h3 style={{ color: "#00BFA6" }} className="mb-3">Top Agricultural Instruments</h3>
            <ul className="fs-5">
              <li>🌽 <strong>Corn (CORN):</strong> Staple food crop with high industrial and biofuel demand.</li>
              <li>☕ <strong>Coffee (COFFEE_C):</strong> Volatile and seasonally impacted beverage commodity.</li>
              <li>🍬 <strong>Sugar (SUGAR#11):</strong> Food and industrial commodity, influenced by weather and energy prices.</li>
              <li>🌾 <strong>Wheat (WHEAT):</strong> Key food crop with wide consumption and export market influence.</li>
              <li>🥜 <strong>Soybeans (SOYBEAN):</strong> Vital protein crop used in food and livestock feed.</li>
              <li>☁️ <strong>Cotton (COTTON#2):</strong> Industrial crop used in textiles, subject to tariff and trade policy changes.</li>
              <li>🍫 <strong>Cocoa (COCOA):</strong> Soft commodity with demand fluctuations tied to global chocolate markets.</li>
            </ul>
          </div>

          <div className="mb-5">
            <h3 style={{ color: "#00BFA6" }} className="mb-3">What Influences Agricultural Prices?</h3>
            <ul className="fs-5">
              <li>🌦️ <strong>Weather Patterns:</strong> Droughts, floods, and storms affect supply and pricing.</li>
              <li>🚜 <strong>Technology:</strong> Innovations in irrigation and genetics help stabilize and boost supply.</li>
              <li>🌍 <strong>Trade & Tariffs:</strong> Trade policies impact export-import flows and market sentiment.</li>
              <li>🛢️ <strong>Energy Prices:</strong> Farming input costs are tied to oil and energy prices.</li>
              <li>🏙️ <strong>Urbanization & Incomes:</strong> Changing consumption habits influence demand.</li>
            </ul>
          </div>

          <div className="mb-5">
            <h3 style={{ color: "#00BFA6" }} className="mb-3">How Agricultural Products Are Traded</h3>
            <ul className="fs-5">
              <li><strong>Cash Market:</strong> Buy and sell at current prices with immediate settlement.</li>
              <li><strong>Futures Contracts:</strong> Trade future prices with delivery dates and hedging benefits.</li>
              <li><strong>CFDs:</strong> Trade price movements without owning physical goods.</li>
              <li><strong>Options:</strong> Hedge or speculate with defined risks using commodity options.</li>
            </ul>
          </div>

          <div className="mb-5">
            <h3 style={{ color: "#00BFA6" }} className="mb-3">Contango vs. Backwardation</h3>
            <p className="fs-5">
              <strong>Contango:</strong> Futures prices {">"} spot prices — occurs during short-term oversupply.<br />
              <strong>Backwardation:</strong> Spot prices {">"} futures — common during short-term shortages.<br />
              Understanding these helps traders identify potential price movement opportunities.
            </p>
          </div>

          <div className="mb-5">
            <h3 style={{ color: "#00BFA6" }} className="mb-3">Why Trade Agricultural Commodities with AvaTrade</h3>
            <ul className="fs-5">
              <li>⚙️ <strong>Leverage:</strong> Trade on margin for greater exposure with smaller capital.</li>
              <li>🌐 <strong>Global Access:</strong> Trade major agricultural contracts from ICE and CBOT.</li>
              <li>📉 <strong>Short or Long:</strong> Profit on rising or falling prices with CFDs.</li>
              <li>📊 <strong>Advanced Tools:</strong> AvaTradeGO, MT5, WebTrader and more.</li>
              <li>🎓 <strong>Education:</strong> Learn with webinars, eBooks, and trading resources.</li>
            </ul>
          </div>

          <div className="bg-dark rounded p-4 shadow text-center mt-5">
            <h5 className="fw-bold mb-3" style={{ color: "#198754" }}>
              🌽 Subscribe for Agriculture Market Updates
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

export default Agriculture;
