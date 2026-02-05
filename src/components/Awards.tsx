// import React from 'react';
// // Ensure these paths are correct in your project structure
// import AwardMobile from '../assets/images/award-mobile.png';
// import AwardBroker from '../assets/images/award-trusted.png';
// import AwardTrusted from '../assets/images/award-broker.png';

// interface AwardItem {
//   title: string;
//   image: string;
// }

// const Awards: React.FC = () => {
//   const awards: AwardItem[] = [
//     {
//       title: 'Best Mobile Trading Platform 2025',
//       image: AwardMobile,
//     },
//     {
//       title: 'Top Broker of the Year',
//       image: AwardBroker,
//     },
//     {
//       title: 'Most Trusted Platform',
//       image: AwardTrusted,
//     },
//   ];

//   return (
//     // FIX 1: Changed gradient from black-to-black to gray-to-black for visual depth
//     <section className="py-16 text-white bg-gradient-to-br from-gray-900 to-black">
//       <div className="max-w-6xl mx-auto px-4">
//         <h2 className="text-center font-bold mb-12 text-3xl md:text-4xl">
//           Our Achievements
//         </h2>
        
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
//           {awards.map((award, index) => (
//             <div 
//               key={index} 
//               // FIX 2: Changed bg to white/5 (glass effect) and added a border so cards are visible against dark bg
//               className="w-full max-w-sm bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:shadow-cyan-500/20"
//             >
//               <div className="flex flex-col h-full p-6 items-center text-center">
//                 {/* FIX 3: Replaced inline styles with Tailwind classes */}
//                 <img
//                   src={award.image}
//                   alt={award.title}
//                   className="w-full h-[180px] object-contain mb-6 drop-shadow-md"
//                 />
                
//                 {/* FIX 4: Replaced invalid 'text-light' with 'text-gray-200' and 'font-medium' */}
//                 <h3 className="text-xl font-medium text-gray-200 mt-auto">
//                   {award.title}
//                 </h3>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Awards;