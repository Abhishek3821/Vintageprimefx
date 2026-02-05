import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  FaApple,
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
  FaFolderOpen,
  FaKeyboard,
  FaLayerGroup,
  FaLock,
  FaMousePointer,
  FaPuzzlePiece,
  FaRobot,
  FaSignInAlt,
  FaWrench,
} from "react-icons/fa";

const PipzoMarketsMacTrading: React.FC = () => {
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
                Mac Trading with  Vintageprimefx
              </h2>
              <h5
                className="mb-4"
                style={{ color: "#ffd700", fontWeight: 500 }}
              >
                Advanced Trading Platforms for macOS
              </h5>
              <p className="fs-5 mb-4" style={{ color: "#e0e0e0" }}>
                Tailored for Mac users in the United Kingdom,  Vintageprimefx offers
                cutting-edge trading platforms for desktop and mobile. Access
                over 250 financial instruments, including forex, commodities,
                cryptocurrencies, and equities, with seamless navigation and
                advanced charting tools via MetaTrader 4/5 or WebTrader.
              </p>
              <p className="fs-5 fw-semibold mb-4" style={{ color: "#ffffff" }}>
                Elevate your trading with{" "}
                <span style={{ color: "#ffd700" }}>
                  competitive spreads and high leverage
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
                  Download for Mac
                </Button>
                <Button
                  variant="outline-light"
                  size="lg"
                  style={{ fontWeight: 600, padding: "0.75rem 2rem" }}
                >
                  Start Web Trading
                </Button>
              </div>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col>
              <img
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                alt=" Vintageprimefx Mac Trading"
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
                Seamless Mac Online Trading
              </h2>
              <p className="fs-5 mb-3" style={{ color: "#4a5568" }}>
                 Vintageprimefx brings the world of online trading to Mac users with
                robust, macOS-optimized solutions. Historically, trading
                platforms were designed primarily for Windows, leaving Mac users
                reliant on virtualization software. Now,  Vintageprimefx offers native
                and browser-based platforms, ensuring a seamless and powerful
                trading experience.
              </p>
              <p className="fs-5 mb-3" style={{ color: "#4a5568" }}>
                Our platforms are engineered for performance, offering Mac users
                access to advanced tools, real-time data, and a sophisticated
                trading environment without compromises.
              </p>
              <p className="fs-5 fw-semibold" style={{ color: "#1a202c" }}>
                Join  Vintageprimefx and unlock a world of trading opportunities
                designed specifically for your Mac.
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
                MetaTrader 4 for Mac
              </h2>
              <p className="fs-5" style={{ color: "#4a5568" }}>
                MetaTrader 4 (MT4) is the industry-standard trading platform,
                renowned for its intuitive interface and robust functionality.
                Ideal for both novice and experienced traders, MT4 delivers
                speed, reliability, and advanced features tailored for macOS.
              </p>
              <ul className="list-unstyled fs-5">
                <li className="mb-3">
                  <FaChartLine className="text-success me-2" /> Trade 250+
                  assets with up to 400:1 leverage
                </li>
                <li className="mb-3">
                  <FaClipboardCheck className="text-success me-2" />{" "}
                  Comprehensive order types, including trailing stops
                </li>
                <li className="mb-3">
                  <FaChartPie className="text-success me-2" /> 3 chart types and
                  multiple timeframes
                </li>
                <li className="mb-3">
                  <FaRobot className="text-success me-2" /> Full Expert Advisor
                  (EA) support for algorithmic trading
                </li>
                <li className="mb-3">
                  <FaWrench className="text-success me-2" /> 30+ indicators and
                  advanced charting tools
                </li>
                <li className="mb-3">
                  <FaBolt className="text-success me-2" /> One-click trading
                  with integrated SL/TP
                </li>
                <li className="mb-3">
                  <FaLock className="text-success me-2" /> Robust data
                  encryption and backup
                </li>
                <li className="mb-3">
                  <FaPuzzlePiece className="text-success me-2" /> Custom
                  indicators and watchlist personalization
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
                Start Trading on MT4
              </Button>
            </Col>
            <Col md={6} className="text-center">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="MetaTrader 4 Mac"
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
                MetaTrader 5 for Mac
              </h2>
              <p className="fs-5" style={{ color: "#4a5568" }}>
                MetaTrader 5 (MT5) builds on MT4’s legacy, offering enhanced
                speed, advanced tools, and greater flexibility. Perfect for
                traders seeking a powerful, macOS-native platform with expanded
                charting and asset options.
              </p>
              <ul className="list-unstyled fs-5">
                <li className="mb-3">
                  <FaChartBar className="text-success me-2" /> Diverse assets
                  with high leverage
                </li>
                <li className="mb-3">
                  <FaClipboardList className="text-success me-2" /> Full order
                  types, including pending orders
                </li>
                <li className="mb-3">
                  <FaLayerGroup className="text-success me-2" /> 38 indicators,
                  44 tools, 21 timeframes
                </li>
                <li className="mb-3">
                  <FaCogs className="text-success me-2" /> One-click trading
                  with SL/TP integration
                </li>
                <li className="mb-3">
                  <FaRobot className="text-success me-2" /> MQL5 for custom EAs,
                  robots, and scripts
                </li>
                <li className="mb-3">
                  <FaCalendarAlt className="text-success me-2" /> Economic
                  Calendar and Depth of Market
                </li>
                <li className="mb-3">
                  <FaLayerGroup className="text-success me-2" /> Unlimited
                  charts and customizable dashboards
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
                Start Trading on MT5
              </Button>
            </Col>
            <Col md={6} className="text-center order-md-1">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="MetaTrader 5 Mac"
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
                Installing Custom Tools on Mac
              </h2>
              <p className="fs-5 mb-4" style={{ color: "#4a5568" }}>
                Enhance your trading with custom Expert Advisors (EAs),
                indicators, and scripts using MQL4 or MQL5 on  Vintageprimefx’ MT4 and
                MT5 platforms for Mac.
              </p>
              <ul className="fs-6 list-unstyled">
                <li className="mb-3">
                  <FaApple className="text-success me-2" /> Open{" "}
                  <strong>Finder</strong> on your Mac.
                </li>
                <li className="mb-3">
                  <FaFolderOpen className="text-success me-2" /> Navigate to the{" "}
                  <strong>Applications</strong> folder.
                </li>
                <li className="mb-3">
                  <FaApple className="text-success me-2" /> Locate the{" "}
                  <strong> Vintageprimefx MT4 or MT5</strong> app.
                </li>
                <li className="mb-3">
                  <FaCogs className="text-success me-2" /> Right-click and
                  select <strong>“Show Package Contents”</strong>.
                </li>
                <li className="mb-3">
                  <FaFolderOpen className="text-success me-2" /> Go to: <br />
                  <code style={{ color: "#4a5568" }}>
                    Drive C → Program Files →  Vintageprimefx MT4 or MT5 → Experts
                  </code>
                </li>
                <li className="mb-3">
                  <FaCogs className="text-success me-2" /> Restart  Vintageprimefx
                  MT4/MT5 to load your tools.
                </li>
              </ul>
            </Col>
            <Col md={6} className="text-center">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Install Custom Tools on Mac"
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
                Get Started with  Vintageprimefx on Mac
              </h2>
              <p className="fs-5 mb-4" style={{ color: "#4a5568" }}>
                Installing  Vintageprimefx’ MetaTrader 4 or 5 on your Mac is
                straightforward. Follow these steps to access our powerful
                trading platforms and start trading in minutes.
              </p>
              <h5 className="fw-semibold mb-3" style={{ color: "#00c37a" }}>
                How to Install MetaTrader 4 or 5 on macOS
              </h5>
              <ul className="fs-6 list-unstyled">
                {[
                  {
                    text: "Download the  Vintageprimefx MT4 Terminal (.dmg) file.",
                    icon: <FaDownload className="text-success me-2 mt-1" />,
                  },
                  {
                    text: "Download the  Vintageprimefx MT5 Terminal (.dmg) file.",
                    icon: <FaDownload className="text-success me-2 mt-1" />,
                  },
                  {
                    text: "Open the  Vintageprimefx.dmg file after downloading.",
                    icon: <FaFileAlt className="text-success me-2 mt-1" />,
                  },
                  {
                    text: "Drag the  Vintageprimefx application to your Applications Folder.",
                    icon: <FaFolderOpen className="text-success me-2 mt-1" />,
                  },
                  {
                    text: "Right-click the  Vintageprimefx MT4/MT5 app and select “Open”.",
                    icon: <FaMousePointer className="text-success me-2 mt-1" />,
                  },
                  {
                    text: "Enter your demo or real account login details on first launch.",
                    icon: <FaSignInAlt className="text-success me-2 mt-1" />,
                  },
                  {
                    text: "Press “F9” or “FN” to place an order.",
                    icon: <FaKeyboard className="text-success me-2 mt-1" />,
                  },
                  {
                    text: "Enable one-click trading: Extras > Options > Trading > One Click Trading.",
                    icon: <FaCogs className="text-success me-2 mt-1" />,
                  },
                ].map((item, index) => (
                  <li key={index} className="d-flex align-items-start mb-2">
                    {item.icon}
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
              <Button
                style={{
                  backgroundColor: "#00c37a",
                  borderColor: "#00c37a",
                  fontWeight: 600,
                }}
                size="lg"
                className="mt-4"
              >
                Download for Mac Now
              </Button>
            </Col>
            <Col md={6} className="text-center mt-4 mt-md-0">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Download MetaTrader Mac"
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

export default PipzoMarketsMacTrading;
