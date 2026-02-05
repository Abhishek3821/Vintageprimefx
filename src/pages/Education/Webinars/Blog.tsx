import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { BsBookmark, BsArrowRight, BsFacebook, BsTwitter, BsLinkedin, BsLink45Deg } from 'react-icons/bs';

const blogPosts = [
  {
    title: 'What Should You Really Look for in a Trading Platform?',
    description: `With so many online brokers competing for attention, it’s easy to focus on the...`,
    date: 'Apr 9, 2025',
    readTime: '3 min read',
    image: '/images/trading-platform.jpg'
  },
  // Generate 20 latest posts
  ...Array.from({ length: 20 }).map((_, i) => ({
    title: `Market Insight Update #${i + 1}`,
    description: `Analysis and opportunities in volatile markets – insight ${i + 1}.`,
    date: 'Apr 9, 2025',
    readTime: `${3 + (i % 4)} min read`,
    image: '/images/green-in-red.jpg'
  }))
];

const popularPosts = [
  {
    title: 'Turning Market Volatility to Your Advantage',
    time: '5 min read',
    image: '/images/popular1.jpg'
  },
  {
    title: 'The New Norm in Finance: Thriving in Day Trading from...',
    time: '3 min read',
    image: '/images/popular2.jpg'
  },
  {
    title: 'Trump vs. Harris – How Will You Trade the Election?',
    time: '6 min read',
    image: '/images/popular3.jpg'
  }
];

const TradingBlogPage = () => {
  return (
    <div style={{ backgroundColor: '#0d1f1c', color: '#c6f6d5' }}>
      {/* 🔷 Featured Post */}
      <Container className="py-5">
        <Row>
          <Col md={8}>
            <Card className="bg-dark text-white border-0">
              <Card.Img src={blogPosts[0].image} alt="Featured post" />
              <Card.ImgOverlay className="d-flex flex-column justify-content-end bg-dark bg-opacity-25">
                <h3>{blogPosts[0].title}</h3>
                <p>{blogPosts[0].description}</p>
                <small>
                  {blogPosts[0].date} • {blogPosts[0].readTime} <BsBookmark />
                </small>
                <div className="mt-2 d-flex gap-3">
                  <BsFacebook /> <BsTwitter /> <BsLinkedin /> <BsLink45Deg />
                </div>
              </Card.ImgOverlay>
            </Card>
          </Col>

          <Col md={4}>
            <h5 className="text-light">POPULAR</h5>
            {popularPosts.map((post, idx) => (
              <Card key={idx} className="bg-dark text-white border-0 mb-3">
                <Row className="g-0">
                  <Col xs={4}>
                    <Card.Img src={post.image} className="h-100 object-fit-cover" />
                  </Col>
                  <Col xs={8}>
                    <Card.Body className="p-2">
                      <Card.Title className="fs-6 text-light">{post.title}</Card.Title>
                      <small>{post.time}</small>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>

      {/* 🔷 Latest Posts */}
      <Container className="pb-5">
        <h5 className="text-success mb-4">LATEST</h5>
        <Row>
          {blogPosts.slice(1).map((post, idx) => (
            <Col md={6} lg={4} key={idx} className="mb-4">
              <Card className="bg-light text-dark border-0 shadow-sm h-100">
                <Card.Img variant="top" src={post.image} />
                <Card.Body>
                  <h6 className="fw-bold text-success">{post.title}</h6>
                  <p>{post.description}</p>
                  <small>
                    {post.date} • {post.readTime} <BsBookmark />
                  </small>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="text-center">
          <Button variant="success">
            See More <BsArrowRight className="ms-1" />
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default TradingBlogPage;