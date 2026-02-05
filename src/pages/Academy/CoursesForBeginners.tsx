'use client';

import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  Badge,
  Button,
  Form,
  InputGroup
} from 'react-bootstrap';
import WhyChooseUs from '../../components/WhyChooseUs';
import RecentCoursesSlider from './RecentCoursesSlider';

const categories = [
  'All Assets Trading Courses',
  'Forex Trading Courses',
  'Stock Market Trading Courses',
  'Commodities Trading Courses',
  'Indices Trading Courses',
  'Cryptocurrency Trading Courses',
  'ETF Trading Courses',
  'Bonds Trading Courses'
];

const levels = ['Beginner', 'Intermediate', 'Advanced'];

const courses = [
  {
    title: 'Start Trading Now… Quick & Dirty',
    category: 'All Assets Trading Courses',
    duration: '80 minutes',
    badge: 'HOT',
    subBadge: 'FEATURED',
    image: '/assets/start-trading.jpg'
  },
  {
    title: 'Trading Platforms Crash-Course',
    category: 'All Assets Trading Courses',
    duration: '205 minutes',
    badge: 'HOT',
    image: '/assets/trading-platform.jpg'
  },
  {
    title: 'Forex, Cryptos & Commodities',
    category: 'Forex Trading Courses',
    duration: '41 minutes',
    badge: 'NEW',
    image: '/assets/forex-cryptos-comm.jpg'
  },
  {
    title: 'Introduction to Technical Analysis',
    category: 'All Assets Trading Courses',
    duration: '46 minutes',
    image: '/assets/technical-analysis.jpg'
  },
  {
    title: 'Trading Safely: Risk Management',
    category: 'All Assets Trading Courses',
    duration: '51 minutes',
    badge: 'SPECIAL',
    image: '/assets/risk-management.jpg'
  },
  {
    title: 'Basics of Trading: Principles for Success',
    category: 'All Assets Trading Courses',
    duration: '30 minutes',
    image: '/assets/basics-of-trading.jpg'
  },
  {
    title: 'Introduction to Financial Markets',
    category: 'All Assets Trading Courses',
    duration: '44 minutes',
    badge: 'FEATURED',
    image: '/assets/financial-markets.jpg'
  },
  {
    title: 'Terms of Trading: Market Terminology',
    category: 'All Assets Trading Courses',
    duration: '44 minutes',
    image: '/assets/terms-of-trading.jpg'
  },
  {
    title: 'Trading Cryptos: Digital Frontier',
    category: 'Cryptocurrency Trading Courses',
    duration: '51 minutes',
    image: '/assets/trading-crypto.jpg'
  }
];

const TradingCoursesPage: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState('Beginner');

  return (
    <div className="bg-dark text-light py-5">
      <Container>
        <h2 className="fw-bold mb-4">Trading Courses</h2>
        <p className="mb-4">
          Unlock your trading potential with AvaAcademy! Register for free and gain exclusive access to advanced courses on trading platforms, asset classes, online strategies, and more.
        </p>

        <Row>
          {/* Sidebar Filters */}
          <Col md={3}>
            <div className="mb-4">
              <h5 className="text-uppercase fw-bold">Category</h5>
              {categories.map((cat, index) => (
                <Form.Check
                  key={index}
                  type="checkbox"
                  id={`cat-${index}`}
                  label={cat}
                  className="text-light mb-2"
                />
              ))}
            </div>
            <div className="mb-4">
              <h5 className="text-uppercase fw-bold">Level</h5>
              {levels.map((lvl, index) => (
                <Form.Check
                  key={index}
                  type="radio"
                  name="level"
                  label={lvl}
                  className="text-light mb-2"
                  checked={selectedLevel === lvl}
                  onChange={() => setSelectedLevel(lvl)}
                />
              ))}
            </div>
            <Button variant="outline-light" size="sm">Reset all</Button>
          </Col>

          {/* Course Cards */}
          <Col md={9}>
            {/* Top Search + Sort */}
            <Row className="mb-4">
              <Col md={8}>
                <InputGroup>
                  <Form.Control placeholder="Search Courses" />
                  <Button variant="success">Search</Button>
                </InputGroup>
              </Col>
              <Col md={4}>
                <Form.Select>
                  <option>Sort By: Release date (newest first)</option>
                  <option>Duration</option>
                  <option>Popularity</option>
                </Form.Select>
              </Col>
            </Row>

            <Row className="g-4">
              {courses.map((course, index) => (
                <Col md={4} key={index}>
                  <Card className="h-100 shadow text-dark">
                    <Card.Img variant="top" src={course.image} />
                    <Card.Body>
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <small className="text-muted">{course.category}</small>
                        <div className="d-flex gap-2">
                          {course.subBadge && (
                            <Badge bg="success">{course.subBadge}</Badge>
                          )}
                          {course.badge && (
                            <Badge bg="danger">{course.badge}</Badge>
                          )}
                        </div>
                      </div>
                      <Card.Title style={{ fontSize: '1rem' }}>{course.title}</Card.Title>
                      <div className="d-flex justify-content-between mt-3">
                        <span className="text-muted small">⏱ {course.duration}</span>
                        <span className="text-success fw-semibold">Free</span>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        <Card className="bg-success text-white mt-5 border-0">
          <Card.Body>
            <h4 className="fw-bold">Start Your Learning Journey with AvaAcademy</h4>
            <p className="mb-3">Your path to becoming a confident, skilled trader begins here. Sign up now and access all courses for free.</p>
            <Button variant="light" className="text-success fw-bold">Register Now</Button>
          </Card.Body>
        </Card>

        <WhyChooseUs />
        <RecentCoursesSlider />
      </Container>
    </div>
  );
};

export default TradingCoursesPage;
