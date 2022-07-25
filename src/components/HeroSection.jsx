import React from 'react'
import Resume from '../assets/DelaRicchResume.pdf'

const HeroSection = () => {
  return (
    <section id='hero' className="flex pt-40 items-center justify-center flex-col py-20">
        <div className="text-center">
            <h1 className='text-2l md:text-4xl mb-1 md:mb-3 text-indigo-600 font-semibold dark:text-indigo-500'>Hello, I am Dela Ricch</h1>
            <p className='text-md md:text-xl max-w-md mb-3 text-gray-800 dark:text-gray-300'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima accusantium ullam libero iure? Corporis, similique!</p>
            <a href="#works" className="inline-block px-8 py-3 mb-3 md:mb-0 border-transparent text-base font-medium rounded-md text-white bg-indigo-600 transition-all duration-2500 ease-in-out hover:bg-indigo-800 md:text-md">Recent Works</a>
            <a href={Resume} download='Dela Ricch Resume.pdf' className='inline-block px-8 py-3 border-transparent text-base font-medium rounded-md text-white bg-indigo-600 transition-all duration-2500 ease-in-out hover:bg-indigo-800 md:text-md ml-2'>Download Resume</a>
        </div>
    </section>  
  )
}

export default HeroSection