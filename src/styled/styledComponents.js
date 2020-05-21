import styled from 'styled-components';

export const PageCover = styled.div`
  position: relative;
  width: 100%;
  height: ${(props) => props.height};
  background: url(${(props) => window.location.origin + props.image});
  background-size: cover;
  background-position: center ${(props) => props.positionY};
`;
