import React from 'react'
import Arrow from './Arrow'

const Cards = () => {
  return (
    <section className='flex flex-col items-center justify-center'>
      <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-5 items-center justify-center'>
        <a href="https://yellow-river-0af2dd21e.6.azurestaticapps.net/" target="_blank"><div className="flip-card bg-[#d1a8da]">
          <div className="flip-card-inner bg-[#d1a8da] text-white shadow-[#4f1254] shadow-lg">
            <div className="flip-card-front flex flex-col text-center justify-center items-center shadow-[#4f1254] shadow-lg">
              <p className="font-(family-name:--font-meow-script) text-3xl text-shadow-sm text-shadow-[#4f1254]">Pokemon Generator</p>
              <br />
              <p>Front-end project using HTML, CSS, Javascript, and fetching from an existing API</p>
            </div>
            <div className="flip-card-back h-full w-full overflow-y-scroll font-(family-name:--font-meow-script)!" >
              <img src="/assets/pokemon.png" alt="pokemon generator" />
            </div>
          </div>
        </div></a>
        <a href="https://kind-glacier-02d65421e.2.azurestaticapps.net/" target="_blank"><div className="flip-card bg-[#d1a8da] ">
          <div className="flip-card-inner bg-[#d1a8da] text-white shadow-[#4f1254] shadow-lg">
            <div className="flip-card-front flex flex-col text-center justify-center items-center shadow-[#4f1254] shadow-lg">
              <p className="font-(family-name:--font-meow-script) text-3xl text-shadow-sm text-shadow-[#4f1254]">Rock Paper Scissors Lizard Spock</p><br />
              <p>Full-stack project using HTML, CSS, Javascript, and an API built from scratch</p>
            </div>
            <div className="flip-card-back h-full w-full overflow-y-scroll font-(family-name:--font-meow-script)!" >
              <img src="/assets/rpsls.png" alt="pokemon generator" />
            </div>
          </div>
        </div></a>
        <a href="https://lemon-beach-0940c471e.2.azurestaticapps.net/" target="_blank"><div className="flip-card bg-[#d1a8da]  ">
          <div className="flip-card-inner bg-[#d1a8da] text-white shadow-[#4f1254] shadow-lg">
            <div className="flip-card-front flex flex-col text-center justify-center items-center shadow-[#4f1254] shadow-lg">
              <p className="font-(family-name:--font-meow-script) text-3xl text-shadow-sm text-shadow-[#4f1254]">All For One Rebuild</p><br />
              <p>A Full-stack project using Next.JS featuring 10 minigames (each with a custom-built API)</p>
            </div>
            <div className="flip-card-back h-full w-full overflow-y-scroll font-(family-name:--font-meow-script)!" >
              <img src="/assets/image.png" alt="pokemon generator" />
              <div className='[@media(max-width:850px)]:mt-35'>
              </div>
            </div>
          </div>
        </div></a>
      </div>
      <Arrow />

    </section>


  )
}

export default Cards