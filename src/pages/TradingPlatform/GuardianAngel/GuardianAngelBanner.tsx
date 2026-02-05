import React from "react";
import { Container, Row, Col, Button, Accordion } from "react-bootstrap";
import {
  FaBalanceScale,
  FaBell,
  FaChartLine,
  FaCheckCircle,
  FaExclamationTriangle,
  FaEye,
  FaQuestionCircle,
  FaShieldAlt,
  FaTrophy,
  FaUserCog,
  FaUserShield,
} from "react-icons/fa";

const PipzoGuardianAngelBanner: React.FC = () => {
  return (
    <>
      <div style={{ backgroundColor: "#014421" }} className="text-white py-5">
        <Container className="text-center">
          <Row className="justify-content-center">
            <Col lg={10}>
              <h2 className="fw-bold mb-3">Guardian Angel</h2>
              <h5 className="text-warning mb-3">
                Make Smarter Trades with Real-Time Insights
              </h5>
              <p className="mb-4 fs-5">
                 Vintageprimefx’ free Guardian Angel trading support system acts as a
                smart decision enhancer for MetaTrader 4 and 5. It provides
                instant feedback on your trades to help you refine your
                strategy, improve your trading skills, and focus on the most
                critical data to enhance your success.
              </p>
              <Button
                variant="light"
                size="lg"
                className="fw-semibold text-dark"
              >
                Activate Guardian Angel
              </Button>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col>
              <img
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                alt="Guardian Angel System"
                className="img-fluid w-100"
                style={{ height: "auto" }}
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
                Guardian Angel Benefits
              </h2>
              <p className="fs-5 mb-4">
                This personalized trading and money management tool is designed
                to:
              </p>
              <ul className="fs-5 list-unstyled">
                <li className="mb-3">
                  <FaCheckCircle className="text-success me-2" />
                  Keep you focused on your strategy
                </li>
                <li className="mb-3">
                  <FaCheckCircle className="text-success me-2" />
                  Identify areas for improvement
                </li>
                <li className="mb-3">
                  <FaCheckCircle className="text-success me-2" />
                  Boost trading confidence
                </li>
                <li className="mb-3">
                  <FaCheckCircle className="text-success me-2" />
                  Enhance market connectivity
                </li>
                <li className="mb-3">
                  <FaCheckCircle className="text-success me-2" />
                  Expand your trading expertise
                </li>
              </ul>
            </Col>
            <Col md={6} className="text-center mt-4 mt-md-0">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Guardian Angel Features"
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
              <p className="fs-5 mb-4 text-center">
                The Guardian Angel tool is invaluable for both novice and
                experienced traders, offering objective insights into their
                trading activities. This feedback not only enhances current
                trades but also fosters better trading habits for long-term
                success, as learning from mistakes is a cornerstone of growth.
              </p>
              <p className="fs-5 text-center">
                At  Vintageprimefx, we view trading as a dynamic journey. Beginners can
                build their skills, while seasoned traders can refine their
                strategies. We are committed to equipping our clients with
                industry-leading tools, and Guardian Angel is a prime example of
                our dedication to excellence.
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
                Stay Informed with Guardian Angel Alerts
              </h2>
              <p className="fs-5 mb-4">
                Download the Guardian Angel add-on to receive real-time messages
                and alerts that highlight critical aspects of your trading
                behavior. These notifications help you maintain discipline,
                manage risk effectively, and stay agile in volatile markets.
              </p>
              <ul className="list-unstyled fs-5">
                <li className="mb-3">
                  <FaExclamationTriangle className="text-success me-2" />{" "}
                  Excessive risk alerts
                </li>
                <li className="mb-3">
                  <FaShieldAlt className="text-success me-2" /> Stop loss
                  suggestions
                </li>
                <li className="mb-3">
                  <FaTrophy className="text-success me-2" /> Performance
                  insights (strong/weak trades)
                </li>
                <li className="mb-3">
                  <FaBell className="text-success me-2" /> Margin call warnings
                </li>
                <li className="mb-3">
                  <FaChartLine className="text-success me-2" /> Market updates
                  tailored to your profile
                </li>
                <li className="mb-3">
                  <FaBalanceScale className="text-success me-2" /> Volatility
                  tracking alerts
                </li>
              </ul>
            </Col>
            <Col md={6} className="text-center mt-4 mt-md-0">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Guardian Angel Alerts"
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

      <div style={{ backgroundColor: "#e6f4ea" }} className="text-dark py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h2 className="fw-bold mb-4" style={{ color: "#145214" }}>
                Your Personal Trading Guardian
              </h2>
              <p className="fs-5 mb-4">
                <FaUserCog className="text-success me-2" />
                Guardian Angel is customized to your needs. Traders can
                configure settings, preferences, and priorities to ensure alerts
                and insights align with their unique trading style and
                objectives.
              </p>
              <p className="fs-5 mb-4">
                <FaEye className="text-success me-2" />
                Acting as a vigilant assistant, Guardian Angel delivers
                objective, real-time feedback during trades, helping you stay
                focused without overwhelming you.
              </p>
              <p className="fs-5">
                <FaUserShield className="text-success me-2" />
                While not a replacement for your judgment, it’s an ideal
                companion to guide and enhance your decision-making process.
              </p>
            </Col>
            <Col md={6} className="text-center mt-4 mt-md-0">
              <img
                src="https://images.unsplash.com/photo-1542744095-291d1f67b221?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
                alt="Custom Guardian Angel"
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
              <p className="fs-5 mb-4 text-center">
                The Guardian Angel tool is essential for traders at all levels,
                providing objective insights that improve decision-making and
                foster long-term trading discipline. Learning from feedback is
                key to growth in trading.
              </p>
              <p className="fs-5 text-center">
                At  Vintageprimefx, we see trading as a continuous journey of
                improvement. Whether you’re starting out or a seasoned
                professional, Guardian Angel empowers you with tailored support
                to elevate your trading experience.
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
                Guardian Angel Alert Highlights
              </h2>
              <p className="fs-5 mb-4">
                With the Guardian Angel add-on, you receive real-time,
                customized feedback to strengthen your trading approach. These
                alerts keep you informed about critical risks and opportunities.
              </p>
              <ul className="list-unstyled fs-5">
                <li className="mb-3">
                  <FaExclamationTriangle className="text-success me-2" />{" "}
                  Excessive risk alerts
                </li>
                <li className="mb-3">
                  <FaShieldAlt className="text-success me-2" /> Stop loss
                  reminders and suggestions
                </li>
                <li className="mb-3">
                  <FaTrophy className="text-success me-2" /> Strong/weak trading
                  performance insights
                </li>
                <li className="mb-3">
                  <FaBell className="text-success me-2" /> Margin call warnings
                </li>
                <li className="mb-3">
                  <FaChartLine className="text-success me-2" /> Market alerts
                  tailored to your trading profile
                </li>
                <li className="mb-3">
                  <FaBalanceScale className="text-success me-2" /> Volatility
                  tracking updates
                </li>
              </ul>
            </Col>
            <Col md={6} className="text-center mt-4 mt-md-0">
              <img
                src="https://images.unsplash.com/photo-1594322463847-81e2bd5f9888?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
                alt="Guardian Angel Alerts"
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

      <div style={{ backgroundColor: "#f0fbf5" }} className="text-dark py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <h2
                className="fw-bold text-center mb-4"
                style={{ color: "#145214" }}
              >
                Personalized Support for Every Trader
              </h2>
              <p className="fs-5 text-center mb-4">
                Guardian Angel is unique to each trader, delivering personalized
                feedback based on your trading actions and preferences, ensuring
                a tailored experience.
              </p>
              <p className="fs-5 text-center">
                While it should not replace your decision-making, Guardian Angel
                acts as a second pair of eyes, guiding you with actionable
                insights customized to your needs.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <div style={{ backgroundColor: "#014421" }} className="text-white py-5">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={10}>
              <h2 className="fw-bold mb-4">
                Guardian Angel: Your Trading Ally
              </h2>
              <p className="fs-5 mb-4">
                Open a MetaTrader 4 account with  Vintageprimefx today and gain free
                access to the Guardian Angel add-on.
              </p>
              <p className="fs-5 mb-4">
                Already have a MetaTrader 4 or MetaTrader 5 account with
                 Vintageprimefx? Download the Guardian Angel tool for free or
                contact your account manager for assistance.
              </p>
              <div className="d-flex flex-column flex-md-row justify-content-center gap-3 mt-4">
                <Button
                  variant="light"
                  size="lg"
                  className="fw-semibold text-dark px-4"
                >
                  Download Guardian Angel
                </Button>
                <Button
                  variant="outline-light"
                  size="lg"
                  className="fw-semibold px-4"
                >
                  Contact Account Manager
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div style={{ backgroundColor: "#e6f4ea" }} className="text-dark py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <h2
                className="fw-bold mb-5 text-center"
                style={{ color: "#145214" }}
              >
                <FaQuestionCircle className="me-2" />
                Guardian Angel FAQs
              </h2>
              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Can Guardian Angel guarantee better trading results?
                  </Accordion.Header>
                  <Accordion.Body>
                    The Guardian Angel plug-in is a powerful MetaTrader add-on
                    that provides valuable feedback on your trading behavior,
                    including market volatility and stop-loss guidance. However,
                    it is not investment advice, and there is no evidence it
                    directly improves profits or reduces losses. Use it as a
                    supportive tool to enhance your strategy.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    Is Guardian Angel suitable for experienced traders?
                  </Accordion.Header>
                  <Accordion.Body>
                    Yes. Guardian Angel offers insights into risk management,
                    trading performance, market statistics, and financial news,
                    making it valuable for both beginners and advanced traders
                    to refine their decision-making.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    Does Guardian Angel provide identical feedback for all
                    traders?
                  </Accordion.Header>
                  <Accordion.Body>
                    No. Guardian Angel is highly personalized, analyzing each
                    trader’s actions to deliver tailored feedback. You can
                    customize it to focus on specific insights, acting as a
                    supportive second pair of eyes for your trading.
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

export default PipzoGuardianAngelBanner;
