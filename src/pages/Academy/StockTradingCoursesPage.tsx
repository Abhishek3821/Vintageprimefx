'use client';

import React from 'react';
import { Container, Row, Col, Button, Card, ListGroup, Nav, Tab, Accordion } from 'react-bootstrap';
import WhyChooseUs from '../../components/WhyChooseUs';
import RecentCoursesSlider from './RecentCoursesSlider';

const StockTradingCoursesPage: React.FC = () => {
  return (
    <div className="bg-dark text-light py-4">
      <Container>
        {/* Forex Course Header */}
        <Row className="mb-5 align-items-stretch">
          <Col md={8} className="d-flex">
            <div className="w-100 h-100 d-flex flex-column" style={{ padding: '3rem' }}>
              <div style={{ height: '200px', overflow: 'hidden', borderRadius: '0.5rem', marginBottom: '1.5rem' }}>
                <span className="badge px-3 py-2" style={{ backgroundColor: '#198754' }}>FEATURED</span>
                <img src="/assets/forex-cryptos-comm.jpg" alt="Forex Trading" className="w-100" style={{ height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="flex-grow-1 d-flex flex-column justify-content-center">
                <h1 className="fw-bold mt-3" style={{ fontSize: '2.25rem' }}>Master Forex Trading from Scratch</h1>
                <p className="text-light mt-3" style={{ fontSize: '1rem' }}>
                  Learn the foundations of Forex trading, how to interpret market signals, build trading strategies, and manage risk effectively. Ideal for beginners and aspiring pros.
                  <a href="#" className="text-warning text-decoration-underline ms-1">Show more</a>
                </p>
                <div className="d-flex gap-5 text-light small mt-4">
                  <div><strong className="text-white">Category</strong><br />Forex Trading Courses</div>
                  <div><strong className="text-white">Students enrolled</strong><br />65,210</div>
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
                  <ListGroup.Item>Duration: <strong>41 minutes</strong></ListGroup.Item>
                  <ListGroup.Item>Lectures: <strong>10</strong></ListGroup.Item>
                  <ListGroup.Item>Video: <strong>30 minutes</strong></ListGroup.Item>
                  <ListGroup.Item>Quizzes: <strong>5</strong></ListGroup.Item>
                  <ListGroup.Item>Level: <strong>Beginner</strong></ListGroup.Item>
                  <ListGroup.Item>Full lifetime access</ListGroup.Item>
                  <ListGroup.Item>Access on mobile and TV</ListGroup.Item>
                </ListGroup>
                <div className="text-center small py-2">30-Day Money-Back Guarantee</div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Course Details */}
        <Card className="text-dark mb-4">
          <Card.Body>
            <Tab.Container defaultActiveKey="description">
              <Nav variant="tabs" className="mb-3">
                <Nav.Item><Nav.Link eventKey="description">📘 Description</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey="curriculum">📚 Curriculum</Nav.Link></Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="description">
                  <p>This course introduces you to the global foreign exchange market. You’ll learn how to trade currency pairs, understand how macroeconomic factors move the markets, and how to utilize simple strategies to trade effectively.</p>
                  <h5>What You Will Learn</h5>
                  <ul>
                    <li><strong>Currency Pairs:</strong> Understanding majors, minors, and exotics.</li>
                    <li><strong>Market Hours:</strong> Discover the 24-hour trading cycle and overlaps.</li>
                    <li><strong>Chart Reading:</strong> Basics of technical indicators and patterns.</li>
                    <li><strong>Strategy Building:</strong> Simple, actionable trading strategies.</li>
                    <li><strong>Risk Management:</strong> Position sizing and stop-loss rules.</li>
                  </ul>
                  <h5>Level</h5>
                  <p>Beginner</p>
                  <h5>Recommended Pre-requisites</h5>
                  <ul>
                    <li>Introduction to Technical Analysis</li>
                    <li>Basics of Trading</li>
                    <li>Trading Safely: Risk Management</li>
                    <li>Create a demo or live AvaTrade account</li>
                  </ul>
                  <Button style={{ backgroundColor: '#00BFA6', borderColor: '#00BFA6' }} className="w-100 fw-bold">
                    OPEN YOUR FREE TRADING ACCOUNT!
                  </Button>
                </Tab.Pane>
                <Tab.Pane eventKey="curriculum">
                  <h5>Getting Started</h5>
                  <ol>
                    <li>Intro to Forex – Video (4 min)</li>
                    <li>How Currency Pairs Work – Article (3 min)</li>
                    <li>Market Structure Overview – Video (5 min)</li>
                  </ol>
                  <h5>Technical Basics</h5>
                  <ol start={4}>
                    <li>Reading Charts – Video (6 min)</li>
                    <li>Support & Resistance – Article (4 min)</li>
                    <li>Forex Quiz 1 (5 questions)</li>
                  </ol>
                  <h5>Simple Strategies</h5>
                  <ol start={7}>
                    <li>Momentum Trading – Video (6 min)</li>
                    <li>Breakout Strategy – Article (5 min)</li>
                    <li>Strategy Quiz (5 questions)</li>
                  </ol>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Card.Body>
        </Card>

        {/* Related Courses */}
        <h5 className="text-white mb-3">You may also like</h5>
        <Row className="g-3 mb-5">
          <Col md={4}><Card><Card.Img variant="top" src="/assets/trading-platform.jpg" /><Card.Body><span className="badge" style={{ backgroundColor: '#d9534f' }}>HOT</span><Card.Title>Trading Platforms Crash-Course</Card.Title><Card.Text>Free</Card.Text></Card.Body></Card></Col>
          <Col md={4}><Card><Card.Img variant="top" src="/assets/trading-safely.jpg" /><Card.Body><span className="badge" style={{ backgroundColor: '#198754' }}>SPECIAL</span><Card.Title>Risk Management in Trading</Card.Title><Card.Text>Free</Card.Text></Card.Body></Card></Col>
          <Col md={4}><Card><Card.Img variant="top" src="/assets/advanced_trading.jpg" /><Card.Body><span className="badge" style={{ backgroundColor: '#198754' }}>FEATURED</span><Card.Title>Advanced Trading Techniques</Card.Title><Card.Text>Free</Card.Text></Card.Body></Card></Col>
        </Row>

        {/* Stock Market Section */}
        <Card className="text-light border-0 rounded-4 p-4" style={{ backgroundColor: '#00BFA6' }}>
          <Card.Body>
            <h4 className="fw-bold">Stock Market Trading Courses</h4>
            <p className="mb-4">
              Embark on your journey in stock trading through our comprehensive courses. Start from the ground up, master the fundamentals, and progress to expert strategies.
            </p>
            <ul>
              <li>Learn technical and fundamental analysis</li>
              <li>Build personalized trading strategies</li>
              <li>Manage risk effectively in volatile markets</li>
              <li>Courses for Beginners to Advanced levels</li>
            </ul>
            <Button variant="light" className="fw-semibold mt-3" style={{ color: '#00BFA6' }}>
              Explore Stock Market Courses
            </Button>
          </Card.Body>
        </Card>

        {/* FAQ Accordion */}
        <h5 className="text-white mt-5 mb-3">Stock Market - FAQ</h5>
        <Accordion flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Where can I learn stock market trading?</Accordion.Header>
            <Accordion.Body>
              With AvaAcademy’s free online courses, you can learn stock trading anytime, anywhere — at your own pace and convenience.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Can I learn stock market trading on my own?</Accordion.Header>
            <Accordion.Body>
              Yes! AvaAcademy provides self-paced, expert-led video lessons and articles to help you develop skills on your own schedule.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>How long is a stock market course?</Accordion.Header>
            <Accordion.Body>
              Courses range from short 15-minute crash courses to comprehensive programs over 80 minutes — all self-paced and free.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>How much does a stock market course cost?</Accordion.Header>
            <Accordion.Body>
              All courses on AvaAcademy are completely free. Learn valuable trading strategies without spending a dime.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <WhyChooseUs />
        <RecentCoursesSlider />
      </Container>
    </div>
  );
};

export default StockTradingCoursesPage;
