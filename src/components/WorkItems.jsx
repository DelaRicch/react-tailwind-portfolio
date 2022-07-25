import React from 'react'

const WorkItems = ({imgUrl, title, tech}) => {
  return (
    <div className='bg-slate-300 dark:bg-slate-800 rounded-lg overflow-hidden'>
        <img src={imgUrl} alt={title} className='w-full h-60 md:h-78 object-cover transition duration-200 ease-linear hover:scale-105' />
        <div className='text-gray-600 dark:text-gray-200 p-5 w-full'>
            <h3 className='text-lg md:text-xl mb-2 md:mb-3 font-semibold'>{title}</h3>
            <p className='flex flex-wrap flex-row gap-2 items-center justify-start text-xs md:text-sm'>
                {tech.map(item => (
                    <span key={item} className='inline-block px-2 py-1 bg-slate-200 dark:bg-slate-900 rounded-md'>{item}</span>
                ))}
            </p>
        </div>
    </div>
  )
}

export default WorkItems