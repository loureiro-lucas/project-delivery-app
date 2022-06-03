import React from 'react';
import { ThemeProvider } from 'styled-components';
import Router from './routes';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={ theme }>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  );
}

export default App;
