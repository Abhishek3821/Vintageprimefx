import React from "react";
import { Container, Row, Col, Card, Accordion } from "react-bootstrap";
import {
  BsGraphUp, BsBarChartLine, BsPieChart, BsKanban, BsDiagram3, BsLightningCharge,
  BsBullseye, BsEye, BsCpu, BsColumnsGap, BsCurrencyExchange, BsPeople,
  BsBoxArrowInUpRight, BsCash, BsFingerprint, BsCodeSlash, BsLightbulb, BsPatchCheck,
  BsRocketTakeoff, BsUiChecks, BsCalendar2Range, BsArrowRepeat, BsCardChecklist,
  BsDiagram2, BsExclamationTriangle, BsGear, BsLayoutTextSidebar, BsMap,
  BsShieldLock, BsSpeedometer, BsToggleOn, BsTrophy, BsToggles2, BsXDiamond
} from "react-icons/bs";

const icons = [
  BsGraphUp, BsBarChartLine, BsPieChart, BsKanban, BsDiagram3, BsLightningCharge,
  BsBullseye, BsEye, BsCpu, BsColumnsGap, BsCurrencyExchange, BsPeople,
  BsBoxArrowInUpRight, BsCash, BsFingerprint, BsCodeSlash, BsLightbulb, BsPatchCheck,
  BsRocketTakeoff, BsUiChecks, BsCalendar2Range, BsArrowRepeat, BsCardChecklist,
  BsDiagram2, BsExclamationTriangle, BsGear, BsLayoutTextSidebar, BsMap,
  BsShieldLock, BsSpeedometer, BsToggleOn, BsTrophy, BsToggles2, BsXDiamond
];

const titles = [
  "Technical Analysis for Stock Trading", "Leading and Lagging Indicators", "The Kelly Criterion",
  "Renko Charts", "What is RSI?", "Understanding MACD", "Fibonacci Retracement",
  "Support & Resistance Basics", "Chart Patterns 101", "Volume Analysis Techniques",
  "Moving Averages Explained", "Stochastic Oscillator Tutorial", "Bollinger Bands Simplified",
  "Candlestick Patterns", "Heikin Ashi Candles", "Combining Indicators for Strategy",
  "Ichimoku Cloud Explained", "Elliott Wave Theory Basics", "Trend Lines & Channels",
  "Breakout vs Fakeout", "Divergence in Indicators", "RSI + MACD Combo Strategy",
  "Risk-Reward Ratios", "How to Use ATR", "Parabolic SAR Strategy", "Gap Trading Techniques",
  "Day Trading vs Swing Trading", "How to Avoid Overtrading", "Trading Psychology Basics",
  "Using Volume Profile", "Understanding Order Blocks", "Scalping Techniques",
  "Multiple Time Frame Analysis", "Institutional Trading Patterns", "Backtesting Your Strategy"
];

const videos = titles.map((title, i) => ({
  title,
  duration: `${5 + (i % 10)} min`,
  level: i % 3 === 0 ? "Beginner" : i % 3 === 1 ? "Intermediate" : "Advanced",
  Icon: icons[i % icons.length]
}));

const VideoGallery = () => {
  return (
    <div>
      {/* 🔷 Banner Section */}
      <div
        className="video-banner d-flex align-items-center justify-content-center text-center"
        style={{
          backgroundImage: `url('/images/banner-tech.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "350px",
          color: "white",
        }}
      >
        <div className="bg-dark bg-opacity-50 p-4 rounded">
          <h1 className="fw-bold display-5 text-success">Technical Analysis & Strategies</h1>
          <p className="lead text-light mb-0">
            Watch our video lessons to level up your trading game
          </p>
        </div>
      </div>

      {/* 🔷 Video Cards Section */}
      <section className="py-5 bg-dark text-white">
        <Container>
          <Row>
            {videos.map(({ title, duration, level, Icon }, index) => (
              <Col key={index} md={6} lg={3} className="mb-4">
                <Card className="h-100 shadow-sm border-0 text-center bg-light video-card">
                  <div className="d-flex justify-content-center align-items-center bg-success bg-opacity-10" style={{ height: "150px" }}>
                    <Icon className="text-success fs-1" />
                  </div>
                  <Card.Body>
                    <Card.Title className="fs-6 fw-bold text-dark">{title}</Card.Title>
                    <Card.Text className="text-muted small">
                      {level} • {duration}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>

        {/* 🔷 FAQ Section */}
        <section className="py-5 bg-dark text-white">
          <div className="container">
            <h2 className="text-center fw-bold mb-4 text-success">Frequently Asked Questions</h2>
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>What is Technical Analysis?</Accordion.Header>
                <Accordion.Body>
                  Technical analysis involves studying market activity—like price movements and volume—to forecast future price trends.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Do I need prior experience to start trading?</Accordion.Header>
                <Accordion.Body>
                  No prior experience is necessary. Our beginner-friendly content helps you start from scratch.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Is this content free?</Accordion.Header>
                <Accordion.Body>
                  Yes, all videos and resources are completely free for learners.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Can I trade using a demo account?</Accordion.Header>
                <Accordion.Body>
                  Absolutely! Most platforms offer demo accounts so you can practice without financial risk.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>How often is content updated?</Accordion.Header>
                <Accordion.Body>
                  We update our educational resources weekly to ensure you're always learning the latest strategies.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </section>
      </section>
    </div>
  );
};

export default VideoGallery;
