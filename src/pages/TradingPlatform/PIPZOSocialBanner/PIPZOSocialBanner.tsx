import React from "react";
import { Container, Button } from "react-bootstrap";
import WhyChoosePipzoSocial from "./WhyChoosePipzoSocial";
import TestimonialsCarousel from "./TestimonialsCarousel";
import HowPipzoWorks from "./HowPipzoWorks";

const PIPZOSocialBanner: React.FC = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: "url('/assets/back3.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
        }}
      >
        {/* Overlay */}
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            zIndex: 1,
          }}
        />

        {/* Content */}
        <Container
          style={{
            zIndex: 2,
            textAlign: "center",
            maxWidth: "800px",
            padding: "20px",
          }}
        >
          <h1 className="fw-bold display-4 mb-3"> Vintageprimefx SOCIAL </h1>
          <p className="fs-4 text-warning mb-3">
            Unlock the Power of Trading Together
          </p>
          <p className="fs-5 text-light mb-4">
            Connect, copy, and conquer the markets alongside expert traders.
            Learn from their strategies and say goodbye to trading alone
            forever.
          </p>
          <Button
            variant="success"
            size="lg"
            style={{ backgroundColor: "#28a745", borderColor: "#28a745" }}
          >
            Start Copy Trading
          </Button>
        </Container>
      </div>
      {/* Why Choose AvaSocial Section */}
      <WhyChoosePipzoSocial />

      {/* Testimonials from Users */}
      <TestimonialsCarousel />

      {/* How Pipzo Works */}
      <HowPipzoWorks />
    </>
  );
};

export default PIPZOSocialBanner;
