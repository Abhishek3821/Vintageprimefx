import React, { useState, useEffect } from 'react';
import { CalendarDays, Clock3 } from 'lucide-react';
import { motion } from 'framer-motion';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// ✅ Custom Card and CardContent Components
interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => (
  <div className={`card ${className}`}>{children}</div>
);

const CardContent: React.FC<CardProps> = ({ children, className = '' }) => (
  <div className={`card-body ${className}`}>{children}</div>
);

const webinars = [
  {
    date: 'Wednesday, Jul 23, 2025',
    time: '15:30 - 16:30',
    title: 'The Ultimate Trading Webinar for Beginners',
    description:
      'In this webinar, we will go through basic fundamentals to trading, and a basic guide-through through our facilities. We’ll also cover platform navigation and trade logic.',
  },
  {
    date: 'Wednesday, Jul 23, 2025',
    time: '21:30 - 22:30',
    title: `Unlocking the Power of Technical Analysis: A Weekly Trader's Guide`,
    description:
      'Learn how technical analysis connects with other market analysis forms to make informed trading decisions.',
  },
  {
    date: 'Wednesday, Jul 23, 2025',
    time: '22:30 - 23:30',
    title: 'Inside Circle: Interactive Trading Conversations',
    description:
      'Live, interactive session with real-time market analysis, Q&A, and personalized guidance across asset classes.',
  },
  {
    date: 'Thursday, Jul 24, 2025',
    time: '15:30 - 16:30',
    title: 'The Art of Fundamental Analysis: Investing with Knowledge',
    description:
      'Use news and AvaTrade tools like Market Buzz to understand price impacts, risk tools, and develop smart strategies.',
  },
  {
    date: 'Thursday, Jul 24, 2025',
    time: '21:30 - 22:30',
    title: 'Trading Automatique, Robots et Signaux de Trading avec AvaTrade',
    description:
      "Découvrez comment les technologies d’automatisation peuvent optimiser vos décisions sur les marchés financiers. Aucun prérequis technique n’est nécessaire.",
  },
  {
    date: 'Wednesday, Jul 30, 2025',
    time: '15:30 - 16:30',
    title: 'The Ultimate Trading Webinar for Beginners',
    description:
      'Covering basic concepts, trading logic and AvaTrade platform walkthrough for new traders.',
  },
  {
    date: 'Wednesday, Jul 30, 2025',
    time: '21:30 - 22:30',
    title: `Unlocking the Power of Technical Analysis: A Weekly Trader's Guide`,
    description:
      'Learn how technical analysis connects with other market analysis forms to make informed trading decisions.',
  },
  {
    date: 'Wednesday, Jul 30, 2025',
    time: '22:30 - 23:30',
    title: 'Inside Circle: Interactive Trading Conversations',
    description:
      'Live, interactive session with real-time market analysis, Q&A, and personalized guidance across asset classes.',
  },
];

const LiveTradingWebinars = () => {
  const [date, setDate] = useState<Date | [Date, Date] | undefined>(new Date());
  const [liveDateTime, setLiveDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setLiveDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container py-5 bg-light">
      <div className="row g-5">
        {/* Webinars Section */}
        <div className="col-lg-9">
          <h2 className="display-6 fw-bold text-success mb-3 text-center text-lg-start">
            Our Live Trading Webinars
          </h2>
          <p className="text-secondary text-center text-lg-start">
            Discover AvaTrade’s Live Trading Webinars, where top experts share real-time insights and strategies. Sharpen your skills, master Forex and CFDs, and trade smarter. Register now!
          </p>

          <div className="row row-cols-1 row-cols-md-2 g-4 mt-4">
            {webinars.map((item, i) => (
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                key={i}
              >
                <Card className="rounded-4 shadow border border-success h-100">
                  <CardContent className="p-4">
                    <div className="d-flex align-items-center text-success mb-2">
                      <CalendarDays size={18} className="me-2" />
                      <span className="small fw-medium">{item.date}</span>
                    </div>
                    <div className="d-flex align-items-center text-success mb-2">
                      <Clock3 size={18} className="me-2" />
                      <span className="small">{item.time}</span>
                    </div>
                    <h5 className="fw-semibold text-success">{item.title}</h5>
                    <p className="text-muted small">{item.description}</p>
                    <button className="btn btn-success btn-sm mt-2">Register</button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Calendar Section */}
        <div className="col-lg-3">
          <div className="bg-white shadow rounded-4 p-4 border border-success">
            <h5 className="fw-semibold text-success text-center mb-3">Webinar Calendar</h5>
            <Calendar
              onChange={(value) => {
                if (
                  value instanceof Date ||
                  (Array.isArray(value) && value.length === 2 && value[0] instanceof Date && value[1] instanceof Date)
                ) {
                  setDate(value as Date | [Date, Date]);
                }
              }}
              value={date}
              className="mb-3 w-100"
            />
            <p className="text-center text-secondary small mb-0">
              <strong>Live Time:</strong><br />
              {liveDateTime.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveTradingWebinars;
