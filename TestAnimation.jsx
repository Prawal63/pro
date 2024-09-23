"use client";
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

const TestAnimation = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className='dark:bg-black bg-white dark:text-white text-black duration-300 text-[100px] overflow-hidden'>
            <div>
                <span data-aos="fade-right" data-aos-duration="500" className="animated-letter">A</span>
                <span data-aos="fade-right" data-aos-duration="1000" className="animated-letter">g</span>
                <span data-aos="fade-right" data-aos-duration="1500" className="animated-letter">i</span>
                <span data-aos="fade-right" data-aos-duration="2000" className="animated-letter">l</span>
                <span data-aos="fade-right" data-aos-duration="2500" className="animated-letter">e</span>
            </div>
            <div>
                <span data-aos="fade-right" data-aos-duration="500" className="animated-letter">I</span>
                <span data-aos="fade-right" data-aos-duration="1000" className="animated-letter">n</span>
                <span data-aos="fade-right" data-aos-duration="1500" className="animated-letter">n</span>
                <span data-aos="fade-right" data-aos-duration="2000" className="animated-letter">o</span>
                <span data-aos="fade-right" data-aos-duration="2500" className="animated-letter">v</span>
                <span data-aos="fade-right" data-aos-duration="3000" className="animated-letter">a</span>
                <span data-aos="fade-right" data-aos-duration="4000" className="animated-letter">t</span>
                <span data-aos="fade-right" data-aos-duration="4000" className="animated-letter">i</span>
                <span data-aos="fade-right" data-aos-duration="4500" className="animated-letter">v</span>
                <span data-aos="fade-right" data-aos-duration="5000" className="animated-letter">e</span>
            </div>
            <div>
                <span data-aos="fade-right" className="animated-letter">C</span>
                <span data-aos="fade-right" className="animated-letter">u</span>
                <span data-aos="fade-right" className="animated-letter">l</span>
                <span data-aos="fade-right" className="animated-letter">t</span>
                <span data-aos="fade-right" className="animated-letter">u</span>
                <span data-aos="fade-right" className="animated-letter">r</span>
                <span data-aos="fade-right" className="animated-letter">e</span>
                <span data-aos="fade-right" className="animated-letter">d</span>
            </div>
            <style jsx>{`
                .animated-letter {
                    display: inline-block; /* Necessary for transformation */
                    opacity: 0; /* Start invisible */
                    transform: rotate(0deg); /* Initial rotation */
                    transition: opacity 0.5s ease, transform 0.5s ease; /* Smooth transitions */
                }

                [data-aos] {
                    opacity: 1; /* Fade in when AOS triggers */
                    transform: rotate(20deg); /* Rotate 20 degrees */
                }
            `}</style>
        </div>
    );
}

export default TestAnimation;
