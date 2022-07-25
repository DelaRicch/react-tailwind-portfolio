import React from 'react'
import SectionTitle from './SectionTitle'
import WorkItems from './WorkItems'
import works from '../data/works'

const Works = () => {
  return (
    <section id='works' className='py-12'>
        <SectionTitle id='works'>Recent Works</SectionTitle>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            {works.map(work => (
                <WorkItems 
                    key={work.title}
                    imgUrl={work.imgUrl}
                    title={work.title}
                    tech={work.tech}
                ></WorkItems>
            ))}
        </div>
    </section>
  )
}

export default Works