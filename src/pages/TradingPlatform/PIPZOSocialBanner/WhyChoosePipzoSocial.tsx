import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaUsers,
  FaUserTie,
  FaChartPie,
  FaEye,
  FaGlobe,
  FaShieldAlt,
} from "react-icons/fa";

const features = [
  {
    title: "Trading Community",
    icon: <FaUsers size={32} color="#28a745" />,
    description:
      "Find, follow, join, or create your trading networks and grow your trusted community with  Vintageprimefx.",
  },
  {
    title: "Copy the Experts",
    icon: <FaUserTie size={32} color="#28a745" />,
    description:
      "Skip market research – access skilled traders with proven track records on  Vintageprimefx.",
  },
  {
    title: "Diversification Made Easy",
    icon: <FaChartPie size={32} color="#28a745" />,
    description:
      "Manage risk by diversifying your portfolio across different assets and strategies.",
  },
  {
    title: "Transparency and Control",
    icon: <FaEye size={32} color="#28a745" />,
    description:
      "Monitor experts' performance, adjust your portfolio, and stop copying anytime with  Vintageprimefx.",
  },
  {
    title: "Trade Anytime, Anywhere",
    icon: <FaGlobe size={32} color="#28a745" />,
    description:
      "Trade forex, indices, commodities, and shares 24/7 with the  Vintageprimefx app.",
  },
  {
    title: "Trade with Confidence",
    icon: <FaShieldAlt size={32} color="#28a745" />,
    description:
      "Share your strategies and benefit as you connect with like-minded traders on  Vintageprimefx.",
  },
];

const WhyChoosePipzoMarkets: React.FC = () => {
  return (
    <div style={{ backgroundColor: "#e6f5ee", padding: "80px 0" }}>
      <Container>
        <h2
          className="text-center mb-5"
          style={{ fontWeight: 700, fontSize: "2.8rem", color: "#146c43" }}
        >
          Why Choose <span style={{ color: "#28a745" }}> Vintageprimefx</span>?
        </h2>
        <Row>
          {features.map((item, index) => (
            <Col md={6} lg={4} className="mb-4 d-flex" key={index}>
              <div
                className="p-4 rounded shadow-sm w-100"
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #cce5d0",
                  transition: "all 0.3s ease-in-out",
                }}
              >
                <div className="d-flex align-items-center mb-3">
                  <div className="me-3">{item.icon}</div>
                  <h5 style={{ margin: 0, color: "#28a745", fontWeight: 600 }}>
                    {item.title}
                  </h5>
                </div>
                <p
                  style={{
                    color: "#2d4830",
                    fontSize: "0.95rem",
                    lineHeight: "1.6",
                  }}
                >
                  {item.description}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default WhyChoosePipzoMarkets;
