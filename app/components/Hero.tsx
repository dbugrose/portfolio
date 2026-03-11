import React from 'react'
import Arrow from './Arrow'
import AnimatedDarcy from './AnimatedDarcy'
import AnimatedName from './AnimatedDarcy'


const Hero = () => {
    return (
        <section className="min-h-screen flex justify-center items-center flex-col text-center">
            <h1 className="text-5xl font-(family-name:--font-meow-script) text-shadow-xs">Hi, I'm </h1><br />
            <AnimatedName/>
            <br />
            <p className="text-2xl text-shadow-xs">I'm a Full-Stack Developer building personalized, responsive web applications with a whimsical touch.</p>
            <Arrow />

        </section>
    )
}

export default Hero