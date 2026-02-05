import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { BsSearch, BsRocketTakeoff, BsPersonCheck } from "react-icons/bs";

const TradingRules = () => {
  const [search, setSearch] = useState("");
  const [level, setLevel] = useState("All");

  const levels = ["All", "Beginner", "Intermediate", "Advanced"];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleLevelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLevel(e.target.value);
  };

  return (
    <div>
      {/* 🔷 Hero Banner */}
      <div
        className="video-banner d-flex align-items-center justify-content-center text-center"
        style={{
          backgroundImage: `url('/images/banner-tradingrules.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "350px",
          color: "white",
        }}
      >
        <div className="bg-dark bg-opacity-50 p-4 rounded">
          <h1 className="fw-bold display-5 text-success">Correct Trading Rules</h1>
          <p className="lead text-light mb-0">
            Trading rules that go beyond opening and closing positions
          </p>
        </div>
      </div>

      {/* 🔷 Filters */}
      <section className="bg-dark text-white py-4">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="mb-3 mb-md-0">
              <Form.Control
                type="text"
                placeholder="Search trading rules..."
                value={search}
                onChange={handleSearchChange}
              />
            </Col>
            <Col md={3}>
              <Form.Select value={level} onChange={handleLevelChange}>
                {levels.map((lvl, idx) => (
                  <option key={idx} value={lvl}>
                    {lvl}
                  </option>
                ))}
              </Form.Select>
            </Col>
            <Col md={3}>
              <Button variant="success" className="w-100">
                <BsSearch className="me-2" />
                Search
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 🔷 Main Content */}
      <section className="bg-dark text-dark py-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={10}>
              <Card className="shadow border-0">
                <Card.Body>
                  <h3 className="fw-bold text-success mb-3">Learning the Rules of the Trade</h3>
                  <p>
                    As you embark on your online trading journey, knowing how to trade effectively goes beyond just being able to open and close positions. Trading basics start with understanding the fundamentals such as trading rules, how to choose the right broker, how to plan your trading, and more.
                  </p>

                  <h5 className="fw-semibold mt-4">Choosing the Right Brokerage Partner</h5>
                  <p>
                    Your broker is your gateway to the markets. A reliable and reputable broker ensures access to effective tools, a supportive environment, and quality resources for beginners.
                  </p>

                  <h5 className="fw-semibold mt-4">Building a Solid Trading Plan</h5>
                  <p>
                    A trading plan outlines your style (short/long term), strategy (entry/exit setups), and risk management (stake size, stop loss, reward ratio). A profitable strategy is useless without a disciplined plan.
                  </p>

                  <h5 className="fw-semibold mt-4">Mastering the Trading Mindset</h5>
                  <p>
                    Commitment, consistency, and control of emotions are key to trading success. Build discipline through trading psychology and remain objective in execution.
                  </p>

                  <h5 className="fw-semibold mt-4">Start Practicing</h5>
                  <p>
                    Practice on a demo account before switching to live trading. Understand the rules, gain confidence, and then take real market action.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 🔷 Call To Action */}
      <section className="py-5 bg-dark text-white text-center">
        <Container>
          <h2 className="fw-bold text-success mb-3">Ready to Trade?</h2>
          <p className="lead">
            Open a demo account to practice what you’ve learned, or go live and start trading today!
          </p>
          <div className="d-flex justify-content-center gap-3 mt-4">
            <Button variant="outline-success" size="lg">
              <BsPersonCheck className="me-2" />
              Open Demo Account
            </Button>
            <Button variant="success" size="lg">
              <BsRocketTakeoff className="me-2" />
              Start Trading
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default TradingRules;
