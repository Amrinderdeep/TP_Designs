// Add this in your main component file (e.g., App.js)
import React, { useEffect, useState } from 'react';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Intro } from './components/Intro';
import { CarouselSections } from './components/CarouselSections';
import { Content } from './components/Content';
import { Cards } from './components/Cards';
import { CustomFooter } from './components/CustomFooter';
import '/src/css/orientation.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [isPortrait, setIsPortrait] = useState(false);

  useEffect(() => {
    const checkOrientation = () => {
      const isPortraitMode = window.innerHeight > window.innerWidth;
      setIsPortrait(isPortraitMode);
      document.body.classList.toggle('no-scroll', isPortraitMode);
    };

    window.addEventListener('resize', checkOrientation);
    checkOrientation();

    return () => {
      window.removeEventListener('resize', checkOrientation);
    };
  }, []);

  return (
    <div className="App" id="home">
      {isPortrait && (
        <div id="orientation-overlay">
          <img
            id="orientation-logo"
            src="/public/img/logo.png" // Ensure this path is correct
            alt="Logo"
          />
          <div>
            Please rotate your device to landscape mode for the best experience.
          </div>
        </div>
      )}
      <NavBar />
      <Banner />
      <Intro />
      <div className='section' id='carousel-section'>
      <CarouselSections />
      </div>
      <div className='section' id='content-section'>

      <Content />
      </div>
      <div className='section' id='cards-section'>

      <Cards />
      </div>
      <div className='section' id='footer-section'>

      <CustomFooter />
      </div>

    </div>
  );
};

export default App;
