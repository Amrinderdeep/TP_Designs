import React from 'react';
import { Nav } from 'react-bootstrap';
import { FaPaintBrush, FaFileAlt, FaBox, FaTag, FaTshirt, FaGlobe, FaSearch } from 'react-icons/fa';

const CarouselNav = React.memo(({ activeIndex, setActiveIndex, setActiveSection, hoveredIndex, setHoveredIndex }) => {
  const navItems = [
    { icon: <FaPaintBrush />, label: 'Logos' },
    { icon: <FaFileAlt />, label: 'Brochures' },
    { icon: <FaBox />, label: 'Packaging' },
    { icon: <FaTag />, label: 'Product' },
    { icon: <FaTshirt />, label: 'Fashion' },
    { icon: <FaGlobe />, label: 'Website' },
    { icon: <FaSearch />, label: 'SEO' },
  ];

  const handleNavSelect = (selectedKey) => {
    const index = parseInt(selectedKey, 10);
    if (index !== activeIndex) {
      setActiveIndex(index);
      setActiveSection(index);
    }
  };

  const getNavLinkStyle = (index) => {
    const isActive = activeIndex === index;
    const isHovered = hoveredIndex === index;

    return {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '15px 20px',
      borderRadius: '8px',
      textAlign: 'center',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      border: 'none',
      color: isActive ? 'white' : '#004567',
      backgroundColor: isActive ? '#004567' : 'transparent',
      transform: isActive ? 'scale(1.1)' : isHovered ? 'scale(1.05)' : 'scale(0.9)',
      boxShadow: isHovered ? '0 12px 24px rgba(0, 0, 0, 0.2)' : 'none',
      cursor: 'pointer',
    };
  };

  const iconStyle = {
    fontSize: '2.5rem',
    marginBottom: '10px',
  };

  const navStyle = {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '30px',
    height: '100px',
    display: 'flex',
    alignItems: 'center',
    padding: '0 10px',
    justifyContent: 'space-around',
    border: 'none',
    position: 'sticky',
    top: 0,
    width: '100%',
    zIndex: 1000,
    backgroundColor: 'transparent', // Change to a solid color if needed for better visibility
    transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
  };

  return (
    <Nav fill variant="tabs" activeKey={activeIndex.toString()} onSelect={handleNavSelect} style={navStyle} className="nav-bar">
      {navItems.map((item, index) => (
        <Nav.Item key={index}>
          <Nav.Link
            eventKey={index.toString()}
            style={getNavLinkStyle(index)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div style={iconStyle}>{item.icon}</div>
            {item.label}
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
});

export default CarouselNav;
