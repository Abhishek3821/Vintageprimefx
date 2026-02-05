import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaStar, FaThumbsUp, FaChartLine, FaChartBar, FaLanguage } from 'react-icons/fa';

const reasons = [
  {
    icon: <FaStar size={32} />,
    text: 'Globally Regulated Broker Operating Across Six Continents',
  },
  {
    icon: <FaThumbsUp size={32} />,
    text: 'Over 18 Years of Experience in Trading, Leading, and Guiding Traders',
  },
  {
    icon: <FaChartLine size={32} />,
    text: 'Focused on empowering success with extensive learning resources and tools',
  },
  {
    icon: <FaChartBar size={32} />,
    text: 'Expanding potential with intuitive tools to implement strategies and insights',
  },
  {
    icon: <FaThumbsUp size={32} />,
    text: 'Providing excellent trading conditions to support better performance',
  },
  {
    icon: <FaLanguage size={32} />,
    text: 'A dedicated partner providing multi-lingual customer support for every need',
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <div  className="text-white py-5">
      <Container>
        <h2 className="text-center mb-5">6 Reasons Traders Choose AvaTrade</h2>
        <Row>
          {reasons.map((item, index) => (
            <Col key={index} md={4} className="mb-4 d-flex">
              <Card
                className="text-center flex-fill"
                style={{border: 'none', borderRadius: '12px' }}
              >
                <Card.Body>
                  <div
                    className="mb-3 text-white d-flex justify-content-center align-items-center"
                    style={{
                      width: '60px',
                      height: '60px',
                      margin: '0 auto',
                      backgroundColor: '#198754',
                      borderRadius: '12px',
                    }}
                  >
                    {item.icon}
                  </div>
                  <p className="text-black small mt-3">{item.text}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default WhyChooseUs;
