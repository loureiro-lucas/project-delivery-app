import styled from 'styled-components';

const Logo = styled.img`
  animation: shake 2s infinite ease;
  max-height: 20vh;

  @keyframes shake {

    0% {
      transform: rotate(5deg);
    }

    50% {
      transform: rotate(-5deg);
    }

    100% {
      transform: rotate(5deg);
    }
    }

    @keyframes clink {

    0% {
      transform: rotate(-10deg);
    }

    50% {
      transform: rotate(20deg);
    }

    100% {
      transform: rotate(-10deg);
    }
  }
`;

export default Logo;
