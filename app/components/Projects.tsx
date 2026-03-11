import React from 'react'
import Arrow from './Arrow'
import AnimatedProjects from './AnimatedProjects'
import Cards from './Cards'

const Projects = () => {
    return (
        <section className="section flex justify-center flex-col place-self-center items-center min-h-full w-[clamp(300px,80vw,800px)] text-[#d1a8da] text-center [@media(max-width:850px)]:mt-35">
            <AnimatedProjects />
            <p className='font-(family-name:--font-groovy-day) text-shadow-sm'>
                My portfolio is ever-expanding - here are some of my favorite projects!</p>
                <Cards/>
                <Arrow />

        </section >
    )
}

export default Projects