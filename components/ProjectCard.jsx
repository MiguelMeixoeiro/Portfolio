import React from 'react';
import { Card } from 'react-bootstrap';

const ProjectCard = ({ project }) => {
  return (
    <Card>
      <Card.Img variant="top" src={`/images/${project.image}`} />
      <Card.Body>
        <Card.Title>{project.name}</Card.Title>
        <Card.Text>{project.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
