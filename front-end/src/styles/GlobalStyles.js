import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    scroll-behavior: smooth;
  }

  body {
    color: ${({ theme }) => theme.palette.text};
    background-color: ${({ theme }) => theme.palette.body};
    border: 0;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased !important;
  }

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f5f5f5;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb {
  background: #d4d4d4; 
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: #c4c4c4; 
}
`;

export default GlobalStyles;
