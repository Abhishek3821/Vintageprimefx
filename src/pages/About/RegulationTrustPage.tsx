import React from "react";
import bgImageTrust from "../../assets/images/image.png";

const RegulationTrustPage = () => {
  return (
    <div>
      <section
        className="text-white py-5 text-center position-relative"
        style={{
          backgroundImage: `url(${bgImageTrust})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "55vh",
        }}
      >
        {/* Overlay */}
        <div
          className="position-absolute w-100 h-100"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        ></div>

        {/* Foreground content */}
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <h1 className="display-5 fw-bold">
            Trade with a Broker You Can Trust
          </h1>
          <p className="lead mt-3">
             Vintageprimefx ensures transparency, regulation, and client protection—so
            your money stays secure and your trading experience stays fair.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Side: Text */}
            <div className="col-md-6 mb-4 mb-md-0">
              <h2 className="text-success fw-bold mb-4">
                Global Regulation. Trusted Standards.
              </h2>
              <p className="lead text-muted">
                At  Vintageprimefx, your confidence means everything to us. That’s why
                we operate under rigorous international rules and supervision
                from top financial authorities around the world.
              </p>
              <p className="text-muted">
                Whether you're trading forex, commodities, or indices — you can
                trust that your funds are secure and treated with the highest
                level of care.
              </p>
            </div>

            {/* Right Side: Visual (Image or Illustration) */}
            <div className="col-md-6 text-center">
              <img
                src="/images/global-regulation.svg"
                alt="Global Regulation Illustration"
                className="img-fluid"
                style={{ maxHeight: "320px" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container">
          <h3 className="fw-bold text-center text-success mb-5">
            Why Rules Are Important
          </h3>

          <div className="row g-4">
            {/* Card 1 */}
            <div className="col-md-6 col-lg-3">
              <div className="bg-white text-center p-4 shadow-sm rounded h-100">
                <div className="fs-2 mb-3">🔍</div>
                <h5 className="fw-semibold mb-2">Independent Oversight</h5>
                <p className="text-muted small">
                  Transparent operations are ensured by third-party oversight
                  and continuous auditing.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-6 col-lg-3">
              <div className="bg-white text-center p-4 shadow-sm rounded h-100">
                <div className="fs-2 mb-3">🏦</div>
                <h5 className="fw-semibold mb-2">Segregated Funds</h5>
                <p className="text-muted small">
                  Your funds are always kept separate from company capital in
                  trusted tier-1 banks.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-6 col-lg-3">
              <div className="bg-white text-center p-4 shadow-sm rounded h-100">
                <div className="fs-2 mb-3">⚖️</div>
                <h5 className="fw-semibold mb-2">Risk Management</h5>
                <p className="text-muted small">
                  We enforce robust policies to protect your assets and ensure
                  fair trading outcomes.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="col-md-6 col-lg-3">
              <div className="bg-white text-center p-4 shadow-sm rounded h-100">
                <div className="fs-2 mb-3">🛡️</div>
                <h5 className="fw-semibold mb-2">AML Compliance</h5>
                <p className="text-muted small">
                  Full compliance with Anti-Money Laundering laws to block fraud
                  and financial crimes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Side: Image or Illustration */}
            <div className="col-md-6 mb-4 mb-md-0 text-center">
              <img
                src="/images/secure-funds.svg" // replace with your actual image path
                alt="Secure Funds Illustration"
                className="img-fluid"
                style={{ maxHeight: "300px" }}
              />
            </div>

            {/* Right Side: Text Content */}
            <div className="col-md-6">
              <h3 className="text-success fw-bold mb-3">
                Your Money Is Always Secure
              </h3>
              <p className="text-muted">
                We only work with <strong>Tier-1 banks</strong> and follow{" "}
                <strong>strict international standards</strong>. Client funds
                are never mixed with corporate funds and are monitored daily.
              </p>
              <p className="text-muted">
                Trade with peace of mind, knowing that your capital is protected
                at all times with full transparency and accountability.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Side: Text Content */}
            <div className="col-md-6 mb-4 mb-md-0">
              <h3 className="fw-bold text-success mb-3">
                We Believe in Fair, Honest Trading
              </h3>
              <p className="text-muted">
                We're not just a platform — we're your partner. That’s why we
                operate with <strong>full transparency</strong>: no hidden
                terms, no unfair slippage, and clear trade execution powered by{" "}
                <strong>cutting-edge technology</strong>.
              </p>
              <p className="text-muted">
                Every trade is treated fairly and efficiently — giving you the
                confidence to focus on your strategy while we handle integrity.
              </p>
            </div>

            {/* Right Side: Image or Visual */}
            <div className="col-md-6 text-center">
              <img
                src="/images/fair-trade.svg" // Replace with your actual image path
                alt="Fair Trading Illustration"
                className="img-fluid"
                style={{ maxHeight: "300px" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            {/* Right Side: Illustration */}
            <div className="col-md-6 text-center">
              <img
                src="/images/global-trust.svg" // Replace with your actual image path
                alt="Global Trust Illustration"
                className="img-fluid"
                style={{ maxHeight: "300px" }}
              />
            </div>
            {/* Left Side: Text */}
            <div className="col-md-6 mb-4 mb-md-0">
              <h3 className="text-success fw-bold mb-3">
                Trusted Across Continents
              </h3>
              <p className="text-muted">
                With regulatory licenses spanning{" "}
                <strong>Europe, Asia, the Middle East, and beyond</strong> —
                 Vintageprimefx combines global compliance with local expertise.
              </p>
              <p className="text-muted">
                Whether you're a beginner or a professional trader, our secure
                and regulated environment is trusted by users around the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars of a Regulated Broker */}
      <section className="py-5 bg-light">
        <div className="container">
          <h3 className="fw-bold text-success text-center mb-5">
            Why Trade with a Regulated Broker
          </h3>
          <div className="row g-4">
            {[
              {
                icon: "💰",
                title: "Safety of Funds",
                desc: "Segregated client accounts with leading global banks.",
              },
              {
                icon: "🌐",
                title: "Global Licenses",
                desc: "Authorized and regulated in multiple key jurisdictions.",
              },
              {
                icon: "🔎",
                title: "Full Transparency",
                desc: "Real-time pricing and clear execution, no hidden terms.",
              },
              {
                icon: "📜",
                title: "Ethical Practices",
                desc: "Strict adherence to international financial standards.",
              },
              {
                icon: "🚫",
                title: "No Extra Fees",
                desc: "What you see is what you pay. No surprise costs.",
              },
            ].map((item, index) => (
              <div className="col-md-4" key={index}>
                <div className="bg-white rounded shadow-sm h-100 text-center p-4">
                  <div className="display-5 mb-3">{item.icon}</div>
                  <h5 className="fw-semibold mb-2">{item.title}</h5>
                  <p className="text-muted mb-0">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Modernized */}
      <section className="py-5 bg-success text-white text-center">
        <div className="container">
          <h2 className="fw-bold display-6 mb-3">
            Trade with Confidence, Backed by Regulation
          </h2>
          <p className="lead mb-4">
            Join  Vintageprimefx — where integrity, security, and transparency power
            every trade.
          </p>
          <a
            href="/signup"
            className="btn btn-light btn-lg px-5 fw-semibold shadow-sm"
          >
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
};

export default RegulationTrustPage;
