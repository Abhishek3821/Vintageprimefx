import React from "react";
 

const infoCards = [
  {
    title: "We Want You to Succeed",
    text: "From developing the best educational materials out there to providing daily market analysis updates and live webinars, we are as interested in your success as you are.",
  },
  {
    title: "You Deserve The Best",
    text: "Use Expert Advisors, Copy Trading platforms,  VintageprimefxProtect™, and Trading Central analysis tools – crafted for your success.",
  },
  {
    title: "Endless Possibilities",
    text: "Trade everything from forex to crypto, indices to commodities – all in one seamless experience.",
  },
  {
    title: "We Stay in Touch!",
    text: "Follow us on Twitter, Facebook, YouTube & our blog. Stay updated with latest offers, insights & more!",
  },
  {
    title: "Great Trading Conditions",
    text: "No short-selling restrictions, fast execution, hedging, scalping, and ultra-low spreads – we support your edge.",
  },
];

const WhyDifferent: React.FC = () => {
  return (
    <section
      className="text-white py-5"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 1)), url(/assets/racer.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <div className="container">
        <h2 className="fw-bold display-5 text-center mb-3">
          What Makes <span style={{ color: "#00BFA6" }}> Vintageprimefx</span>{" "}
          Different?
        </h2>
        <p className="lead text-center text-light mb-5">
          Join over 1 million returning clients who already made the right
          choice
        </p>

        <div className="row g-4">
          {infoCards.map((card, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div
                className="p-4 rounded-4 shadow h-100 card-glass"
                style={{
                  background: "rgba(0, 0, 0, 0.06)",
                  border: "1px solid rgba(255, 255, 255, 0.38)",
                  backdropFilter: "blur(10px)",
                  transition: "transform 0.3s ease",
                }}
              >
                <h6 style={{ color: "#00BFA6" }} className="fw-semibold mb-2">
                  {card.title}
                </h6>
                <p className="text-light small mb-0">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyDifferent;
