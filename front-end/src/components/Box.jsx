import styled from 'styled-components';

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  width: 100%;

  @media only screen and (min-width: 600px) {
    width: ${({ desktopSize }) => desktopSize || '100%'}
  }
`;

export default Box;
