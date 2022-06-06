import styled from 'styled-components';

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 5px 20px;

  @media only screen and (min-width: 600px) {
    padding: 5px 10px;
  }
`;

export default Container;
