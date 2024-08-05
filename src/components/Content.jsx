import { useEffect, useState } from "react";
import Image from "react-bootstrap/Image";
import CarouselNav from "./CarouselNav";
import '/src/css/nav.css';

export const Content = () => {
  useEffect(() => {
    const handleScroll = () => {
      const images = document.querySelectorAll('.animated-image');
      const windowHeight = window.innerHeight;

      images.forEach(image => {
        const imageTop = image.getBoundingClientRect().top;

        if (imageTop < windowHeight - 70) {
          image.style.animation = 'fadeInScale 1s forwards';
        } else {
          image.style.animation = 'fadeOutScale 1s forwards';
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  //--------------------------------------
  // const [activeIndex, setActiveIndex] = useState(0);
  // const [hoveredIndex, setHoveredIndex] = useState(null);
  // const [stickyNav, setStickyNav] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const carouselSection = document.querySelector('#carousel-section');
  //     const contentSection = document.querySelector('#content-section');
  //     const nav = document.querySelector('.nav-bar');

  //     if (!carouselSection || !contentSection || !nav) return;

  //     const carouselRect = carouselSection.getBoundingClientRect();
  //     const contentRect = contentSection.getBoundingClientRect();
  //     const navHeight = nav.offsetHeight;

  //     // Check if the nav should be sticky
  //     if (
  //       (carouselRect.bottom > navHeight && contentRect.top > navHeight) ||
  //       (contentRect.top <= navHeight && contentRect.bottom > navHeight)
  //     ) {
  //       setStickyNav(true);
  //     } else {
  //       setStickyNav(false);
  //     }
  //   };

  //   const handleScrollDebounced = () => {
  //     requestAnimationFrame(handleScroll);
  //   };

  //   window.addEventListener('scroll', handleScrollDebounced);
  //   return () => {
  //     window.removeEventListener('scroll', handleScrollDebounced);
  //   };
  // }, []);

  // const handleSelect = (selectedIndex) => {
  //   setActiveIndex(selectedIndex);
  //   setActiveSection(selectedIndex);
  // };
  //--------------------------------------

  const imageStyle = {
    display: 'block',
    margin: '50px 0', // Margin between images
    padding: '0',
    width: '100%',
    opacity: '0', // Initial opacity
    transform: 'scale(0.8)', // Initial scale
    transition: 'transform 0.5s ease, opacity 0.5s ease', // Smooth transition
  };

  const keyframes = `
    @keyframes fadeInScale {
      0% {
        opacity: 0;
        transform: scale(0.8);
      }
      100% {
        opacity: 1;
        transform: scale(1);
      }
    }

    @keyframes fadeOutScale {
      0% {
        opacity: 1;
        transform: scale(1);
      }
      100% {
        opacity: 0;
        transform: scale(0.8);
      }
    }
  `;

  return (
    <>
      <style>
        {keyframes}
      </style>
      
      {/* <CarouselNav
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        setActiveSection={setActiveSection}
        hoveredIndex={hoveredIndex}
        setHoveredIndex={setHoveredIndex}
        stickyNav={stickyNav}
      /> */}
      <Image
        src="img/carousel1.jpg"
        style={imageStyle}
        className="animated-image"
        id="logo"
      />
      <Image
        src="img/content1.jpg"
        style={imageStyle}
        className="animated-image"
        id="stationary"
      />
      <Image
        src="img/carousel2.jpg"
        style={imageStyle}
        className="animated-image"
        id="brochures"
      />
      <Image
        src="img/content2.png"
        style={imageStyle}
        className="animated-image"
        id="content2"
      />
      <Image
        src="img/carousel3.jpg"
        style={imageStyle}
        className="animated-image"
        id="packaging"
      />
      <Image
        src="img/content3.png"
        style={imageStyle}
        className="animated-image"
        id="content3"
      />
      <Image
        src="img/carousel4.jpg"
        style={imageStyle}
        className="animated-image"
        id="product"
      />
      <Image
        src="img/content4.png"
        style={imageStyle}
        className="animated-image"
        id="content4"
      />
      <Image
        src="img/carousel5.jpg"
        style={imageStyle}
        className="animated-image"
        id="fashion"
      />
      <Image
        src="img/content5.png"
        style={imageStyle}
        className="animated-image"
        id="content5"
      />
      <Image
        src="img/carousel6.jpg"
        style={imageStyle}
        className="animated-image"
        id="web"
      />
      <Image
        src="img/carousel7.jpg"
        style={imageStyle}
        className="animated-image"
        id="seo"
      />
    </>
  );
};
