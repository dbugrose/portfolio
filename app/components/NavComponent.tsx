"use server"

import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import Link from "next/link";

import React from 'react'

const NavComponent = async () => {
return (
    <>
    <Navbar fluid rounded className="fixed w-full bg-[#d1a8da]!">
      <NavbarBrand>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Darcy Rose, Web Developer</span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="#" className="text-white!">
          Home
        </NavbarLink>
                <NavbarLink href="#about" className="text-white!">
          About
        </NavbarLink>
                        <NavbarLink href="#proficiencies" className="text-white!">
          Proficiencies
        </NavbarLink>
                <NavbarLink href="#projects" className="text-white!">
          Projects
        </NavbarLink>
                <NavbarLink href="#trivia" className="text-white! hidden min-[1100]:block mb-10">
          Trivia
        </NavbarLink>
                <NavbarLink href="#resume" className="text-white! hidden min-[1100]:block mb-10">
          Resume
        </NavbarLink>
                <NavbarLink href="#contact" className="text-white!">
          Contact
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
    </>
  ); 
}

export default NavComponent;