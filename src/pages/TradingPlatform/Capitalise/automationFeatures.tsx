
import React from 'react';
import { Card, Container } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const automationFeatures = [
  {
    title: 'TradingView Alerts',
    description:
      'Use any line or technical indicator on TradingView to trigger your automated strategies.',
    image: '/assets/tradingview-alerts.png',
  },
  {
    title: 'Dollar Cost Averaging (DCA)',
    description:
      'Spread large investments over time to reduce exposure to market volatility.',
    image: '/assets/dca.png',
  },
  {
    title: 'Trade At A Specific Timing',
    description:
      'Trigger orders only when specific events occur at defined times.',
    image: '/assets/timed-trade.png',
  },
  {
    title: 'Trailing Take Profit',
    description:
      'Lock in profits with trailing stops that activate after reaching target gains.',
    image: '/assets/trailing-profit.png',
  },
  {
    title: 'Smart Stop Loss',
    description:
      'Set dynamic stop-loss levels based on live market data or conditions.',
    image: '/assets/stoploss.png',
  },
  {
    title: 'Multiple Entry Triggers',
    description:
      'Use multiple indicators or events to trigger a single entry.',
    image: '/assets/multi-entry.png',
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const CapitaliseAIAdvanced: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#e6f5ee', padding: '60px 0' }}>
      <Container>
        <h2
          className="text-center mb-5"
          style={{ fontWeight: 700, fontSize: '2.5rem', color: '#146c43' }}
        >
          Advanced Trading Automation Features
        </h2>

        <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={5000} arrows>
          {automationFeatures.map((feature, index) => (
            <div key={index} className="p-2">
              <Card
                style={{
                  height: '100%',
                  minHeight: '360px',
                  border: 'none',
                  borderRadius: '16px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                }}
              >
                <Card.Img
                  variant="top"
                  src={feature.image}
                  style={{
                    height: '160px',
                    objectFit: 'contain',
                    padding: '1rem',
                  }}
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: '1rem', fontWeight: 600, color: '#146c43' }}>
                    {feature.title}
                  </Card.Title>
                  <Card.Text style={{ fontSize: '0.95rem', color: '#2d4830' }}>
                    {feature.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Carousel>
      </Container>
    </div>
  );
};

export default CapitaliseAIAdvanced;
