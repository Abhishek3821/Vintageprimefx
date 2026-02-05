import React from "react";
import { Container, Row, Col, Card, Accordion } from "react-bootstrap";
import {
  BsBarChartSteps, BsGraphUpArrow, BsPieChartFill, BsLightningCharge, BsCpu,
  BsBoxArrowInRight, BsCurrencyExchange, BsDiagram3Fill, BsCashStack, BsPeopleFill,
  BsLayersHalf, BsBullseye, BsClipboardDataFill, BsBriefcase, BsCalculator,
  BsCodeSquare, BsRocket, BsClipboard2Pulse, BsPersonCheck, BsDiagram2Fill,
  BsJournalCheck, BsChevronBarContract, BsShieldShaded, BsPhoneLandscape,
  BsSearch, BsClockHistory, BsJoystick, BsRepeat, BsCardList
} from "react-icons/bs";

const icons = [
  BsBarChartSteps, BsGraphUpArrow, BsPieChartFill, BsLightningCharge, BsCpu,
  BsBoxArrowInRight, BsCurrencyExchange, BsDiagram3Fill, BsCashStack, BsPeopleFill,
  BsLayersHalf, BsBullseye, BsClipboardDataFill, BsBriefcase, BsCalculator,
  BsCodeSquare, BsRocket, BsClipboard2Pulse, BsPersonCheck, BsDiagram2Fill,
  BsJournalCheck, BsChevronBarContract, BsShieldShaded, BsPhoneLandscape,
  BsSearch, BsClockHistory, BsJoystick, BsRepeat, BsCardList
];

const strategies = [
  "Momentum Trading", "Swing Trading", "Day Trading", "Scalping",
  "Position Trading", "News-Based Trading", "Breakout Strategy",
  "Pullback Strategy", "Trend Following", "Mean Reversion",
  "Pairs Trading", "High-Frequency Trading", "Grid Trading",
  "Algorithmic Trading", "Risk Arbitrage", "Statistical Arbitrage",
  "Market Making", "Smart Beta Strategy", "Index Arbitrage",
  "Range Trading", "Futures Spread Trading", "Carry Trade",
  "Event-Driven Trading", "Options Strategies", "Volume-Based Strategy",
  "VWAP Strategy", "MACD Crossover", "Moving Average Strategy",
  "RSI Divergence", "Price Action Trading"
];

const cards = strategies.map((title, i) => ({
  title,
  duration: `${4 + (i % 7)} min`,
  level: i % 3 === 0 ? "Beginner" : i % 3 === 1 ? "Intermediate" : "Advanced",
  Icon: icons[i % icons.length]
}));

const OnlineTradingStrategies = () => {
  return (
    <div>
      {/* 🔷 Banner Section */}
      <div
        className="video-banner d-flex align-items-center justify-content-center text-center"
        style={{
          backgroundImage: `url('/images/banner-trading.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "350px",
          color: "white",
        }}
      >
        <div className="bg-dark bg-opacity-50 p-4 rounded">
          <h1 className="fw-bold display-5 text-success">Online Trading Strategies</h1>
          <p className="lead text-light mb-0">
            Master various strategies used by professionals in real markets
          </p>
        </div>
      </div>

      {/* 🔷 Cards Section */}
      <section className="py-5 bg-dark text-white">
        <Container>
          <Row>
            {cards.map(({ title, duration, level, Icon }, index) => (
              <Col key={index} md={6} lg={3} className="mb-4">
                <Card className="h-100 shadow-sm border-0 text-center bg-light video-card strategy-card position-relative overflow-hidden">
                  <div className="d-flex justify-content-center align-items-center bg-success bg-opacity-10" style={{ height: "150px" }}>
                    <Icon className="text-success fs-1" />
                  </div>
                  <Card.Body>
                    <Card.Title className="fs-6 fw-bold text-dark">{title}</Card.Title>
                    <Card.Text className="text-muted small">
                      {level} • {duration}
                    </Card.Text>
                  </Card.Body>
                  <div className="strategy-hover bg-success text-white p-3 position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center opacity-0 hover-transition">
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
            <h2 className="text-center fw-bold mb-4 text-success">FAQs - Trading Strategies</h2>
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Which trading strategy is best for beginners?</Accordion.Header>
                <Accordion.Body>
                  Momentum and swing trading are typically ideal for beginners due to their simplicity and clear signals.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Can I combine multiple strategies?</Accordion.Header>
                <Accordion.Body>
                  Yes, combining strategies helps reduce risk and improve performance over different market conditions.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Do these strategies work on all platforms?</Accordion.Header>
                <Accordion.Body>
                  Most strategies can be used across major platforms like MetaTrader, TradingView, and broker apps.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Are these strategies safe to use?</Accordion.Header>
                <Accordion.Body>
                  Strategies come with risk. Always test in a demo environment before using real capital.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Container>
        </section>
      </section>

     
    </div>
  );
};

export default OnlineTradingStrategies;
