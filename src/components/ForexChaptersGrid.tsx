import React, { useState } from 'react';
import { Row, Col, Card, Button, Nav } from 'react-bootstrap';




const forexChapters= [
  {
    number: 1,
    title: "Introduction to Forex",
    url: "https://drive.google.com/drive/folders/1Fjlxn_HrHpv6EE95W818qZgUj1R0AVrc?usp=sharing",
    level: "Beginner",
    image: "/images/forex1.jpg",
  },
  {
    number: 2,
    title: "Understanding Currency Pairs",
    url: "https://drive.google.com/drive/folders/11VSqyRL3J5n1p8DOZ0-eIoJ0puCHl7Ek?usp=sharing",
    level: "Beginner",
    image: "/images/forex2.jpg",
  },
  {
    number: 3,
    title: "Price Movements & Market Orders",
    url: "https://drive.google.com/drive/folders/1fUanJpTy92b-7Q1feUbSxMUd4hSBJ2k-?usp=sharing",
    level: "Beginner",
    image: "/images/forex3.jpg",
  },
  {
    number: 4,
    title: "Risk Management",
    url: "https://drive.google.com/drive/folders/1MHeULiqcWBWHaypHKK61uBnoryh1dnof?usp=sharing",
    level: "Intermediate",
    image: "/images/forex4.jpg",
  },
  {
    number: 5,
    title: "Trading Strategies",
    url: "https://drive.google.com/drive/folders/1Bg0mbd5w8Urr9B19HLeXpJIIjODO2KT9?usp=sharing",
    level: "Intermediate",
    image: "/images/forex5.jpg",
  },
  {
    number: 6,
    title: "Technical Indicators",
    url: "https://drive.google.com/drive/folders/1DxZZgeRVgh7UlJe2TIOSQ8zRxl8ncvvj?usp=sharing",
    level: "Intermediate",
    image: "/images/forex6.jpg",
  },
  {
    number: 7,
    title: "Candlestick Patterns",
    url: "https://drive.google.com/drive/folders/1_1zlGfqXxHZ2knwiCeushz5OAftN7yCn?usp=sharing",
    level: "Intermediate",
    image: "/images/forex7.jpg",
  },
  {
    number: 8,
    title: "Fibonacci Tools",
    url: "https://drive.google.com/drive/folders/1cAcb2rhQgZJe_uD9rThDR3ZhjC7RYESa?usp=sharing",
    level: "Intermediate",
    image: "/images/forex8.jpg",
  },
  {
    number: 9,
    title: "Chart Patterns",
    url: "https://drive.google.com/drive/folders/1g_ssTs_kNCfTX2l98772176ymK7Kp0yu?usp=sharing",
    level: "Advanced",
    image: "/images/forex9.jpg",
  },
  {
    number: 10,
    title: "Economic News & Impact",
    url: "https://drive.google.com/drive/folders/1bcC5iWJ1pYRerwkfLOsWEuilYdNHdItu?usp=sharing",
    level: "Advanced",
    image: "/images/forex10.jpg",
  },
  {
    number: 11,
    title: "Trading Psychology",
    url: "https://drive.google.com/drive/folders/1clGhr1zsX4yZqM-AQz_qXl6q1Ya_lpyo?usp=sharing",
    level: "Advanced",
    image: "/images/forex11.jpg",
  },
  {
    number: 12,
    title: "Creating a Trading Plan",
    url: "https://drive.google.com/drive/folders/1FkzCnjDi74R2ddm-5pnYaEn22I3r-jO7?usp=sharing",
    level: "Advanced",
    image: "https://source.unsplash.com/400x250/?planning,goals",
  },
  {
    number: 13,
    title: "Risk-Reward Ratio",
    url: "https://drive.google.com/drive/folders/1Gy1RMctGE5uOCQ3aMK9h13U5nuuirhct?usp=sharing",
    level: "Advanced",
    image: "https://source.unsplash.com/400x250/?risk,reward",
  },
  {
    number: 14,
    title: "Demo vs Live Accounts",
    url: "https://drive.google.com/drive/folders/10WK-MkHyPdPkml5cJyjYkjlkMC40LVE9?usp=sharing",
    level: "Intermediate",
    image: "https://source.unsplash.com/400x250/?demo,live,trading",
  },
  {
    number: 15,
    title: "Scalping & Day Trading",
    url: "https://drive.google.com/drive/folders/19qgreETaAT1lcbaNsqvQ8mmZ56I2U6xN?usp=sharing",
    level: "Advanced",
    image: "https://source.unsplash.com/400x250/?daytrading,scalping",
  },
  {
    number: 16,
    title: "Swing & Position Trading",
    url: "https://drive.google.com/drive/folders/1MrKr_R4alDiLa-V0Gca_49dXXGDt0TVD?usp=sharing",
    level: "Advanced",
    image: "https://source.unsplash.com/400x250/?swingtrading,position",
  },
  {
    number: 17,
    title: "Common Mistakes to Avoid",
    url: "https://drive.google.com/drive/folders/1HthekeBodalVj666cop1G3xZQW45Q_cn?usp=sharing",
    level: "Beginner",
    image: "https://source.unsplash.com/400x250/?mistake,warning",
  },
  {
    number: 18,
    title: "Trading Tools",
    url: "https://drive.google.com/drive/folders/1-Jc8h1J6Re5ifL881ydmJdCE9sf4Wp_I?usp=sharing",
    level: "Intermediate",
    image: "https://source.unsplash.com/400x250/?tools,trading",
  },
  {
    number: 19,
    title: "Broker Selection Guide",
    url: "https://drive.google.com/drive/folders/1KmCUko1PiaQ9H3vTkSQ-iRudK87VXzd0?usp=sharing",
    level: "Intermediate",
    image: "https://source.unsplash.com/400x250/?broker,forex",
  },
  {
    number: 20,
    title: "Final Recap",
    url: "https://drive.google.com/drive/folders/1khdgVG8J83z4p0-YRSStUIQN0GKntwxq?usp=sharing",
    level: "Beginner",
    image: "https://source.unsplash.com/400x250/?recap,summary",
  },
];

