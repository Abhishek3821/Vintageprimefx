import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Nav, Modal, Spinner } from 'react-bootstrap';

const FCS_API_KEY = '6e152a77428f4b95a847885eceb04901'; 
const FX_PAIRS = [
  'EUR/USD','GBP/USD','USD/JPY','USD/CAD','USD/CHF','AUD/USD','NZD/USD',
  'EUR/GBP','EUR/JPY','EUR/CAD','EUR/CHF','EUR/AUD',
  'GBP/JPY','GBP/CAD','GBP/CHF','GBP/AUD','USD/CNH','XAU/USD'
];

interface OptionData {
  delta: string;
  price: string;
  strike: string;
  iv?: string;
}

const LiveFxOptionsWidget: React.FC = () => {
  const [rates, setRates] = useState<Record<string, string>>({});
  const [selectedPair, setSelectedPair] = useState<string | null>(null);
  const [selectedExpiry, setSelectedExpiry] = useState<string>('1W');
  const [showModal, setShowModal] = useState(false);
  const [puts, setPuts] = useState<OptionData[]>([]);
  const [calls, setCalls] = useState<OptionData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchRates = async () => {
    setLoading(true);
    try {
      const symbols = FX_PAIRS.map(p => p.replace('/', '')).join(',');
      const url = `https://fcsapi.com/api-v3/forex/latest?symbol=${symbols}&access_key=${FCS_API_KEY}`;
      const res = await fetch(url);
      const data = await res.json();

      const updatedRates: Record<string, string> = {};
      if (data && data.response) {
        data.response.forEach((item: any) => {
          const pair = item.symbol.slice(0, 3) + '/' + item.symbol.slice(3);
          updatedRates[pair] = parseFloat(item.price).toFixed(4);
        });
      }
      setRates(updatedRates);
    } catch (error) {
      console.error('API Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const generateOptions = (pair: string) => {
    const base = parseFloat(rates[pair] || '1.1000');
    setPuts([
      { delta: '-0.48', price: '0.00189', strike: (base - 0.002).toFixed(4) },
      { delta: '-0.79', price: '0.00321', strike: (base - 0.001).toFixed(4) },
    ]);
    setCalls([
      { price: '0.00204', delta: '0.51', iv: '4.62%', strike: (base + 0.001).toFixed(4) },
      { price: '0.00102', delta: '0.21', iv: '4.08%', strike: (base + 0.002).toFixed(4) },
    ]);
  };

  const onPairClick = (pair: string) => {
    setSelectedPair(pair);
    generateOptions(pair);
    setShowModal(true);
  };

  useEffect(() => {
    fetchRates();
    const interval = setInterval(fetchRates, 30000); // Every 30s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-5" style={{ background: '#1c1c1c', color: '#eee' }}>
      <Container className="bg-dark p-4 rounded">
        <h2 className="text-center mb-4">LIVE FX OPTION PRICING WIDGET</h2>
        <Row>
          {/* FX Rates List */}
          <Col md={3} className="border-end">
            {FX_PAIRS.map(pair => (
              <div
                key={pair}
                onClick={() => onPairClick(pair)}
                className={`d-flex justify-content-between px-2 py-1 mb-2 rounded ${selectedPair === pair ? 'bg-secondary' : ''}`}
                style={{ cursor: 'pointer' }}
              >
                <span>{pair}</span>
                <span>{loading ? <Spinner animation="border" size="sm" /> : (rates[pair] || '--')}</span>
              </div>
            ))}
          </Col>

          {/* Options Chain */}
          <Col md={9}>
            <Nav variant="tabs" activeKey={selectedExpiry} onSelect={(k) => k && setSelectedExpiry(k)}>
              {['O/N','1W','2W','1M','2M','3M','6M','12M'].map(exp => (
                <Nav.Item key={exp}><Nav.Link eventKey={exp}>{exp}</Nav.Link></Nav.Item>
              ))}
            </Nav>

            {selectedPair ? (
              <>
                <h5 className="text-center text-info my-3">
                  {selectedPair} Options ({selectedExpiry})
                </h5>
                <Row>
                  <Col md={6}>
                    <h6 className="text-success">PUT OPTIONS</h6>
                    <Row className="fw-bold border-bottom py-1">
                      <Col>Δ</Col><Col>Price</Col><Col>Strike</Col>
                    </Row>
                    {puts.map((p, i) => (
                      <Row key={i} className="py-1">
                        <Col>{p.delta}</Col><Col>{p.price}</Col><Col>{p.strike}</Col>
                      </Row>
                    ))}
                  </Col>
                  <Col md={6}>
                    <h6 className="text-warning">CALL OPTIONS</h6>
                    <Row className="fw-bold border-bottom py-1">
                      <Col>Price</Col><Col>Δ</Col><Col>IV</Col>
                    </Row>
                    {calls.map((c, i) => (
                      <Row key={i} className="py-1">
                        <Col>{c.price}</Col><Col>{c.delta}</Col><Col>{c.iv}</Col>
                      </Row>
                    ))}
                  </Col>
                </Row>

                <Row className="text-center mt-4">
                  <Col>
                    <Button variant="success" className="mx-2">Start Trading</Button>
                    <Button variant="warning" className="mx-2">Demo Account</Button>
                  </Col>
                </Row>
              </>
            ) : (
              <p className="text-center text-muted">Click a pair to view options</p>
            )}
          </Col>
        </Row>
      </Container>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{selectedPair} - Options Chain</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6}>
              <h6>PUT OPTIONS</h6>
              {puts.map((p, i) => (
                <Row key={i} className="border-bottom py-1">
                  <Col>{p.delta}</Col><Col>{p.price}</Col><Col>{p.strike}</Col>
                </Row>
              ))}
            </Col>
            <Col md={6}>
              <h6>CALL OPTIONS</h6>
              {calls.map((c, i) => (
                <Row key={i} className="border-bottom py-1">
                  <Col>{c.price}</Col><Col>{c.delta}</Col><Col>{c.iv}</Col>
                </Row>
              ))}
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default LiveFxOptionsWidget;
