import React from 'react'
import Arrow from './Arrow'
import AnimatedName from './AnimatedDarcy'


const Hero = () => {
    return (
        <section className="min-h-screen flex justify-center flex-col text-center">
            <h1 className="text-5xl font-(family-name:--font-meow-script) text-shadow-xs">Hi, I'm </h1><br />
            <div className='flex justify-center'><AnimatedName/></div>
            <br />
            <p className="text-2xl text-shadow-xs px-15 xl:px-40 lg:px-30 md:px-20">I'm a Full-Stack Developer building personalized, responsive web applications with a whimsical touch.</p>
            {/* <Arrow /> */}

        </section>
    )
}

export default Hero