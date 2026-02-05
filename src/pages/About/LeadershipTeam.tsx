import React from "react";

const teamMembers = [
  {
    name: "Dáire Ferguson",
    role: "CEO, AvaTrade",
    image: "/images/team/ferguson.jpg",
    description: `Mr. Ferguson came to AvaTrade after serving as the European & Asian Senior Treasury Manager at Bristol Myers Squibb. He was Head of Corporate Forex in London & Dublin.`,
  },
  {
    name: "Sari Hemmendinger",
    role: "CFO",
    image: "/images/team/sari.jpg",
    description: `Mrs. Hemmendinger joined AvaTrade in 2015 after serving as a Senior Manager at PwC. She holds an LLM in Law and a B.A in Accounting.`,
  },
  {
    name: "Turlough McIntyre",
    role: "VP Risk Management",
    image: "/images/team/turlough.jpg",
    description: `Mr. McIntyre joined AvaTrade in 2011. He has degrees in Mathematics, Finance, and Capital Markets.`,
  },
  {
    name: "Ian Webb",
    role: "VP Compliance",
    image: "/images/team/ian.jpg",
    description: `Mr. Webb brings over 15 years of experience, including senior compliance roles at Citco and Deutsche Bank.`,
  },
];

const LeadershipTeam: React.FC = () => {
  return (
    <section className="py-5 bg-light text-center">
      <div className="container">
        <h2 className="fw-bold text-success mb-5">Our Leadership Team</h2>
        <div className="row g-4 justify-content-center">
          {teamMembers.map((member, index) => (
            <div className="col-md-6 col-lg-3" key={index}>
              <div className="flip-card">
                <div className="flip-card-inner">
                  {/* Front Side */}
                  <div className="flip-card-front">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="img-fluid"
                      style={{ height: "auto", objectFit: "cover" }}
                    />
                    <h5 className="mt-3 fw-bold">{member.name}</h5>
                    <p className="text-muted">{member.role}</p>
                  </div>
                  {/* Back Side */}
                  <div className="flip-card-back d-flex flex-column justify-content-center align-items-center p-3">
                    <h6 className="fw-bold">{member.name}</h6>
                    <p className="small">{member.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeam;
