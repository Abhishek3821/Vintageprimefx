'use client';
import React, { useState } from 'react';
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap';

const CopyTradingPage = () => {
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
            backgroundImage: "url('/images/copy-trading-banner.jpg')",
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
            <h1 className="fw-bold display-4 text-success">Copy Trading Guide</h1>
            <p className="lead text-light">
              Learn how to automatically follow top traders and build a smart portfolio with less effort.
            </p>
          </div>
        </section>

        {/* Video Section */}
        <section className="mb-5 py-5 bg-dark text-white">
          <div className="container">
            <h2 className="text-success text-center mb-4">Watch: Copy Trading in Action</h2>
            <p className="text-center mb-5">Learn the mechanics, strategies, and benefits of automated trade copying.</p>

            <div className="row g-4">
              <div className="col-md-6 col-lg-4">
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.youtube.com/embed/Fs7lGLI5tYk"
                    title="What is Copy Trading?"
                    allowFullScreen
                  ></iframe>
                </div>
                <h5 className="mt-2 text-success">What is Copy Trading?</h5>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.youtube.com/embed/XCEiE1rbnks"
                    title="Choosing Traders to Copy"
                    allowFullScreen
                  ></iframe>
                </div>
                <h5 className="mt-2 text-success">Choosing Traders to Copy</h5>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.youtube.com/embed/kTkMsxAYn8U"
                    title="Managing Copy Trading Risk"
                    allowFullScreen
                  ></iframe>
                </div>
                <h5 className="mt-2 text-success">Managing Copy Trading Risk</h5>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="mb-5">
          <h2 className="text-success">What is Copy Trading?</h2>
          <p>Copy trading allows you to replicate the trades of experienced investors automatically. It's a hands-free way to participate in financial markets without needing advanced technical skills.</p>
          <p>On platforms like AvaTrade, you can browse top traders, view their stats, and choose who to follow based on your goals and risk appetite.</p>
        </section>

        <section className="mb-5">
          <h2 className="text-success">How Does It Work?</h2>
          <ul>
            <li><strong>Pick a Trader:</strong> Use performance filters and ratings to find suitable experts.</li>
            <li><strong>Allocate Funds:</strong> Decide how much capital to allocate to each trader.</li>
            <li><strong>Auto Copy:</strong> Their trades are mirrored on your account proportionally.</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="text-success">Why Choose Copy Trading?</h2>
          <ul>
            <li><strong>Time-Saving:</strong> No need to research or monitor charts daily.</li>
            <li><strong>Educational:</strong> Watch and learn from professional decisions in real time.</li>
            <li><strong>Diversification:</strong> Follow multiple traders with different styles and assets.</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="text-success">Getting Started with Copy Trading</h2>
          <ol>
            <li>Create an account on AvaTrade</li>
            <li>Access the copy trading platform (e.g., DupliTrade, ZuluTrade)</li>
            <li>Browse top traders and click "Copy"</li>
          </ol>
        </section>

        <section className="mb-5">
          <h2 className="text-success">FAQs</h2>
          <Accordion flush open={open} toggle={toggle}>
            <AccordionItem>
              <AccordionHeader targetId="1">Do I have control over the copied trades?</AccordionHeader>
              <AccordionBody accordionId="1">
                Yes, you can start or stop copying anytime. You also control how much capital you allocate to each trader.
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="2">Is copy trading safe?</AccordionHeader>
              <AccordionBody accordionId="2">
                Like any trading, there are risks. Choose traders with consistent records and use risk management tools.
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="3">Can I use copy trading as a beginner?</AccordionHeader>
              <AccordionBody accordionId="3">
                Definitely. It's a great way to get started and learn by observing how professionals trade.
              </AccordionBody>
            </AccordionItem>
          </Accordion>
        </section>

        {/* CTA Footer */}
        <div className="text-center text-muted small">
          <p>Ready to follow the pros? Start your copy trading journey today with AvaTrade.</p>
        </div>
      </div>
    </section>
  );
};

export default CopyTradingPage;
