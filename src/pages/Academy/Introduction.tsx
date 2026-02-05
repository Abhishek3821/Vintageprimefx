'use client';

import React from 'react';
import { Container, Row, Col, Button, Card, ListGroup, Nav, Tab } from 'react-bootstrap';
import WhyChooseUs from '../../components/WhyChooseUs';
import RecentCoursesSlider from './RecentCoursesSlider';

const IntroductionPage: React.FC = () => {
  return (
    <div className="bg-dark text-light py-4">
      <Container>
        <Row className="mb-5 align-items-stretch">
          <Col md={8} className="d-flex">
            <div className="w-100 h-100 d-flex flex-column" style={{ padding: '3rem' }}>
              <div style={{ height: '200px', overflow: 'hidden', borderRadius: '0.5rem', marginBottom: '1.5rem' }}>
                <span className="badge px-3 py-2" style={{ backgroundColor: '#198754' }}>NEW COURSE</span>
                <img src="/assets/technical-analysis.jpg" alt="Technical Analysis" className="w-100" style={{ height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="flex-grow-1 d-flex flex-column justify-content-center">
                <h1 className="fw-bold mt-3" style={{ fontSize: '2.25rem' }}>Introduction to Technical Analysis</h1>
                <p className="text-light mt-3" style={{ fontSize: '1rem' }}>
                  Gain the expertise to decode the intricate language of charts and harness their power. In this course, we'll demystify the...
                  <a href="#" className="text-warning text-decoration-underline ms-1">Show more</a>
                </p>
                <div className="d-flex gap-5 text-light small mt-4">
                  <div><strong className="text-white">Category</strong><br />All Assets Trading Courses</div>
                  <div><strong className="text-white">Students enrolled</strong><br />57,843</div>
                </div>
              </div>
            </div>
          </Col>
          <Col md={4} className="d-flex">
            <Card className="text-dark w-100 shadow h-100">
              <Card.Img variant="top" src="/assets/technical-analysis.jpg" />
              <Card.Body className="d-flex flex-column">
                <Button style={{ backgroundColor: '#00BFA6', borderColor: '#00BFA6' }} className="w-100 mb-2">Login/Register</Button>
                <div className="d-flex justify-content-between small mb-3">
                  <a href="#">Add to wishlist</a><a href="#">Share</a>
                </div>
                <ListGroup variant="flush" className="flex-grow-1">
                  <ListGroup.Item>Duration: <strong>75 minutes</strong></ListGroup.Item>
                  <ListGroup.Item>Lectures: <strong>18</strong></ListGroup.Item>
                  <ListGroup.Item>Video: <strong>60 minutes</strong></ListGroup.Item>
                  <ListGroup.Item>Quizzes: <strong>7</strong></ListGroup.Item>
                  <ListGroup.Item>Level: <strong>Intermediate</strong></ListGroup.Item>
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
                  <p>
                    The market reflects all the information that comes before it. Can we really ignore the fundamentals and leave it up to the charts? In this course, we will learn to read the charts and discover why this actually works. We will learn about the indicators developed by mathematicians and statisticians to derive actionable results from charts.
                  </p>
                  <h5>What We Will Learn</h5>
                  <ul>
                    <li><strong>Charting Evolution:</strong> Navigate the array of chart types available across trading platforms.</li>
                    <li><strong>Candlestick Insights:</strong> Unveil the layers of information within candlestick charts.</li>
                    <li><strong>Trend Mastery:</strong> Learn to recognize, track, and capitalize on market trends.</li>
                    <li><strong>Critical Components:</strong> Understand support/resistance, volume, momentum, and market commitments.</li>
                  </ul>
                  <h5>Level</h5>
                  <p>Intermediate</p>
                  <h5>Pre-requisites</h5>
                  <ul>
                    <li>Financial assets 1 – Forex, Cryptos & Commodities course</li>
                    <li>Financial assets 2 – Shares, Bonds, Indices & ETFs course</li>
                    <li>Terms of Trading course</li>
                    <li>Basics of Trading course</li>
                    <li>Advanced Trading course</li>
                    <li>Log into your trading account at AvaTrade for practice</li>
                    <li>Some lessons may appear in multiple courses</li>
                  </ul>
                  <Button style={{ backgroundColor: '#00BFA6', borderColor: '#00BFA6' }} className="w-100 fw-bold">
                    OPEN YOUR FREE TRADING ACCOUNT!
                  </Button>
                </Tab.Pane>
                <Tab.Pane eventKey="curriculum">
                  <h5>Chart Types</h5>
                  <ol>
                    <li>Line Charts – Video (5 min)</li>
                    <li>Bar Charts – Video (5 min)</li>
                    <li>Candlestick Charts – Video (6 min)</li>
                  </ol>
                  <h5>Understanding Trends</h5>
                  <ol start={4}>
                    <li>Trend Lines – Video (6 min)</li>
                    <li>Support & Resistance – Article (4 min)</li>
                    <li>Trend Quiz (5 questions)</li>
                  </ol>
                  <h5>Indicators and Oscillators</h5>
                  <ol start={7}>
                    <li>Moving Averages – Video (5 min)</li>
                    <li>RSI – Video (5 min)</li>
                    <li>MACD – Article (5 min)</li>
                    <li>Indicators Quiz (5 questions)</li>
                  </ol>
                  <h5>Applying Technical Analysis</h5>
                  <ol start={11}>
                    <li>Chart Analysis – Demo (7 min)</li>
                    <li>Backtesting Strategies – Article (5 min)</li>
                    <li>Final Quiz (5 questions)</li>
                  </ol>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Card.Body>
        </Card>

        <h5 className="text-white mb-3">Related courses</h5>
        <Row className="g-3 mb-5">
          <Col md={4}><Card><Card.Img variant="top" src="/assets/forex-cryptos-comm.jpg" /><Card.Body><span className="badge" style={{ backgroundColor: '#198754' }}>NEW</span><Card.Title>Forex, Cryptos & Commodities</Card.Title><Card.Text>Free</Card.Text></Card.Body></Card></Col>
          <Col md={4}><Card><Card.Img variant="top" src="/assets/advanced_trading.jpg" /><Card.Body><span className="badge" style={{ backgroundColor: '#198754' }}>NEW</span><Card.Title>Advanced Trading Techniques</Card.Title><Card.Text>Free</Card.Text></Card.Body></Card></Col>
          <Col md={4}><Card><Card.Img variant="top" src="/assets/trading-platform.jpg" /><Card.Body><span className="badge" style={{ backgroundColor: '#d9534f' }}>HOT</span><Card.Title>Trading Platforms Crash-Course</Card.Title><Card.Text>Free</Card.Text></Card.Body></Card></Col>
        </Row>

        <Card className="text-light border-0 rounded-4 p-4" style={{ backgroundColor: '#00BFA6' }}>
          <Card.Body>
            <h4 className="fw-bold">Decode Market Signals with Confidence</h4>
            <p className="mb-4">
              Open a <strong>free complimentary trading account</strong> and master the skill of technical analysis for smarter trades.
            </p>
            <h5 className="fw-semibold">What Will You Learn?</h5>
            <ul>
              <li>Understand and apply key chart types and technical indicators.</li>
              <li>Identify and act on market trends using proven tools.</li>
              <li>Strategically trade with support/resistance and momentum analysis.</li>
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

export default IntroductionPage;