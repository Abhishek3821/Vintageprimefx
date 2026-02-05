import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const HowToTradeGold: React.FC = () => {
  return (
    <>
      <section
        className="text-white d-flex align-items-center"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.45)), url(/assets/gold-banner.jpg)',
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "60vh",
          fontFamily: "Segoe UI, sans-serif",
        }}
      >
        <div className="container text-center">
          <h1 className="fw-bold display-4">
            How to <span className="text-warning">Trade Gold</span>
          </h1>
          <p className="lead mb-4">
            Learn everything about trading the world’s most precious metal — strategies, risks, and platforms with AvaTrade.
          </p>
          <a href="#gold-guide" className="btn btn-warning fw-semibold px-4 py-2 rounded-pill shadow">
            Start Learning
          </a>
        </div>
      </section>

      <section
        id="gold-guide"
        className="py-5 text-light"
        style={{ background: "linear-gradient(to bottom right, #111, #1c1c1c)", fontFamily: "Segoe UI, sans-serif" }}
      >
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-10">
              <h2 className="fw-bold mb-4" style={{ color: "#00BFA6" }}>
                Introduction to Gold Trading and Investing
              </h2>
              <p className="fs-5">
                Gold trading focuses on short-term profit from price movements, often using CFDs, futures, or options. Gold investing targets long-term value appreciation and wealth protection.
              </p>
              <p className="fs-5">
                Choose a method based on your financial goals, risk tolerance, and market knowledge.
              </p>
            </div>
          </div>

          <div className="mb-5">
            <h3 className=" mb-3" style={{ color: "#00BFA6" }}>How Can Gold Be Traded?</h3>
            <ul className="fs-5">
              <li><strong>Gold Bullion:</strong> Physical gold bars or coins. Ideal for wealth preservation but involves storage and insurance costs.</li>
              <li><strong>Gold Certificates:</strong> Paper-based proof of gold ownership, avoiding physical storage.</li>
              <li><strong>Futures & Options:</strong> Leveraged contracts for advanced traders. High reward, high risk.</li>
              <li><strong>Gold Shares:</strong> Stocks in gold-mining and gold-related companies.</li>
              <li><strong>Gold ETFs:</strong> Track a group of gold stocks. Diversified exposure to gold market.</li>
              <li><strong>Spot Gold CFDs:</strong> Trade gold prices without owning the metal. Offers leverage, flexibility, and lower fees.</li>
            </ul>
          </div>

          <div className="mb-5">
            <h3 className=" mb-3" style={{ color: "#00BFA6" }}>What Affects Gold Price?</h3>
            <ul className="fs-5">
              <li>📉 <strong>Supply & Demand:</strong> Driven by industrial use, investment demand, central banks, and mining production.</li>
              <li>🌍 <strong>Geopolitical Uncertainty:</strong> Gold acts as a safe-haven in crises.</li>
              <li>💰 <strong>Interest Rates:</strong> Inverse relationship with gold prices.</li>
              <li>📈 <strong>Global Economic Climate:</strong> Gold performs better during downturns.</li>
              <li>💵 <strong>US Dollar Strength:</strong> Gold prices typically move opposite the USD.</li>
            </ul>
          </div>

          <div className="mb-5">
            <h3 className="mb-3" style={{ color: "#00BFA6" }}>How to Start Trading Gold CFDs</h3>
            <ul className="fs-5">
              <li><strong>Choose a Reliable Broker:</strong> Look for regulation, platforms, support, and resources.</li>
              <li><strong>Open and Fund Account:</strong> Complete verification, fund your account, and explore demo options.</li>
              <li><strong>Educate Yourself:</strong> Learn from AvaTrade resources and practice on a demo account.</li>
              <li><strong>Develop a Trading Plan:</strong> Strategy, goals, and risk management rules in one place.</li>
              <li><strong>Place and Monitor Trades:</strong> Use tools like Trading Central and always apply Stop Loss and Take Profit orders.</li>
            </ul>
          </div>

          <div className="mb-5">
            <h3 className="mb-3" style={{ color: "#00BFA6" }}>Gold Trading Strategies for Beginners</h3>
            <ul className="fs-5">
              <li><strong>Trend Trading:</strong> Trade in the direction of price trends using charts and indicators.</li>
              <li><strong>Range Trading:</strong> Buy at support, sell at resistance when price is sideways.</li>
              <li><strong>Dollar-Cost Averaging:</strong> Invest fixed amounts regularly to smooth out volatility.</li>
              <li><strong>Combine Analysis:</strong> Merge technical and fundamental insights for stronger decision-making.</li>
            </ul>
          </div>

          <div className="mb-5">
            <h3 className="mb-3" style={{ color: "#00BFA6" }}>Gold Trading Tips</h3>
            <ul className="fs-5">
              <li>📝 Create a clear, disciplined trading plan.</li>
              <li>🛑 Always use risk management tools like Stop Loss and AvaProtect.</li>
              <li>📊 Keep up with global and economic news.</li>
              <li>📅 Use economic calendars to track market-moving events.</li>
              <li>⚠️ Avoid trading during highly volatile periods unless skilled.</li>
              <li>📚 Learn continuously and adjust your strategy as needed.</li>
              <li>🧠 Keep emotions in check; trade based on logic, not fear or greed.</li>
            </ul>
          </div>

          <div className="mb-5">
            <h3 className=" mb-3" style={{ color: "#00BFA6" }}>Why Trade Gold with AvaTrade</h3>
            <ul className="fs-5">
              <li>🌍 Regulated across multiple jurisdictions</li>
              <li>🏆 Award-winning support team available 24/5</li>
              <li>🎓 Rich educational content including webinars, eBooks, and tutorials</li>
              <li>📊 Tools like Trading Central for market analysis</li>
              <li>🛡️ AvaProtect for risk-managed trading</li>
            </ul>
          </div>

          <div className="bg-dark rounded p-4 shadow text-center mt-5">
            <h5 className="fw-bold mb-3" style={{ color: "#FFD700" }}>
              📬 Subscribe for More Gold Trading Insights
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

export default HowToTradeGold;
