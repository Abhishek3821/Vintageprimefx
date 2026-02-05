import React from "react";
import { Accordion, Button, Col, Container, Row } from "react-bootstrap";
import { FaCheckCircle, FaRobot } from "react-icons/fa";

const AlgorithmicBanner = () => {
  return (
    <>
      <div
        style={{ backgroundColor: "#014421" }}
        className="text-light text-center py-5"
      >
        <Container>
          <h1 className="fw-bold mb-3">Algorithmic Trading at  Vintageprimefx</h1>
          <p className="fs-5 mb-5">
            Experience the speed and precision of automated trading strategies.
             Vintageprimefx empowers you with tools to analyze, execute, and manage
            trades efficiently.
          </p>
          <img
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
            alt="Algorithmic Trading"
            className="img-fluid w-100"
            style={{
              maxHeight: "600px",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
        </Container>
      </div>
      <div style={{ backgroundColor: "#f0fbf5" }} className="py-5 text-dark">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="mb-4 mb-md-0">
              <h2 className="fw-bold mb-4">What is Algorithmic Trading?</h2>
              <p>
                Algorithmic trading is simply turning a trade idea or model into
                a workable strategy through an algorithm. It automates analysis
                and trade execution, eliminating emotional interference and
                allowing for back-testing and consistency. On MT5, the
                integrated development environment gives access to the full
                application development cycle.
              </p>

              <h4 className="fw-semibold mt-4">
                Who Uses Algorithmic Trading?
              </h4>
              <p>
                It’s popular with institutional investors like mutual funds and
                insurance companies for large orders, and also with short-term
                traders like HFTs and scalpers. Systematic traders, hedge funds,
                and market makers all benefit from the rule-based automation,
                high speed, and liquidity support algorithmic trading provides.
              </p>

              <h4 className="fw-semibold mt-4">Advantages</h4>
              <ul>
                <li>Removes emotional decision-making</li>
                <li>Increases discipline and focus</li>
                <li>Enables detailed backtesting and optimization</li>
                <li>Faster, more accurate order execution</li>
                <li>Objectivity and strategic consistency</li>
              </ul>

              <h4 className="fw-semibold mt-4">Disadvantages</h4>
              <ul>
                <li>Over-optimization risks creating unreliable strategies</li>
                <li>Susceptible to technical issues or internet failures</li>
                <li>High-speed trades may cause market imbalances</li>
                <li>Flash crashes and liquidity shifts can occur</li>
              </ul>
            </Col>

            <Col md={6}>
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Algorithmic Trading"
                className="img-fluid rounded shadow"
                style={{ maxHeight: "700px", objectFit: "cover" }}
              />
            </Col>
          </Row>
        </Container>
      </div>
      <div style={{ backgroundColor: "#f2fcf6" }} className="text-dark py-5">
        <Container>
          <Row className="align-items-center">
            {/* Left Column - Text */}
            <Col md={6}>
              <h2 className="fw-bold mb-4">
                Automated Trading Applications in MT5
              </h2>

              <p className="fs-5 mb-3">
                Automated trading applications, like Expert Advisors (EAs), in
                MT5 are broadly classified into two categories:
                <strong> trading robots</strong> and{" "}
                <strong>custom indicators</strong>. Trading robots perform
                operations automatically in your account, while indicators
                analyze price action and patterns.
              </p>

              <p className="fs-5 mb-3">
                MT5 also offers access to the largest marketplace for trading
                applications: robots, scripts, indicators, and more— many of
                which are free or available to rent or buy. Plus, through the
                Freelance section, you can hire MT5 programmers to build custom
                tools for your needs.
              </p>

              <p className="fs-5 mb-3">
                Development is easier with MetaEditor—a full IDE with tools
                like:
              </p>

              <ul className="fs-5 list-unstyled ps-3">
                <li className="mb-2">
                  ✅ <strong>Expert Advisors:</strong> Apply automated
                  strategies
                </li>
                <li className="mb-2">
                  ✅ <strong>Custom Indicators:</strong> Analyze financial
                  assets
                </li>
                <li className="mb-2">
                  ✅ <strong>Scripts:</strong> Trigger one-time actions like
                  closing orders
                </li>
                <li className="mb-2">
                  ✅ <strong>Libraries:</strong> Store and reuse common
                  functions
                </li>
                <li className="mb-2">
                  ✅ <strong>MetaEditor:</strong> Write, test, debug, and
                  profile your code
                </li>
              </ul>

              <p className="fs-5">
                Whether you're buying, renting, or building your own MT5 app,
                the platform gives you full control to trade your way—smartly
                and efficiently.
              </p>
            </Col>

            {/* Right Column - Image */}
            <Col md={6} className="text-center mt-4 mt-md-0">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Automated Trading in MT5"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </div>
      <div style={{ backgroundColor: "#f4fdf7" }} className="py-5 text-dark">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="mb-4 mb-md-0">
              <h2 className="fw-bold mb-4">Running Expert Advisors on MT5</h2>
              <p>
                EAs (Expert Advisors) can be easily accessed from the Navigator
                window on AvaTrade MT5. Simply double-click or drag your EA onto
                the chart. When used for the first time, a setup window appears
                with <strong>Common</strong> and <strong>Inputs</strong> tabs:
              </p>
              <ul>
                <li>
                  <strong>Common Tab:</strong> Enable auto-trading, modify
                  signal settings.
                </li>
                <li>
                  <strong>Input Tab:</strong> Set trading conditions like lot
                  size, levels, and custom indicators.
                </li>
              </ul>
              <p>
                Toggle auto/manual trading from the toolbar, manage DLL
                permissions, WebRequest access, and save favorites for quick
                access.
              </p>

              <h4 className="fw-semibold mt-4">
                Popular Algorithmic Strategies
              </h4>
              <ul>
                <li>
                  <strong>Trend Following:</strong> Trades aligned with market
                  trends using moving averages.
                </li>
                <li>
                  <strong>Arbitrage:</strong> Exploit asset price mismatches
                  across exchanges.
                </li>
                <li>
                  <strong>Index Rebalancing:</strong> Profiting from scheduled
                  asset reallocations.
                </li>
                <li>
                  <strong>Mean Reversion:</strong> Betting that prices revert to
                  their average.
                </li>
                <li>
                  <strong>TWAP & VWAP:</strong> Time-based or volume-based trade
                  execution strategies.
                </li>
              </ul>
            </Col>

            <Col md={6}>
              <img
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                alt="Expert Advisors MT5"
                className="img-fluid rounded shadow"
                style={{ maxHeight: "700px", objectFit: "cover" }}
              />
            </Col>
          </Row>

          <Row className="mt-5">
            <Col md={6}>
              <h4 className="fw-semibold">Strategy Testing & Optimization</h4>
              <p>
                MT5’s Strategy Tester allows you to backtest and optimize your
                EA using historical data. It supports:
              </p>
              <ul>
                <li>
                  <strong>Multi-currency testing:</strong> Run strategies across
                  different markets simultaneously.
                </li>
                <li>
                  <strong>Multi-threaded execution:</strong> Utilize CPU power
                  for faster testing.
                </li>
                <li>
                  <strong>Parameter optimization:</strong> Identify the best
                  combination of strategy inputs.
                </li>
                <li>
                  <strong>Graphical result reports</strong> for easy
                  interpretation.
                </li>
              </ul>
              <h4 className="fw-semibold">Final Word</h4>
              <p>
                MetaTrader 5 revolutionizes automated trading. Whether you build
                your own strategy or download from professionals, MT5 allows
                24/7 trading, emotion-free execution, and consistent
                performance. AvaTrade gives direct access to this powerful
                platform to maximize your trading potential.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div style={{ backgroundColor: "#e6f4ea" }} className="text-dark py-5">
        <Container>
          <Row className="justify-content-center mb-4">
            <Col lg={8} className="text-center">
              <h2 className="fw-bold" style={{ color: "#014421" }}>
                Algorithmic Trading on MT5 – FAQs
              </h2>
              <p className="fs-5">
                Get your answers about algorithmic trading using Expert Advisors
                (EAs) in MetaTrader 5.
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg={10}>
              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <FaRobot className="me-2 text-success" />
                    Does algorithmic trading really work?
                  </Accordion.Header>
                  <Accordion.Body>
                    Technically, yes. Expert Advisors (EAs) in MT5 are just
                    tools—how effective they are depends on how well they’re
                    programmed and how appropriately they’re used. They won’t
                    perform miracles, but when built correctly and used
                    responsibly, they can be highly effective for specific
                    strategies.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <FaRobot className="me-2 text-success" />
                    Is algorithmic trading good or bad?
                  </Accordion.Header>
                  <Accordion.Body>
                    It depends on your expectations. If you're looking for a
                    “set it and forget it” money-making machine, you'll be
                    disappointed. However, when approached realistically and
                    used to remove emotional bias, algorithmic trading can help
                    improve consistency and discipline in your trades.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <FaRobot className="me-2 text-success" />
                    Does algorithmic trading really mean automatic profits?
                  </Accordion.Header>
                  <Accordion.Body>
                    No. While some think EAs guarantee profits, successful
                    algorithmic traders constantly tweak and monitor their bots.
                    Market conditions change, and a once-profitable algorithm
                    may start underperforming. There is no substitute for
                    oversight and strategy.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>

          <Row className="mt-5 justify-content-center text-center">
            <Col md={8}>
              <h4 className="fw-semibold mb-3">
                <FaCheckCircle className="text-success me-2" />
                Start practicing today
              </h4>
              <p className="fs-5">
                Open your AvaTrade account and explore the power of algorithmic
                trading using MT5 Expert Advisors.
              </p>
              <Button variant="success" size="lg" className="fw-semibold">
                Start Algorithmic Trading
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default AlgorithmicBanner;
