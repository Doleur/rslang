import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { VolumeUp } from 'react-bootstrap-icons';

const GamesPage = () => {
  return (
    <>
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
    </>
  );
};

export default GamesPage;
