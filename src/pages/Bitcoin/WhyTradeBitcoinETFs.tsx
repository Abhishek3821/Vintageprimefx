import React from 'react';
import { FaChartLine, FaLock, FaAward, FaExchangeAlt } from 'react-icons/fa';

const WhyTradeCryptoETFs = () => {
  const cardData = [
    {
      title: 'Higher Leverage ETFs',
      description: 'Trade up to 1:10 with our 2X leveraged ETFs.',
      icon: <FaChartLine size={36} color="#28a745" />,
    },
    {
      title: 'Easy, Secure Trading',
      description: 'No wallets, keys, or security risks. Just easy trading.',
      icon: <FaLock size={36} color="#28a745" />,
    },
    {
      title: 'Regulated, Trusted Broker',
      description: 'AvaTrade: award-winning, globally recognized, and fully regulated trading platform.',
      icon: <FaAward size={36} color="#28a745" />,
    },
    {
      title: 'Flexible ETF Choices',
      description: 'Select from seven distinct BTC and ETH ETF options available.',
      icon: <FaExchangeAlt size={36} color="#28a745" />,
    },
  ];

  return (
    <section
      style={{
        backgroundColor: '#f2fcf6', 
        padding: '80px 5vw',
      }}
    >
      <div className="container">
        <h2 className="fw-bold text-center mb-5" style={{ color: '#1a3d2b' }}>
          Why Trade <span style={{ color: '#28a745' }}>Crypto ETFs?</span>
        </h2>

        <p
          className="fs-5 text-center mb-5"
          style={{ maxWidth: '850px', margin: '0 auto', color: '#2c3e50' }}
        >
          Crypto ETFs (Exchange-Traded Funds) allow you to invest in Bitcoin and Ethereum
          without needing to own the actual crypto assets. They offer:
        </p>

        <div className="row g-4">
          {cardData.map((item, idx) => (
            <div className="col-md-6" key={idx}>
              <div
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  padding: '24px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '20px',
                }}
              >
                <div>{item.icon}</div>
                <div>
                  <h4 style={{ color: '#28a745', fontWeight: '600', marginBottom: '10px' }}>{item.title}</h4>
                  <p style={{ marginBottom: 0, fontSize: '1.05rem', color: '#555' }}>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyTradeCryptoETFs;
