import React from 'react';
import { Container, Row, Col, Button, Accordion } from 'react-bootstrap';
import { FaBalanceScale, FaBell, FaChartLine, FaCheckCircle, FaExclamationTriangle, FaEye, FaQuestionCircle, FaShieldAlt, FaTrophy, FaUserCog, FaUserShield } from 'react-icons/fa';

const Bitcoin: React.FC = () => {
  return (
    <>
    <div style={{ backgroundColor: '#014421' }} className="text-white py-5">
    <Container className="text-center">
      <Row className="justify-content-center">
        <Col lg={10}>
          <h2 className="fw-bold mb-3">Guardian Angel</h2>
          <h5 className="text-warning mb-3">Make Smarter Trades with Real-Time Insights</h5>
          <p className="mb-4 fs-5">
            AvaTrade’s free Guardian Angel trading support system acts as a smart decision enhancer for MetaTrader 4 and 5.
            It gives instant feedback on your trades to help you refine your strategy, improve your trading skills,
            and focus on the most important data to grow your success.
          </p>
          <Button variant="light" size="lg" className="fw-semibold text-dark">
            Activate Guardian Angel
          </Button>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          <img
           src="https://via.placeholder.com/1200x400"
            alt="Guardian Angel System"
            className="img-fluid w-100"
            style={{ height: 'auto' }}
          />
        </Col>
      </Row>
    </Container>


  </div>

  <div style={{ backgroundColor: '#e6f4ea' }} className="py-5 text-dark">
      <Container>
        <Row className="align-items-center">
          {/* Text Left */}
          <Col md={6}>
            <h2 className="fw-bold mb-4" style={{ color: '#145214' }}>
              Guardian Angel Benefits
            </h2>
            <p className="fs-5 mb-4">
              This personalised trading and money management tool is designed to:
            </p>
            <ul className="fs-5 list-unstyled">
              <li className="mb-3"><FaCheckCircle className="text-success me-2" />Help you stay focused on your strategy</li>
              <li className="mb-3"><FaCheckCircle className="text-success me-2" />Help you identify your mistakes</li>
              <li className="mb-3"><FaCheckCircle className="text-success me-2" />Promote trading confidence</li>
              <li className="mb-3"><FaCheckCircle className="text-success me-2" />Strengthen your connection to the markets</li>
              <li className="mb-3"><FaCheckCircle className="text-success me-2" />Increase your trading knowledge</li>
            </ul>
          </Col>

          {/* Image Right */}
          <Col md={6} className="text-center mt-4 mt-md-0">
            <img
              src="/assets/guardian-benefits.png" // 🔁 Replace with your actual image path
              alt="Guardian Angel Features"
              className="img-fluid"
              style={{
                maxHeight: '400px',
                borderRadius: '12px',
                boxShadow: '0 0 10px rgba(0,0,0,0.1)',
              }}
            />
          </Col>
        </Row>
      </Container>
    </div>
    <div style={{ backgroundColor: '#f5fff9' }} className="text-dark py-5">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            
            <p className="fs-5 mb-4 text-center">
              The Guardian Angel tool is useful for new traders and experienced ones alike,
              providing an external and objective review on their trades. This feedback contributes
              not only to current trades but helps shape better trading habits for the future—
              because learning from mistakes is an integral part of trading.
            </p>
            <p className="fs-5 text-center">
              We view trading as a continuous process. As beginners take their first steps,
              they should constantly enhance their trading abilities. Even for seasoned traders,
              there's always room to grow. At AvaTrade, we recognize that potential and are committed
              to equipping our clients with the best tools in the market. Guardian Angel is one of those tools,
              which is why we provide it at the highest level possible.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
    <div style={{ backgroundColor: '#e6f4ea' }} className="text-dark py-5">
      <Container>
        <Row className="align-items-center">
          {/* Text Left */}
          <Col md={6}>
            <h2 className="fw-bold mb-4" style={{ color: '#145214' }}>
              Stay Informed with Guardian Angel Alerts
            </h2>
            <p className="fs-5 mb-4">
              When you download the Guardian Angel add-on, you’ll receive messages and alerts
              highlighting key areas of your trading behaviour. These help you improve discipline,
              manage risk, and stay sharp in volatile conditions.
            </p>
            <ul className="list-unstyled fs-5">
              <li className="mb-3"><FaExclamationTriangle className="text-success me-2" /> Excessive risk alerts</li>
              <li className="mb-3"><FaShieldAlt className="text-success me-2" /> Stop loss suggestions</li>
              <li className="mb-3"><FaTrophy className="text-success me-2" /> Performance insights (strong/weak trades)</li>
              <li className="mb-3"><FaBell className="text-success me-2" /> Margin call warnings</li>
              <li className="mb-3"><FaChartLine className="text-success me-2" /> Market updates relevant to your profile</li>
              <li className="mb-3"><FaBalanceScale className="text-success me-2" /> Volatility tracking alerts</li>
            </ul>
          </Col>

          {/* Image Right */}
          <Col md={6} className="text-center mt-4 mt-md-0">
            <img
              src="../assets/guardian-angel-alerts.png"
              alt="Guardian Angel Alerts"
              className="img-fluid"
              style={{
                maxHeight: '400px',
                borderRadius: '12px',
                boxShadow: '0 0 10px rgba(0,0,0,0.1)',
              }}
            />
          </Col>
        </Row>
      </Container>
    </div>
    <div style={{ backgroundColor: '#e6f4ea' }} className="text-dark py-5">
      <Container>
        <Row className="align-items-center">
          {/* Text Left */}
          <Col md={6}>
            <h2 className="fw-bold mb-4" style={{ color: '#145214' }}>
              Your Personal Trading Guardian
            </h2>
            <p className="fs-5 mb-4">
              <FaUserCog className="text-success me-2" />
              Guardian Angel is tailored to you. Every trader configures their own settings, preferences, and priorities.
              That means the alerts and insights you receive are uniquely suited to your trading style and goals.
            </p>
            <p className="fs-5 mb-4">
              <FaEye className="text-success me-2" />
              Acting as a second pair of eyes, Guardian Angel provides objective, real-time feedback during your trades—
              helping you stay on track without overwhelming you.
            </p>
            <p className="fs-5">
              <FaUserShield className="text-success me-2" />
              While you shouldn't rely on it entirely, it’s the perfect companion to guide and strengthen your decision-making.
            </p>
          </Col>

          {/* Image Right */}
          <Col md={6} className="text-center mt-4 mt-md-0">
            <img
              src="/assets/guardian-angel-custom.png"
              alt="Custom Guardian Angel"
              className="img-fluid"
              style={{
                maxHeight: '400px',
                borderRadius: '12px',
                boxShadow: '0 0 10px rgba(0,0,0,0.1)',
              }}
            />
          </Col>
        </Row>
      </Container>
    </div>
    <div style={{ backgroundColor: '#f5fff9' }} className="text-dark py-5">
  <Container>
    <Row className="justify-content-center">
      <Col lg={10}>
       
        <p className="fs-5 mb-4 text-center">
          The Guardian Angel tool is invaluable for both new and experienced traders,
          offering external and objective insights into their trades. This kind of
          feedback not only improves current decision-making but also builds better
          trading habits for the future—because learning from mistakes is vital to growth.
        </p>
        <p className="fs-5 text-center">
          At AvaTrade, we view trading as an evolving process. Beginners should
          constantly refine their skills, and even experienced traders always have room to improve.
          Recognizing this potential, we offer Guardian Angel as a powerful companion on every trader’s journey—
          delivering intelligent support at the highest level possible.
        </p>
      </Col>
    </Row>
  </Container>
</div>
<div style={{ backgroundColor: '#e6f4ea' }} className="text-dark py-5">
  <Container>
    <Row className="align-items-center">
      {/* Left: Text Content */}
      <Col md={6}>
        <h2 className="fw-bold mb-4" style={{ color: '#145214' }}>
          Guardian Angel Alert Highlights
        </h2>
        <p className="fs-5 mb-4">
          When you download the Guardian Angel add-on, you’ll receive real-time feedback
          designed to strengthen your trading approach. The alerts are customized and help you
          stay informed about key risks and opportunities.
        </p>
        <ul className="list-unstyled fs-5">
          <li className="mb-3">
            <FaExclamationTriangle className="text-success me-2" />
            Excessive risk alerts
          </li>
          <li className="mb-3">
            <FaShieldAlt className="text-success me-2" />
            Stop loss reminders and suggestions
          </li>
          <li className="mb-3">
            <FaTrophy className="text-success me-2" />
            Strong/weak trading performance insights
          </li>
          <li className="mb-3">
            <FaBell className="text-success me-2" />
            Margin call warnings
          </li>
          <li className="mb-3">
            <FaChartLine className="text-success me-2" />
            Market alerts tailored to your trading profile
          </li>
          <li className="mb-3">
            <FaBalanceScale className="text-success me-2" />
            Volatility tracking updates
          </li>
        </ul>
      </Col>

      {/* Right: Image or Illustration */}
      <Col md={6} className="text-center mt-4 mt-md-0">
        <img
          src="../assets/guardian-alerts-graphic.png"
          alt="Guardian Angel Alerts"
          className="img-fluid"
          style={{
            maxHeight: '400px',
            borderRadius: '12px',
            boxShadow: '0 0 10px rgba(0,0,0,0.1)',
          }}
        />
      </Col>
    </Row>
  </Container>
</div>
<div style={{ backgroundColor: '#f0fbf5' }} className="text-dark py-5">
  <Container>
    <Row className="justify-content-center">
      <Col lg={10}>
        <h2 className="fw-bold text-center mb-4" style={{ color: '#145214' }}>
          Personalized Support for Every Trader
        </h2>
        <p className="fs-5 text-center mb-4">
          Guardian Angel is unique to each trader—meaning it does not deliver the same feedback to all users.
          Each trader configures their own Guardian Angel based on personal trading goals and preferences.
        </p>
        <p className="fs-5 text-center">
          While it shouldn’t be relied on exclusively, the Guardian Angel tool acts as a second pair of eyes,
          helping to guide your decisions with personalized insights. Let it accompany you on your trading journey—
          tailored entirely to your needs.
        </p>
      </Col>
    </Row>
  </Container>
</div>

<div style={{ backgroundColor: '#014421' }} className="text-white py-5">
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={10}>
            <h2 className="fw-bold mb-4">
              The Guardian Angel has got your back while you are trading!
            </h2>
            <p className="fs-5 mb-4">
              Open your MetaTrader 4 account today and get access to the Guardian Angel add-on for free.
            </p>
            <p className="fs-5 mb-4">
              Already have a MetaTrader 4 or MetaTrader 5 account on AvaTrade? Download the Guardian Angel tool for free
              or contact your account manager.
            </p>

            <div className="d-flex flex-column flex-md-row justify-content-center gap-3 mt-4">
              <Button variant="light" size="lg" className="fw-semibold text-dark px-4">
                Download Guardian Angel
              </Button>
              <Button variant="outline-light" size="lg" className="fw-semibold px-4">
                Contact Account Manager
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>

    <div style={{ backgroundColor: '#e6f4ea' }} className="text-dark py-5">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <h2 className="fw-bold mb-5 text-center" style={{ color: '#145214' }}>
              <FaQuestionCircle className="me-2" />
              Guardian Angel Main FAQs
            </h2>

            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Does Guardian Angel improve your trading results?</Accordion.Header>
                <Accordion.Body>
                  The Guardian Angel plug-in is a powerful MetaTrader add-on that provides valuable feedback on your trading behavior.
                  It indicates market volatility and helps with stop-loss levels based on conditions. However, it is not investment advice.
                  There is no proven evidence that Guardian Angel improves profits or reduces losses. Use it as a support tool, not a guarantee.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>Is the Guardian Angel useful for advanced traders?</Accordion.Header>
                <Accordion.Body>
                  Yes. Guardian Angel provides feedback on risk management, trading performance, market statistics, and financial news.
                  These insights are valuable for both beginners and experienced traders, helping to improve their decision-making over time.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>Does Guardian Angel provide the same feedback for all traders?</Accordion.Header>
                <Accordion.Body>
                  No. Guardian Angel is personalized. It analyzes each trader’s actions and offers unique feedback tailored to their style and needs.
                  It can also be customized to only show specific insights. Think of it as a second pair of eyes to support—not replace—your judgment.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
 
</>
  );
};

export default Bitcoin;
