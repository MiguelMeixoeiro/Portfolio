import React, { useEffect, useState } from 'react';
import { Container, CardDeck } from 'react-bootstrap';
import ProjectCard from '../components/ProjectCard';
import { getProjects } from '../utils/api';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Llamada a la API para obtener proyectos
    const fetchProjects = async () => {
      const projectsData = await getProjects();
      setProjects(projectsData);
    };

    fetchProjects();
  }, []);

  return (
    <Container>
      <h1>Mis Proyectos</h1>
      <CardDeck>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </CardDeck>
    </Container>
  );
};

export default Projects;
