import React, { useState } from 'react';
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap';

const CurrencyTradingPage = () => {
  const [open, setOpen] = useState<string[]>(['1', '2', '3']);

  const toggle = (id: string) => {
    if (open.includes(id)) {
      setOpen(open.filter(openId => openId !== id));
    } else {
      setOpen([...open, id]);
    }
  };

  return (
    <section className="min-vh-100 py-5 text-white" style={{ backgroundColor: '#000' }}>
      <div className="container min-vh-100 text-white">

        {/* Hero Banner */}
        <section
          className="text-center text-white d-flex align-items-center justify-content-center mb-5"
          style={{
            backgroundImage: "url('/images/currency-banner.jpg')", // Replace with your actual image path
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
            <h1 className="fw-bold display-4 text-success">Currency Trading Guide</h1>
            <p className="lead text-light">
              Discover the world of currency markets — strategies, tips, and risks involved in trading forex globally.
            </p>
          </div>
        </section>

        {/* Videos */}
        <section className="mb-5 py-5 bg-dark text-white">
          <div className="container">
            <h2 className="text-success text-center mb-4">Watch: Currency Trading Insights</h2>
            <p className="text-center mb-5">Explore video tutorials on forex strategies, currency pairs, and market fundamentals.</p>

            <div className="row g-4">
              <div className="col-md-6 col-lg-4">
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.youtube.com/embed/1YbCvN3dHq0"
                    title="Understanding Forex Pairs"
                    allowFullScreen
                  ></iframe>
                </div>
                <h5 className="mt-2 text-success">Understanding Forex Pairs</h5>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.youtube.com/embed/2H6zZpUowgU"
                    title="Forex Market Strategies"
                    allowFullScreen
                  ></iframe>
                </div>
                <h5 className="mt-2 text-success">Forex Market Strategies</h5>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.youtube.com/embed/bq_mXWwXAK8"
                    title="Managing Risk"
                    allowFullScreen
                  ></iframe>
                </div>
                <h5 className="mt-2 text-success">Managing Risk in Forex</h5>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="mb-5">
          <h2 className="text-success">Introduction to Currency Trading</h2>
          <p>Currency trading (Forex) is the buying and selling of global currencies to make a profit based on fluctuating exchange rates. It’s the largest and most liquid financial market in the world.</p>
          <p>By learning technical analysis, using smart risk management, and partnering with a trusted broker, traders can participate in currency markets with ease.</p>
        </section>

        <section className="mb-5">
          <h2 className="text-success">How Currency Pairs Work</h2>
          <p>Currency pairs are quoted as a base currency versus a quote currency (e.g., EUR/USD):</p>
          <ul>
            <li><strong>EUR:</strong> The base currency (what you buy/sell)</li>
            <li><strong>USD:</strong> The quote currency (what you pay/get)</li>
          </ul>
          <p>If EUR/USD is 1.2000, it means 1 Euro = 1.20 US Dollars. If you expect the Euro to rise, you buy the pair; if you're right, you can sell it later for profit.</p>
        </section>

        <section className="mb-5">
          <h2 className="text-success">Major Influences on Currency Value</h2>
          <ul>
            <li><strong>Interest Rates:</strong> Higher interest rates attract investors and raise demand for that currency.</li>
            <li><strong>Economic Data:</strong> GDP, employment, and inflation influence currency strength.</li>
            <li><strong>Political Stability:</strong> Stable governments increase investor confidence.</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="text-success">Benefits of Forex Trading</h2>
          <ul>
            <li><strong>24-Hour Market:</strong> Trade anytime, 5 days a week.</li>
            <li><strong>High Liquidity:</strong> Enter and exit trades quickly.</li>
            <li><strong>Leverage:</strong> Amplify your positions with less capital.</li>
            <li><strong>Low Costs:</strong> Tight spreads and no exchange fees.</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="text-success">Getting Started with Currency Trading</h2>
          <ol>
            <li>Choose a regulated broker like AvaTrade</li>
            <li>Open a demo or live trading account</li>
            <li>Fund your account and access trading platforms</li>
          </ol>
        </section>

        <section className="mb-5">
          <h2 className="text-success">FAQs</h2>
          <Accordion flush open={open} toggle={toggle}>
            <AccordionItem>
              <AccordionHeader targetId="1">Is currency trading legal?</AccordionHeader>
              <AccordionBody accordionId="1">
                Yes, currency trading is legal in most countries when done through regulated brokers.
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="2">Can I trade forex without experience?</AccordionHeader>
              <AccordionBody accordionId="2">
                Absolutely. Start with a demo account to learn and practice before using real money.
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="3">Is forex trading risky?</AccordionHeader>
              <AccordionBody accordionId="3">
                Yes, like any market it carries risk. Use stop-loss orders, risk management, and never trade more than you can afford to lose.
              </AccordionBody>
            </AccordionItem>
          </Accordion>
        </section>

        {/* CTA Footer */}
        <div className="text-center text-muted small">
          <p>Ready to trade currencies? Get started with AvaTrade — your gateway to the global forex market.</p>
        </div>

      </div>
    </section>
  );
};

export default CurrencyTradingPage;
