import React from "react";
import { Container, Row, Col, Card, Accordion } from "react-bootstrap";
import {
  BsBoxArrowInDownLeft, BsBoxArrowUpRight, BsArrowLeftRight, BsArrowsCollapse,
  BsBarChart, BsColumnsGap, BsToggleOn, BsGraphDownArrow
} from "react-icons/bs";

const orderIcons = [
  BsBoxArrowInDownLeft, BsBoxArrowUpRight, BsArrowLeftRight, BsArrowsCollapse,
  BsBarChart, BsColumnsGap, BsToggleOn, BsGraphDownArrow
];

const orderTypes = [
  "Market Order", "Limit Order", "Stop Order", "Stop-Limit Order",
  "Trailing Stop", "Fill or Kill", "Good-Till-Cancelled (GTC)", "Immediate or Cancel"
];

const orderCards = orderTypes.map((title, i) => ({
  title,
  duration: `${2 + (i % 4)} min`,
  level: i % 3 === 0 ? "Beginner" : i % 3 === 1 ? "Intermediate" : "Advanced",
  Icon: orderIcons[i % orderIcons.length]
}));

const OrderTypes = () => {
  return (
    <div>
      {/* 🔷 Banner Section */}
      <div
        className="video-banner d-flex align-items-center justify-content-center text-center"
        style={{
          backgroundImage: `url('/images/banner-orders.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "350px",
          color: "white",
        }}
      >
        <div className="bg-success bg-opacity-50 p-4 rounded">
          <h1 className="fw-bold display-5 text-light">Order Types in Trading</h1>
          <p className="lead text-white mb-0">
            Learn different types of orders to optimize your trades effectively
          </p>
        </div>
      </div>

      {/* 🔷 Cards Section */}
      <section className="py-5 bg-dark text-white">
        <Container>
          <Row>
            {orderCards.map(({ title, duration, level, Icon }, index) => (
              <Col key={index} md={6} lg={3} className="mb-4">
                <Card className="h-100 shadow-sm border-0 text-center bg-light position-relative overflow-hidden">
                  <div className="d-flex justify-content-center align-items-center bg-success bg-opacity-10" style={{ height: "150px" }}>
                    <Icon className="text-success fs-1" />
                  </div>
                  <Card.Body>
                    <Card.Title className="fs-6 fw-bold text-dark">{title}</Card.Title>
                    <Card.Text className="text-muted small">
                      {level} • {duration}
                    </Card.Text>
                  </Card.Body>
                  <div className="order-hover bg-success text-white p-3 position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center opacity-0 hover-transition">
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
            <h2 className="text-center fw-bold mb-4 text-light">FAQs - Order Types</h2>
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Which order type is safest for new traders?</Accordion.Header>
                <Accordion.Body>
                  Limit orders are generally considered safer as they ensure price control.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Can I modify or cancel my order?</Accordion.Header>
                <Accordion.Body>
                  Yes, as long as it’s not filled. Most platforms support modification/cancellation.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>What’s the difference between Stop and Stop-Limit orders?</Accordion.Header>
                <Accordion.Body>
                  Stop orders execute at market price when triggered, while stop-limit sets a max/min limit.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Do professional traders use these advanced order types?</Accordion.Header>
                <Accordion.Body>
                  Yes, they often use conditional orders to automate and reduce risk.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Container>
        </section>
      </section>
    </div>
  );
};

export default OrderTypes;
