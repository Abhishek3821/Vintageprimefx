'use client';

import React from 'react';
import { Container, Row, Col, Button, Card, ListGroup, Nav, Tab } from 'react-bootstrap';
import WhyChooseUs from '../../components/WhyChooseUs';
import RecentCoursesSlider from './RecentCoursesSlider';

const FCCPage: React.FC = () => {
  return (
    <div className="bg-dark text-light py-4">
      <Container>
        <Row className="mb-5 align-items-stretch">
          <Col md={8} className="d-flex">
            <div className="w-100 h-100 d-flex flex-column" style={{ padding: '3rem' }}>
              <div style={{ height: '200px', overflow: 'hidden', borderRadius: '0.5rem', marginBottom: '1.5rem' }}>
                <span className="badge px-3 py-2" style={{ backgroundColor: '#198754' }}>NEW COURSE</span>
                <img src="/assets/forex-cryptos-comm.jpg" alt="Forex, Cryptos & Commodities" className="w-100" style={{ height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="flex-grow-1 d-flex flex-column justify-content-center">
                <h1 className="fw-bold mt-3" style={{ fontSize: '2.25rem' }}>Forex, Cryptos & Commodities</h1>
                <p className="text-light mt-3" style={{ fontSize: '1rem' }}>
                  Explore financial diversity through our Forex, Cryptos, and Commodities course. Gain an insightful perspective on the role of commodities in...
                  <a href="#" className="text-warning text-decoration-underline ms-1">Show more</a>
                </p>
                <div className="d-flex gap-5 text-light small mt-4">
                  <div><strong className="text-white">Category</strong><br />Forex Trading Courses</div>
                  <div><strong className="text-white">Students enrolled</strong><br />58,111</div>
                </div>
              </div>
            </div>
          </Col>
          <Col md={4} className="d-flex">
            <Card className="text-dark w-100 shadow h-100">
              <Card.Img variant="top" src="/assets/forex-cryptos-comm.jpg" />
              <Card.Body className="d-flex flex-column">
                <Button style={{ backgroundColor: '#00BFA6', borderColor: '#00BFA6' }} className="w-100 mb-2">Login/Register</Button>
                <div className="d-flex justify-content-between small mb-3">
                  <a href="#">Add to wishlist</a><a href="#">Share</a>
                </div>
                <ListGroup variant="flush" className="flex-grow-1">
                  <ListGroup.Item>Duration: <strong>60 minutes</strong></ListGroup.Item>
                  <ListGroup.Item>Lectures: <strong>20</strong></ListGroup.Item>
                  <ListGroup.Item>Video: <strong>35 minutes</strong></ListGroup.Item>
                  <ListGroup.Item>Quizzes: <strong>6</strong></ListGroup.Item>
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
                  <p>What makes gold a commodity? Why is beef a commodity, but milk – not? Discover the importance of commodities in the global marketplace. Unravel the mysteries of the dynamic Foreign Exchange market, and explore the riveting landscape of Cryptos.</p>
                  <h5>What We Will Learn</h5>
                  <ul>
                    <li><strong>Forex Fundamentals:</strong> Master the art of investing in economic events and navigating currency markets.</li>
                    <li><strong>Cryptocurrency Insights:</strong> Demystify crypto trading and its role in today’s economy.</li>
                    <li><strong>Commodity Craftsmanship:</strong> Invest in commodities without physical ownership.</li>
                  </ul>
                  <h5>Level</h5>
                  <p>Beginner</p>
                  <h5>Pre-requisites</h5>
                  <ul>
                    <li>Introduction to Financial Markets course</li>
                    <li>Log into your trading account at AvaTrade for practice</li>
                    <li>Some lessons may appear in multiple courses</li>
                  </ul>
                  <Button style={{ backgroundColor: '#00BFA6', borderColor: '#00BFA6' }} className="w-100 fw-bold">
                    OPEN YOUR FREE TRADING ACCOUNT!
                  </Button>
                </Tab.Pane>
                <Tab.Pane eventKey="curriculum">
                  <h5>Forex Fundamentals</h5>
                  <ol>
                    <li>Introduction to Forex – Video (3 min)</li>
                    <li>Forex For Traders – Article (3 min)</li>
                    <li>Forex – Quiz (5 questions)</li>
                  </ol>
                  <h5>Cryptocurrency Insights</h5>
                  <ol start={4}>
                    <li>Crypto Basics – Video (4 min)</li>
                    <li>Understanding Blockchain – Article (4 min)</li>
                    <li>Crypto Quiz – (5 questions)</li>
                  </ol>
                  <h5>Commodity Craftsmanship</h5>
                  <ol start={7}>
                    <li>Commodities Overview – Video (5 min)</li>
                    <li>Commodities in Markets – Article (5 min)</li>
                    <li>Commodity Quiz – (5 questions)</li>
                  </ol>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Card.Body>
        </Card>

        <h5 className="text-white mb-3">Related courses</h5>
        <Row className="g-3 mb-5">
          <Col md={4}><Card><Card.Img variant="top" src="/assets/advanced_trading.jpg" /><Card.Body><span className="badge" style={{ backgroundColor: '#198754' }}>NEW</span><Card.Title>Advanced Trading Techniques</Card.Title><Card.Text>Free</Card.Text></Card.Body></Card></Col>
          <Col md={4}><Card><Card.Img variant="top" src="/assets/start-trading.jpg" /><Card.Body><span className="badge" style={{ backgroundColor: '#198754' }}>NEW</span><Card.Title>Start Trading Now</Card.Title><Card.Text>Free</Card.Text></Card.Body></Card></Col>
          <Col md={4}><Card><Card.Img variant="top" src="/assets/trading-platform.jpg" /><Card.Body><span className="badge" style={{ backgroundColor: '#d9534f' }}>HOT</span><Card.Title>Trading Platforms Crash-Course</Card.Title><Card.Text>Free</Card.Text></Card.Body></Card></Col>
        </Row>

        <Card className="text-light border-0 rounded-4 p-4" style={{ backgroundColor: '#00BFA6' }}>
          <Card.Body>
            <h4 className="fw-bold">Trade Smart with Market Mastery</h4>
            <p className="mb-4">
              Open a <strong>free complimentary trading account</strong> and master the dynamic worlds of Forex, Cryptos, and Commodities.
            </p>
            <h5 className="fw-semibold">What Will You Learn?</h5>
            <ul>
              <li>Master Forex trading fundamentals.</li>
              <li>Explore how cryptocurrencies work and how to trade them.</li>
              <li>Understand commodities as assets and how to invest in them.</li>
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

export default FCCPage;
