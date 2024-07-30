import { useEffect } from "react";
import Image from "react-bootstrap/Image";
import '/src/css/nav.css';

export const Content = () => {
  useEffect(() => {
    const handleScroll = () => {
      const images = document.querySelectorAll('.animated-image');
      const windowHeight = window.innerHeight;

      images.forEach(image => {
        const imageTop = image.getBoundingClientRect().top;
        const imageBottom = image.getBoundingClientRect().bottom;

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
      <Image
        src="img/content1.jpg"
        style={imageStyle}
        className="animated-image section"
        id="stationary"
      />
      <Image
        src="img/content2.png"
        style={imageStyle}
        className="animated-image"
        id="brochures"
      />
      <Image
        src="img/content3.png"
        style={imageStyle}
        className="animated-image"
        id="packaging"
      />
      <Image
        src="img/content4.png"
        style={imageStyle}
        className="animated-image"
        id="product"
      />
      <Image
        src="img/content5.png"
        style={imageStyle}
        className="animated-image"
        id="fashion"
      />
    </>
  );
};
