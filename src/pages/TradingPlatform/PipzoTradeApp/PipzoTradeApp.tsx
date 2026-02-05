import React from "react";
import { Container, Row, Col, Button, Accordion } from "react-bootstrap";
import {
  FaBalanceScale,
  FaChartLine,
  FaCheckCircle,
  FaEye,
  FaQuestionCircle,
  FaShieldAlt,
  FaTrophy,
} from "react-icons/fa";

const PipzoTradeApp: React.FC = () => {
  return (
    <>
      <div style={{ backgroundColor: "#014421" }} className="text-white py-5">
        <Container className="text-center">
          <Row className="justify-content-center">
            <Col lg={10}>
              <h2 className="fw-bold mb-3"> Vintageprimefx Mobile Trading</h2>
              <h5 className="text-warning mb-3">
                Innovative Technology at Your Fingertips
              </h5>
              <p className="mb-4 fs-5">
                Voted no. 1 Best Forex Trading App by the Global Forex Awards.
                Connect to global trading markets with live feeds and social
                trends, and reduce your risk with  VintageprimefxShield™ - our unique
                protection technology.
              </p>
              <Button
                variant="light"
                size="lg"
                className="fw-semibold text-dark"
              >
                Download  Vintageprimefx App
              </Button>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col>
              <img
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                alt=" Vintageprimefx Mobile App"
                className="img-fluid w-100"
                style={{ maxHeight: "400px", objectFit: "cover" }}
              />
            </Col>
          </Row>
        </Container>
      </div>

      <div style={{ backgroundColor: "#e6f4ea" }} className="py-5 text-dark">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h2 className="fw-bold mb-4" style={{ color: "#145214" }}>
                Unique Technology
              </h2>
              <p className="fs-5 mb-4">
                See your trades at a glance, create your own watch lists, and
                view live prices and charts. Choose from over 1,000 instruments
                to trade, including the world’s top Forex pairs, Commodities,
                Stocks, Cryptocurrencies, and more, all in the palm of your
                hand.
              </p>
              <p className="fs-5 mb-4">
                Worried about losing on a position?{" "}
                <strong> VintageprimefxShield™</strong> has you covered. Choose the
                 VintageprimefxShield™ feature on the  Vintageprimefx app, or from WebTrader,
                when executing your trade and experience total peace of mind
                during the protected period.
              </p>
              <ul className="fs-5 list-unstyled">
                <li className="mb-3">
                  <FaCheckCircle className="text-success me-2" /> Over 1,000
                  trading instruments
                </li>
                <li className="mb-3">
                  <FaCheckCircle className="text-success me-2" /> Live prices
                  and charts
                </li>
                <li className="mb-3">
                  <FaCheckCircle className="text-success me-2" /> PipzoShield™
                  protection
                </li>
              </ul>
            </Col>
            <Col md={6} className="text-center mt-4 mt-md-0">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt=" Vintageprimefx App Features"
                className="img-fluid"
                style={{
                  maxHeight: "400px",
                  borderRadius: "12px",
                  boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                }}
              />
            </Col>
          </Row>
        </Container>
      </div>

      <div style={{ backgroundColor: "#f5fff9" }} className="text-dark py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <h2
                className="fw-bold mb-4 text-center"
                style={{ color: "#145214" }}
              >
                Trading Made Simple
              </h2>
              <p className="fs-5 mb-4 text-center">
                There’s a reason  Vintageprimefx Mobile Trading App has been voted no.1
                Best Forex Trading App 2020* by the Global Forex Awards. Enjoy a
                smooth trading experience with a sophisticated dashboard,
                complete with a set of intuitive management tools, clear charts,
                zoom for details, and many more helpful features unique to this
                app.
              </p>
              <p className="fs-5 text-center">
                At  Vintageprimefx, we view trading as an evolving process. Whether
                you’re a beginner or a seasoned trader, our app empowers you
                with tools to refine your skills and grow your success.
              </p>
              <p className="fs-6 text-center text-muted">
                * Global Forex Awards Voted Best Forex Trading App 2020
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <div style={{ backgroundColor: "#e6f4ea" }} className="text-dark py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h2 className="fw-bold mb-4" style={{ color: "#145214" }}>
                Market Trends – Exclusive to  Vintageprimefx
              </h2>
              <p className="fs-5 mb-4">
                Watch markets develop in real time with this incredible feature,
                a quick way to monitor social trends from the  Vintageprimefx vibrant
                traders community. Its technological capabilities help you gain
                access to key financial information for clear analysis on what
                matters today.
              </p>
              <p className="fs-5 mb-4">
                To help you make better and accurate decisions, all your trading
                instruments are connected to show you insights, what other
                traders buy & sell, trading behaviour, and visuals with
                up-to-date info.
              </p>
              <ul className="list-unstyled fs-5">
                <li className="mb-3">
                  <FaChartLine className="text-success me-2" /> Real-time market
                  trends
                </li>
                <li className="mb-3">
                  <FaEye className="text-success me-2" /> Insights into trader
                  behavior
                </li>
                <li className="mb-3">
                  <FaTrophy className="text-success me-2" /> Community-driven
                  analytics
                </li>
              </ul>
            </Col>
            <Col md={6} className="text-center mt-4 mt-md-0">
              <img
                src="https://images.unsplash.com/photo-1563014959-7aaa83350992?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
                alt=" Vintageprimefx Market Trends"
                className="img-fluid"
                style={{
                  maxHeight: "400px",
                  borderRadius: "12px",
                  boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                }}
              />
            </Col>
          </Row>
        </Container>
      </div>

      <div style={{ backgroundColor: "#014421" }} className="text-white py-5">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={10}>
              <h2 className="fw-bold mb-4">
                See  Vintageprimefx Mobile App in Action
              </h2>
              <a
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank"
                rel="noopener noreferrer"
                className="d-inline-block mt-4 text-decoration-none"
              >
                <div
                  className="d-flex align-items-center justify-content-center rounded-circle"
                  style={{
                    width: "80px",
                    height: "80px",
                    backgroundColor: "#00c37a",
                    color: "#fff",
                    fontSize: "28px",
                    margin: "0 auto",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
                    transition: "transform 0.3s ease",
                  }}
                >
                  <FaChartLine />
                </div>
                <p className="mt-2">Watch our video</p>
              </a>
            </Col>
          </Row>
        </Container>
      </div>

      <div style={{ backgroundColor: "#e6f4ea" }} className="text-dark py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <h2
                className="fw-bold mb-4 text-center"
                style={{ color: "#145214" }}
              >
                 Vintageprimefx: Trade with Confidence
              </h2>
              <ul className="list-unstyled fs-5 text-center">
                <li className="mb-3">
                  <FaShieldAlt className="text-success me-2" /> Secured deposits
                  with a regulated broker
                </li>
                <li className="mb-3">
                  <FaBalanceScale className="text-success me-2" /> Competitive
                  spreads and swap rates
                </li>
                <li className="mb-3">
                  <FaCheckCircle className="text-success me-2" /> Outstanding
                  multilingual service and support
                </li>
              </ul>
              <div className="text-center mt-4">
                <h5 className="fw-bold" style={{ color: "#145214" }}>
                  Get The Freshest  Vintageprimefx News
                </h5>
                <Button
                  style={{
                    backgroundColor: "#014421",
                    borderColor: "#014421",
                    padding: "0.75rem 2rem",
                    fontWeight: "600",
                    fontSize: "1rem",
                  }}
                  size="lg"
                >
                  Submit
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div style={{ backgroundColor: "#f5fff9" }} className="text-dark py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <h2
                className="fw-bold mb-5 text-center"
                style={{ color: "#145214" }}
              >
                <FaQuestionCircle className="me-2" />
                 Vintageprimefx Mobile App FAQs
              </h2>
              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Does  VintageprimefxShield™ guarantee profits?
                  </Accordion.Header>
                  <Accordion.Body>
                    No,  VintageprimefxShield™ is a risk management feature that
                    provides protection during a specified period. It is not
                    investment advice and does not guarantee profits or prevent
                    losses. Use it as a support tool to enhance your trading
                    strategy.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    Is the  Vintageprimefx Mobile App suitable for advanced traders?
                  </Accordion.Header>
                  <Accordion.Body>
                    Yes. The  Vintageprimefx Mobile App offers advanced tools like
                    real-time market trends, social trading insights, and a
                    sophisticated dashboard, making it valuable for both
                    beginners and experienced traders.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    Can I customize the  Vintageprimefx Mobile App?
                  </Accordion.Header>
                  <Accordion.Body>
                    Absolutely. The app allows you to create personalized watch
                    lists, configure alerts, and tailor the dashboard to suit
                    your trading style and goals, ensuring a customized
                    experience.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default PipzoTradeApp;
