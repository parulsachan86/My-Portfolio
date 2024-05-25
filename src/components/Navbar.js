import React from 'react'

export default function Navbar() {
  return (
     <div className='bg-gray-800 md:sticky top-0 z-10'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'> 
      <div className='title-font font-medium text-white mb-4 md:mb-0'>
        <a href = '#about'>
          Parul Sachan
        </a>
        <a href ='#workExperience' className='mr-5 ml-4 hover:text-white'>
          Work Experience
        </a>
        <a href ='#projects' className='mr-5  hover:text-white'>
          Projects
        </a>
        <a href ='#skills' className='mr-5  hover:text-white'>
          Skills
        </a>
        <a href ='#contact' className='mr-5  hover:text-white'>
          Contact
        </a>
      </div>
      </div>
       </div>
  )
}
