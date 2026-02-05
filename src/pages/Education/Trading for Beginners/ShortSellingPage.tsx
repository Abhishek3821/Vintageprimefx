'use client';
import React, { useState } from 'react';
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap';

const ShortSellingPage = () => {
  const [open, setOpen] = useState('');
  const toggle = (id: string) => setOpen(open === id ? '' : id);

  return (
    <main className="bg-dark text-white">
      {/* Hero Banner */}
      <section
        className="text-center text-white d-flex align-items-center justify-content-center mb-5"
        style={{
          backgroundImage: "url('/images/short-selling-banner.jpg')",
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
          <h1 className="fw-bold display-4 text-success">Short Selling Explained</h1>
          <p className="lead text-light">
            Learn how to profit when markets fall — explore the concept of short selling and its risks.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="container mb-5">
        <h2 className="text-success">What is Short Selling?</h2>
        <p>
          Short selling is a trading strategy used to profit from a decline in the price of an asset, typically a stock or CFD.
          It involves borrowing the asset, selling it at the current market price, and buying it back later at a lower price.
        </p>
        <p>
          Traders use short selling to hedge their portfolios or speculate on downward trends. While it offers the opportunity
          for profit in falling markets, it also carries substantial risk if the asset's price rises instead.
        </p>
      </section>

      {/* Videos Section */}
      <section className="container mb-5">
        <h2 className="text-success text-center mb-4">Watch: Understanding Short Selling</h2>
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/Ngwuw3r3G6g"
                title="Intro to Short Selling"
                allowFullScreen
              />
            </div>
            <h5 className="mt-2 text-success">Intro to Short Selling</h5>
          </div>
          <div className="col-md-4 mb-3">
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/EpzTVU5OElo"
                title="Short Selling Risks"
                allowFullScreen
              />
            </div>
            <h5 className="mt-2 text-success">Risks of Going Short</h5>
          </div>
          <div className="col-md-4 mb-3">
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/g4cSG5zk-rE"
                title="Short Selling vs Long"
                allowFullScreen
              />
            </div>
            <h5 className="mt-2 text-success">Short vs Long Positions</h5>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mb-5">
        <h2 className="text-success text-center mb-4">Short Selling FAQs</h2>
        <Accordion open={open} toggle={toggle}>
          <AccordionItem>
            <AccordionHeader targetId="1">How does short selling work?</AccordionHeader>
            <AccordionBody accordionId="1">
              Short selling involves borrowing an asset, selling it, and then repurchasing it later to return to the lender.
              Profit is made if the price drops between the sell and buy actions.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="2">Is short selling risky?</AccordionHeader>
            <AccordionBody accordionId="2">
              Yes, short selling carries unlimited risk because there's no limit to how high a price can go. If the asset's price
              rises, losses can be significant.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="3">Can I short sell on AvaTrade?</AccordionHeader>
            <AccordionBody accordionId="3">
              Yes, AvaTrade allows you to short CFDs on multiple assets including forex, stocks, and indices — with proper risk
              controls in place.
            </AccordionBody>
          </AccordionItem>
        </Accordion>
      </section>

      <section className="bg-success text-white text-center py-4">
        <h4 className="mb-2">Ready to go short?</h4>
        <p className="mb-0">Start trading with AvaTrade and take advantage of both rising and falling markets.</p>
      </section>
    </main>
  );
};

export default ShortSellingPage;