const levels = ["All", "Beginner", "Intermediate", "Advanced"];

const ForexChaptersGrid: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState<string>("All");

  const filteredChapters = selectedLevel === "All"
    ? forexChapters
    : forexChapters.filter((c) => c.level === selectedLevel);

  return (
    <div className="bg-dark" style={{  padding: '4rem 1rem' }}>
      <div className="text-center mb-5">
        <h2 className="fw-bold" style={{ color: '#f8f8f8ff' }}>📘 Forex Course Curriculum</h2>
        <p className="text-white fs-5">
          Master trading with beginner to advanced content, built for serious learners.
        </p>
      </div>

      <div className="d-flex justify-content-center mb-4">
        <Nav variant="pills" activeKey={selectedLevel} onSelect={(key) => setSelectedLevel(key || "All")}>
          {levels.map((level) => (
            <Nav.Item key={level}>
              <Nav.Link eventKey={level} className="mx-2 text-white">
                {level}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
      </div>

      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {filteredChapters.map((chapter) => (
          <Col key={chapter.number}>
            <Card className="h-100 shadow-sm border-0" style={{ borderRadius: '1rem' }}>
              <Card.Img
                variant="top"
                src={new URL(`../assets/forex/${chapter.image}`, import.meta.url).href}
                alt={chapter.title}
                style={{ borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem', height: '180px', objectFit: 'cover' }}
              />
              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  <Card.Title className="fw-semibold fs-6 text-dark">
                    {chapter.number}. {chapter.title}
                  </Card.Title>
                  <Card.Text className="text-muted small">Level: {chapter.level}</Card.Text>
                </div>
                <Button
                  href={chapter.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="dark"
                  className="mt-3 w-100"
                  style={{ backgroundColor: '#003c2f', border: 'none' }}
                >
                  View Chapter
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ForexChaptersGrid;