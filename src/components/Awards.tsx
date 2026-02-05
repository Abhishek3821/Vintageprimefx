
import React from 'react';
// Import images (replace with actual image paths if different)
import AwardMobile from '../assets/images/award-mobile.png';
import AwardBroker from '../assets/images/award-trusted.png';
import AwardTrusted from '../assets/images/award-broker.png';

const Awards: React.FC = () => {
  const awards = [
    {
      title: 'Best Mobile Trading Platform 2025',
      image: AwardMobile,
    },
    {
      title: 'Top Broker of the Year',
      image: AwardBroker,
    },
    {
      title: 'Most Trusted Platform',
      image: AwardTrusted,
    },
  ];

  return (
    <section className="py-10 text-white bg-gradient-to-br from-black to-black">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center font-bold mb-10 text-3xl">Our Achievements</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
          {awards.map((award, index) => (
            <div key={index} className="bg-black text-center h-full border-0 shadow-sm rounded-xl bg-opacity-5 transition-transform duration-300 hover:scale-105 max-w-sm">
              <img
                src={award.image}
                alt={award.title}
                className="p-4 w-full"
                style={{ height: '180px', objectFit: 'contain' }}
              />
              <div className="p-4">
                <h3 className="font-semibold text-light text-lg">{award.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
