import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import bgImagewhy from "../../assets/images/image.png";
const WhyChoosePipzomarket: React.FC = () => {
  return (
    <div className="bg-white text-dark">
      <section
        className="text-white py-5 text-center"
        style={{
          backgroundImage: `url(${bgImagewhy})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          minHeight: "55vh",
        }}
      >
        {/* Dark overlay */}
        <div
          className="position-absolute w-100 h-100"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", top: 0, left: 0 }}
        ></div>

        {/* Content with z-index to be above overlay */}
        <div className="container position-relative z-2">
          <h1 className="display-4 fw-bold">Why Choose  Vintageprimefx?</h1>
          <p className="lead fw-bold">Trade with Trust</p>
          <p className="fw-bold">
             Vintageprimefx empowers real traders with precision, technology, and
            trust. Whether you're trading Forex, commodities, indices,
            cryptocurrencies, or stocks, we offer the tools, speed, and security
            needed to excel in today’s global financial world.
          </p>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            {/* Left: Text */}
            <div className="col-md-6 mb-4 mb-md-0">
              <h2 className="text-success fw-bold mb-4">
                Safe, Open, and Regulated
              </h2>
              <ul className="list-unstyled">
                <li className="d-flex align-items-start mb-3">
                  <span className="me-3 fs-5 text-success">✔️</span>
                  <span className="fs-6 fw-semibold">
                    Strict regulatory compliance and transparency in operations
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <span className="me-3 fs-5 text-success">✔️</span>
                  <span className="fs-6 fw-semibold">
                    Segregated client funds for enhanced security
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <span className="me-3 fs-5 text-success">✔️</span>
                  <span className="fs-6 fw-semibold">
                    Routine audits and fully open operational processes
                  </span>
                </li>
                <li className="d-flex align-items-start">
                  <span className="me-3 fs-5 text-success">✔️</span>
                  <span className="fs-6 fw-semibold">
                    Fair, dependable trading designed to earn your trust
                  </span>
                </li>
              </ul>
            </div>

            {/* Right: Image */}
            <div className="col-md-6 text-center">
              <img
                src="/assets/images/forex1.jpg" // replace with your image path or import
                alt="Regulated and Secure"
                className="img-fluid rounded shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light py-5">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Column: Image */}
            <div className="col-md-6 mb-4 mb-md-0 text-center">
              <img
                src="/assets/images/chart.png" // ✅ Update path if needed
                alt="Institutional Grade Execution"
                className="img-fluid rounded shadow-sm"
              />
            </div>

            {/* Right Column: Text */}
            <div className="col-md-6">
              <h2 className="text-success fw-bold mb-4">
                Institutional-Grade Execution
              </h2>
              <ul className="list-unstyled">
                <li className="d-flex align-items-start mb-3">
                  <span className="me-2 text-success fs-5">✔️</span>
                  <span className="fw-semibold">
                    Ultra-low latency and minimal slippage
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <span className="me-2 text-success fs-5">✔️</span>
                  <span className="fw-semibold">
                    No requotes or manipulation
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <span className="me-2 text-success fs-5">✔️</span>
                  <span className="fw-semibold">
                    Access to institutional-grade liquidity
                  </span>
                </li>
                <li className="d-flex align-items-start">
                  <span className="me-2 text-success fs-5">✔️</span>
                  <span className="fw-semibold">
                    Precision order execution during volatile markets
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container">
          <div className="row align-items-center">
            {/* Right Column: Text */}
            <div className="col-md-6">
              <h2 className="text-success fw-bold mb-4">Global Asset Access</h2>
              <ul className="list-unstyled">
                <li className="d-flex align-items-start mb-3">
                  <span className="me-2 text-success fs-5">🌍</span>
                  <span className="fw-semibold">
                    1,000+ markets in one platform
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <span className="me-2 text-success fs-5">💱</span>
                  <span className="fw-semibold">
                    Forex (Major, Minor, Exotic pairs)
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <span className="me-2 text-success fs-5">⚡</span>
                  <span className="fw-semibold">
                    Precious metals and energy (Gold, Silver, Crude Oil)
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <span className="me-2 text-success fs-5">📈</span>
                  <span className="fw-semibold">
                    Indices (DAX, FTSE, S&amp;P 500, NASDAQ, etc.)
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <span className="me-2 text-success fs-5">🗂️</span>
                  <span className="fw-semibold">CFDs on global stocks</span>
                </li>
                <li className="d-flex align-items-start">
                  <span className="me-2 text-success fs-5">🪙</span>
                  <span className="fw-semibold">
                    24/7 Cryptocurrency trading (BTC, ETH, XRP, etc.)
                  </span>
                </li>
              </ul>
            </div>
            {/* Left Column: Image */}
            <div className="col-md-6 mb-4 mb-md-0 text-center">
              <img
                src="/assets/images/forex1.jpg" // ✅ Replace with appropriate image or import
                alt="Global Asset Access"
                className="img-fluid rounded shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light py-5">
        <div className="container">
          <div className="row align-items-center">
            {/* Text Column */}

            {/* Image Column */}
            <div className="col-md-6 text-center">
              <img
                src="/images/trade-anywhere.png"
                alt="Trade Anywhere"
                className="img-fluid rounded shadow-sm"
                style={{ maxHeight: "350px" }}
              />
            </div>
            <div className="col-md-6">
              <h2 className="text-success fw-bold mb-4">
                Trade Anywhere, Anytime
              </h2>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>{" "}
                  MetaTrader 4 & 5 compatible
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>{" "}
                  WebTrader with browser access
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>{" "}
                  iOS and Android mobile apps
                </li>
                <li>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>{" "}
                  Real-time sync and cross-device stability
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container">
          <div className="row align-items-center">
            {/* Text Column */}
            <div className="col-md-6">
              <h2 className="text-success fw-bold mb-4">
                Advanced Tools for Smart Traders
              </h2>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>{" "}
                  Multi-chart technical indicators
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>{" "}
                  Integrated economic calendars and news feeds
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>{" "}
                  AutoTrading, EAs, and custom strategies
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>{" "}
                  Risk management tools: SL/TP, trailing stops, margin alerts
                </li>
                <li>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>{" "}
                  Negative balance protection
                </li>
              </ul>
            </div>

            {/* Image Column */}
            <div className="col-md-6 text-center">
              <img
                src="/images/advanced-tools.png"
                alt="Advanced Trading Tools"
                className="img-fluid rounded shadow-sm"
                style={{ maxHeight: "350px" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light py-5">
        <div className="container">
          <div className="row align-items-center flex-md-row-reverse">
            {/* Text Column */}
            <div className="col-md-6">
              <h2 className="text-success fw-bold mb-4">
                Priority Support & Account Managers
              </h2>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Dedicated account managers for expert traders
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  24/5 multilingual customer service
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Support via chat, phone, or email
                </li>
                <li>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Fast, responsive, and knowledgeable assistance
                </li>
              </ul>
            </div>

            {/* Image Column */}
            <div className="col-md-6 text-center">
              <img
                src="/images/support-team.png"
                alt="Priority Support"
                className="img-fluid rounded shadow-sm"
                style={{ maxHeight: "350px" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container">
          <div className="row align-items-center">
            {/* Text Column */}
            <div className="col-md-6">
              <h2 className="text-success fw-bold mb-4">
                Built for Professionals
              </h2>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Low latency and deep liquidity
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Professional-grade charts and analysis
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Flexible leverage (regulated per region)
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Simple and transparent pricing options
                </li>
                <li>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Supports scalping, hedging, and automation
                </li>
              </ul>
            </div>

            {/* Image Column */}
            <div className="col-md-6 text-center">
              <img
                src="/images/professionals-tools.png"
                alt="Built for Professionals"
                className="img-fluid rounded shadow-sm"
                style={{ maxHeight: "350px" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center">
              <img
                src="/images/honest-pricing.png"
                alt="Honest Pricing Illustration"
                className="img-fluid rounded shadow-sm"
                style={{ maxHeight: "350px" }}
              />
            </div>
            {/* Text Content */}
            <div className="col-md-6">
              <h2 className="text-success fw-bold mb-4">
                Clear and Honest Pricing
              </h2>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  No hidden charges
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Raw spread + commission or fixed spread options
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  No price manipulation or markup games
                </li>
                <li>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Genuine quotes and cost-saving conditions
                </li>
              </ul>
            </div>

            {/* Image */}
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="text-success fw-bold mb-3">
            Global Coverage with Local Understanding
          </h2>
          <p className="lead text-muted mx-auto col-md-8">
            From Asia to Europe, the Middle East to Africa — we serve traders
            worldwide with local language support, regional payment methods, and
            culturally aware service.{" "}
            <strong className="text-dark">Trade globally, feel local.</strong>
          </p>
          <div className="d-flex flex-wrap justify-content-center gap-4 mt-4">
            <div className="shadow-sm p-3 bg-white rounded border">
              🌏 <span className="fw-semibold">Asia</span>
            </div>
            <div className="shadow-sm p-3 bg-white rounded border">
              🌍 <span className="fw-semibold">Europe</span>
            </div>
            <div className="shadow-sm p-3 bg-white rounded border">
              🌐 <span className="fw-semibold">Middle East</span>
            </div>
            <div className="shadow-sm p-3 bg-white rounded border">
              🌄 <span className="fw-semibold">Africa</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-success text-white py-5 text-center">
        <div className="container">
          <h2 className="display-5 fw-bold mb-3">
            Performance. Accuracy.  Vintageprimefx.
          </h2>
          <p className="lead mx-auto col-md-10">
            With a legacy of protecting traders and delivering precision
            execution, <span className="fw-semibold"> Vintageprimefx</span> is
            redefining online trading with performance at its core.
            <br className="d-none d-md-block" />
            Trusted by a growing global community trading{" "}
            <strong>millions every month</strong>.
          </p>

          <div className="row mt-5 justify-content-center">
            <div className="col-6 col-md-3 mb-3">
              <div className="bg-white text-success rounded shadow-sm py-3 px-2">
                <h4 className="mb-0 fw-bold">99.9%</h4>
                <small>Execution Accuracy</small>
              </div>
            </div>
            <div className="col-6 col-md-3 mb-3">
              <div className="bg-white text-success rounded shadow-sm py-3 px-2">
                <h4 className="mb-0 fw-bold">Global</h4>
                <small>Client Reach</small>
              </div>
            </div>
            <div className="col-6 col-md-3 mb-3">
              <div className="bg-white text-success rounded shadow-sm py-3 px-2">
                <h4 className="mb-0 fw-bold">Millions</h4>
                <small>Monthly Trades</small>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChoosePipzomarket;
