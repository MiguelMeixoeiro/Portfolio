import styled from 'styled-components';

export const Card = styled.div`
  background-color: ${(props) => (props.darkMode ? '#333' : '#fff')};
  color: ${(props) => (props.darkMode ? '#fff' : '#333')};
  // Otros estilos del componente
`;
