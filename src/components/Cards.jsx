import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import '/src/css/cards.css';

export const Cards = () => {
  return (
    <Container fluid>
      <Row xs={1} md={3} className="g-3">
        <Col>
          <Card className="h-100 custom-card">
            <Card.Img variant="top" src="img/card1.jpg" />
          </Card>
        </Col>
        <Col>
          <Card className="h-100 custom-card">
            <Card.Img variant="top" src="img/card2.jpg" />
          </Card>
        </Col>
        <Col>
          <Card className="h-100 custom-card">
            <Card.Img variant="top" src="img/card3.jpg" />
          </Card>
        </Col>
        <Col>
          <Card className="h-100 custom-card">
            <Card.Img variant="top" src="img/card4.jpg" />
          </Card>
        </Col>
        <Col>
          <Card className="h-100 custom-card">
            <Card.Img variant="top" src="img/card5.jpg" />
          </Card>
        </Col>
        <Col>
          <Card className="h-100 custom-card">
            <Card.Img variant="top" src="img/card6.jpg" />
          </Card>
        </Col>
      </Row>
        <Image
        src="img/clients.png" 
        className="w-100"
        />
    </Container>
     
  );
}
