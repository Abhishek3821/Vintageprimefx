'use client';

import React from 'react';
import { Container, Row, Col, Button, Card, ListGroup, Nav, Tab } from 'react-bootstrap';
import WhyChooseUs from '../../components/WhyChooseUs';
import RecentCoursesSlider from './RecentCoursesSlider';

const PlatformPage: React.FC = () => {
  return (
    <div className="bg-dark text-light py-4">
      <Container>
        <Row className="mb-5 align-items-stretch">
          <Col md={8} className="d-flex">
            <div className="w-100 h-100 d-flex flex-column" style={{ padding: '3rem' }}>
              <div style={{ height: '200px', overflow: 'hidden', borderRadius: '0.5rem', marginBottom: '1.5rem' }}>
                <span className="badge px-3 py-2" style={{ backgroundColor: '#d9534f' }}>HOT COURSE</span>
                <img src="/assets/trading-platform.jpg" alt="Platform Illustration" className="w-100" style={{ height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="flex-grow-1 d-flex flex-column justify-content-center">
                <h1 className="fw-bold mt-3" style={{ fontSize: '2.25rem' }}>Trading Platforms Crash-Course</h1>
                <p className="text-light mt-3" style={{ fontSize: '1rem' }}>
                  Step confidently into the world of trading as we guide you through essential platform tutorials...
                  <a href="#" className="text-warning text-decoration-underline ms-1">Show more</a>
                </p>
                <div className="d-flex gap-5 text-light small mt-4">
                  <div><strong className="text-white">Category</strong><br />All Assets Trading Courses</div>
                  <div><strong className="text-white">Students enrolled</strong><br />154,461</div>
                </div>
              </div>
            </div>
          </Col>
          <Col md={4} className="d-flex">
            <Card className="text-dark w-100 shadow h-100">
              <Card.Img variant="top" src="/assets/trading-platform.jpg" />
              <Card.Body className="d-flex flex-column">
                <Button style={{ backgroundColor: '#00BFA6', borderColor: '#00BFA6' }} className="w-100 mb-2">Login/Register</Button>
                <div className="d-flex justify-content-between small mb-3">
                  <a href="#">Add to wishlist</a><a href="#">Share</a>
                </div>
                <ListGroup variant="flush" className="flex-grow-1">
                  <ListGroup.Item>Duration: <strong>90 minutes</strong></ListGroup.Item>
                  <ListGroup.Item>Lectures: <strong>25</strong></ListGroup.Item>
                  <ListGroup.Item>Video: <strong>60 minutes</strong></ListGroup.Item>
                  <ListGroup.Item>Quizzes: <strong>10</strong></ListGroup.Item>
                  <ListGroup.Item>Level: <strong>Beginner</strong></ListGroup.Item>
                  <ListGroup.Item>Full lifetime access</ListGroup.Item>
                  <ListGroup.Item>Access on mobile and TV</ListGroup.Item>
                </ListGroup>
                <div className="text-center small py-2">30-Day Money-Back Guarantee</div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Card className="text-dark mb-4">
          <Card.Body>
            <Tab.Container defaultActiveKey="description">
              <Nav variant="tabs" className="mb-3">
                <Nav.Item><Nav.Link eventKey="description">📘 Description</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey="curriculum">📚 Curriculum</Nav.Link></Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="description">
                  <p>Welcome to the comprehensive guide to starting your trading journey with AvaTrade platforms.</p>
                  <h5>What We Will Learn:</h5>
                  <ul>
                    <li><strong>WebTrader:</strong> Learn to use the AvaTrade WebTrader interface efficiently.</li>
                    <li><strong>AvaTrade App:</strong> Explore mobile trading via the intuitive AvaTrade app.</li>
                    <li><strong>MetaTrader (MT4/MT5):</strong> Dive deep into the most popular trading software.</li>
                    <li><strong>AvaOptions:</strong> Master Vanilla Options trading and portfolio control.</li>
                    <li><strong>AvaSocial:</strong> Social trading and following pro traders in real-time.</li>
                  </ul>
                  <h5>Level</h5>
                  <p>Beginner</p>
                  <h5>Pre-requisites</h5>
                  <ul>
                    <li>Terms of Trading course</li>
                    <li>Log into AvaTrade for hands-on practice</li>
                  </ul>
                  <Button style={{ backgroundColor: '#00BFA6', borderColor: '#00BFA6' }} className="w-100 fw-bold">
                    OPEN YOUR FREE TRADING ACCOUNT!
                  </Button>
                </Tab.Pane>
                <Tab.Pane eventKey="curriculum">
                  <h5>AvaTrade WebTrader Tutorials</h5>
                  <ol>
                    <li>Layout Overview – Video (6 min)</li>
                    <li>My Account Navigation – Video (4 min)</li>
                    <li>Start Trading – Video (5 min)</li>
                  </ol>
                  <h5>AvaTrade App Tutorials</h5>
                  <ol start={4}>
                    <li>App Tour – Video (2 min)</li>
                    <li>Trading Central – Video (6 min)</li>
                  </ol>
                  <h5>MetaTrader MT4/MT5</h5>
                  <ol start={6}>
                    <li>Platform Setup – Demo (2 min)</li>
                    <li>Using MetaTrader – Demo (4 min)</li>
                  </ol>
                  <h5>AvaOptions Platform</h5>
                  <ol start={8}>
                    <li>Why Trade Options – Video (20 min)</li>
                    <li>Risk Management – Video (10 min)</li>
                  </ol>
                  <h5>AvaSocial Platform</h5>
                  <ol start={10}>
                    <li>Using AvaSocial – Video (4 min)</li>
                  </ol>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Card.Body>
        </Card>

        <h5 className="text-white mb-3">Related courses</h5>
        <Row className="g-3 mb-5">
          <Col md={4}><Card><Card.Img variant="top" src="/assets/forex-cryptos-comm.jpg" /><Card.Body><span className="badge" style={{ backgroundColor: '#d9534f' }}>HOT</span><Card.Title>Forex, Cryptos & Commodities</Card.Title><Card.Text>Free</Card.Text></Card.Body></Card></Col>
          <Col md={4}><Card><Card.Img variant="top" src="/assets/advanced_trading.jpg" /><Card.Body><span className="badge" style={{ backgroundColor: '#198754' }}>NEW</span><Card.Title>Advanced Trading Techniques</Card.Title><Card.Text>Free</Card.Text></Card.Body></Card></Col>
          <Col md={4}><Card><Card.Img variant="top" src="/assets/start-trading.jpg" /><Card.Body><span className="badge" style={{ backgroundColor: '#198754' }}>NEW</span><Card.Title>Start Trading Now</Card.Title><Card.Text>Free</Card.Text></Card.Body></Card></Col>
        </Row>

        <Card className="text-light border-0 rounded-4 p-4" style={{ backgroundColor: '#00BFA6' }}>
          <Card.Body>
            <h4 className="fw-bold">Master the Platforms, Trade with Confidence</h4>
            <p className="mb-4">
              Join our exclusive crash-courses and open a <strong>free complimentary trading account</strong> to begin your journey.
            </p>
            <h5 className="fw-semibold">What Will You Learn?</h5>
            <ul>
              <li>Comprehensive tutorials on all major trading platforms.</li>
              <li>Real-time demos and guided walkthroughs.</li>
              <li>Build confidence with hands-on exercises and quizzes.</li>
              <li>Start trading smarter with practical insights.</li>
            </ul>
            <Button variant="light" className="fw-semibold mt-3" style={{ color: '#00BFA6' }}>
              Open Your Free Trading Account Now
            </Button>
          </Card.Body>
        </Card>

        <WhyChooseUs />
        <RecentCoursesSlider />
      </Container>
    </div>
  );
};

export default PlatformPage;
