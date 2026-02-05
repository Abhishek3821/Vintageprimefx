import React from 'react';

interface Course {
  title: string;
  time: string;
  tag?: string;
  label?: string;
  type: string;
  price: string;
  image: string;
}

const courses: Course[] = [
  {
    title: "Start Trading Now… Quick & Dirty",
    time: "80 minutes",
    tag: "HOT",
    label: "FEATURED",
    type: "All Assets Trading Courses",
    price: "Free",
    image: "/images/course1.jpg"
  },
  {
    title: "Trading Platforms Crash-Course",
    time: "205 minutes",
    tag: "HOT",
    type: "All Assets Trading Courses",
    price: "Free",
    image: "/images/course2.jpg"
  },
  {
    title: "Forex, Cryptos & Commodities",
    time: "41 minutes",
    tag: "NEW",
    type: "Forex Trading Courses",
    price: "Free",
    image: "/images/course3.jpg"
  },
  {
    title: "Advanced Trading Techniques",
    time: "33 minutes",
    label: "FEATURED",
    type: "All Assets Trading Courses",
    price: "Free",
    image: "/images/course4.jpg"
  },
  {
    title: "Introduction to Technical Analysis",
    time: "46 minutes",
    type: "All Assets Trading Courses",
    price: "Free",
    image: "/images/course5.jpg"
  },
  {
    title: "Online Trading Strategies",
    time: "15 minutes",
    type: "All Assets Trading Courses",
    price: "Free",
    image: "/images/course6.jpg"
  },
  {
    title: "Trading Safely: Risk Management",
    time: "51 minutes",
    tag: "SPECIAL",
    type: "All Assets Trading Courses",
    price: "Free",
    image: "/images/course7.jpg"
  },
  {
    title: "Advanced Technical Analysis",
    time: "34 minutes",
    tag: "HOT",
    type: "All Assets Trading Courses",
    price: "Free",
    image: "/images/course8.jpg"
  }
];

const RecentCoursesSlider: React.FC = () => {
  return (
    <section className="container my-5">
      <h2 className="mb-4 fw-bold">Recent courses</h2>
      <div className="course-slider-rtl">
        {courses.map((course, index) => (
          <div className="card course-card" key={index}>
            <div className="position-relative">
              <img src={course.image} className="card-img-top" alt={course.title} />
              {course.label && <span className="badge bg-success position-absolute top-0 start-0 m-2">{course.label}</span>}
              {course.tag && (
                <span className={`badge position-absolute top-0 end-0 m-2 ${course.tag === "HOT" ? "bg-danger" : course.tag === "NEW" ? "bg-primary" : "bg-warning text-dark"}`}>
                  {course.tag}
                </span>
              )}
            </div>
            <div className="card-body">
              <p className="text-muted small mb-1">{course.type}</p>
              <h6 className="card-title">{course.title}</h6>
              <div className="d-flex justify-content-between small mt-2">
                <span><i className="bi bi-clock me-1"></i>{course.time}</span>
                <strong>{course.price}</strong>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentCoursesSlider;
