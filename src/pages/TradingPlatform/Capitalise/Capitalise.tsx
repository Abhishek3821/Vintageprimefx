import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import CapitaliseAIAdvanced from './automationFeatures';
import CapitaliseFeatures from './CapitaliseFeatures';

const CapitaliseAIBanner: React.FC = () => {
  return (
    <>
    <div
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        position: 'relative',
        background: 'blur(40px)',
      }}
    >
      <div
       
      >
        <Container className='text-center'>
          <h1 className="fw-bold display-4">Capitalise.ai</h1>
          <p className="fs-4 mb-4 text-warning">Automate Your Trading — No Code Required</p>
          <p className="fs-5 mb-4 text-light">
            Write your strategies in plain English and let Capitalise.ai turn them into automated trading actions — instantly and intelligently.
          </p>
          <Button variant="warning" size="lg" className="fw-bold">
            Explore Capitalise.ai
          </Button>
        </Container>
      </div>
    </div>
     <div style={{ backgroundColor: '#e6f5ee', padding: '60px 0' }}>
     <Container>

       {/* Strategies Library */}
       <Row className="align-items-center mb-5">
         <Col md={6}>
           <h2 style={{ fontWeight: 700, fontSize: '2.5rem', color: '#146c43' }}>
             Strategies Library
           </h2>
           <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#2d4830', marginTop: '20px' }}>
             Don’t know what strategy to employ? No worries! Capitalise.ai provides a huge library of high-performance, proven strategies ready to deploy at the click of a button.
           </p>
           <Button variant="success" size="lg" style={{ backgroundColor: '#28a745', borderColor: '#28a745' }}>
             Explore the App for FREE
           </Button>
         </Col>
         <Col md={6}>
           <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Strategies Library" className="img-fluid" />
         </Col>
       </Row>

       {/* Trade Smarter with AI */}
       <Row className="align-items-center mb-5 flex-md-row-reverse">
         <Col md={6}>
           <h2 style={{ fontWeight: 700, fontSize: '2.5rem', color: '#146c43' }}>
             Trade Smarter<br />With The Help of AI
           </h2>
           <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#2d4830', marginTop: '20px' }}>
             Plan trades in advance or use preset strategies and Capitalise.ai will auto-execute positions—even while you sleep. Power up your performance and never miss an opportunity again.
           </p>
         </Col>
         <Col md={6}>
           <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="AI Trading" className="img-fluid" />
         </Col>
       </Row>

       {/* Trading Alerts */}
       <Row className="align-items-center mb-5">
         <Col md={6}>
           <h2 style={{ fontWeight: 700, fontSize: '2.5rem', color: '#146c43' }}>
             Trading Alerts
           </h2>
           <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#2d4830', marginTop: '20px' }}>
             Receive real-time alerts to your mobile when specific conditions are met. Capitalise.ai continuously tracks market data, indicators, and fundamentals—so you don't have to.
           </p>
           <p style={{ fontWeight: 500, fontSize: '1.1rem', color: '#28a745' }}>
             Take your trading to the next level.
           </p>
         </Col>
         <Col md={6}>
           <img src="https://images.unsplash.com/photo-1542744095-291d1f67b221?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" alt="Trading Alerts" className="img-fluid" />
         </Col>
       </Row>

       {/* Research & Analysis */}
       <Row className="align-items-center flex-md-row-reverse">
         <Col md={6}>
           <h2 style={{ fontWeight: 700, fontSize: '2.5rem', color: '#146c43' }}>
             Research & Analysis
           </h2>
           <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#2d4830', marginTop: '20px' }}>
             Backtest and analyse strategies before risking capital. Use natural language to create logic, test it safely, and enhance the credibility of your decisions.
           </p>
           <Button variant="success" size="lg" style={{ backgroundColor: '#28a745', borderColor: '#28a745' }}>
             Yes, I’m in!
           </Button>
         </Col>
         <Col md={6}>
           <img src="https://images.unsplash.com/photo-1594322463847-81e2bd5f9888?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" alt="Research & Analysis" className="img-fluid" />
         </Col>
       </Row>

     </Container>
     
   </div>
   <CapitaliseAIAdvanced/>
   <div
      style={{
        backgroundColor: '#f7fcfa',
        padding: '80px 0',
        borderTop: '4px solid #28a745',
      }}
    >
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="mb-4 mb-md-0">
            <h2
              style={{
                fontWeight: 700,
                fontSize: '2.5rem',
                color: '#146c43',
              }}
            >
              FREE for AvaTraders!
            </h2>
            <p style={{ fontSize: '1.2rem', color: '#2d4830', marginTop: '20px' }}>
              Sign up now for a <strong>FREE Capitalise.ai account</strong> and
              start automating your trades. No coding needed.
              <br />
              <br />
              Quickly link it to your MT4 account and start exploring smart
              trading with AI today!
            </p>

            <Button
              variant="success"
              size="lg"
              style={{
                backgroundColor: '#28a745',
                borderColor: '#28a745',
                fontWeight: 600,
              }}
            >
              Create Your Free Account
            </Button>
          </Col>

          <Col md={6}>
            <img
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
              alt="Capitalise.ai MT4 integration"
              className="img-fluid"
              style={{ maxHeight: '340px' }}
            />
          </Col>
        </Row>
      </Container>
    </div>
    <CapitaliseFeatures/>
   </>
  );
};

export default CapitaliseAIBanner;
