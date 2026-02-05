import React from 'react';
import { Container, Row, Col, Button, Card, ListGroup, Nav, Tab } from 'react-bootstrap';
import WhyChooseUs from '../../components/WhyChooseUs';
import RecentCoursesSlider from './RecentCoursesSlider';

const CoursePage: React.FC = () => {
  return (
    <div className="bg-dark text-light py-4">
      <Container>

      <Row className="mb-5 align-items-stretch">
      <Col md={8} className="d-flex">
  <div
    className="w-100 h-100 d-flex flex-column"
    style={{ backgroundColor: "transparent", color: "#fff", padding: "3rem" }}
  >

    <div style={{ height: "200px", width: "100%", overflow: "hidden", borderRadius: "0.5rem", marginBottom: "1.5rem" }}>
    <span
            className="badge px-3 py-2"
            style={{ backgroundColor: "#d9534f", fontSize: "0.85rem" }}
          >
            HOT COURSE
          </span>
      <img
        src="/assets/back.jpg"
        alt="Course Illustration"
        className="w-100"
        style={{
          height: "100%",
          objectFit: "cover", 
        }}
      />
    </div>


    <div className="flex-grow-1 d-flex flex-column justify-content-center">
    
      <h1 className="fw-bold mt-3" style={{ fontSize: "2.25rem" }}>
        Start Trading Now… Quick & Dirty
      </h1>
      <p className="text-light mt-3" style={{ fontSize: "1rem" }}>
        Ready to dive into the trading world? If you are eager to embark on a trading journey,
        our "Start Trading..."<a href="#" className="text-warning text-decoration-underline ms-1">Show more</a>
      </p>
      <div className="d-flex gap-5 text-light small mt-4">
        <div>
          <strong className="text-white">Category</strong><br />
          All Assets Trading Courses
        </div>
        <div>
          <strong className="text-white">Students enrolled</strong><br />
          629,700
        </div>
      </div>
    </div>
  </div>
</Col>


  <Col md={4} className="d-flex">
    <Card className="text-dark w-100 shadow h-100">
      <Card.Img variant="top" src="/assets/back.jpg" />
      <Card.Body className="d-flex flex-column">
        <Button
          style={{ backgroundColor: '#00BFA6', borderColor: '#00BFA6' }}
          className="w-100 mb-2"
        >
          Login/Register
        </Button>
        <div className="d-flex justify-content-between small mb-3">
          <a href="#">Add to wishlist</a>
          <a href="#">Share</a>
        </div>
        <ListGroup variant="flush" className="flex-grow-1">
          <ListGroup.Item>Duration: <strong>80 minutes</strong></ListGroup.Item>
          <ListGroup.Item>Lectures: <strong>23</strong></ListGroup.Item>
          <ListGroup.Item>Video: <strong>43 minutes</strong></ListGroup.Item>
          <ListGroup.Item>Quizzes: <strong>9</strong></ListGroup.Item>
          <ListGroup.Item>Level: <strong>Beginner</strong></ListGroup.Item>
          <ListGroup.Item>Full lifetime access</ListGroup.Item>
          <ListGroup.Item>Access on mobile and TV</ListGroup.Item>
        </ListGroup>
        <div className="text-center small py-2">30-Day Money-Back Guarantee</div>
      </Card.Body>
    </Card>
  </Col>
</Row>


...

<Card className="text-dark mb-4">
  <Card.Body>
    <Tab.Container defaultActiveKey="description">
      <Nav variant="tabs" className="mb-3">
        <Nav.Item>
          <Nav.Link eventKey="description">📘 Description</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="curriculum">📚 Curriculum</Nav.Link>
        </Nav.Item>
      </Nav>

      <Tab.Content>
        <Tab.Pane eventKey="description">
          <p>
            For those of us who have a basic understanding of finance but have never traded, it may be sufficient
            to learn the fundamentals of financial markets...
          </p>

          <h5>What We Will Learn:</h5>
          <ul>
            <li><strong>Fundamental Ties:</strong> Link your financial understanding to trading essentials.</li>
            <li><strong>Forex Unveiled:</strong> Demystify foreign exchange markets with simple techniques.</li>
            <li><strong>Smart Instrument Use:</strong> Learn Contracts for Difference (CFDs).</li>
            <li><strong>Market Mastery:</strong> Dive into market orders for smart decisions.</li>
            <li><strong>Analytical Insights:</strong> Extract valuable insights from financial data.</li>
          </ul>

          <h5>Level</h5>
          <p>Beginner</p>

          <h5>Pre-requisites</h5>
          <ul>
            <li>We recommend you <a href="#" style={{ color: '#00BFA6' }}>log into your trading account</a> for practice.</li>
            <li>Some lessons may appear in multiple courses.</li>
          </ul>

          <Button style={{ backgroundColor: '#00BFA6', borderColor: '#00BFA6' }} className="w-100 fw-bold">
            OPEN YOUR FREE TRADING ACCOUNT!
          </Button>
        </Tab.Pane>

        <Tab.Pane eventKey="curriculum">
          <h5>What are financial markets?</h5>
          <ol>
            <li>An Introduction to Financial Markets – Video (3 min)</li>
            <li>An Introduction to Financial Markets – Article (3 min)</li>
            <li>An Introduction to Financial Markets – Quiz (5 questions)</li>
          </ol>

          <h5>What Are Financial Derivatives?</h5>
          <ol start={4}>
            <li>Financial Derivatives – Video (5 min)</li>
            <li>The Art of the Derivative – Article (5 min)</li>
            <li>Financial Derivatives – Quiz (5 questions)</li>
          </ol>

          <h5>What Is Forex?</h5>
          <ol start={7}>
            <li>Introduction to Forex – Video (3 min)</li>
            <li>Forex For Traders – Article (3 min)</li>
            <li>Forex – Quiz (5 questions)</li>
          </ol>

          <h5>What Are Forex Pairs?</h5>
          <ol start={10}>
            <li>Forex Pairs – Video (3 min)</li>
            <li>They Come in Two’s – Article (3 min)</li>
            <li>Forex Pairs – Quiz (5 questions)</li>
          </ol>

          <h5>What is a CFD?</h5>
          <ol start={13}>
            <li>CFDs – Video (3 min)</li>
            <li>Contracting the Difference with CFDs – Article (2 min)</li>
            <li>CFDs – Quiz (4 questions)</li>
          </ol>

          <h5>Putting It All Together</h5>
          <ol start={16}>
            <li>Putting it Together – Video (3 min)</li>
            <li>Putting it All Together – Article (3 min)</li>
            <li>Putting it All Together – Quiz (4 questions)</li>
          </ol>

          <h5>How to Trade</h5>
          <ol start={19}>
            <li>How to Trade – Video (4 min)</li>
            <li>How to Trade … in a nutshell! – Article (3 min)</li>
            <li>How to Trade – Quiz (4 questions)</li>
            <li>How to use Trading Signals – Demo (3 min)</li>
            <li>How to Download MetaTrader Platform – Demo (2 min)</li>
            <li>Introduction to MetaTrader - Demo (3 min)</li>
            <li>Using MetaTrader - Demo (4 min)</li>
          </ol>

          <h5>What Are Market Orders?</h5>
          <ol start={26}>
            <li>Market Orders – Video (6 min)</li>
            <li>Ordering Positions – Article (5 min)</li>
            <li>Market Orders – Quiz (4 questions)</li>
          </ol>

          <h5>How Can I Analyze Financial Markets?</h5>
          <ol start={29}>
            <li>Financial Analysis – Video (4 min)</li>
            <li>Analyze This! – Article (4 min)</li>
            <li>Market Analysis – Quiz (3 questions)</li>
          </ol>

          <h5>Starting Your Trading Experience</h5>
          <ol start={32}>
            <li>Set up your Trading Account – Video (6 min)</li>
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
              <Card.Img variant="top" src="https://via.placeholder.com/300x150?text=Trading+Platforms" />
              <Card.Body>
                <span className="badge" style={{ backgroundColor: '#d9534f' }}>HOT</span>
                <Card.Title>Trading Platforms Crash-Course</Card.Title>
                <Card.Text>Free</Card.Text>
              </Card.Body>
            </Card>
          </Col>
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

    <Button
      variant="light"
      className="fw-semibold mt-3"
      style={{ color: '#00BFA6' }}
    >
      Open Your Free Trading Account Now
    </Button>
  </Card.Body>
</Card>
<WhyChooseUs />
<RecentCoursesSlider/>
      </Container>
    </div>
  );
};

export default CoursePage;
