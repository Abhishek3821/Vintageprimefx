import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaBell, FaClock, FaChartLine, FaSearch, FaBook, FaBullhorn, FaCogs, FaExchangeAlt } from 'react-icons/fa';

const features = [
  {
    icon: <FaBell size={30} className="text-success" />,
    title: 'Smart Notifications',
    desc: 'Get alerts via email or mobile as soon as your pre-set conditions are met. Let Capitalise.ai monitor markets for you.',
  },
  {
    icon: <FaClock size={30} className="text-success" />,
    title: 'Trade at a Specific Timing',
    desc: 'Schedule entry and exit based on specific events at precise times, fully automated.',
  },
  {
    icon: <FaChartLine size={30} className="text-success" />,
    title: 'Trailing Take Profit',
    desc: 'Automatically lock profits when your position hits a certain gain threshold.',
  },
  {
    icon: <FaSearch size={30} className="text-success" />,
    title: 'Monitor for Patterns',
    desc: 'Automatically identify and act on recurring market patterns in your strategy.',
  },
  {
    icon: <FaBook size={30} className="text-success" />,
    title: 'TradingView Library',
    desc: 'Access full library of TradingView indicators and lines for use in strategies.',
  },
  {
    icon: <FaBullhorn size={30} className="text-success" />,
    title: 'Trade the News',
    desc: 'Use fundamentals and events to automatically trigger entries and exits.',
  },
  {
    icon: <FaCogs size={30} className="text-success" />,
    title: 'Asset Correlation',
    desc: 'Trigger trades based on the price movements of another correlated asset.',
  },
  {
    icon: <FaExchangeAlt size={30} className="text-success" />,
    title: 'USD-Based Trade Sizing',
    desc: 'Define trade amounts directly in USD for better clarity and control.',
  },
];

const CapitaliseFeatures: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#e6f5ee', padding: '80px 0' }}>
      <Container>
        <h2 className="text-center fw-bold mb-5" style={{ color: '#146c43', fontSize: '2.5rem' }}>
          Get Familiar With <span style={{ color: '#28a745' }}>Capitalise.ai</span>
        </h2>

        <p className="text-center mb-5" style={{ fontSize: '1.2rem', color: '#2d4830' }}>
          From managing daily trades to building complex automation, there's no limit to what you can do.
        </p>

        <Row xs={1} sm={2} md={2} lg={3} xl={4} className="g-4">
          {features.map((feature, idx) => (
            <Col key={idx}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="text-center">
                  <div className="mb-3">{feature.icon}</div>
                  <Card.Title style={{ fontWeight: 600 }}>{feature.title}</Card.Title>
                  <Card.Text style={{ color: '#2d4830', fontSize: '0.95rem' }}>{feature.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="text-center mt-5">
          <Button
            variant="success"
            size="lg"
            style={{ backgroundColor: '#28a745', borderColor: '#28a745', fontWeight: 600 }}
          >
            Join AvaTrade Now
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default CapitaliseFeatures;
