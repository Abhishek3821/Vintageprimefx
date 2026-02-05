import React from "react";
import { Col, Row, Container, Button, Accordion } from "react-bootstrap";

const DupliTradeBanner: React.FC = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: "url('/assets/back3.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            padding: "12rem 10rem",
            width: "100%",
          }}
        >
          <Container className="text-center">
            <h1 className="fw-bold display-4">DupliTrade</h1>
            <p className="fs-4 mb-4 text-warning">
              Automated Trading Made Simple
            </p>
            <p className="fs-5 mb-4 text-light">
              Automatically mirror the trades of top-tier strategy providers
              directly into your AvaTrade account. Let expert traders do the
              heavy lifting while you focus on growing your portfolio
              confidently and efficiently.
            </p>
            <Button variant="warning" size="lg" className="fw-bold">
              Start with DupliTrade
            </Button>
          </Container>
        </div>
      </div>

      <div style={{ backgroundColor: "#e6f5ee", padding: "60px 0" }}>
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="mb-4 mb-md-0">
              <h2
                style={{
                  fontWeight: 700,
                  fontSize: "2.5rem",
                  color: "#146c43",
                }}
              >
                Copy. Trade. Repeat.
              </h2>
              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.7",
                  marginTop: "20px",
                  color: "#2d4830",
                }}
              >
                The innovative <strong> Vintageprimefx Connect</strong> links you with
                a vibrant community of expert traders. Achieve your financial
                goals by replicating proven strategies from top performers.
              </p>
              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.7",
                  color: "#2d4830",
                }}
              >
                Browse detailed stats, track performance, and confidently copy
                trades from the best in the game. With  Vintageprimefx, investing
                becomes smarter and more collaborative.
              </p>
              <Button
                variant="success"
                size="lg"
                style={{ backgroundColor: "#28a745", borderColor: "#28a745" }}
              >
                Explore  Vintageprimefx Connect
              </Button>
            </Col>
            <Col md={6}>
              <img
                src="/assets/pipzo-connect.png"
                alt=" Vintageprimefx Connect App"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </div>

      <div style={{ backgroundColor: "#e6f5ee", padding: "60px 0" }}>
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <img
                src="/assets/avasocial-simple.png"
                alt="Trading Made Simple"
                className="img-fluid"
              />
            </Col>
            <Col md={6}>
              <h2
                style={{
                  fontWeight: 700,
                  fontSize: "2.5rem",
                  color: "#146c43",
                }}
              >
                Automated Trading Made Simple
              </h2>
              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.7",
                  color: "#2d4830",
                  marginTop: "20px",
                }}
              >
                DupliTrade is a focused, transparent platform that allows you to
                automatically duplicate the actions of expert traders directly
                into your AvaTrade trading account. With a selection of proven
                strategies, DupliTrade empowers you to elevate your trading game
                effortlessly.
              </p>
              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.7",
                  color: "#2d4830",
                }}
              >
                Open your DupliTrade account, follow vetted strategy providers,
                and receive signals straight to your AvaTrade MT4 or MT5
                platform. It’s trading—simplified.
              </p>
              <Button
                variant="success"
                size="lg"
                style={{ backgroundColor: "#28a745", borderColor: "#28a745" }}
              >
                Try DupliTrade Now
              </Button>
            </Col>
          </Row>
        </Container>
      </div>

      <div style={{ backgroundColor: "#146c43", padding: "60px 0" }}>
        <Container className="text-center text-white">
          <h2 style={{ fontWeight: 700, fontSize: "2.5rem" }}>
            What are you waiting for?
          </h2>
          <p style={{ fontSize: "1.2rem", marginBottom: "30px" }}>
            It only takes a minute to get started with  Vintageprimefx.
          </p>
          <Button
            variant="light"
            size="lg"
            style={{ fontWeight: 600, color: "#28a745" }}
          >
            Join  Vintageprimefx Now
          </Button>
        </Container>
      </div>

      <div style={{ backgroundColor: "#f2fcf6" }} className="py-5 text-dark">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <h2 className="fw-bold text-center mb-5">FAQ About DupliTrade</h2>
              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Why should I consider using DupliTrade?
                  </Accordion.Header>
                  <Accordion.Body>
                    DupliTrade makes automated trading easy by letting you copy
                    strategies from audited, experienced traders. These
                    providers are continuously monitored to ensure consistent
                    performance, giving you a solid foundation for success.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    Is DupliTrade a good service?
                  </Accordion.Header>
                  <Accordion.Body>
                    DupliTrade is backed by years of experience and features
                    only vetted strategy providers. Its effectiveness depends on
                    the traders you follow, so it’s important to monitor
                    performance regularly and adjust your portfolio accordingly.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    Can you make money using DupliTrade?
                  </Accordion.Header>
                  <Accordion.Body>
                    Yes, DupliTrade is designed for profitability, but results
                    vary based on trader performance. Monitoring and switching
                    to better-performing traders over time is key to sustained
                    growth.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    How does DupliTrade protect my investments?
                  </Accordion.Header>
                  <Accordion.Body>
                    DupliTrade is operated by DT Direct Investment Hub Ltd, a
                    regulated Cyprus Investment Firm. Funds remain in your
                    AvaTrade account, and all strategies are delivered securely
                    with full transparency and oversight.
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

export default DupliTradeBanner;
