"use client"
import React, { useEffect, useRef } from "react";

const ScrollArrow = () => {
  const sectionsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    sectionsRef.current = Array.from(document.querySelectorAll('section[id]'));
  }, []);

  const scrollToNextSection = () => {
    const currentScrollPosition = window.scrollY || document.documentElement.scrollTop;
    let nextSection: HTMLElement | undefined;

    for (const section of sectionsRef.current) {
      if (section.offsetTop > currentScrollPosition + 1) {
        nextSection = section;
        break;
      }
    }

    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

    return (
        <svg
            className="smooth-float"
            onClick={scrollToNextSection}
            width="196px"
            height="196px"
            viewBox="0 0 24.00 24.00"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#d1a8da">
            <g id="SVGRepo_bgCarrier"
                strokeWidth="0">
            </g>
            <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round">
            </g>
            <g id="SVGRepo_iconCarrier">
                <path
                    d="M12 6V18M12 18L7 13M12 18L17 13"
                    stroke="#d1a8da"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                </path>
            </g>
        </svg>
    );
}

export default ScrollArrow;