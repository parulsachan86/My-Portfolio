// @flow strict

import * as React from 'react';

function ProjectCard({ project }) {

  return (
    // <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full">
    //   <div className="flex flex-row">
    //     <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
    //     <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
    //   </div>
    //   <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
    //     <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
    //       <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
    //       <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
    //       <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
    //     </div>
    //     <p className="text-center ml-3 text-[#16f2b3] text-base lg:text-xl">
    //       {project.name}
    //     </p>
    //   </div>
    //   <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
    //     <code className="font-mono text-xs md:text-sm lg:text-base">
    //       <div className="blink">
    //         <span className="mr-2 text-pink-500">const</span>
    //         <span className="mr-2 text-white">project</span>
    //         <span className="mr-2 text-pink-500">=</span>
    //         <span className="text-gray-400">{'{'}</span>
    //       </div>
    //       <div>
    //         <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
    //         <span className="text-gray-400">{`'`}</span>
    //         <span className="text-amber-300">{project.name}</span>
    //         <span className="text-gray-400">{`',`}</span>
    //       </div>

    //       <div className="ml-4 lg:ml-8 mr-2">
    //         <span className=" text-white">tools:</span>
    //         <span className="text-gray-400">{` ['`}</span>
    //         {
    //           project.tools.map((tag, i) => (
    //             <React.Fragment key={i}>
    //               <span className="text-amber-300">{tag}</span>
    //               {
    //                 project.tools?.length - 1 !== i &&
    //                 <span className="text-gray-400">{`', '`}</span>
    //               }
    //             </React.Fragment>
    //           ))
    //         }
    //         <span className="text-gray-400">{"],"}</span>
    //       </div>
    //       <div>
    //         <span className="ml-4 lg:ml-8 mr-2 text-white">myRole:</span>
    //         <span className="text-orange-400">{project.role}</span>
    //         <span className="text-gray-400">,</span>
    //       </div>
    //       <div className="ml-4 lg:ml-8 mr-2">
    //         <span className="text-white">Description:</span>
    //         <span className="text-cyan-400">{' ' + project.description}</span>
    //         <span className="text-gray-400">,</span>
    //       </div>
    //       <div><span className="text-gray-400">{`};`}</span></div>
    //     </code>
    //   </div>
    // </div>
      <div className="relative group bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-700 rounded-xl shadow-lg w-full max-w-2xl mx-auto overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      {/* Header Gradient Bar */}
      <div className="flex flex-row">
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-rose-500 to-purple-600"></div>
        <div className="h-[2px] w-full bg-gradient-to-r from-purple-600 to-transparent"></div>
      </div>

      {/* Header with Title and Decorative Dots */}
      <div className="relative px-6 py-4 bg-gray-800/50 border-b border-gray-700">
        <div className="flex items-center space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-3 w-3 rounded-full bg-red-500 shadow-md"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500 shadow-md"></div>
          <div className="h-3 w-3 rounded-full bg-green-500 shadow-md"></div>
        </div>
        <h2 className="ml-12 text-lg md:text-xl font-bold text-cyan-300 tracking-wide text-center group-hover:text-cyan-200 transition-colors duration-300">
          {project.name}
        </h2>
      </div>

      {/* Content Section */}
      <div className="px-6 py-6 space-y-4">
        {/* Description */}
        <div>
          <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Description</h3>
          <p className="mt-2 text-gray-300 text-sm md:text-base leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Tools */}
        <div>
          <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Technologies</h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {project.tools.map((tool, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-indigo-900/50 text-indigo-300 text-sm rounded-full border border-indigo-700/50"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Role */}
        {/* <div>
          <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">My Role</h3>
          <p className="mt-2 text-orange-400 text-sm md:text-base">{project.role}</p>
        </div> */}

        {/* Key Features */}
        <div>
          <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Key Features</h3>
          <ul className="mt-2 space-y-2 text-gray-300 text-sm md:text-base">
            {project.keyFeatures.map((feature, i) => (
              <li key={i} className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Impact */}
        <div>
          <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Impact</h3>
          <p className="mt-2 text-gray-300 text-sm md:text-base leading-relaxed">
            {project.impact}
          </p>
        </div>

        {/* Links (if available) */}
        {(project.github || project.demo) && (
          <div className="flex space-x-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors duration-300"
              >
                View Code
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors duration-300"
              >
                Live Demo
              </a>
            )}
          </div>
        )}
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
};

export default ProjectCard;