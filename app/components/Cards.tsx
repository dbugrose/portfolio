import React from 'react'

// gsap.set(".card", { transformStyle: "preserve-3d", transformPerspective: 1000 });
// gsap.set(".cardBack", { rotationY: -180 });

// // Create timeline
// const tl = gsap.timeline({ paused: true })
//   .to(".cardFront", { duration: 1, rotationY: 180 })
//   .to(".cardBack", { duration: 1, rotationY: 0 }, 0); // 0 = start at same time

// // Hover triggers
// const card = document.querySelector(".card");
// if (card)
// {card.addEventListener("mouseenter", () => tl.play());
// card.addEventListener("mouseleave", () => tl.reverse());
// }

const Cards = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-5'>
<div className="flip-card bg-[#d1a8da]">
  <div className="flip-card-inner bg-[#d1a8da] text-white">
    <div className="flip-card-front flex flex-col text-center justify-center items-center">
      <p>Pokemon Generator</p>
      <br/>
      <p>Front-end project using HTML, CSS, Javascript, and fetching from an existing API</p>
    </div>
    <div className="flip-card-back h-full w-full overflow-y-scroll font-(family-name:--font-meow-script)!" >
      <img src="/assets/pokemon.png" alt="pokemon generator" />
    </div>
  </div>
</div>
<div className="flip-card bg-[#d1a8da]">
  <div className="flip-card-inner bg-[#d1a8da] text-white">
    <div className="flip-card-front flex flex-col text-center justify-center items-center">
      <p>Rock Paper Scissors Lizard Spock</p><br/>
    <p>Full-stack project using HTML, CSS, Javascript, and an API built from scratch</p>
    </div>
    <div className="flip-card-back h-full w-full overflow-y-scroll font-(family-name:--font-meow-script)!" >
      <img src="/assets/rpsls.png" alt="pokemon generator" />
    </div>
  </div>
</div>
<div className="flip-card bg-[#d1a8da]">
  <div className="flip-card-inner bg-[#d1a8da] text-white">
    <div className="flip-card-front flex flex-col text-center justify-center items-center">
      <p>All For One Rebuild</p><br/>
    <p>A Full-stack project using Next.JS featuring 10 minigames (each with a custom-built API)</p>
    </div>
    <div className="flip-card-back h-full w-full overflow-y-scroll font-(family-name:--font-meow-script)!" >
      <img src="/assets/image.png" alt="pokemon generator" />
    </div>
  </div>
</div>
</div>



  )
}

export default Cards