import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Image, Stopwatch, VolumeUp } from 'react-bootstrap-icons';

const GamesPage = () => {
  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-between">
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <VolumeUp size={90} />
              <Card.Title>Аудиовызов</Card.Title>
              <Card.Text>Выберите правильный перевод слова.</Card.Text>
              <Button variant="primary" href="game/audiocall">
                Начать игру
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Stopwatch size={90} />
              <Card.Title>Спринт</Card.Title>
              <Card.Text>Выберите правильный перевод слова.</Card.Text>
              <Button variant="primary" href="game/sprint">
                Начать игру
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Image size={90} />
              <Card.Title>Своя игра</Card.Title>
              <Card.Text>Выберите правильную картинку к слову.</Card.Text>
              <Button variant="primary" href="game/wordAssociation">
                Начать игру
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default GamesPage;
