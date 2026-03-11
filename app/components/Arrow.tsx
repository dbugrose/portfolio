"use client"
import React from "react";

const ScrollArrow = () => {
    const handleScroll = () => {
        const nextSection = window.scrollY + window.innerHeight;

        window.scrollTo({
            top:nextSection,
            behavior: "smooth"
        });
    };

    return (
        <svg
            className="smooth-float"
            onClick={handleScroll}
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
};

export default ScrollArrow;