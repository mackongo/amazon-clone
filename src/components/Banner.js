import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20"/>
      <Carousel
        autoplay={true}
        infiniteLoop={true}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={1000}>

        <div>
          <Image loading="lazy" src="https://links.papareact.com/gi1" />
        </div>

        <div>
          <Image loading="lazy" src="https://links.papareact.com/6ff" />
        </div>

        <div>
          <Image loading="lazy" src="https://links.papareact.com/7ma" />
        </div>

      </Carousel>
    </div>
  )
}

export default Banner;
