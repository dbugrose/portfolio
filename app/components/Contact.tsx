import React from 'react'
import AnimatedContact from './AnimatedContact'
import ArrowUp from './ArrowUp'

const Contact = () => {
  return (
        <div className='section flex justify-center flex-col w-full text-[#d1a8da] text-center'>
        <AnimatedContact/>
        <p className='text-[clamp(18px,2vw,2vw)]'> <span className='text-[clamp(18px,3vw,3vw)] font-(family-name:--font-meow-script) text-shadow-xs text-shadow-[#4f1254]'> Email:</span> darcy.ophelia.rose@gmail.com</p>
        <p className='text-[clamp(18px,2vw,2vw)]'><span className='text-[clamp(18px,3vw,3vw)] font-(family-name:--font-meow-script) text-shadow-xs text-shadow-[#4f1254]'>GitHub:</span> github.com/dbugrose</p>
        <p className='text-[clamp(18px,2vw,2vw)]'><span className='text-[clamp(18px,3vw,3vw)] font-(family-name:--font-meow-script) text-shadow-xs text-shadow-[#4f1254]'>LinkedIn:</span> Pending</p>
        <p className='text-[clamp(18px,2vw,2vw)]'><span className='text-[clamp(18px,3vw,3vw)] font-(family-name:--font-meow-script) text-shadow-xs text-shadow-[#4f1254]'>Phone Number:</span> Pending</p>

  
      <ArrowUp/>
      </div>
  
  )
}

export default Contact