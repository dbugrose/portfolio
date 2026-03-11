import React from 'react'
import Arrow from './Arrow'
import AnimatedAbout from './AnimatedAbout'


const About = () => {
    return (
        <section className="section flex justify-center flex-col place-self-center items-center min-h-screen w-[clamp(300px,80vw,800px)] text-[#d1a8da] text-center">
            <AnimatedAbout />
            <p className='font-(family-name:--font-groovy-day) text-shadow-sm'>
                My web development is focused on building fun, dynamic,
                and accessible applications using modern technologies like
                APIs, Next.js, HTML, CSS, Javascript, and more!
                <br /><br />
                While coding has always fascinated me and I've dabbled here and there throughout my life (shoutout to the modding community of Stardew Valley!), my attendance of Codestack Academy has been what really allowed my coding to flourish and shine.
                Through hard work, determination, and a sense of humor, I've become an accomplished coder in my own right.
                <br /><br />
                Let me show you what I can do!
            </p>
            <h1 className="text-5xl font-(family-name:--font-meow-script) my-1 lg:my-5 md:my-2 text-shadow-xs">Proficiencies</h1><br />
                <div className='bg-[#ffffffaa] rounded-md flex flex-row overflow-x-scroll m-x-5 border-2 border-[#b18ad8] w-[clamp(300px,80vw,500px)] space-x-5'>

                    <img src="/assets/azure-plain.png" alt="" width="100px" height="100px" />
                    <img src="/assets/azuresqldatabase-original.png" alt="" width="100px" height="100px" />
                    <img src="/assets/bootstrap-original.png" alt="" width="100px" height="100px" />
                    <img src="/assets/csharp-original.png" alt="" width="100px" height="100px" />
                    <img src="/assets/tailwindcss-original.png" alt="" width="100px" height="100px" />
                    <img src="/assets/vscode-original.png" alt="" width="100px" height="100px" />
                    <img src="/assets/typescript-original.png" alt="" width="100px" height="100px" />
                    <img src="/assets/vercel-original.png" alt="" width="100px" height="100px" />
                    <img src="/assets/entityframeworkcore-original.png" alt="" width="100px" height="100px" />
                    <img src="/assets/figma-original.png" alt="" width="100px" height="100px" />
                    <img src="/assets/github-original.png" alt="" width="100px" height="100px" />
                    <img src="/assets/html5-original.png" alt="" width="100px" height="100px" />
                    <img src="/assets/javascript-original.png" alt="" width="100px" height="100px" />
                    <img src="/assets/postman-original.png" alt="" width="100px" height="100px" />
                    <img src="/assets/nextjs-original.png" alt="" width="100px" height="100px" />
                    <img src="/assets/slack-original.png" alt="" width="100px" height="100px" />
                    <img src="/assets/sqlite-original.png" alt="" width="100px" height="100px" />
                    <img src="/assets/swagger-original.png" alt="" width="100px" height="100px" />
                </div>
            <Arrow />

        </section >
    )

}

export default About