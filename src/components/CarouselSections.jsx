import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import "/src/css/font.css";

export const CarouselSections = () => {
  const containerStyle = {
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
    padding: '0',
    marginTop: '50px',
    marginBottom: '70px',
    borderRadius: '8px',
  };

  const headingStyle = {
    fontFamily: 'boston',
    color: 'white',
    textAlign: 'center',
    backgroundColor: '#004567',
    borderRadius: '8px 8px 0 0',
    padding: '10px',
    margin: '0',
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

  const sectionTabStyle = {
    backgroundColor: '#004567',
  };

  return (
    <Container style={containerStyle} fluid>
      <Carousel fade interval={5000} prevIcon={prevIcon} nextIcon={nextIcon}> 
        <Carousel.Item>
          <Image
            className="d-block w-100 img-fluid"
            src="/img/carousel1.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100 img-fluid"
            src="/img/carousel2.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100 img-fluid"
            src="/img/carousel3.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100 img-fluid"
            src="/img/carousel4.jpg"
            alt="Fourth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100 img-fluid"
            src="/img/carousel5.jpg"
            alt="Fifth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100 img-fluid"
            src="/img/carousel6.jpg"
            alt="Sixth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100 img-fluid"
            src="/img/carousel7.jpg"
            alt="Seventh slide"
          />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};
