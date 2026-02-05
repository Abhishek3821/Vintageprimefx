'use client';
import React, { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';

const FinancialDerivativesPage = () => {
  const [open, setOpen] = useState('');
  const toggle = (id: string) => setOpen(open === id ? '' : id);

  return (
    <main className="bg-dark text-white">
      {/* Hero Banner */}
      <section
        className="text-center text-white d-flex align-items-center justify-content-center mb-5"
        style={{
          backgroundImage: "url('/images/derivatives-banner.jpg')",
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
          <h1 className="fw-bold display-4 text-success">Financial Derivatives</h1>
          <p className="lead text-light">
            Understand the instruments that derive their value from underlying assets like stocks, bonds, or currencies.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="container mb-5">
        <h2 className="text-success">What are Financial Derivatives?</h2>
        <p>
          Financial derivatives are contracts whose value is based on the performance of an underlying asset,
          index, or interest rate. These include instruments like futures, options, swaps, and forwards.
        </p>
        <p>
          Traders use derivatives for hedging risk or speculating on price movements. Although they can be
          powerful tools, they carry inherent risks and require a solid understanding before use.
        </p>
      </section>

      {/* Videos Section */}
      <section className="container mb-5">
        <h2 className="text-success text-center mb-4">Watch: Derivatives Explained</h2>
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/Mo7E7NqHraU"
                title="What are Financial Derivatives?"
                allowFullScreen
              />
            </div>
            <h5 className="mt-2 text-success">Derivatives Simplified</h5>
          </div>
          <div className="col-md-4 mb-3">
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/XDEdZ98O1pg"
                title="Futures vs Options"
                allowFullScreen
              />
            </div>
            <h5 className="mt-2 text-success">Futures vs Options</h5>
          </div>
          <div className="col-md-4 mb-3">
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/1fE5vbwiqQo"
                title="Risks in Derivative Trading"
                allowFullScreen
              />
            </div>
            <h5 className="mt-2 text-success">Managing Derivatives Risk</h5>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mb-5">
        <h2 className="text-success text-center mb-4">Derivatives FAQs</h2>
        <Accordion open={open} toggle={toggle}>
          <AccordionItem>
            <AccordionHeader targetId="1">Why are derivatives used?</AccordionHeader>
            <AccordionBody accordionId="1">
              Derivatives are commonly used for hedging risk, speculating on market movements,
              or gaining exposure to assets without directly owning them.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="2">What are some common types?</AccordionHeader>
            <AccordionBody accordionId="2">
              The most common types of derivatives include futures, options, swaps, and forward contracts.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="3">Are derivatives risky?</AccordionHeader>
            <AccordionBody accordionId="3">
              Yes. While they can offer high rewards, derivatives are complex and can lead to significant losses if not managed carefully.
            </AccordionBody>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Call to Action */}
      <section className="bg-success text-white text-center py-4">
        <h4 className="mb-2">Ready to Explore Derivatives?</h4>
        <p className="mb-0">Start trading with AvaTrade and take your trading strategy to the next level.</p>
      </section>
    </main>
  );
};

export default FinancialDerivativesPage;
