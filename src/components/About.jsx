import React from 'react'
import SectionTitle from './SectionTitle'
import Image from '../img/Me.png'
import { IoIosSend } from "react-icons/io";

const About = () => {
  return (
      <section id='about' className='flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-20'>
          <div className='w-full md:w-6/12'>
              <SectionTitle>About Me</SectionTitle>
              <p className='text-md text-gray-600 dark:text-gray-300'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi voluptate odio quam voluptas voluptatibus iste nam, eligendi voluptatum labore ipsum a debitis facere magni ea itaque soluta officia. Voluptas delectus quaerat quae doloremque perferendis nisi corrupti incidunt! Illo ea itaque maxime impedit laborum ad quo alias placeat eos nostrum atque totam, inventore odit eveniet ipsam? Animi obcaecati dicta, ea dolore dignissimos eveniet, impedit doloribus cupiditate quia neque tempore fugit praesentium!</p>
              <a href="mailto:delaricch@gmail.com" className='mt-3 text-md md:text-lg font-regular dar:hover:text-indigo-500 flex items-center justify-center m-5 py-2 px-2 bg-slate-900 dark:bg-white w-40 text-gray-200 dark:text-gray-900 dark:hover:text-indigo-500 rounded-md'>
                  Send Email<IoIosSend />
                  </a>
          </div>
          <div className='w-80 object-cover aspect-square rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 grid place-items-center'>
              <div className='overflow-hidden h-full rotate-12 rounded-xl transition ease-linear duration-500 hover:rotate-0 dark:border-0'>
              <img src={Image} alt="Dela Ricch"/>
              </div>
          </div>
      </section>
  ) 
}

export default About