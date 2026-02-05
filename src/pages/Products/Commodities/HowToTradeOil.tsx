import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const HowToTradeOil: React.FC = () => {
  return (
    <>
      <section
        className="text-white d-flex align-items-center"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.45)), url(/assets/oil-banner.jpg)',
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "60vh",
          fontFamily: "Segoe UI, sans-serif",
        }}
      >
        <div className="container text-center">
          <h1 className="fw-bold display-4">
            How to <span className="text-warning">Trade Oil</span>
          </h1>
          <p className="lead mb-4">
            Discover how to capitalize on oil market volatility — benchmarks, trading strategies, and tools with AvaTrade.
          </p>
          <a href="#oil-guide" className="btn btn-warning fw-semibold px-4 py-2 rounded-pill shadow">
            Start Learning
          </a>
        </div>
      </section>

      <section
        id="oil-guide"
        className="py-5 text-light"
        style={{ background: "linear-gradient(to bottom right, #111, #1c1c1c)", fontFamily: "Segoe UI, sans-serif" }}
      >
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-10">
              <h2 className="fw-bold mb-4" style={{ color: "#FFD700" }}>
                Introduction to Oil Trading
              </h2>
              <p className="fs-5">
                Oil is the world’s most actively traded commodity, offering massive opportunities for traders due to its price volatility. Learn how the oil market operates and how to trade it effectively.
              </p>
            </div>
          </div>

          <div className="mb-5">
            <h3 className=" mb-3" style={{ color: "#00BFA6" }}>Main Crude Oil Benchmarks</h3>
            <ul className="fs-5">
              <li><strong>West Texas Intermediate (WTI):</strong> Light and sweet crude sourced from U.S., sensitive to North American factors.</li>
              <li><strong>Brent Crude:</strong> North Sea oil blend, affected by global geopolitics and market changes.</li>
              <li><strong>OPEC Basket:</strong> Diverse crude from OPEC nations, heavily driven by political shifts.</li>
            </ul>
          </div>

          <div className="mb-5">
            <h3 className="mb-3" style={{ color: "#00BFA6" }}>How Is Oil Traded?</h3>
            <ul className="fs-5">
              <li><strong>Physical Oil:</strong> Spot and contract trades by large corporations.</li>
              <li><strong>Oil Futures:</strong> Speculate on future oil prices without handling physical oil.</li>
              <li><strong>Oil CFDs:</strong> Flexible, leveraged, and popular among retail traders for short-term speculation.</li>
              <li><strong>ETFs & Stocks:</strong> Trade oil-linked ETFs or invest in energy companies like Exxon or BP.</li>
            </ul>
          </div>

          <div className="mb-5">
            <h3 className=" mb-3" style={{ color: "#00BFA6" }}>What Affects Oil Price?</h3>
            <ul className="fs-5">
              <li>🔄 <strong>Supply & Demand:</strong> Production levels vs global consumption.</li>
              <li>🌍 <strong>Geopolitics:</strong> Conflicts, OPEC decisions, and sanctions drive price shifts.</li>
              <li>📈 <strong>Economic Growth:</strong> Oil demand rises with industrial expansion.</li>
              <li>💵 <strong>USD Fluctuations:</strong> Strong dollar = lower oil prices.</li>
              <li>⚡ <strong>Tech & Renewables:</strong> Fracking and green energy trends reshape the future.</li>
            </ul>
          </div>

          <div className="mb-5">
            <h3 className="mb-3" style={{ color: "#00BFA6" }}>How to Start Trading Oil CFDs</h3>
            <ul className="fs-5">
              <li><strong>Choose a Regulated Broker:</strong> AvaTrade offers top-tier tools and security.</li>
              <li><strong>Open Your Account:</strong> Complete KYC, fund your account, and explore the demo platform.</li>
              <li><strong>Study the Oil Market:</strong> Read guides, track news, and use AvaTrade resources.</li>
              <li><strong>Create a Strategy:</strong> Define entry/exit rules and risk limits.</li>
              <li><strong>Start Trading:</strong> Use AvaTrade tools, monitor your trades, and manage risk actively.</li>
            </ul>
          </div>

          <div className="mb-5">
            <h3 className="mb-3" style={{ color: "#00BFA6" }}>Oil Trading Strategies for Beginners</h3>
            <ul className="fs-5">
              <li><strong>Trend Following:</strong> Use moving averages and indicators to ride price waves.</li>
              <li><strong>Breakout Trading:</strong> Trade strong price moves when oil breaks key levels.</li>
              <li><strong>Range Trading:</strong> Trade within support/resistance when oil is flat.</li>
              <li><strong>News-Based Trading:</strong> React quickly to inventory data or geopolitical headlines.</li>
            </ul>
          </div>

          <div className="mb-5">
            <h3 className="mb-3" style={{ color: "#00BFA6" }}>Oil Trading Tips</h3>
            <ul className="fs-5">
              <li>📊 Watch weekly EIA oil inventory data for short-term volatility.</li>
              <li>🛑 Always use stop-losses to protect against sharp reversals.</li>
              <li>🌎 Monitor OPEC announcements and geopolitical developments.</li>
              <li>📅 Use trading calendars and avoid trading during chaotic events unless experienced.</li>
              <li>🤖 Use tools like Trading Central and AvaProtect for smarter trades.</li>
              <li>📚 Keep learning — oil markets evolve rapidly.</li>
            </ul>
          </div>

          <div className="mb-5">
            <h3 className="mb-3" style={{ color: "#00BFA6" }}>Why Trade Oil with AvaTrade</h3>
            <ul className="fs-5">
              <li>🌍 Fully regulated and trusted globally</li>
              <li>📞 24/5 multilingual customer support</li>
              <li>🎓 Rich education hub with webinars and trading courses</li>
              <li>🛠️ Advanced trading platforms: MT4, MT5, WebTrader, AvaTradeGo</li>
              <li>🛡️ AvaProtect risk management solution</li>
            </ul>
          </div>

          <div className="bg-dark rounded p-4 shadow text-center mt-5">
            <h5 className="fw-bold mb-3" style={{ color: "#FFD700" }}>
              📬 Subscribe for Oil Market Updates
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

export default HowToTradeOil;
