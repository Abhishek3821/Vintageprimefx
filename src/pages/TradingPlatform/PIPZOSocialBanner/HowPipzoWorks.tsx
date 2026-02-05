import React from "react";
import { Container, Row, Col } from "react-bootstrap";

interface Step {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
}

const steps: Step[] = [
  {
    title: "1/ Choose Your Experts:",
    description:
      "Browse  Vintageprimefx’s expert trader list. Filter by performance, risk appetite, and trading category to match your goals.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "2/ Allocate Your Funds:",
    description:
      "Decide how much capital you want to allocate to each expert. Customize your  Vintageprimefx portfolio to suit your strategy.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    reverse: true,
  },
  {
    title: "3/ Watch and Learn:",
    description:
      "Sit back as expert strategies are mirrored in your account. Learn by observing real-time decisions made by professionals.",
    image: "https://images.unsplash.com/photo-1542744095-291d1f67b221?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
  },
  {
    title: "4/ Stay Informed:",
    description:
      "Track your performance with  Vintageprimefx’s dashboard. Monitor gains, losses, and expert analytics in real-time.",
    image: "https://images.unsplash.com/photo-1594322463847-81e2bd5f9888?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
    reverse: true,
  },
  {
    title: "5/ Connect with the Community:",
    description:
      "Engage with other  Vintageprimefx users. Ask questions, share insights, and grow through social collaboration.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
  },
];

const HowPipzoWorks: React.FC = () => {
  return (
    <div style={{ backgroundColor: "#e6f5ee", padding: "60px 0" }}>
      <Container>
        <h2
          className="text-center mb-5"
          style={{ fontWeight: 700, fontSize: "2.5rem", color: "#146c43" }}
        >
          How <span style={{ color: "#28a745" }}> Vintageprimefx</span> Works
        </h2>

        {steps.map((step, index) => (
          <Row
            key={index}
            className={`align-items-center mb-5 ${step.reverse ? "flex-md-row-reverse" : ""}`}
          >
            <Col md={6}>
              <h4 style={{ color: "#28a745" }}>{step.title}</h4>
              <p style={{ color: "#2d4830" }}>{step.description}</p>
            </Col>
            <Col md={6} className="text-center">
              <img
                src={step.image}
                alt={step.title}
                className="img-fluid rounded shadow"
                style={{ maxHeight: "300px", objectFit: "cover" }}
              />
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  );
};

export default HowPipzoWorks;
