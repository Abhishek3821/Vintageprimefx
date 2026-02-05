import React from "react";
 

const knowledgeItems = [
  {
    title: "Trading for Beginners",
    description:
      "Learn everything there is to know about Foreign Exchange, CFD trading, Vanilla Options, Automated trading and much more!",
    linkText: "Learn More",
  },
  {
    title: " Vintageprimefx’ Complete Trading eBook",
    description:
      "Get a deep understanding on online trading and enjoy some valuable trading tips and strategies to kick off your journey.",
    linkText: "Learn More",
  },
  {
    title: "Video Tutorials",
    description:
      "Watch our complete video tutorials collection, from beginners to advanced – here you’ll find it all.",
    linkText: "Learn More",
  },
];

const KnowledgeSection: React.FC = () => {
  return (
    <section
      className="py-5 text-white"
      style={{
        background: "linear-gradient(to right, #000000, #1a1a1a)",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <div className="container text-center">
        <h2 className="fw-bold display-5 mb-4">
          Sharpen Your <span style={{ color: "#00BFA6" }}>Knowledge</span>
        </h2>
        <p className="mb-5 text-light">
          Get the best tools to master the markets — whether you're a beginner
          or a pro.
        </p>

        <div className="row g-4">
          {knowledgeItems.map((item, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div
                className="rounded-4 shadow-sm h-100 d-flex flex-column justify-content-between p-4 card-glass"
                style={{
                  background: "rgba(255, 255, 255, 0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(10px)",
                  transition: "transform 0.3s ease",
                  minHeight: "280px",
                }}
              >
                <div>
                  <h5 className="fw-semibold text-white">{item.title}</h5>
                  <p className="text-light small">{item.description}</p>
                </div>
                <a href="#" className="text-warning fw-semibold small mt-3">
                  {item.linkText} &rsaquo;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KnowledgeSection;
