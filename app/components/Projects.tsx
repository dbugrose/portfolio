import React from 'react'
import Arrow from './Arrow'
import AnimatedProjects from './AnimatedProjects'
import Cards from './Cards'

const Projects = () => {
    return (
        <section id="section3" className='block'>
        <div className='flex flex-col justify-center items-center [@media(max-width:850px)]:mt-35 [@media(max-width:850px)]:mb-50'>
        <section className="section flex justify-center flex-col place-self-center items-center min-h-full w-[clamp(300px,80vw,800px)] text-[#d1a8da] text-center [@media(max-width:850px)]:mt-35 [@media(max-width:850px)]:mb-50">
            <AnimatedProjects />
            <p className='font-(family-name:--font-groovy-day) text-[clamp(12px,18px,18px)] text-shadow-xs text-shadow-[#4f1254]'>
                My portfolio is ever-expanding - here are some of my favorite projects!</p>
                <Cards/>
        </section >

        </div>
        </section>
    )
}

export default Projects