import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  FaBolt,
  FaCalendarAlt,
  FaChartBar,
  FaChartLine,
  FaChartPie,
  FaClipboardCheck,
  FaClipboardList,
  FaCogs,
  FaDownload,
  FaFileAlt,
  FaLayerGroup,
  FaLock,
  FaMousePointer,
  FaPuzzlePiece,
  FaRobot,
  FaSignInAlt,
  FaWrench,
} from "react-icons/fa";

const PipzoMarketsHowToTradeMT5: React.FC = () => {
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
                How to Trade with MetaTrader 5 on  Vintageprimefx
              </h2>
              <h5
                className="mb-4"
                style={{ color: "#ffd700", fontWeight: 500 }}
              >
                Comprehensive Guide for Beginners and Advanced Traders
              </h5>
              <p className="fs-5 mb-4" style={{ color: "#e0e0e0" }}>
                MetaTrader 5 (MT5) is a powerful trading platform offered by
                 Vintageprimefx, providing access to over 250 financial instruments
                including forex, commodities, cryptocurrencies, and equities.
                With advanced charting, automated trading via Expert Advisors
                (EAs), and high leverage up to 400:1, MT5 empowers traders in
                the United Kingdom to execute strategies efficiently.
              </p>
              <p className="fs-5 fw-semibold mb-4" style={{ color: "#ffffff" }}>
                Master MT5 with{" "}
                <span style={{ color: "#ffd700" }}>
                  seamless tools and real-time data
                </span>{" "}
                for optimal trading performance.
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
                  Download MT5 Now
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
                alt=" Vintageprimefx MT5 Trading"
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
            <Col lg={10}>
              <h2
                className="fw-bold mb-4"
                style={{ color: "#1a202c", fontSize: "2rem" }}
              >
                Getting Started with MetaTrader 5
              </h2>
              <p className="fs-5 mb-3" style={{ color: "#4a5568" }}>
                MetaTrader 5 is an advanced multi-asset trading platform that
                builds on MT4's features, offering enhanced speed, more
                timeframes, and better tools for analysis. To begin, download
                MT5 from  Vintageprimefx and set up your account.
              </p>
              <p className="fs-5 mb-3" style={{ color: "#4a5568" }}>
                Choose between a demo account for practice or a real account for
                live trading.  Vintageprimefx supports seamless integration with MT5
                for macOS, Windows, iOS, and Android.
              </p>
              <p className="fs-5 fw-semibold" style={{ color: "#1a202c" }}>
                Join  Vintageprimefx today and experience MT5's full potential with
                competitive spreads and expert support.
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
                Downloading and Installing MT5
              </h2>
              <p className="fs-5" style={{ color: "#4a5568" }}>
                Start by downloading the MT5 platform from the  Vintageprimefx website.
                For Mac users, follow these steps for a native experience
                without virtualization.
              </p>
              <ul className="list-unstyled fs-5">
                <li className="mb-3">
                  <FaDownload className="text-success me-2" /> Download the
                   Vintageprimefx MT5 Terminal (.dmg) file.
                </li>
                <li className="mb-3">
                  <FaFileAlt className="text-success me-2" /> Open the .dmg file
                  and drag the app to your Applications folder.
                </li>
                <li className="mb-3">
                  <FaMousePointer className="text-success me-2" /> Right-click
                  the app and select “Open” to launch.
                </li>
                <li className="mb-3">
                  <FaSignInAlt className="text-success me-2" /> Log in with your
                   Vintageprimefx account details.
                </li>
                <li className="mb-3">
                  <FaCogs className="text-success me-2" /> Customize settings
                  like one-click trading under Tools Options.
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
                Download MT5 for Mac
              </Button>
            </Col>
            <Col md={6} className="text-center">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Install MetaTrader 5"
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
                Setting Up Your Trading Account
              </h2>
              <p className="fs-5" style={{ color: "#4a5568" }}>
                Once installed, log in to your  Vintageprimefx account. Create a demo
                account for risk-free practice or fund a real account to start
                live trading.
              </p>
              <ul className="list-unstyled fs-5">
                <li className="mb-3">
                  <FaSignInAlt className="text-success me-2" /> Go to File Login
                  to Trade Account.
                </li>
                <li className="mb-3">
                  <FaClipboardList className="text-success me-2" /> Enter your
                  account number, password, and server (provided by  Vintageprimefx).
                </li>
                <li className="mb-3">
                  <FaChartBar className="text-success me-2" /> Select assets
                  from the Market Watch window.
                </li>
                <li className="mb-3">
                  <FaLock className="text-success me-2" /> Ensure secure
                  connection with data encryption.
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
                Create Account Now
              </Button>
            </Col>
            <Col md={6} className="text-center order-md-1">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="MT5 Account Setup"
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
                className="fw-bold mb-3"
                style={{ color: "#1a202c", fontSize: "1.75rem" }}
              >
                Navigating the MT5 Interface
              </h2>
              <p className="fs-5" style={{ color: "#4a5568" }}>
                Familiarize yourself with MT5's layout: Market Watch for quotes,
                Navigator for accounts and EAs, Toolbox for trades and history,
                and the main chart window.
              </p>
              <ul className="list-unstyled fs-5">
                <li className="mb-3">
                  <FaChartLine className="text-success me-2" /> Use 21
                  timeframes and 6 chart types for analysis.
                </li>
                <li className="mb-3">
                  <FaPuzzlePiece className="text-success me-2" /> Add indicators
                  from the Insert menu (38 built-in).
                </li>
                <li className="mb-3">
                  <FaLayerGroup className="text-success me-2" /> Customize
                  dashboards with unlimited charts.
                </li>
                <li className="mb-3">
                  <FaCalendarAlt className="text-success me-2" /> Access the
                  Economic Calendar for market events.
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
                Explore MT5 Features
              </Button>
            </Col>
            <Col md={6} className="text-center">
              <img
                src="https://images.unsplash.com/photo-1542744095-291d1f67b221?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
                alt="MT5 Interface"
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
                Placing and Managing Trades
              </h2>
              <p className="fs-5" style={{ color: "#4a5568" }}>
                Execute trades easily with market, pending, or one-click orders.
                Set Stop Loss (SL) and Take Profit (TP) to manage risks.
              </p>
              <ul className="fs-6 list-unstyled">
                <li className="mb-3">
                  <FaBolt className="text-success me-2" /> Right-click in Market
                  Watch New Order or press F9.
                </li>
                <li className="mb-3">
                  <FaChartPie className="text-success me-2" /> Choose volume,
                  order type, and set SL/TP.
                </li>
                <li className="mb-3">
                  <FaClipboardCheck className="text-success me-2" /> Monitor
                  positions in the Trade tab; modify or close as needed.
                </li>
                <li className="mb-3">
                  <FaWrench className="text-success me-2" /> Use trailing stops
                  for dynamic risk management.
                </li>
                <li className="mb-3">
                  <FaRobot className="text-success me-2" /> Integrate EAs for
                  automated trading via MQL5.
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
                Start Placing Trades
              </Button>
            </Col>
            <Col md={6} className="text-center order-md-1">
              <img
                src="https://images.unsplash.com/photo-1594322463847-81e2bd5f9888?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
                alt="Placing Trades on MT5"
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
                Advanced Trading Tools and Tips
              </h2>
              <p className="fs-5 mb-4" style={{ color: "#4a5568" }}>
                Leverage MT5's advanced features for better decision-making. Use
                custom indicators, scripts, and the Depth of Market tool.
              </p>
              <ul className="fs-5 list-unstyled">
                <li className="mb-3">
                  <FaChartBar className="text-success me-2" /> Apply 44
                  analytical objects for technical analysis.
                </li>
                <li className="mb-3">
                  <FaRobot className="text-success me-2" /> Develop or download
                  EAs from the MetaTrader Market.
                </li>
                <li className="mb-3">
                  <FaBolt className="text-success me-2" /> Enable one-click
                  trading for faster execution.
                </li>
                <li className="mb-3">
                  <FaLock className="text-success me-2" /> Practice risk
                  management: Start small, use demo accounts, and stay informed
                  via webinars.
                </li>
              </ul>
              <p className="fs-5" style={{ color: "#4a5568" }}>
                 Vintageprimefx provides educational resources, including webinars and
                account managers, to enhance your MT5 trading skills.
              </p>
            </Col>
            <Col md={6} className="text-center">
              <img
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                alt="Advanced MT5 Tools"
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
                MT5 Trading FAQ
              </h2>
              <h5 className="fw-semibold mb-3" style={{ color: "#00c37a" }}>
                How Do I Place a Trade on MT5?
              </h5>
              <p className="fs-6 mb-4" style={{ color: "#4a5568" }}>
                Right-click on your chosen asset in Market Watch, select 'New
                Order', set parameters like volume and SL/TP, then click Buy or
                Sell.
              </p>
              <h5 className="fw-semibold mb-3" style={{ color: "#00c37a" }}>
                Can I Use EAs on MT5?
              </h5>
              <p className="fs-6 mb-4" style={{ color: "#4a5568" }}>
                Yes, MT5 supports Expert Advisors for automated trading. Install
                them via the Navigator and attach to charts.
              </p>
              <h5 className="fw-semibold mb-3" style={{ color: "#00c37a" }}>
                Is MT5 Suitable for Beginners?
              </h5>
              <p className="fs-6 mb-4" style={{ color: "#4a5568" }}>
                Absolutely, with its intuitive interface and demo accounts.
                Start with basic features and gradually explore advanced tools.
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
                Get Started with MT5
              </Button>
            </Col>
            <Col md={6} className="text-center mt-4 mt-md-0">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="MT5 Trading FAQ"
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

export default PipzoMarketsHowToTradeMT5;
