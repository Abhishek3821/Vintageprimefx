import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import { FaPlay } from 'react-icons/fa';
import 'react-multi-carousel/lib/styles.css';
import {
  FaChartLine,
  FaBullseye,
  FaBalanceScale,
  FaSignal,
  FaArrowCircleUp,
  FaSlidersH,
  FaListAlt,
  FaChartPie,
  FaTasks
} from 'react-icons/fa';
import LiveFxOptionsSection from './LiveFxOptions';

const PizpoOptionsSection: React.FC = () => {
  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 768 }, items: 2 },
    mobile: { breakpoint: { max: 768, min: 0 }, items: 1 }
  };

  const sliderItems = [
    {
      icon: <FaChartLine className="text-primary fs-3 me-3" />,
      title: "Structure FX & Option Trades",
      desc: "Use our unique interactive page for advanced trade structuring."
    },
    {
      icon: <FaBullseye className="text-primary fs-3 me-3" />,
      title: "Confidence Interval Insights",
      desc: "Historical chart + future Confidence Interval forecasting."
    },
    {
      icon: <FaBalanceScale className="text-primary fs-3 me-3" />,
      title: "Live Profit/Loss Chart",
      desc: "Get real-time updates of your trade risk and reward."
    },
    {
      icon: <FaSignal className="text-primary fs-3 me-3" />,
      title: "Streaming Prices",
      desc: "Access 40+ currency pairs and Gold markets."
    },
    {
      icon: <FaArrowCircleUp className="text-primary fs-3 me-3" />,
      title: "Implied Volatility",
      desc: "Analyze implied and realized volatility charts."
    },
    {
      icon: <FaSlidersH className="text-primary fs-3 me-3" />,
      title: "Smart Chart Tools",
      desc: "Use sliders for setting entry, TP/SL, and exit levels."
    },
    {
      icon: <FaListAlt className="text-primary fs-3 me-3" />,
      title: "13 Option Strategies",
      desc: "Includes Spreads, Risk Reversals, Calls, Puts & more."
    },
    {
      icon: <FaChartPie className="text-primary fs-3 me-3" />,
      title: "Portfolio Risk Summary",
      desc: "Track Delta, Vega, Theta risk across your holdings."
    },
    {
      icon: <FaTasks className="text-primary fs-3 me-3" />,
      title: "Open Positions View",
      desc: "Sort, filter and manage risk across all trades."
    }
  ];

  return (
    <>
      {/* First Banner Section */}
      <div style={{ backgroundColor: '#014421' }} className="text-white py-5 text-center">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <h2 className="fw-bold mb-3">PizpoOptions</h2>
              <h5 className="text-warning mb-3">
                Professional & Powerful App and Desktop Trading Platform
              </h5>
              <p className="mb-4 fs-5">
                Experience full control with PizpoOptions. Trade FX and options on an advanced platform built for professionals, yet intuitive for everyone.
              </p>
              <Button variant="light" size="lg" className="fw-semibold text-dark">
                Explore PizpoOptions
              </Button>
            </Col>
          </Row>

          <Row className="justify-content-center mt-5">
            <Col lg={12}>
              <img
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                alt="PizpoOptions Banner"
                className="img-fluid w-100"
                style={{ maxHeight: '400px', objectFit: 'cover' }}
              />
            </Col>
          </Row>
        </Container>
      </div>

      {/* Slider + Image Section */}
      <div style={{ backgroundColor: '#e8f5e9' }} className="py-5">
        <Container>
          <Row className="mb-4">
            <Col>
              <h2 className="fw-bold text-center mb-3">
                <span className="text-dark">Impressive Options Trading</span>{' '}
                <span style={{ color: '#014421' }}>at Competitive Prices</span>
              </h2>
            </Col>
          </Row>
          <Row>
            {/* Left Slider */}
            <Col md={6}>
              <Carousel
                responsive={responsive}
                infinite
                autoPlay
                arrows
                showDots
                autoPlaySpeed={5000}
              >
                {sliderItems.map((item, index) => (
                  <div key={index} className="d-flex flex-column p-3">
                    <div className="d-flex align-items-start mb-3 gap-3">
                      <div style={{ color: '#014421', fontSize: '1.5rem' }}>
                        {item.icon}
                      </div>
                      <div>
                        <h5 className="fw-semibold text-dark">{item.title}</h5>
                        <p className="mb-0 text-dark">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>
            </Col>

            {/* Right Image */}
            <Col md={6} className="text-center mt-4 mt-md-0">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Options Platform"
                className="img-fluid"
                style={{ maxHeight: '450px' }}
              />
            </Col>
          </Row>
        </Container>
      </div>
      <div style={{ backgroundColor: '#e8f5e9' }} className="py-5">
        <Container>
          <Row className="mb-4 text-center">
            <Col>
              <h2 className="fw-bold text-dark text-uppercase">
                FX Options Puts You Firmly in the Driver’s Seat
              </h2>
              <p className="text-secondary fs-5">Forex Options and beyond</p>
            </Col>
          </Row>

          <Row className="g-4">
            {[
              {
                icon: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
                title: 'Create the Optimal Portfolio',
                desc: 'Choose from 40+ currency pairs and combine CALL & PUT options. Execute strategies like Straddles, Spreads, or Reversals with one click.',
              },
              {
                icon: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
                title: 'Get the Bigger Picture',
                desc: 'PizpoOptions gives you full control over your portfolio — balance risk and reward to match your market outlook.',
              },
              {
                icon: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
                title: 'Hedge or Generate Income',
                desc: 'BUY to hedge or SELL to earn income. Flexible expirations — from overnight to 1 year — at your preferred strike price.',
              },
              {
                icon: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
                title: 'Risk Management Tools',
                desc: 'Use professional tools and simulations to enhance decisions — all inside powerful desktop and mobile platforms.',
              },
              {
                icon: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
                title: 'Flexible Orders',
                desc: 'Control entry/exit with stop & limit orders triggered by premium levels. Trade strategies more efficiently.',
              },
              {
                icon: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
                title: 'For Money Managers',
                desc: 'Manage multiple accounts with one ticket. Streamline trading operations and improve efficiency.',
              },
            ].map((item, index) => (
              <Col md={4} key={index}>
                <div
                  className="p-4 bg-white shadow-sm rounded-3 h-100 d-flex flex-column align-items-center text-center"
                  style={{ minHeight: '360px' }}
                >
                  <div style={{ flex: '0 0 33%', marginBottom: '1rem' }}>
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="img-fluid"
                      style={{
                        maxHeight: '100px',
                        objectFit: 'contain',
                      }}
                    />
                  </div>
                  <h5 className="fw-semibold text-success">{item.title}</h5>
                  <p className="text-dark">{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
          <Row className="mt-5 justify-content-center text-center">
            <Col md="auto" className="mb-2 mb-md-0">
              <Button
                style={{
                  backgroundColor: '#014421',
                  borderColor: '#014421',
                  padding: '0.75rem 2rem',
                  fontWeight: '600',
                  fontSize: '1rem',
                }}
                size="lg"
              >
                Start Trading
              </Button>
            </Col>
            <Col md="auto">
              <Button
                style={{
                  backgroundColor: '#fcd34d',
                  borderColor: '#fcd34d',
                  color: '#000',
                  padding: '0.75rem 2rem',
                  fontWeight: '600',
                  fontSize: '1rem',
                }}
                size="lg"
              >
                Demo Account
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
      <div
        className="for-impact-section d-flex align-items-center justify-content-center position-relative"
        style={{
          backgroundImage: "url('/assets/for-more-impact.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '500px',
          color: '#fff',
          textAlign: 'center',
        }}
      >
        {/* Overlay */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
        />

        {/* Content */}
        <div className="position-relative z-1">
          <h1 className="display-3 fw-bold text-uppercase">For More Impact</h1>
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
            rel="noopener noreferrer"
            className="d-inline-block mt-4 text-decoration-none"
          >
            <div
              className="d-flex align-items-center justify-content-center rounded-circle"
              style={{
                width: '80px',
                height: '80px',
                backgroundColor: '#00c37a',
                color: '#fff',
                fontSize: '28px',
                margin: '0 auto',
                boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
                transition: 'transform 0.3s ease',
              }}
            >
              <FaPlay />
            </div>
          </a>
        </div>
      </div>
      <LiveFxOptionsSection />
      <div style={{ backgroundColor: '#e6ffe6', color: '#143d14', padding: '3rem 0' }}>
        <div className="text-center mb-5">
          <h2 style={{ color: '#1d5c1d' }}>Why Trade Options with Us</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card border-success shadow-sm h-100" style={{ backgroundColor: '#f3fff3' }}>
                <div className="card-body">
                  <h5 className="card-title" style={{ color: '#1d5c1d' }}>Free</h5>
                  <ul className="list-unstyled mt-3">
                    <li className="mb-2">✅ Interactive streaming pricing widget</li>
                    <li className="mb-2">✅ Option Education</li>
                    <li className="mb-2">✅ Practice demo account</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card border-success shadow-sm h-100" style={{ backgroundColor: '#f3fff3' }}>
                <div className="card-body">
                  <h5 className="card-title" style={{ color: '#1d5c1d' }}>Competitive</h5>
                  <ul className="list-unstyled mt-3">
                    <li className="mb-2">✅ Spot and option prices for any trader</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card border-success shadow-sm h-100" style={{ backgroundColor: '#f3fff3' }}>
                <div className="card-body">
                  <h5 className="card-title" style={{ color: '#1d5c1d' }}>Cash or Physical</h5>
                  <ul className="list-unstyled mt-3">
                    <li className="mb-2">✅ Settlement in margin account</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card border-success shadow-sm h-100" style={{ backgroundColor: '#f3fff3' }}>
                <div className="card-body">
                  <h5 className="card-title" style={{ color: '#1d5c1d' }}>Streaming Liquidity</h5>
                  <ul className="list-unstyled mt-3">
                    <li className="mb-2">✅ From the largest global banks</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PizpoOptionsSection;