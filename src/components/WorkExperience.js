import { DocumentIcon} from '@heroicons/react/solid'
import React from 'react'
import { workExperience } from '../data'

export default function WorkExperience() {
  return (
    <section id = 'workExperience'>
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <DocumentIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-xl font-medium title-font mb-4 text-white">
            Work Experience
          </h1>
        </div>
        <div className='flex flex-wrap -m-4'>
        {workExperience.map((experience) => (
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-80 hover:opacity-100 mb-5">
              <h1 className="title-font text-lg font-medium text-white mb-3 ">
                {experience.company}
              </h1>
              <p className="text-md text-white text-left">Tech Stack- {experience.technology}</p>
              {/* <p className="text-md text-white text-left" >{wo}</p> */}
              <ul className="list-disc pl-5 text-md text-white text-left">
                {
                    experience.description.map((point, index)=>(
                        <li key ={index}>{point}</li>
                    ))
                }
              </ul>
            </div>
          ))}
        </div>
        </div>
        
    </section>
  )
}
