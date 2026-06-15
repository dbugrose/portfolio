import React from 'react'
import Arrow from './Arrow'
import AnimatedAbout from './AnimatedAbout'


const About = () => {
    return (
        <section id="section2" className="section flex flex-col place-content-center items-center min-h-screen w-full text-[#a767b5] text-center px-15 xl:px-40 lg:px-30 md:px-20">
            <AnimatedAbout/>
            <p className='font-(family-name:--font-groovy-day) text-[clamp(12px,18px,18px)] text-shadow-xs text-center'>
                My web development is focused on building fun, dynamic,
                and accessible applications using modern technologies like
                APIs, Next.js, HTML, CSS, Javascript, and more!
                <br /><br />
                While coding has always fascinated me and I've dabbled here and there throughout my life (shoutout to the modding community of Stardew Valley!), my attendance of Codestack Academy has been what really allowed my coding to flourish and shine.
                Through hard work, determination, and a sense of humor, I've become an accomplished coder in my own right.
                <br /><br />
                Let me show you what I can do!
            </p>                
            {/* <Arrow /> */}
        </section >
    )

}

export default About