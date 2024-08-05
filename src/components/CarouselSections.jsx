import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import CarouselNav from './CarouselNav';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export const CarouselSections = ({ setActiveSection }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [stickyNav, setStickyNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const carouselSection = document.querySelector('#carousel-section');
      const contentSection = document.querySelector('#content-section');
      const nav = document.querySelector('.nav-bar');

      if (!carouselSection || !contentSection || !nav) return;

      const carouselRect = carouselSection.getBoundingClientRect();
      const contentRect = contentSection.getBoundingClientRect();
      const navHeight = nav.offsetHeight;

      // Check if the nav should be sticky
      if (
        (carouselRect.bottom > navHeight && contentRect.top > navHeight) ||
        (contentRect.top <= navHeight && contentRect.bottom > navHeight)
      ) {
        setStickyNav(true);
      } else {
        setStickyNav(false);
      }
    };

    const handleScrollDebounced = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', handleScrollDebounced);
    return () => {
      window.removeEventListener('scroll', handleScrollDebounced);
    };
  }, []);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
    setActiveSection(selectedIndex);
  };

  const containerStyle = {
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
    padding: '0',
    marginTop: '50px',
    marginBottom: '0px',
    borderRadius: '8px',
  };

  const arrowStyle = {
    color: '#004567',
    fontSize: '2rem',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    zIndex: 1,
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const prevIcon = (
    <div style={arrowStyle}>
      <FaChevronLeft />
    </div>
  );

  const nextIcon = (
    <div style={arrowStyle}>
      <FaChevronRight />
    </div>
  );

  return (
    <Container id="carousel-section" style={containerStyle} fluid>
      <CarouselNav
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        setActiveSection={setActiveSection}
        hoveredIndex={hoveredIndex}
        setHoveredIndex={setHoveredIndex}
        stickyNav={stickyNav}
      />
      <Carousel
        activeIndex={activeIndex}
        onSelect={handleSelect}
        fade
        interval={5000}
        prevIcon={prevIcon}
        nextIcon={nextIcon}
      >
        {['img/carousel1.jpg', 'img/carousel2.jpg', 'img/carousel3.jpg', 'img/carousel4.jpg', 'img/carousel5.jpg', 'img/carousel6.jpg', 'img/carousel7.jpg'].map((src, index) => (
          <Carousel.Item key={index}>
            <Image className="d-block w-100 img-fluid" src={src} alt={`Slide ${index + 1}`} />
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};
