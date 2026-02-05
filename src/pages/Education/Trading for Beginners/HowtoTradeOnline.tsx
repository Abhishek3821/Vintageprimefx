import React, { useState } from 'react';
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap';

const HowToTradeOnlinePage = () => {
  const [open, setOpen] = useState<string[]>(['1', '2', '3']);

  const toggle = (id: string) => {
    if (open.includes(id)) {
      setOpen(open.filter(openId => openId !== id));
    } else {
      setOpen([...open, id]);
    }
  };

  return (
    <section className=" min-vh-100 py-5 text-white" style={{ backgroundColor: '#000' }}>
        <div className=" container min-vh-100 text-white" style={{ backgroundColor: '#000'}}>
    <section
  className="text-center text-white d-flex align-items-center justify-content-center mb-5"
  style={{
    backgroundImage: "url('/images/trading-hero.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '60vh',
    position: 'relative',
  }}
>
  <div
    className="position-absolute top-0 start-0 w-100 h-100"
    style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
  />
  <div className="position-relative container">
    <h1 className="fw-bold display-4 text-success">How to Trade Online</h1>
    <p className="lead text-light">
      Learn the essentials of Forex and CFD trading with our comprehensive guide for beginners.
    </p>
  </div>
</section>
<section className="mb-5 py-5 bg-dark text-white">
  <div className="container">
    <h2 className="text-success text-center mb-4">Watch & Learn</h2>
    <p className="text-center mb-5">Explore our hand-picked videos to help you get started with online trading, Forex, and CFDs.</p>

    <div className="row g-4">
      <div className="col-md-6 col-lg-4">
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/1YbCvN3dHq0"
            title="Trading Basics"
            allowFullScreen
          ></iframe>
        </div>
        <h5 className="mt-2 text-success">Forex Trading Basics</h5>
      </div>

      <div className="col-md-6 col-lg-4">
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/2H6zZpUowgU"
            title="CFD Explained"
            allowFullScreen
          ></iframe>
        </div>
        <h5 className="mt-2 text-success">What is CFD Trading?</h5>
      </div>

      <div className="col-md-6 col-lg-4">
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/bq_mXWwXAK8"
            title="Trading Risks"
            allowFullScreen
          ></iframe>
        </div>
        <h5 className="mt-2 text-success">Understanding Trading Risks</h5>
      </div>
    </div>
  </div>
</section>


      <section className="mb-5">
        <h2 className="text-success">Trading for Beginners</h2>
        <p>Trading online for the first time can feel overwhelming. But with AvaTrade by your side, you'll gain confidence step-by-step.</p>
        <p>Being a trader means controlling your decisions, removing emotion, and using the best tools to build your strategy. The core concept behind trading is supply and demand. When more people want to buy than sell, the price goes up — and vice versa.</p>
      </section>

      <section className="mb-5">
        <h2 className="text-success">How to Trade Forex</h2>
        <p>Forex (foreign exchange) trading is the act of buying one currency and selling another. The rate between two currencies is expressed as a pair (e.g., EUR/USD):</p>
        <ul>
          <li><strong>EUR:</strong> The base currency</li>
          <li><strong>USD:</strong> The quote currency</li>
        </ul>
        <p>If EUR/USD is 1.2000, it means 1 Euro = 1.20 USD. If you think the Euro will increase in value, you buy. If correct, you can sell later at a higher price and make a profit.</p>
      </section>

      <section className="mb-5">
        <h2 className="text-success">What Influences Forex Prices?</h2>
        <ul>
          <li><strong>Industrial output:</strong> A stronger economy usually boosts currency strength.</li>
          <li><strong>Inflation:</strong> Lower inflation tends to support a stronger currency.</li>
          <li><strong>Political events:</strong> Elections, policies, and global news affect volatility.</li>
        </ul>
        <p>These factors shape trading decisions and influence whether traders buy or sell currency pairs.</p>
      </section>

      <section className="mb-5">
        <h2 className="text-success">How to Trade CFDs</h2>
        <p>Contracts for Difference (CFDs) let you speculate on the price movement of assets without owning them.</p>
        <ul>
          <li><strong>Leverage:</strong> Control large positions with less capital.</li>
          <li><strong>Two-Way Trading:</strong> Profit from rising or falling markets.</li>
          <li><strong>No Asset Ownership:</strong> No need for physical delivery or custody.</li>
        </ul>
        <p>For example, buy a gold CFD at $100. If the price rises to $110, you earn the difference ($10). If it drops, you incur a loss.</p>
      </section>

      <section className="mb-5">
        <h2 className="text-success">Risk Considerations</h2>
        <p>CFD and forex trading involve risk. Leverage can increase both profits and losses. Use risk controls such as stop-losses and manage your trade size carefully.</p>
      </section>

      <section className="mb-5">
        <h2 className="text-success">CFD Trading by Asset Class</h2>
        <ul>
          <li><strong>Stock CFDs:</strong> Trade company share price movements with flexibility.</li>
          <li><strong>Commodity CFDs:</strong> Access markets like oil, gold, and silver without handling physical goods.</li>
          <li><strong>Index CFDs:</strong> Trade market performance across sectors via indices like S&P 500 or FTSE 100.</li>
          <li><strong>Crypto CFDs:</strong> Speculate on Bitcoin, Ethereum, and other cryptos without wallets.</li>
          <li><strong>ETF CFDs:</strong> Gain exposure to multiple sectors with one trade through Exchange-Traded Funds.</li>
        </ul>
      </section>

      <section className="mb-5">
        <h2 className="text-success">How to Perform a Trade</h2>
        <ol>
          <li>Choose AvaTrade as your trusted broker</li>
          <li>Create a free demo or live account</li>
          <li>Securely fund your account</li>
        </ol>
        <h2 className="text-success">FAQs</h2>
        <Accordion flush open={open} toggle={toggle}>
          <AccordionItem>
            <AccordionHeader targetId="1">How can I do trading online?</AccordionHeader>
            <AccordionBody accordionId="1">
              Simply register with a reliable broker like AvaTrade, fund your account, and begin trading using their secure online platform.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="2">What skills do I need to start?</AccordionHeader>
            <AccordionBody accordionId="2">
              No advanced skills required. Just curiosity and the willingness to learn. Over time, build knowledge in technical analysis, market trends, and risk control.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="3">Is online trading safe?</AccordionHeader>
            <AccordionBody accordionId="3">
              Trading is safe when done through regulated brokers with good reputations. Ensure you apply secure login practices and avoid unknown platforms.
            </AccordionBody>
          </AccordionItem>
        </Accordion>
      </section>
          

      <div className="text-center text-muted small">
        <p>Start your journey today with AvaTrade — your trusted partner in the financial markets.</p>
      </div>
    </div>
    </section>

  );
};

export default HowToTradeOnlinePage;
