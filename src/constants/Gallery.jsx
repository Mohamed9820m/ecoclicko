import React, { useState } from 'react';
import serviceOne from '../assets/images/serviceOne.png'
import serviceTwo from '../assets/images/serviceTwo.png'
import serviceThree from '../assets/images/serviceThree.png'
import serviceFour from '../assets/images/serviceFour.jpg'
import serviceFive from '../assets/images/serviceFive.png'




const Gallery = () => {
  const images = [
    serviceOne,
    serviceTwo,
    serviceThree,
    serviceFour,
  
  ];

  const [heroSrc, setHeroSrc] = useState(images[0]);

  const activate = (e) => {
    if (e.target.matches('.hero') || !e.target.matches('img')) return;
    setHeroSrc(e.target.src);
  };

  return (
    <div className='container'>
    <h2 className="pb-2 text-center display-5 fw-semibold mt-4">View Our Gallery</h2>
    <main className="gallery py-5 border-bottom" onClick={activate}>
      <img className="hero" src={heroSrc} alt="Hero" />
      {images.map((src, index) => (
        <img key={index} src={src} alt={`Image ${index}`} />
      ))}
    </main>
    </div>
  );
};

export default Gallery;
