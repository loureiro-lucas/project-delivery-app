import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: ${({ mobileSize }) => mobileSize};
  justify-content: space-between;
  width: 100%;
  
  @media only screen and (min-width: 600px) {
    align-items: center;
    flex-direction: ${({ desktopDirection }) => desktopDirection || 'column'};
    height: ${({ desktopSize, mobileSize }) => desktopSize || mobileSize};
    justify-content: center;
  }
`;

export default Form;
