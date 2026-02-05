import React from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import {
  FaChartLine,
  FaGlobe,
  FaHandsHelping,
  FaLayerGroup,
  FaMobileAlt,
  FaQuestionCircle,
  FaRobot,
  FaShieldAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// Import images
import ForexBanner from "../../../assets/forex-banner.jpg"; // Fallback for background
import MetaTraderHeader from "../../../assets/metatrader-header.jpg"; // Fallback for header image
import MetaTraderPlatform from "../../../assets/metatrader-platform.jpg"; // Fallback for platform images
import MT4Forex from "../../../assets/PipzoMarketLogo.png"; // Fallback for MT4 image
import MT5Platform from "../../../assets/PipzoMarketLogo.png"; // Fallback for MT5 image
import MT4App from "../../../assets/PipzoMarketLogo.png"; // Fallback for MT4 app image
// Add these images to src/assets/
import ActualForexBanner from "../../../assets/forex-banner.jpg"; // Background image
import ActualMetaTraderHeader from "../../../assets/metatrader-header.jpg"; // Header image
import ActualMetaTraderPlatform from "../../../assets/metatrader-platform.jpg"; // Platform images
import ActualMT4Forex from "../../../assets/mt4-forex.jpg"; // MT4 image
import ActualMT5Platform from "../../../assets/mt5-platform.jpg"; // MT5 image
import ActualMT4App from "../../../assets/mt4-app.jpg"; // MT4 app image

const WhatIsMetaTrader: React.FC = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${ActualForexBanner || ForexBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
          padding: "60px 20px",
          minHeight: "60vh",
        }}
        className="text-center"
      >
        <h2 className="fw-bold mb-3" style={{ fontSize: "2rem" }}>
          MetaTrader
        </h2>

        <div style={{ marginTop: "40px" }}>
          <img
            src={ActualMetaTraderHeader || MetaTraderHeader}
            alt="MetaTrader Platform"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              borderRadius: "12px",
              boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            }}
          />
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#e6f4ea",
          color: "#1a1a1a",
          padding: "60px 0",
        }}
      >
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="mb-4 mb-md-0">
              <h2 className="fw-bold mb-3" style={{ fontSize: "1.75rem" }}>
                What is MetaTrader?
              </h2>
              <p style={{ fontSize: "1.25rem" }}>
                MetaTrader is a very popular platform for Forex traders to trade
                a wide range of assets. It is the gateway between you and the
                trading markets. A feature-rich platform, it gives traders the
                ability to conduct a wide range of trading activities, including
                charting and technical analysis, monitoring the markets, and
                automating trades through Expert Advisors. Let’s take a look at
                the MetaTrader in more detail, compare MT4 vs MT5, and review
                their features.
              </p>
            </Col>
            <Col md={6} className="text-center">
              <img
                src={ActualMetaTraderPlatform || MetaTraderPlatform}
                alt="MetaTrader Platform"
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

      <div
        style={{
          backgroundColor: "#e6f4ea",
          color: "#1a1a1a",
          padding: "60px 0",
        }}
      >
        <Container>
          <Row className="align-items-center flex-column-reverse flex-md-row">
            <Col md={6} className="text-center mt-4 mt-md-0">
              <img
                src={ActualMetaTraderPlatform || MetaTraderPlatform}
                alt="MetaTrader Platform"
                className="img-fluid"
                style={{
                  maxHeight: "400px",
                  borderRadius: "12px",
                  boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                }}
              />
            </Col>
            <Col md={6}>
              <h2 className="fw-bold mb-3" style={{ fontSize: "1.75rem" }}>
                What is the MetaTrader Platform?
              </h2>
              <p style={{ fontSize: "1.25rem" }}>
                MetaTrader is a piece of trading software that is very popular
                among traders. It is considered the platform of choice and is
                offered by most reputable brokers, including  Vintageprimefx.
              </p>
              <p style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>
                There are two versions of the MetaTrader Platform currently
                available:
              </p>
              <ul style={{ fontSize: "1.25rem" }}>
                <li>MetaTrader 4 – Available on desktop, mobile, and web</li>
                <li>MetaTrader 5 – Available on desktop, mobile, and web</li>
              </ul>
              <p style={{ fontSize: "1.25rem" }}>
                No matter which platform you choose, it won’t slow down your
                system. MetaTrader is lightweight and optimized for fast, smooth
                execution— essential in fast-paced and volatile markets.
              </p>
              <Link
                to="/download"
                className="btn btn-success btn-lg fw-semibold mt-3"
                style={{ fontSize: "1.25rem", textDecoration: "none" }}
              >
                Download
              </Link>
            </Col>
          </Row>
        </Container>
      </div>

      <div
        style={{
          backgroundColor: "#e6f4ea",
          color: "#1a1a1a",
          padding: "60px 0",
        }}
      >
        <Container>
          <Row className="align-items-start">
            <Col md={7}>
              <h2 className="fw-bold mb-3" style={{ fontSize: "1.75rem" }}>
                MetaTrader 4 in Forex Trading
              </h2>
              <p style={{ fontSize: "1.25rem" }}>
                MetaTrader 4 (MT4) is the world’s most popular trading platform
                that offers all you need for online trading on one interface. On
                a single platform, you will find a powerful combination of
                analytical technologies and leading trading tools that allow
                traders to implement even the most complex strategies.
              </p>
              <h4 className="fw-bold mt-4" style={{ fontSize: "1.75rem" }}>
                The MQL Language:
              </h4>
              <p style={{ fontSize: "1.25rem" }}>
                Developed by MetaQuotes Software Corp., the MetaQuotes Language
                (MQL) is a scripting language built into the platform for
                programming specific trading strategies. These scripts allow
                users to automate trading, customize indicators, and create
                robust trading systems.
              </p>
              <p style={{ fontSize: "1.25rem" }}>
                MQL assists in analyzing large volumes of information and makes
                it easier to work with expert systems in both MetaTrader 4 and
                5.
              </p>
              <h4 className="fw-bold mt-4" style={{ fontSize: "1.75rem" }}>
                Key Features:
              </h4>
              <ul style={{ fontSize: "1.25rem" }}>
                <li>
                  <strong>Expert Advisors:</strong> Algorithmic trading systems
                  that operate based on internal charting and real-time events.
                </li>
                <li>
                  <strong>Custom Indicators:</strong> In addition to built-in
                  indicators, you can develop and apply your own custom
                  indicators.
                </li>
                <li>
                  <strong>Scripts:</strong> Useful for executing one-time tasks
                  like closing all orders or opening a set of trades.
                </li>
                <li>
                  <strong>Library:</strong> A collection of shared custom
                  functions used across multiple programs or trading systems.
                </li>
              </ul>
            </Col>
            <Col md={5} className="text-center mt-4 mt-md-0">
              <img
                src={ActualMT4Forex || MT4Forex}
                alt="MetaTrader 4 Forex"
                className="img-fluid"
                style={{
                  maxHeight: "450px",
                  borderRadius: "12px",
                  boxShadow: "0 0 12px rgba(0,0,0,0.1)",
                }}
              />
            </Col>
          </Row>
        </Container>
      </div>

      <div
        style={{
          backgroundColor: "#e6f4ea",
          color: "#1a1a1a",
          padding: "60px 0",
        }}
      >
        <Container>
          <Row className="align-items-start">
            <Col md={5} className="text-center mt-4 mt-md-0">
              <img
                src={ActualMT5Platform || MT5Platform}
                alt="MetaTrader 5 Platform"
                className="img-fluid"
                style={{
                  maxHeight: "450px",
                  borderRadius: "12px",
                  boxShadow: "0 0 12px rgba(0,0,0,0.1)",
                }}
              />
            </Col>
            <Col md={7}>
              <h2 className="fw-bold mb-3" style={{ fontSize: "1.75rem" }}>
                What is MetaTrader 5?
              </h2>
              <p style={{ fontSize: "1.25rem" }}>
                MetaTrader 5 (MT5) is the newest iteration of the popular
                MetaTrader platform. While MT5 is newer, it is not necessarily
                an upgraded version of MT4. Both MT4 and MT5 are robust trading
                platforms with similar interfaces and back-testing capabilities.
                However, MT5 was designed to better support non-Forex and U.S.
                markets, making it a different tool for different needs.
              </p>
              <h4 className="fw-bold mt-4" style={{ fontSize: "1.75rem" }}>
                Key Features of MT5:
              </h4>
              <ul style={{ fontSize: "1.25rem" }}>
                <li>
                  <strong>New Order Types:</strong> Includes ‘buy stop limit’
                  and ‘sell stop limit’ orders, plus partial order filling
                  policies.
                </li>
                <li>
                  <strong>Additional Indicators & Widgets:</strong> 8 more
                  built-in indicators and 13 new graphical tools compared to
                  MT4.
                </li>
                <li>
                  <strong>Economic Calendar:</strong> Built-in calendar with
                  news releases, impact levels, market consensus, and more.
                </li>
                <li>
                  <strong>Improved Strategy Tester:</strong> Multi-threaded,
                  fast EA testing with remote optimization and multi-currency
                  backtesting.
                </li>
                <li>
                  <strong>More Timeframes:</strong> 21 timeframe options (12
                  more than MT4) for deeper technical analysis.
                </li>
                <li>
                  <strong>Funds Transfer:</strong> Easily move funds between
                  accounts on the same server for convenience and flexibility.
                </li>
                <li>
                  <strong>Market Depth:</strong> Visual bid/ask volume with the
                  ALT+B shortcut for better price execution.
                </li>
                <li>
                  <strong>Netting System:</strong> Allows one position per
                  financial instrument (ideal for certain market regulations).
                </li>
                <li>
                  <strong>Email System:</strong> Built-in mail supports
                  attachments for internal communication.
                </li>
                <li>
                  <strong>Tradable Assets:</strong> Trade Forex, CFDs, futures,
                  cryptocurrencies, bonds, and options. Access 1,000+
                  instruments (vs 250 in MT4).
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>

      <div
        style={{
          backgroundColor: "#cde9dc",
          padding: "60px 20px",
          color: "#1a1a1a",
        }}
        className="text-center"
      >
        <h2 className="fw-bold mb-3" style={{ fontSize: "1.75rem" }}>
          MetaTrader 4 vs MetaTrader 5
        </h2>
        <p style={{ maxWidth: "800px", margin: "0 auto", fontSize: "1.25rem" }}>
          The more recently launched MetaTrader 5 is not that different from its
          prototype, MT4, even though it is advertised as substantially more
          advanced. MT5 offers more powerful charting systems, deeper analytical
          tools, faster execution, and the ability to trade cryptocurrencies.
        </p>
        <p style={{ maxWidth: "800px", margin: "0 auto", fontSize: "1.25rem" }}>
          MT4 is still considered an excellent platform for Forex traders and
          remains the most widely used and downloaded platform on the market.
          However, if advanced tools and asset variety appeal to you more, MT5
          might be the right choice.
        </p>
      </div>

      <div style={{ backgroundColor: "#e6f4ea", padding: "60px 20px" }}>
        <Container>
          <h2
            className="fw-bold text-center mb-4"
            style={{ fontSize: "1.75rem" }}
          >
            MT4 vs MT5 Features
          </h2>
          <div className="d-flex justify-content-center">
            <div style={{ overflowX: "auto", maxWidth: "100%" }}>
              <table
                className="table table-bordered table-striped text-center align-middle"
                style={{ minWidth: "700px", fontSize: "1.25rem" }}
              >
                <thead className="table-success">
                  <tr>
                    <th style={{ fontSize: "1.25rem" }}>Feature</th>
                    <th style={{ fontSize: "1.25rem" }}>MT4</th>
                    <th style={{ fontSize: "1.25rem" }}>MT5</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ fontSize: "1.25rem" }}>
                      Availability to brokers
                    </td>
                    <td style={{ fontSize: "1.25rem" }}>Very popular</td>
                    <td style={{ fontSize: "1.25rem" }}>Very popular</td>
                  </tr>
                  <tr>
                    <td style={{ fontSize: "1.25rem" }}>
                      User-friendly and easy to navigate
                    </td>
                    <td style={{ fontSize: "1.25rem" }}>Extremely easy</td>
                    <td style={{ fontSize: "1.25rem" }}>Extremely easy</td>
                  </tr>
                  <tr>
                    <td style={{ fontSize: "1.25rem" }}>
                      Roll-over and Hedging
                    </td>
                    <td style={{ fontSize: "1.25rem" }}>Possible</td>
                    <td style={{ fontSize: "1.25rem" }}>Possible</td>
                  </tr>
                  <tr>
                    <td style={{ fontSize: "1.25rem" }}>
                      Programming Language used
                    </td>
                    <td style={{ fontSize: "1.25rem" }}>MQL4</td>
                    <td style={{ fontSize: "1.25rem" }}>IDE</td>
                  </tr>
                  <tr>
                    <td style={{ fontSize: "1.25rem" }}>
                      Order Execution Types
                    </td>
                    <td style={{ fontSize: "1.25rem" }}>3</td>
                    <td style={{ fontSize: "1.25rem" }}>4</td>
                  </tr>
                  <tr>
                    <td style={{ fontSize: "1.25rem" }}>Pending Order Types</td>
                    <td style={{ fontSize: "1.25rem" }}>4</td>
                    <td style={{ fontSize: "1.25rem" }}>6</td>
                  </tr>
                  <tr>
                    <td style={{ fontSize: "1.25rem" }}>Depth of Market</td>
                    <td style={{ fontSize: "1.25rem" }}>No</td>
                    <td style={{ fontSize: "1.25rem" }}>
                      Yes, but not available initially
                    </td>
                  </tr>
                  <tr>
                    <td style={{ fontSize: "1.25rem" }}>
                      Technical Indicators
                    </td>
                    <td style={{ fontSize: "1.25rem" }}>30</td>
                    <td style={{ fontSize: "1.25rem" }}>38</td>
                  </tr>
                  <tr>
                    <td style={{ fontSize: "1.25rem" }}>Timeframes</td>
                    <td style={{ fontSize: "1.25rem" }}>9</td>
                    <td style={{ fontSize: "1.25rem" }}>21</td>
                  </tr>
                  <tr>
                    <td style={{ fontSize: "1.25rem" }}>Economic Calendar</td>
                    <td style={{ fontSize: "1.25rem" }}>Not Available</td>
                    <td style={{ fontSize: "1.25rem" }}>
                      Available in MT5 apps
                    </td>
                  </tr>
                  <tr>
                    <td style={{ fontSize: "1.25rem" }}>Reports</td>
                    <td style={{ fontSize: "1.25rem" }}>Tables only</td>
                    <td style={{ fontSize: "1.25rem" }}>Tables + Charts</td>
                  </tr>
                  <tr>
                    <td style={{ fontSize: "1.25rem" }}>Excel Export</td>
                    <td style={{ fontSize: "1.25rem" }}>Yes</td>
                    <td style={{ fontSize: "1.25rem" }}>Yes</td>
                  </tr>
                  <tr>
                    <td style={{ fontSize: "1.25rem" }}>Open Trades View</td>
                    <td style={{ fontSize: "1.25rem" }}>Lots only</td>
                    <td style={{ fontSize: "1.25rem" }}>
                      Lots, Quantity + Milliseconds
                    </td>
                  </tr>
                  <tr>
                    <td style={{ fontSize: "1.25rem" }}>Docked Charts</td>
                    <td style={{ fontSize: "1.25rem" }}>Not available</td>
                    <td style={{ fontSize: "1.25rem" }}>Available</td>
                  </tr>
                  <tr>
                    <td style={{ fontSize: "1.25rem" }}>Market Watch</td>
                    <td style={{ fontSize: "1.25rem" }}>Less detailed</td>
                    <td style={{ fontSize: "1.25rem" }}>
                      More details + easy navigation
                    </td>
                  </tr>
                  <tr>
                    <td style={{ fontSize: "1.25rem" }}>
                      Partial Order Filling
                    </td>
                    <td style={{ fontSize: "1.25rem" }}>Not available</td>
                    <td style={{ fontSize: "1.25rem" }}>Available</td>
                  </tr>
                  <tr>
                    <td style={{ fontSize: "1.25rem" }}>Email System</td>
                    <td style={{ fontSize: "1.25rem" }}>No attachments</td>
                    <td style={{ fontSize: "1.25rem" }}>With attachments</td>
                  </tr>
                  <tr>
                    <td style={{ fontSize: "1.25rem" }}>Strategy Tester</td>
                    <td style={{ fontSize: "1.25rem" }}>Single threaded</td>
                    <td style={{ fontSize: "1.25rem" }}>
                      Multi-threaded + Multi-currency + Agent Manager
                    </td>
                  </tr>
                  <tr>
                    <td style={{ fontSize: "1.25rem" }}>Netting</td>
                    <td style={{ fontSize: "1.25rem" }}>Not supported</td>
                    <td style={{ fontSize: "1.25rem" }}>Not supported</td>
                  </tr>
                  <tr>
                    <td style={{ fontSize: "1.25rem" }}>Exchange Trading</td>
                    <td style={{ fontSize: "1.25rem" }}>Not supported</td>
                    <td style={{ fontSize: "1.25rem" }}>Not supported</td>
                  </tr>
                  <tr>
                    <td style={{ fontSize: "1.25rem" }}>
                      Funds Transfer between Accounts
                    </td>
                    <td style={{ fontSize: "1.25rem" }}>Not supported</td>
                    <td style={{ fontSize: "1.25rem" }}>Supported</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </div>

      <div style={{ backgroundColor: "#e6f4ea", padding: "60px 0" }}>
        <Container>
          <Row className="align-items-center">
            <Col md={7}>
              <h2 className="fw-bold mb-4" style={{ fontSize: "1.75rem" }}>
                Why Trade with  Vintageprimefx and MT4?
              </h2>
              <ul className="ps-3" style={{ fontSize: "1.25rem" }}>
                <li className="mb-3">
                  <FaShieldAlt className="text-success me-2" />
                  <strong>Fully Regulated Broker:</strong> Over 10 years of
                  global experience, multiple awards, and presence in 150+
                  countries.
                </li>
                <li className="mb-3">
                  <FaGlobe className="text-success me-2" />
                  <strong>More Markets:</strong> 250+ assets including forex,
                  commodities, indices, ETFs, and more.
                </li>
                <li className="mb-3">
                  <FaChartLine className="text-success me-2" />
                  <strong>Deep Analysis:</strong> 30+ charting tools and
                  strategy back-testing on MT4.
                </li>
                <li className="mb-3">
                  <FaRobot className="text-success me-2" />
                  <strong>Automated Trading:</strong> Full EA compatibility,
                  plus support for custom bots.
                </li>
                <li className="mb-3">
                  <FaLayerGroup className="text-success me-2" />
                  <strong>Flexible Conditions:</strong> Competitive spreads on
                  the most traded instruments.
                </li>
                <li className="mb-3">
                  <FaMobileAlt className="text-success me-2" />
                  <strong>Mobile Trading:</strong> Free MT4/MT5 apps for Android
                  & iOS.
                </li>
                <li className="mb-3">
                  <FaHandsHelping className="text-success me-2" />
                  <strong>Full Support:</strong> Daily insights, educational
                  content, and 24/5 multilingual assistance.
                </li>
              </ul>
            </Col>
            <Col md={5} className="text-center mt-4 mt-md-0">
              <img
                src={ActualMT4App || MT4App}
                alt=" Vintageprimefx MT4 Platform"
                className="img-fluid"
                style={{
                  borderRadius: "12px",
                  boxShadow: "0 0 12px rgba(0,0,0,0.1)",
                  maxHeight: "450px",
                }}
              />
            </Col>
          </Row>
        </Container>
      </div>

      <div style={{ backgroundColor: "#f2fdf5" }} className="py-5 text-dark">
        <Container>
          <h2
            className="text-center fw-bold mb-4"
            style={{ color: "#145214", fontSize: "1.75rem" }}
          >
            <FaQuestionCircle className="me-2 text-success" />
            MetaTrader 4 – Main FAQs
          </h2>
          <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header style={{ fontSize: "1.25rem" }}>
                How do I open an MT4 trading account with  Vintageprimefx?
              </Accordion.Header>
              <Accordion.Body style={{ fontSize: "1.25rem" }}>
                Opening an MT4 demo or live account with  Vintageprimefx is quick
                and simple. Just register on our website in under two minutes.
                Then, go to the MetaTrader 4 page to download the platform. When
                you launch MT4, log in using the demo or real account
                credentials sent to your email. You’ll then have full access to
                MT4’s powerful features.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header style={{ fontSize: "1.25rem" }}>
                Can I use the MT4 platform on my smartphone?
              </Accordion.Header>
              <Accordion.Body style={{ fontSize: "1.25rem" }}>
                Absolutely! MT4 is available as a mobile app for both iOS and
                Android devices. It also works on desktop and as a web-based
                platform. Your trading activity syncs across devices, so you can
                place an order on your PC and modify it later on your
                smartphone.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header style={{ fontSize: "1.25rem" }}>
                Is the newer MT5 version better than the MT4 version?
              </Accordion.Header>
              <Accordion.Body style={{ fontSize: "1.25rem" }}>
                MT4 and MT5 are both developed by MetaQuotes. MT5 is more
                suitable for stock trading and offers advanced order management.
                MT4, however, remains the preferred choice for Forex trading.
                For most retail traders, both platforms offer the essential
                tools and features to trade successfully.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </div>
    </>
  );
};

export default WhatIsMetaTrader;
