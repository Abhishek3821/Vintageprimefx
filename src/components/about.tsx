import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";



const PipzomarketAboutPage: React.FC = () => {
  const features = [
    {
      icon: "bi-shield-lock",
      title: "Secure & Regulated",
      text: "Your data and funds are protected with robust regulations and the latest encryption technologies.",
    },
    {
      icon: "bi-globe",
      title: "Wide Asset Access",
      text: "500+ global instruments including Forex, crypto, stock CFDs, commodities, and indices.",
    },
    {
      icon: "bi-laptop",
      title: "Advanced Platforms",
      text: "Trade on web, mobile, or PC with real-time feeds, fast execution, and intuitive tools.",
    },
    {
      icon: "bi-currency-exchange",
      title: "Transparent Pricing",
      text: "Tight spreads, no hidden fees, customizable leverage. What you see is what you trade.",
    },
    {
      icon: "bi-headset",
      title: "24/7 Support",
      text: "Multilingual experts are available around the clock for technical help and market guidance.",
    },
    {
      icon: "bi-journal-text",
      title: "Learning Resources",
      text: "Get webinars, guides, daily news, and video lessons to strengthen your trading skills.",
    },
  ];

  const values = [
    "Integrity: Honest and transparent in everything we do.",
    "Innovation: Always evolving to bring better tools.",
    "Security: Protecting your funds and data with high-tech safety.",
    "Accessibility: Trade from anywhere on any device.",
    "Empowerment: Supporting and educating all levels of traders.",
  ];

  return (
    <div className="bg-white text-dark">
      {/* Hero Section */}
      <section
        className="abouthead text-white d-flex align-items-center"
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "55vh",
          position: "relative",
        }}
      >
        <div
          className="overlay position-absolute w-100 h-100"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        ></div>
        <div className="container text-center position-relative z-2">
          <h1 className="display-5 fw-bold">About VintagePrimeFX</h1>
          <p className="lead mt-3">
            Your Trusted Partner for Trading Forex and CFD
          </p>
          <p className="mt-2">
            Whether you're a beginner or a pro, trade with confidence, speed,
            and success on a secure, intuitive platform.
          </p>
        </div>
      </section>

      {/* What We're All About */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Text */}
            <div className="col-md-6">
              <h2 className="text-success fw-bold mb-4">
                What We're All About
              </h2>
              <p>
                 Vintageprimefx is a next-gen trading platform giving you access to
                global markets. Backed by finance and tech experts, we simplify
                trading for everyone — making it easy, safe, and rewarding.
              </p>
            </div>

            {/* Right Image */}
            <div className="col-md-6 text-center">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="About  Vintageprimefx"
                className="img-fluid"
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
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Our Mission"
                className="img-fluid rounded"
              />
            </div>
            <div className="col-md-6">
              <h2 className="text-success fw-bold mb-4">What We Want</h2>
              <p>
                We aim to empower traders with the best tools and full support.
                 Vintageprimefx blends honesty, reliability, and customer-first
                principles to create genuine trading opportunities — anytime,
                anywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-success text-center fw-bold mb-5">
            Why Trade with  Vintageprimefx?
          </h2>
          <div className="row g-4">
            {features.map((item, idx) => (
              <div key={idx} className="col-md-4">
                <div className="card border-0 shadow-sm h-100 hover-shadow">
                  <div className="card-body text-center">
                    <i className={`bi ${item.icon} fs-1 text-success mb-3`}></i>
                    <h5 className="fw-semibold">{item.title}</h5>
                    <p className="small text-muted">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Text Column */}
            <div className="col-md-6">
              <h2 className="text-success fw-bold mb-4">
                Driven by Purpose, Powered by Technology
              </h2>
              <p>
                Enjoy high-speed execution, low latency, and advanced risk tools
                for manual or algorithmic trading. Trust  Vintageprimefx for consistent
                performance and platform reliability.
              </p>
            </div>

            {/* Right Column - can be image or empty */}
            <div className="col-md-6">
              {/* Optional: Add an image here */}
              <img
                src="https://images.unsplash.com/photo-1542744095-291d1f67b221?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
                alt="Trading platform"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center">
              <img
                src="https://images.unsplash.com/photo-1594322463847-81e2bd5f9888?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
                alt="Global Reach"
                className="img-fluid rounded"
              />
            </div>
            <div className="col-md-6 text-md-start text-center">
              <h2 className="text-success fw-bold mb-4">
                Global Reach, Local Understanding
              </h2>
              <p>
                We support traders worldwide with localised service, regional
                payment methods, and language diversity. Global strength, local
                care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-light py-5 text-center">
        <div className="container">
          <h2 className="text-success fw-bold mb-5">What We Value Most</h2>
          <div className="row g-4 justify-content-center">
            {values.map((value, index) => (
              <div key={index} className="col-md-4">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body">
                    <p className="fw-semibold text-muted">{value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section
        className="py-5 text-center text-light"
        style={{ backgroundColor: "#043d0bff" }}
      >
        <div className="container">
          <h2 className="text-success fw-bold mb-3">
            Join the  Vintageprimefx Community
          </h2>
          <p className="col-md-8 mx-auto">
            Thousands of traders across the world trust  Vintageprimefx. With our
            commitment to safety, transparency, and support — we make trading
            stress-free. Be a part of our success story today.
          </p>
          <h4 className="mt-4 fw-bold text-success">
             Vintageprimefx: Trade with peace of mind.
          </h4>
        </div>
      </section>
    </div>
  );
};

export default PipzomarketAboutPage;
