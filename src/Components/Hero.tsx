import React from 'react';

import Image from 'next/image';
import './Hero.css'; // Custom CSS file import

const Hero = () => {
  return (
    <div id="hero" className="hero-container">
      
      <div className="hero-grid">
        <div className="hero-image-wrapper">
          <Image
            src="/portfolio.png"
            alt="my image"
            height={650}
            width={450}
            className="hero-image"
          />
        </div>
        <div className="hero-text">
          <div>
            <p data-aos="zoom-in-up">I am</p>
            <p data-aos="zoom-in-up">Sana</p>
            <p data-aos="zoom-in-up">Akhlaq</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
