import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaBell, FaChartLine, FaMoneyCheckAlt, FaApple, FaAndroid } from 'react-icons/fa';
import TradingAppImage from '../assets/images/trading-app.png'; 
const MobilePlatforms: React.FC = () => {
  return (
    <section className="mobile-platforms-section py-5 text-light">
      <Container>
        <Row className="align-items-center g-5">
          <Col md={6}>
            <img
              src={TradingAppImage} 
              alt="Mobile Trading Platform"
              className="img-fluid rounded shadow-lg"
            />
          </Col>
          <Col md={6}>
            <h2 className="fw-bold mb-3">Trade Anytime, Anywhere</h2>
            <p className="mb-4">
              Stay connected to global markets with our secure, lightning-fast mobile trading apps.
            </p>
            <ul className="list-unstyled">
              <li className="d-flex align-items-center mb-2">
                <FaChartLine className="me-2 text-warning" />
                Real-time market tracking
              </li>
              <li className="d-flex align-items-center mb-2">
                <FaMoneyCheckAlt className="me-2 text-warning" />
                Easy deposit and withdrawal
              </li>
              <li className="d-flex align-items-center mb-2">
                <FaBell className="me-2 text-warning" />
                Push notifications and alerts
              </li>
            </ul>
            <div className="mt-4 d-flex flex-wrap gap-3">
              <Button variant="warning" className="d-flex align-items-center">
                <FaApple className="me-2" /> Download for iOS
              </Button>
              <Button variant="outline-light" className="d-flex align-items-center">
                <FaAndroid className="me-2" /> Download for Android
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MobilePlatforms;
