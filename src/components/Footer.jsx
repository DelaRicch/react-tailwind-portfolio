import React from 'react'

const Footer = () => {
  return (
    <footer className='py-5 bg-slate-400 dark:bg-slate-800 text-center text-gray-900 dark:text-gray-100 rounded-t-lg flex gap-10 px-5 justify-center flex-col md:flex-row'>
        <a href="#hero" className='block text-xl md:text-2xl'
        >Dela Ricch</a>
        <a href="https://delaricch.netlify.app/" target='_blank' className='hover:text-indigo-600 hover:overline'>Visit Official Page</a>
        <p className='tracking-normal md:tracking-widest'>
            Dela Ricch Sample Portfolio &copy; 2021 - {new Date().getFullYear()} || All Rights Reserved  
        </p>
    </footer>
  )
}

export default Footer