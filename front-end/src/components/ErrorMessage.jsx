import styled from 'styled-components';

const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.palette.error};
  text-align: center;
`;

export default ErrorMessage;
