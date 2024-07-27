import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

export const Intro = () => {
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const intro1 = document.getElementById('intro1');
      const intro2 = document.getElementById('intro2');
      const windowHeight = window.innerHeight;
      const intro1Top = intro1.getBoundingClientRect().top;
      const intro2Top = intro2.getBoundingClientRect().top;
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) { // scrolling down
        if (intro2Top < windowHeight - 100) {
          intro2.style.animation = 'slideInLeft 1s forwards';
        }
        if (intro1Top < windowHeight - 100) {
          intro1.style.animation = 'slideInRight 1s forwards';
        }
      } else { // scrolling up
        if (intro2Top > windowHeight - 100) {
          intro2.style.animation = 'slideOutLeft 1s forwards';
        }
        if (intro1Top > windowHeight - 100) {
          intro1.style.animation = 'slideOutRight 1s forwards';
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const imageStyle = {
    objectFit: 'cover',
    width: '100%',
    height: 'auto',
    boxShadow: '10px 10px 15px rgba(0, 0, 0, 0.5)', // Shadow on the right edge of the left image
    opacity: '0', // Initial opacity
  };

  const containerStyle = {
    marginTop: '20px', // Margin from top
    marginBottom: '20px', // Margin from bottom
  };

  const spacerStyle = {
    height: '20px', // Space between the two images
  };

  const keyframes = `
    @keyframes slideInLeft {
      0% {
        transform: translateX(-100%);
        opacity: 0;
      }
      100% {
        transform: translateX(0);
        opacity: 1;
      }
    }

    @keyframes slideOutLeft {
      0% {
        transform: translateX(0);
        opacity: 1;
      }
      100% {
        transform: translateX(-100%);
        opacity: 0;
      }
    }

    @keyframes slideInRight {
      0% {
        transform: translateX(100%);
        opacity: 0;
      }
      100% {
        transform: translateX(0);
        opacity: 1;
      }
    }

    @keyframes slideOutRight {
      0% {
        transform: translateX(0);
        opacity: 1;
      }
      100% {
        transform: translateX(100%);
        opacity: 0;
      }
    }
  `;

  const bodyStyle = {
    overflowX: 'hidden',
  };

  return (
    <>
      <style>
        {keyframes}
        {`
          body {
            overflow-x: hidden;
          }
        `}
      </style>
      <div style={bodyStyle}>
        <Container fluid style={containerStyle}>
          <Row className="g-0">
            <Col xs={6} className="p-0 me-auto" style={{marginLeft:'100px'}}>
              <Image 
                src="/img/intro1.jpg"
                className="w-100"
                alt="Intro 1"
                style={imageStyle}
                id="intro1"
              />
            </Col>
          </Row>
          <div style={spacerStyle}></div>
          <Row className="g-0">
            <Col xs={6} className="p-0 ms-auto" style={{marginRight:'100px'}}>
              <Image 
                src="/img/intro2.jpg"
                className="w-100"
                alt="Intro 2"
                style={imageStyle}
                id="intro2"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
