import React from 'react'
import AnimatedContact from './AnimatedContact'
import ArrowUp from './ArrowUp'

const Contact = () => {
  return (
        <section className="section flex justify-center flex-col place-self-center items-center min-h-screen w-[clamp(300px,80vw,800px)] text-[#d1a8da] text-center">
            <AnimatedContact/>
        <div><section className="">
        <p className='text-[clamp(26px,2vw,2vw)]'> <span className='text-5xl font-(family-name:--font-meow-script) text-shadow-xs'> Email:</span> darcy.ophelia.rose@gmail.com</p>
        <p className='text-[clamp(26px,2vw,2vw)]'><span className='text-5xl font-(family-name:--font-meow-script) text-shadow-xs'>GitHub:</span> github.com/dbugrose</p>
        <p className='text-[clamp(26px,2vw,2vw)]'><span className='text-5xl font-(family-name:--font-meow-script) text-shadow-xs'>LinkedIn:</span> Pending</p>
        <p className='text-[clamp(26px,2vw,2vw)]'><span className='text-5xl font-(family-name:--font-meow-script) text-shadow-xs'>Phone Number:</span> Pending</p>

      </section>
      </div>
  
      <ArrowUp/>
        </section >
  
  )
}

export default Contact