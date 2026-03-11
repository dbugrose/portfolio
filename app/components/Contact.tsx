import React from 'react'
import AnimatedContact from './AnimatedContact'
import ArrowUp from './ArrowUp'

const Contact = () => {
  return (
        <section className="section flex justify-center flex-col place-self-center items-center min-h-screen w-[clamp(300px,80vw,800px)] text-[#d1a8da] text-center">
            <AnimatedContact/>
        <div><section className="">
        <p className='text-[clamp(26px,2vw,2vw)]'>Email: darcy.ophelia.rose@gmail.com</p>
        <p className='text-[clamp(26px,2vw,2vw)]'>GitHub: github.com/dbugrose</p>
        <p className='text-[clamp(26px,2vw,2vw)]'>LinkedIn: Pending</p>
        <p className='text-[clamp(26px,2vw,2vw)]'>Phone Number: Pending</p>

      </section>
      </div>
  
      <ArrowUp/>
        </section >
  
  )
}

export default Contact