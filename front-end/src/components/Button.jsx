import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme, BGColor }) => (
    BGColor
      ? theme.palette[BGColor]
      : theme.palette.primary
  )};
  border: none;
  border-radius: 8px;
  box-shadow: 0 2px 5px 0 rgb(88 88 88/20%);
  color: ${({ theme, fontColor }) => (
    fontColor
      ? theme.palette[fontColor]
      : theme.palette.lightText
  )};
  font-size: 1.25rem;
  font-weight: lighter;
  height: 42px;
  width: 100%;
`;

export default Button;
