import React, { useState, useEffect } from 'react';
import Image from "react-bootstrap/Image";

export const Banner = () => {
  const [isBlurred, setIsBlurred] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Change this value to adjust when the blur starts
      const blurThreshold = 100; 
      setIsBlurred(window.scrollY > blurThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check in case the user starts scrolled down
    handleScroll();

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Define styles directly in the component
  const bannerStyle = {
    position: 'sticky',
    top: '0',
    zIndex: '-999', // Make sure this is above other content
    width: '100%',
    transition: 'filter 0.5s ease, transform 0.5s ease', // Smooth transition for blur and transform
    filter: isBlurred ? 'blur(8px)' : 'none', // More noticeable blur
    transform: isBlurred ? 'scale(.80)' : 'none' // Optional scaling to enhance effect
  };

  return (
    <Image
      style={bannerStyle}
      className="d-block w-100"
      src="/public/img/banner2.jpg"
      alt="Banner"
    />
  );
};
