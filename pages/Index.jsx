import React from 'react';
import Link from 'next/link';
import { Container, Button } from 'react-bootstrap';

const Home = () => {
  return (
    <Container>
      <h1>Bienvenido/a a mi portafolio</h1>
      <Link href="/projects">
        <Button variant="primary">Ver proyectos</Button>
      </Link>
    </Container>
  );
};

export default Home;
