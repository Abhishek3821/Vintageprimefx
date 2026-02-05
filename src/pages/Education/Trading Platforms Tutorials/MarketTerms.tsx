import React from "react";
import { Container, Row, Col, Card, Accordion } from "react-bootstrap";
import {
  BsBullseye, BsGraphUp, BsGraphDown, BsCurrencyExchange,
  BsCashCoin, BsBank, BsGlobeAmericas, BsArrowRepeat
} from "react-icons/bs";

const marketIcons = [
  BsBullseye, BsGraphUp, BsGraphDown, BsCurrencyExchange,
  BsCashCoin, BsBank, BsGlobeAmericas, BsArrowRepeat
];

const marketTerms = [
  "Bull Market", "Bear Market", "Volatility", "Liquidity",
  "Market Capitalization", "Exchange", "Global Markets", "Recession"
];

const termCards = marketTerms.map((title, i) => ({
  title,
  duration: `${1 + (i % 3)} min`,
  level: i % 3 === 0 ? "Beginner" : i % 3 === 1 ? "Intermediate" : "Advanced",
  Icon: marketIcons[i % marketIcons.length]
}));

const MarketTerms = () => {
  return (
    <div>
      {/* 🔷 Banner Section */}
      <div
        className="video-banner d-flex align-items-center justify-content-center text-center"
        style={{
          backgroundImage: `url('/images/banner-market.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "350px",
          color: "white",
        }}
      >
        <div className="bg-success bg-opacity-50 p-4 rounded">
          <h1 className="fw-bold display-5 text-light">Key Market Terms</h1>
          <p className="lead text-white mb-0">
            Understand common financial terms used across global markets
          </p>
        </div>
      </div>

      {/* 🔷 Cards Section */}
      <section className="py-5 bg-dark text-white">
        <Container>
          <Row>
            {termCards.map(({ title, duration, level, Icon }, index) => (
              <Col key={index} md={6} lg={3} className="mb-4">
                <Card className="h-100 shadow-sm border-0 text-center bg-light position-relative overflow-hidden">
                  <div className="d-flex justify-content-center align-items-center bg-success bg-opacity-10" style={{ height: "150px" }}>
                    <Icon className="text-success fs-1" />
                  </div>
                  <Card.Body>
                    <Card.Title className="fs-6 fw-bold text-dark">{title}</Card.Title>
                    <Card.Text className="text-muted small">
                      {level} • {duration}
                    </Card.Text>
                  </Card.Body>
                  <div className="order-hover bg-success text-white p-3 position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center opacity-0 hover-transition">
                    <h5 className="fw-bold">{title}</h5>
                    <p className="mb-0 small">Level: {level} | Time: {duration}</p>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>

        {/* 🔷 FAQ Section */}
        <section className="py-5 bg-dark text-white">
          <Container>
            <h2 className="text-center fw-bold mb-4 text-light">FAQs - Market Terms</h2>
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>What is a Bull Market?</Accordion.Header>
                <Accordion.Body>
                  A bull market is a period in which stock prices are rising or expected to rise.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>How does volatility impact trading?</Accordion.Header>
                <Accordion.Body>
                  Higher volatility means larger price swings and potential for higher returns or losses.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Why is liquidity important in a market?</Accordion.Header>
                <Accordion.Body>
                  Liquidity ensures you can buy/sell assets quickly without affecting the price.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>What’s the role of global markets?</Accordion.Header>
                <Accordion.Body>
                  Global markets enable international trade and investment, affecting economies worldwide.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Container>
        </section>
      </section>
    </div>
  );
};

export default MarketTerms;
