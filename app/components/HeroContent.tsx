"use client"

import React, { useEffect } from 'react';
import Typed from 'typed.js';

export default function HeroContent() {
  useEffect(() => {
    const options = {
      strings: [
        "Welcome to <br/><span class='text-red-500'>Dr. Nagendra Pratap Singh</span>&apos;s<br/>Portfolio"
      ],
      typeSpeed: 60,
      backSpeed: 0,
      backDelay: 0,
      startDelay: 500,
      showCursor: true,
      contentType: 'html'
    };

    const typed = new Typed('.typed-element', options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      {/* Professor Hero Section */}
      <div className="overflow-hidden">
        {/* Professor Hero Content */}
        <div className="flex flex-col lg:flex-row space-y-16 lg:space-y-0 text-center lg:text-left container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-0 lg:pb-16">
          <div className="lg:w-1/2 lg:flex lg:items-center">
            <div>
              <div className=''>
                <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
                  <span className="typed-element"></span>
                </h1>
              </div>
              <h2 className="text-lg md:text-xl md:leading-relaxed font-medium text-gray-300">
                An experienced educator specializing in <span className="text-red-500">Theory of Computation</span> with <span className="text-red-500">15+</span> years of teaching experience. Currently I am Assistant Professor at <span className="text-red-500">Dr. BR Ambedkar National Institute of Technology, Jalandhar</span>.
                Explore the sections below to learn more about my work and contributions.
              </h2>
              <div className="flex flex-col sm:flex-row sm:items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-2 pt-10 pb-16">
                <a href="#about" className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-6 py-4 leading-6 border-red-500 text-red-500 hover:text-white hover:bg-red-700 hover:border-red-800 focus:ring focus:ring-red-500 focus:ring-opacity-50 active:text-white active:border-red-500">
                  <span>About Me</span>
                </a>

              </div>
            </div>
          </div>
          <div className="lg:w-1/2 lg:ml-16 lg:flex lg:justify-center lg:items-center">
            <div className="lg:w-max mx-5 relative lg:absolute lg:top-48">
              <img src="/hero.jpeg" alt="Professor Image" className="relative mx-auto " />
            </div>
          </div>

        </div>
        {/* END Professor Hero Content */}
      </div>
      {/* END Professor Hero Section */}
    </>
  )
}
