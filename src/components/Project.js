import React from "react";
import { CodeIcon, DocumentIcon } from "@heroicons/react/solid";
import { projects } from "../data";
export default function Project() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <DocumentIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-xl font-medium title-font mb-4 text-white">
            Projects 
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-80 hover:opacity-100 mb-5">
              <h1 className="title-font text-lg font-medium text-white mb-3 ">
                {project.title}
              </h1>
              <p className="text-md text-white text-left">Tech Stack- {project.technology}</p>
              {/* <p className="text-md text-white text-left" >{project.description}</p> */}
              <ul className="list-disc pl-5 text-md text-white text-left">
                {
                    project.description.map((point, index)=>(
                        <li key ={index}>{point}</li>
                    ))
                }
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
