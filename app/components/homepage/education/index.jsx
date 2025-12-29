// 'use client'
// @flow strict
import { educations } from "@/utils/data/educations";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import lottieFile from '../../../assets/lottie/study.json';
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";

// import dynamic from 'next/dynamic'
// const AnimationLottie = dynamic(() => import('../../helper/animation-lottie'), {
//   ssr: false,
// })

function Education() {
  return (
    <div id="education" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Educations
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-start">
            <div className="w-3/4 h-3/4">
              <AnimationLottie animationPath={lottieFile} />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-6">
              {
                educations.map(education => (
                  <GlowCard key={education.id} identifier={`education-${education.id}`}>
                    <div className="p-3 relative text-white">
                      <Image
                        src="/blur-23.svg"
                        alt="Hero"
                        width={1080}
                        height={200}
                        className="absolute bottom-0 opacity-80"
                      />
                      <div className="flex justify-center">
                        <p className="text-xs sm:text-sm text-[#16f2b3]">
                          {education.duration}
                        </p>
                      </div>
                      <div className="flex items-center gap-x-8 px-3 py-5">
                        <div className="text-violet-500  transition-all duration-300 hover:scale-125">
                          <BsPersonWorkspace size={36} />
                        </div>
                        <div>
                          <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                            {education.title}
                          </p>
                          <p className="text-sm sm:text-base">{education.institution}</p>
                        </div>
                      </div>
                    </div>
                  </GlowCard>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;


// import React from 'react';
// import Image from 'next/image';
// import { BsPersonWorkspace } from 'react-icons/bs';
// import AnimationLottie from '../../helper/animation-lottie';
// import lottieFile from '../../../assets/lottie/study.json';
// import { educations } from '@/utils/data/educations';

// const Education = () => {
//   return (
//     <section
//       id="education"
//       className="relative z-10 my-12 lg:my-24 border-t border-gray-700 bg-gray-900/50"
//     >
//       {/* Background Image */}
//       <Image
//         src="/section.svg"
//         alt="Section Background"
//         width={1572}
//         height={795}
//         className="absolute top-0 -z-10 opacity-50"
//       />

//       {/* Gradient Divider */}
//       <div className="flex justify-center -translate-y-[1px]">
//         <div className="w-3/4">
//           <div className="h-[2px] bg-gradient-to-r from-transparent via-rose-500 to-purple-600" />
//         </div>
//       </div>

//       {/* Section Title */}
//       <div className="flex justify-center my-6 lg:my-10">
//         <div className="flex items-center space-x-4">
//           <span className="w-16 h-[2px] bg-gray-700"></span>
//           <h2 className="bg-gray-800/50 text-white text-xl md:text-2xl font-semibold px-6 py-2 rounded-lg tracking-wide">
//             Education
//           </h2>
//           <span className="w-16 h-[2px] bg-gray-700"></span>
//         </div>
//       </div>

//       {/* Content Grid */}
//       <div className="py-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
//           {/* Lottie Animation */}
//           <div className="flex justify-center items-center">
//             <div className="w-full max-w-md">
//               <AnimationLottie animationPath={lottieFile} />
//             </div>
//           </div>

//           {/* Education Cards */}
//           <div className="flex flex-col gap-6">
//             {educations.map((education) => (
//               <div
//                 key={education.id}
//                 className="relative group bg-gray-800/50 border border-gray-700 rounded-lg shadow-lg p-5 hover:shadow-xl transition-all duration-300 hover:bg-gray-800/70"
//               >
//                 {/* Background Glow Effect */}
//                 <Image
//                   src="/blur-23.svg"
//                   alt="Glow Background"
//                   width={1080}
//                   height={200}
//                   className="absolute bottom-0 opacity-60 -z-10"
//                 />

//                 {/* Card Content */}
//                 <div className="text-center">
//                   <p className="text-sm text-cyan-300 font-medium tracking-wide">
//                     {education.duration}
//                   </p>
//                 </div>
//                 <div className="flex items-center gap-x-6 mt-4">
//                   <div className="text-purple-400 group-hover:scale-110 transition-transform duration-300">
//                     <BsPersonWorkspace size={32} />
//                   </div>
//                   <div className="text-left">
//                     <h3 className="text-lg md:text-xl font-semibold text-white uppercase tracking-tight">
//                       {education.title}
//                     </h3>
//                     <p className="text-sm md:text-base text-gray-300 mt-1">
//                       {education.institution}
//                     </p>
//                   </div>
//                 </div>

//                 {/* Hover Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Education;