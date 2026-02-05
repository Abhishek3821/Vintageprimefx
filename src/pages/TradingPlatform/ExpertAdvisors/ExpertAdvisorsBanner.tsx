import { auto } from "@popperjs/core";
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  FaApple,
  FaBolt,
  FaCalendarAlt,
  FaChartBar,
  FaChartLine,
  FaClipboardCheck,
  FaCogs,
  FaFolderOpen,
  FaLock,
  FaMousePointer,
  FaPuzzlePiece,
  FaRobot,
  FaSignInAlt,
  FaWrench,
} from "react-icons/fa";

const PipzoMarketsExpertAdvisors: React.FC = () => {
  return (
    <>
      <div
        style={{
          background: "linear-gradient(135deg, #014421 0%, #1a5e34 100%)",
        }}
        className="text-white py-5"
      >
        <Container className="text-center">
          <Row className="justify-content-center">
            <Col lg={10}>
              <h2
                className="fw-bold mb-3"
                style={{ fontSize: "2.5rem", color: "#ffffff" }}
              >
                Expert Advisors with  Vintageprimefx
              </h2>
              <h5
                className="mb-4"
                style={{ color: "#ffd700", fontWeight: 500 }}
              >
                Automate Your Trading with Advanced Tools
              </h5>
              <p className="fs-5 mb-4" style={{ color: "#e0e0e0" }}>
                Tailored for traders in the United Kingdom,  Vintageprimefx offers
                powerful Expert Advisors (EAs) for MetaTrader 4 and 5. Automate
                your trading strategies with custom or pre-built EAs, accessing
                over 250 financial instruments, including forex, commodities,
                cryptocurrencies, and equities.
              </p>
              <p className="fs-5 fw-semibold mb-4" style={{ color: "#ffffff" }}>
                Elevate your trading with{" "}
                <span style={{ color: "#ffd700" }}>
                  automated precision and analytical power
                </span>
                .
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <Button
                  style={{
                    backgroundColor: "#00c37a",
                    borderColor: "#00c37a",
                    fontWeight: 600,
                    padding: "0.75rem 2rem",
                  }}
                  size="lg"
                >
                  Explore MetaTrader Market
                </Button>
                <Button
                  variant="outline-light"
                  size="lg"
                  style={{ fontWeight: 600, padding: "0.75rem 2rem" }}
                >
                  Open Demo Account
                </Button>
              </div>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col>
              <img
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                alt=" Vintageprimefx Expert Advisors"
                className="img-fluid w-100"
                style={{
                  borderRadius: "0.75rem",
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
                  maxHeight: "450px",
                  objectFit: "cover",
                }}
              />
            </Col>
          </Row>
        </Container>
      </div>

      <div style={{ backgroundColor: "#f8fafc" }} className="text-dark py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={auto}>
              <h2
                className="fw-bold mb-4"
                style={{ color: "#1a202c", fontSize: "2rem" }}
              >
                What are Expert Advisors?
              </h2>
              <p className="fs-5 mb-3" style={{ color: "#4a5568" }}>
                Expert Advisors (EAs) are programs or pieces of code that enable
                automated trading when uploaded to MetaTrader 4 or 5. Each EA is
                unique, tailored to individual user preferences, leveraging
                analytical capabilities to execute trades. This distinctive
                feature makes MetaTrader a top choice for traders.
              </p>
              <p className="fs-5 mb-3" style={{ color: "#4a5568" }}>
                You can purchase EAs from the MetaTrader Market or create your
                own using MQL4/MQL5 in the MQL MetaEditor. By defining market
                conditions based on indicators and elements, you can automate
                trade openings or position closures without advanced programming
                expertise.
              </p>
              <p className="fs-5 fw-semibold" style={{ color: "#1a202c" }}>
                Join  Vintageprimefx to access free and paid EAs, test demo versions,
                and optimize your trading strategy.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <div style={{ backgroundColor: "#ffffff" }} className="text-dark py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="mb-4 mb-md-0">
              <h2
                className="fw-bold mb-3"
                style={{ color: "#1a202c", fontSize: "1.75rem" }}
              >
                MetaTrader Market
              </h2>
              <p className="fs-5" style={{ color: "#4a5568" }}>
                The MetaTrader Market offers the largest collection of paid and
                free Expert Advisors for MT4 and MT5, alongside indicators,
                trading magazines, and financial books. With various search
                options by category, you’ll find detailed product information,
                screenshots, and user reviews.
              </p>
              <ul className="list-unstyled fs-5">
                <li className="mb-3">
                  <FaChartLine className="text-success me-2" /> Test demo
                  versions before purchasing
                </li>
                <li className="mb-3">
                  <FaClipboardCheck className="text-success me-2" /> Buy or rent
                  EAs for up to one year
                </li>
                <li className="mb-3">
                  <FaPuzzlePiece className="text-success me-2" /> Activate on up
                  to four devices
                </li>
                <li className="mb-3">
                  <FaRobot className="text-success me-2" /> Choose EAs based on
                  risk, spreads, and hedging
                </li>
                <li className="mb-3">
                  <FaWrench className="text-success me-2" /> Compare multiple
                  EAs for optimal performance
                </li>
              </ul>
              <Button
                style={{
                  backgroundColor: "#00c37a",
                  borderColor: "#00c37a",
                  fontWeight: 600,
                }}
                size="lg"
                className="mt-3"
              >
                Browse MetaTrader Market
              </Button>
            </Col>
            <Col md={6} className="text-center">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="MetaTrader Market"
                className="img-fluid"
                style={{
                  maxHeight: "400px",
                  borderRadius: "0.75rem",
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
                }}
              />
            </Col>
          </Row>
        </Container>
      </div>

      <div style={{ backgroundColor: "#f8fafc" }} className="text-dark py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="mb-4 mb-md-0 order-md-2">
              <h2
                className="fw-bold mb-3"
                style={{ color: "#1a202c", fontSize: "1.75rem" }}
              >
                How to Upload Expert Advisors
              </h2>
              <p className="fs-5" style={{ color: "#4a5568" }}>
                Once you’ve selected or developed an Expert Advisor, upload it
                to MetaTrader 4 or 5 to start trading. Follow these steps for a
                seamless installation on your Mac.
              </p>
              <ul className="fs-6 list-unstyled">
                <li className="mb-3">
                  <FaFolderOpen className="text-success me-2" /> Locate and copy
                  EA files after downloading or creating.
                </li>
                <li className="mb-3">
                  <FaApple className="text-success me-2" /> Paste files into the
                  MetaTrader 4/5 folder.
                </li>
                <li className="mb-3">
                  <FaSignInAlt className="text-success me-2" /> Log in to
                  MetaTrader 4/5 and navigate to “Expert Advisors” under
                  “Navigation.”
                </li>
                <li className="mb-3">
                  <FaMousePointer className="text-success me-2" /> Drag the EA
                  onto the platform’s charts.
                </li>
                <li className="mb-3">
                  <FaCogs className="text-success me-2" /> Adjust settings in
                  the pop-up box and click “Ok” to start trading.
                </li>
                <li className="mb-3">
                  <FaBolt className="text-success me-2" /> Optional: Use a VPS
                  for uninterrupted trading.
                </li>
              </ul>
              <Button
                style={{
                  backgroundColor: "#00c37a",
                  borderColor: "#00c37a",
                  fontWeight: 600,
                }}
                size="lg"
                className="mt-3"
              >
                Start Trading with EAs
              </Button>
            </Col>
            <Col md={6} className="text-center order-md-1">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Upload Expert Advisors Mac"
                className="img-fluid"
                style={{
                  maxHeight: "400px",
                  borderRadius: "0.75rem",
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
                }}
              />
            </Col>
          </Row>
        </Container>
      </div>

      <div style={{ backgroundColor: "#ffffff" }} className="text-dark py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="mb-4 mb-md-0">
              <h2
                className="fw-bold mb-4"
                style={{ color: "#1a202c", fontSize: "1.75rem" }}
              >
                Why Choose Expert Advisors with  Vintageprimefx?
              </h2>
              <p className="fs-5 mb-4" style={{ color: "#4a5568" }}>
                While EAs automate trading, understanding the markets is key.
                 Vintageprimefx supports your trading journey with webinars, account
                managers, and educational resources to deepen your market
                knowledge and trade confidently alongside your EAs.
              </p>
              <ul className="fs-5 list-unstyled">
                <li className="mb-3">
                  <FaRobot className="text-success me-2" /> Emotion-free trading
                  with automated precision
                </li>
                <li className="mb-3">
                  <FaChartBar className="text-success me-2" /> Access to free
                  and paid EAs via MetaTrader Market
                </li>
                <li className="mb-3">
                  <FaCalendarAlt className="text-success me-2" /> Flexible EAs
                  for 24/7 or event-specific trading
                </li>
                <li className="mb-3">
                  <FaLock className="text-success me-2" /> Robust platforms with
                  secure data encryption
                </li>
              </ul>
            </Col>
            <Col md={6} className="text-center">
              <img
                src="https://images.unsplash.com/photo-1542744095-291d1f67b221?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
                alt="Expert Advisors Benefits"
                className="img-fluid"
                style={{
                  maxHeight: "400px",
                  borderRadius: "0.75rem",
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
                }}
              />
            </Col>
          </Row>
        </Container>
      </div>

      <div style={{ backgroundColor: "#f8fafc" }} className="text-dark py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h2
                className="fw-bold mb-4"
                style={{ color: "#1a202c", fontSize: "1.75rem" }}
              >
                Expert Advisors FAQ
              </h2>
              <h5 className="fw-semibold mb-3" style={{ color: "#00c37a" }}>
                Do Expert Advisors Really Work?
              </h5>
              <p className="fs-6 mb-4" style={{ color: "#4a5568" }}>
                Many traders find EAs effective when chosen carefully. They
                remove emotional bias but may falter in changing market
                conditions, requiring regular testing and updates.
              </p>
              <h5 className="fw-semibold mb-3" style={{ color: "#00c37a" }}>
                What is the Best Expert Advisor to Use?
              </h5>
              <p className="fs-6 mb-4" style={{ color: "#4a5568" }}>
                The best EA depends on your trading goals. Both free and paid
                EAs are available, with paid options often offering advanced
                features. Test thoroughly to match your strategy.
              </p>
              <h5 className="fw-semibold mb-3" style={{ color: "#00c37a" }}>
                Do All Expert Advisors Run 24/7?
              </h5>
              <p className="fs-6 mb-4" style={{ color: "#4a5568" }}>
                Some EAs run 24/7, while others are event-specific, operating
                during key market events like central bank announcements. Choose
                based on your trading needs.
              </p>
              <Button
                style={{
                  backgroundColor: "#00c37a",
                  borderColor: "#00c37a",
                  fontWeight: 600,
                }}
                size="lg"
                className="mt-4"
              >
                Open a Demo Account
              </Button>
            </Col>
            <Col md={6} className="text-center mt-4 mt-md-0">
              <img
                src="https://images.unsplash.com/photo-1594322463847-81e2bd5f9888?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
                alt="Expert Advisors FAQ"
                className="img-fluid"
                style={{
                  maxHeight: "420px",
                  borderRadius: "0.75rem",
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
                }}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default PipzoMarketsExpertAdvisors;
