import React from "react";
import { Carousel, Container, Card } from "react-bootstrap";

const testimonials = [
  {
    quote:
      "The  Vintageprimefx platform has transformed my trading experience. As a beginner, I was unsure where to start, but  Vintageprimefx allowed me to follow experienced traders and learn from their strategies. I've seen consistent growth in my portfolio.",
    name: "Sarah H.",
  },
  {
    quote:
      "I've been trading for years but have found it hard to diversify as I don’t have the time or knowledge to follow too many markets.  Vintageprimefx has simplified everything. I can diversify my investments effortlessly by following top traders.",
    name: "David T.",
  },
  {
    quote:
      " Vintageprimefx has made trading a social experience for me. I enjoy connecting with fellow traders, discussing strategies, and learning from each other. It's not just about copying; it's about growing together as a community.",
    name: "Maria S.",
  },
  {
    quote:
      "What a game-changer! Copying the experts' trades has saved me time and boosted my confidence. I no longer stress about analysing every market move.",
    name: "Alex M.",
  },
  {
    quote:
      "I love how easy it is to track expert performance and see real-time results.  Vintageprimefx has taken the stress out of my investments.",
    name: "Junaid A.",
  },
  {
    quote:
      "Following multiple experts across different assets helped me diversify like never before.  Vintageprimefx is exactly what I needed.",
    name: "Neha R.",
  },
  {
    quote:
      "Great platform, friendly UI, and supportive community. I’m actually enjoying trading for the first time.",
    name: "Karan D.",
  },
  {
    quote:
      "Being able to connect and discuss strategies makes  Vintageprimefx more than a trading app — it’s a hub for smart investors.",
    name: "Priya S.",
  },
  {
    quote:
      "Started as a beginner, now I confidently manage my portfolio. Credit goes to  Vintageprimefx’ social trading experience.",
    name: "Rahul V.",
  },
  {
    quote:
      "Seeing real-time trade updates and learning from the pros made me feel empowered as a trader.",
    name: "Emily F.",
  },
];

const TestimonialsCarousel: React.FC = () => {
  return (
    <div style={{ backgroundColor: "#e6f5ee", padding: "60px 0" }}>
      <Container>
        <h2
          className="text-center mb-5"
          style={{ fontWeight: 700, fontSize: "2.5rem", color: "#146c43" }}
        >
          People Say the <span style={{ color: "#28a745" }}>Nicest Things</span>{" "}
          About  Vintageprimefx
        </h2>

        <Carousel
          indicators={false}
          controls={false}
          interval={4000}
          pause={false}
          fade
        >
          {testimonials.map((t, idx) => (
            <Carousel.Item key={idx}>
              <div className="d-flex justify-content-center">
                <Card
                  className="shadow"
                  style={{
                    maxWidth: "700px",
                    border: "1px solid #cce5d0",
                    backgroundColor: "#ffffff",
                  }}
                >
                  <Card.Body>
                    <Card.Text style={{ fontSize: "1.1rem", color: "#2d4830" }}>
                      “{t.quote}”
                    </Card.Text>
                    <Card.Footer
                      className="text-end mt-3"
                      style={{
                        backgroundColor: "transparent",
                        borderTop: "none",
                      }}
                    >
                      <strong style={{ color: "#146c43" }}>— {t.name}</strong>
                    </Card.Footer>
                  </Card.Body>
                </Card>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </div>
  );
};

export default TestimonialsCarousel;
