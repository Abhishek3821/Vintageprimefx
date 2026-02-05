import React from 'react';
import { Container, Row, Col, Button, Accordion } from 'react-bootstrap';
import { FaBolt, FaCheckCircle, FaClock, FaCloudUploadAlt, FaDesktop, FaGlobe, FaQuestionCircle, FaServer, FaShieldAlt, FaWifi } from 'react-icons/fa';

const VPSBanner: React.FC = () => {
  return (
    <>
    <div style={{ backgroundColor: '#014421' }} className="text-white py-5">
      <Container className="text-center">
 
        <Row className="justify-content-center">
          <Col lg={10}>
            <h2 className="fw-bold mb-3">VPS for Forex & CFDs Trading</h2>
            <h5 className="text-warning mb-3">Automated Trading, 24/7 Connectivity</h5>
            <p className="mb-4 fs-5">
              AvaTrade’s Virtual Private Server (VPS) allows you to run automated strategies and Expert Advisors (EAs) 24/7 without relying on your personal device. Trade with zero interruptions, enhanced speed, and maximum uptime.
            </p>
            <Button variant="light" size="lg" className="fw-semibold text-dark">
              Get Your Free VPS
            </Button>
          </Col>
        </Row>

      
        <Row className="mt-5">
          <Col>
            <img
              src="https://via.placeholder.com/1200x400"
              alt="VPS Trading"
              className="img-fluid w-100"
              style={{ height: 'auto' }}
            />
          </Col>
        </Row>
      </Container>


     
    </div>
     <div style={{ backgroundColor: '#e6f4ea' }} className="text-dark py-5">
     <Container>
       <Row className="align-items-center">
         <Col md={6} className="mb-4 mb-md-0">
           <h2 className="fw-bold mb-4" style={{ color: '#145214' }}>
             What is a Virtual Private Server (VPS)?
           </h2>
           <p className="fs-5 mb-3">
             More people today are using Virtual Private Servers (VPS) to gain better control over their
             desktop environment. A VPS helps bypass issues like:
           </p>
           <ul className="list-unstyled fs-5">
             <li className="mb-2"><FaBolt className="text-success me-2" /> Power outages</li>
             <li className="mb-2"><FaWifi className="text-success me-2" /> Internet disruptions</li>
             <li className="mb-2"><FaDesktop className="text-success me-2" /> Hardware malfunctions or shutdowns</li>
           </ul>
           <p className="fs-5">
             VPS ensures trading continues uninterrupted—even when your local machine fails. This is crucial for
             Forex and CFD traders who want to ensure their Expert Advisors or automated strategies stay running
             reliably to protect both positions and funds.
           </p>
         </Col>

         <Col md={6} className="text-center">
           <img
             src="/assets/vps-server.png" // Replace with your VPS image path
             alt="Virtual Private Server"
             className="img-fluid"
             style={{
               maxHeight: '400px',
               borderRadius: '12px',
               boxShadow: '0 0 12px rgba(0,0,0,0.1)',
             }}
           />
         </Col>
       </Row>
     </Container>
   </div>
   <div style={{ backgroundColor: '#ecfdf4' }} className="text-dark py-5">
      <Container>
        <Row className="justify-content-left">
          <Col lg={10} className="text-start">
            <h2 className="fw-bold mb-4">Forex VPS and Expert Advisors</h2>
            <p className="fs-5">
              When it comes to Forex trading, avoiding latency and maintaining platform connectivity is essential.
              Every millisecond counts. That’s why running your Expert Advisors (EAs) on a reliable Virtual Private Server (VPS)
              can help ensure speed, security, and uninterrupted trading.
            </p>
            <p className="fs-5 mb-4">
              Using a Forex VPS allows traders to run EAs 24/7, even while their personal computer is off. It offers greater stability,
              more control over your trades, and the ability to install multiple EAs without managing local machine limitations.
            </p>

            <h5 className="fw-semibold mb-3">Benefits of Using Forex VPS with AvaTrade</h5>
            <ul className="fs-5 list-unstyled">
              <li className="mb-2">
                <FaCloudUploadAlt className="text-success me-2" />
                Upload your EAs securely and swiftly
              </li>
              <li className="mb-2">
                <FaGlobe className="text-success me-2" />
                Easy access from any browser, anytime
              </li>
              <li className="mb-2">
                <FaClock className="text-success me-2" />
                Run your EA 24/7 with maximum uptime
              </li>
              <li className="mb-2">
                <FaServer className="text-success me-2" />
                VPS pre-installed with MT4 or MT5 platforms
              </li>
              <li className="mb-2">
                <FaShieldAlt className="text-success me-2" />
                Enhanced protection and reliable performance for Expert Advisors
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
    <div style={{ backgroundColor: '#ecfdf4' }} className="text-dark py-5">
      <Container>
        <Row className="justify-content-left">
          <Col lg={10} className="text-start">
            <h2 className="fw-bold mb-4">Forex VPS and Expert Advisors</h2>
            <p className="fs-5">
              When it comes to Forex trading, avoiding latency and maintaining platform connectivity is essential.
              Every millisecond counts. That’s why running your Expert Advisors (EAs) on a reliable Virtual Private Server (VPS)
              can help ensure speed, security, and uninterrupted trading.
            </p>
            <p className="fs-5 mb-4">
              Using a Forex VPS allows traders to run EAs 24/7, even while their personal computer is off. It offers greater stability,
              more control over your trades, and the ability to install multiple EAs without managing local machine limitations.
            </p>

            <h5 className="fw-semibold mb-3">Benefits of Using Forex VPS with AvaTrade</h5>
            <ul className="fs-5 list-unstyled">
              <li className="mb-2">
                <FaCloudUploadAlt className="text-success me-2" />
                Upload your EAs securely and swiftly
              </li>
              <li className="mb-2">
                <FaGlobe className="text-success me-2" />
                Easy access from any browser, anytime
              </li>
              <li className="mb-2">
                <FaClock className="text-success me-2" />
                Run your EA 24/7 with maximum uptime
              </li>
              <li className="mb-2">
                <FaServer className="text-success me-2" />
                VPS pre-installed with MT4 or MT5 platforms
              </li>
              <li className="mb-2">
                <FaShieldAlt className="text-success me-2" />
                Enhanced protection and reliable performance for Expert Advisors
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
    <div style={{ backgroundColor: '#e6f4ea', minHeight: '100vh' }} className="text-white py-5">
      <Container className="text-center">
        <Row className="justify-content-center mb-5">
          <Col lg={10}>
            <h2 className="fw-bold mb-4 text-success ">How to Install a VPS</h2>

       
            <p className="fs-5 mb-4 text-dark">
              This short video will explain how to start the process of using VPSs for trading. The first step, after proper research and choosing the right server, is to rent the selected VPS:
            </p>
            <div className="ratio ratio-16x9 mb-5">
              <iframe
                src="https://www.youtube.com/embed/VIDEO_ID_1"
                title="How to rent a VPS"
                allowFullScreen
              ></iframe>
            </div>

            <p className="fs-5 mb-4 text-dark">
              After the VPS is installed on your computer, copy your platform folders—including Expert Advisors, tools, and configurations—into the private server environment:
            </p>
            <div className="ratio ratio-16x9 mb-5">
              <iframe
                src="https://www.youtube.com/embed/VIDEO_ID_2"
                title="How to transfer files to VPS"
                allowFullScreen
              ></iframe>
            </div>

          
            <p className="fs-5 mb-4 text-dark">
              Once trading starts, it's important to monitor EAs, tools, and server activity to ensure everything runs smoothly. This video shows how to stay on top of it all:
            </p>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/VIDEO_ID_3"
                title="Monitor VPS trading"
                allowFullScreen
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    <div style={{ backgroundColor: '#f0fbf5' }} className="text-dark py-5">
      <Container>
        <h2 className="fw-bold text-center mb-5">
          <FaServer className="me-2 text-success" />
          Best Practices & FAQs – MetaTrader VPS
        </h2>
        <Row>
          <Col md={6} className="mb-4">
            <h4 className="fw-semibold text-success mb-3">
              <FaCheckCircle className="me-2" />
              Best Practices for Maintaining a VPS
            </h4>
            <ul className="fs-5 list-unstyled">
              <li className="mb-3">
                Regularly check the status of your VPS server for issues or interruptions.
              </li>
              <li className="mb-3">
                Contact the VPS provider occasionally to ensure smooth operation and updates.
              </li>
              <li className="mb-3">
                Avoid careless trading without monitoring your server’s connectivity.
              </li>
              <li className="mb-3">
                AvaTrade ensures smooth trading conditions, whether you use a VPS or not.
              </li>
              <li className="mb-3">
                Choose the setup that suits your trading style and provides peace of mind.
              </li>
            </ul>
          </Col>

          <Col md={6}>
            <h4 className="fw-semibold text-success mb-4">
              <FaQuestionCircle className="me-2" />
              FAQs about MetaTrader VPS
            </h4>
            <Accordion flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>What is a Forex VPS in simple terms?</Accordion.Header>
                <Accordion.Body>
                  A Forex VPS ensures 24/7 connectivity to trading servers. It avoids issues like power cuts, viruses, and
                  network instability—crucial for active trading, especially in volatile markets.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>How do I connect my VPS to MT4 or MT5?</Accordion.Header>
                <Accordion.Body>
                  Copy the MetaTrader folder from your PC to your VPS drive (C:/Program Files). Then open the Terminal
                  file from your VPS desktop to access the trading platform.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>What is the best VPS to use?</Accordion.Header>
                <Accordion.Body>
                  AvaTrade doesn't recommend a specific VPS provider, but look for:
                  <ul className="mt-2 mb-0">
                    <li>Low latency (around 1ms)</li>
                    <li>100% uptime guarantee</li>
                    <li>24/7 technical support</li>
                    <li>SSD storage, fast RAM & CPU</li>
                    <li>Support for Expert Advisors (EAs)</li>
                  </ul>
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

export default VPSBanner;
