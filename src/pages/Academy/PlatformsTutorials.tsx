import React from 'react';
import { Container, Row, Col, Button, Card, ListGroup, Nav, Tab } from 'react-bootstrap';
import WhyChooseUs from '../../components/WhyChooseUs';
import RecentCoursesSlider from './RecentCoursesSlider';

const PlatformsTutorials: React.FC = () => {
  return (
    <div className="bg-dark text-light py-4">
      <Container>

        <Row className="mb-5 align-items-stretch">
          <Col md={8} className="d-flex">
            <div className="w-100 h-100 d-flex flex-column" style={{ padding: "3rem" }}>
              <div style={{ height: "200px", overflow: "hidden", borderRadius: "0.5rem", marginBottom: "1.5rem" }}>
                <span className="badge px-3 py-2" style={{ backgroundColor: "#d9534f", fontSize: "0.85rem" }}>
                  HOT COURSE
                </span>
                <img src="/assets/back.jpg" alt="Course Illustration" className="w-100" style={{ height: "100%", objectFit: "cover" }} />
              </div>

              <div className="flex-grow-1 d-flex flex-column justify-content-center">
                <h1 className="fw-bold mt-3" style={{ fontSize: "2.25rem" }}>
                  Trading Platforms Crash-Course
                </h1>
                <p className="text-light mt-3" style={{ fontSize: "1rem" }}>
                  Step confidently into the world of trading as we guide you through essential platform tutorials. Our crash-courses are meticulously designed...<a href="#" className="text-warning text-decoration-underline ms-1">Show more</a>
                </p>
                <div className="d-flex gap-5 text-light small mt-4">
                  <div>
                    <strong className="text-white">Category</strong><br />
                    All Assets Trading Courses
                  </div>
                  <div>
                    <strong className="text-white">Students enrolled</strong><br />
                    154,811
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col md={4} className="d-flex">
            <Card className="text-dark w-100 shadow h-100">
              <Card.Img variant="top" src="/assets/back.jpg" />
              <Card.Body className="d-flex flex-column">
                <Button style={{ backgroundColor: '#00BFA6', borderColor: '#00BFA6' }} className="w-100 mb-2">
                  Login/Register
                </Button>
                <div className="d-flex justify-content-between small mb-3">
                  <a href="#">Add to wishlist</a>
                  <a href="#">Share</a>
                </div>
                <ListGroup variant="flush" className="flex-grow-1">
                  <ListGroup.Item>Duration: <strong>90 minutes</strong></ListGroup.Item>
                  <ListGroup.Item>Lectures: <strong>15</strong></ListGroup.Item>
                  <ListGroup.Item>Video: <strong>65 minutes</strong></ListGroup.Item>
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
                    Welcome to the comprehensive guide to starting your trading journey! In this series of video tutorials, we will walk you through different trading platforms, ensuring that you understand the ins and outs, making your trading experience seamless and effective.
                  </p>
                  <h5>What We Will Learn:</h5>
                  <ul>
                    <li><strong>AvaTrade WebTrader:</strong> Simple, modern, no download needed.</li>
                    <li><strong>AvaTrade App:</strong> Intuitive, stylish, award-winning mobile platform.</li>
                    <li><strong>MetaTrader (MT4/MT5):</strong> Popular platforms for all trading levels.</li>
                    <li><strong>AvaOptions:</strong> Control risk & reward using Vanilla Options.</li>
                    <li><strong>AvaProtect™:</strong> Protect your trades from losses.</li>
                    <li><strong>AvaSocial:</strong> Copy and automate trading with experts.</li>
                  </ul>
                  <h5>Level</h5>
                  <p>Beginner</p>
                  <h5>Pre-requisites</h5>
                  <ul>
                    <li>We recommend logging into your AvaTrade account for real-time practice.</li>
                    <li>Some lessons may appear in multiple courses.</li>
                  </ul>
                  <Button style={{ backgroundColor: '#00BFA6', borderColor: '#00BFA6' }} className="w-100 fw-bold">
                    OPEN YOUR FREE TRADING ACCOUNT!
                  </Button>
                </Tab.Pane>

                <Tab.Pane eventKey="curriculum">
                  <h5>Platform Overview</h5>
                  <ol>
                    <li>Intro to Trading Platforms – Video</li>
                    <li>Understanding UI – Article</li>
                    <li>Basic Functionality – Quiz</li>
                  </ol>

                  <h5>AvaTrade WebTrader</h5>
                  <ol start={4}>
                    <li>WebTrader Walkthrough – Video</li>
                    <li>Interface Deep Dive – Article</li>
                    <li>Practice Session – Quiz</li>
                  </ol>

                  <h5>MetaTrader (MT4/MT5)</h5>
                  <ol start={7}>
                    <li>MetaTrader Tour – Video</li>
                    <li>Using MT5 Features – Article</li>
                    <li>Platform Tools – Quiz</li>
                  </ol>

                  <h5>AvaOptions</h5>
                  <ol start={10}>
                    <li>Options Overview – Video</li>
                    <li>Risk Management Explained – Article</li>
                    <li>AvaOptions – Quiz</li>
                  </ol>

                  <h5>Mobile App & AvaProtect</h5>
                  <ol start={13}>
                    <li>AvaTrade App Demo – Video</li>
                    <li>AvaProtect Explained – Article</li>
                    <li>Trading Protection – Quiz</li>
                  </ol>

                  <h5>AvaSocial</h5>
                  <ol start={16}>
                    <li>Intro to Social Trading – Video</li>
                    <li>Copying Trades – Article</li>
                    <li>AvaSocial Quiz</li>
                  </ol>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Card.Body>
        </Card>

        <h5 className="text-white mb-3">Related courses</h5>
        <Row className="g-3 mb-5">
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/300x150?text=Forex,+Cryptos" />
              <Card.Body>
                <span className="badge" style={{ backgroundColor: '#198754' }}>NEW</span>
                <Card.Title>Forex, Cryptos & Commodities</Card.Title>
                <Card.Text>Free</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/300x150?text=Advanced+Trading" />
              <Card.Body>
                <span className="badge" style={{ backgroundColor: '#198754' }}>NEW</span>
                <Card.Title>Advanced Trading Techniques</Card.Title>
                <Card.Text>Free</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Card className="text-light border-0 rounded-4 p-4" style={{ backgroundColor: '#00BFA6' }}>
          <Card.Body>
            <h4 className="fw-bold">Unleash the Incredible Potential of Your Trading Knowledge</h4>
            <p className="mb-4">
              Open a <strong>free complimentary trading account</strong> on AvaTrade’s cutting-edge platform and practice trading in real time.
            </p>
            <h5 className="fw-semibold">What Will You Learn?</h5>
            <ul>
              <li>Explore all aspects of trading through expertly designed courses.</li>
              <li>Complete quizzes at the end of each level to reinforce your knowledge.</li>
              <li>Practice instantly in a simulated real-time trading environment.</li>
              <li>Master how, when, and what to trade with confidence.</li>
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

export default PlatformsTutorials;
