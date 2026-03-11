"use client"
import React from "react";

const ScrollArrow = () => {
    const handleScrollUp = () => {

        window.scrollTo({
            top:0,
            behavior: "smooth"
        });
    };

    return (
        <svg 
        className="smooth-float"
        onClick={handleScrollUp}
        viewBox="0 0 24.00 24.00" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" 
            strokeWidth="0">
                </g>
                <g 
                id="SVGRepo_tracerCarrier" 
                strokeLinecap="round" 
                strokeLinejoin="round">
                    </g>
                    <g 
                    id="SVGRepo_iconCarrier"> 
                    <path 
                    d="M12 6V18M12 6L7 11M12 6L17 11" 
                    stroke="#d1a8da" 
                    strokeWidth="2.4" 
                    strokeLinecap="round" 
                    strokeLinejoin="round">
                    </path> </g></svg>
    );
};

export default ScrollArrow;