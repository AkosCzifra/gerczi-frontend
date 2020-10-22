import styled from 'styled-components';

export const PageCover = styled.div`
  position: relative;
  width: 100%;
  height: ${(props) => props.height};
  background: url(${(props) => window.location.origin + props.image});
  background-size: cover;
  background-position: center ${(props) => props.positionY};

  &::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    content: '';
    background: rgba(0, 0, 0, 0.4);
  }
`;
