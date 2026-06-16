"use client";


import React from 'react'
import Arrow from './Arrow'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "flowbite-react";
import { useState } from "react";

const Resume = () => {
    const [openModal, setOpenModal] = useState(false);
  return (
    <section className='flex justify-center items-center min-w-screen min-h-screen'>
        {/* <Arrow/> */}
      <Button onClick={() => setOpenModal(true)} className='bg-[#d1a8da]! text-[#ffffff] focus:hidden transition-transform duration-200 scale-300 hover:scale-400 hidden min-[850px]:block'>View Resume</Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)} className='bg-[#d1a8da55]!'>
        <ModalHeader className='bg-[#d1a8da]!'>Resume</ModalHeader>
        <ModalBody className='bg-[#d1a8da]!'>
        <iframe src="https://docs.google.com/document/d/e/2PACX-1vRq-U2QKNc8MafQjzAoQ4dRs22FOAwR-b2MncTZbREf6rf6Opi2pVOecY3A60qIJL2hBEr4Zgy7nzbg/pub?embedded=true" width="100%" height="auto" className="hidden min-[850px]:block mb-10 w-full h-full"></iframe>

        </ModalBody>
        <ModalFooter className='bg-[#d1a8da]!'>
          <Button onClick={() => setOpenModal(false)} className='bg-[#ffdcc6]! text-[#653f6d] focus:hidden'>Close</Button>
        </ModalFooter>
      </Modal>
</section>


  )
}

export default Resume