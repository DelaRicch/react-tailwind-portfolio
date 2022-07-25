import React, { useEffect, useState } from 'react'
import { AiOutlineArrowUp } from "react-icons/ai";

const ScrollButton = () => {

    const [showButton, setShowButton] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setShowButton(true)
            } else {
                setShowButton(false)
            }
        })
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

  return (
    <>
        {showButton && (
                <button onClick={scrollToTop} className='fixed cursor-pointer grid place-items-center bottom-4 right-4 w-10 h-10 rounded-full bg-slate-900 dark:bg-white transition ease-linear hover:scale-110'>
                    <AiOutlineArrowUp className='text-white text-xl dark:text-black transition ease-linear hover:scale-110'/>
                </button>
        )} 
    </>
  )
}

export default ScrollButton