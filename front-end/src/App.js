import React from 'react';
import { ThemeProvider } from 'styled-components';
import store from './redux/store';
import Router from './routes';

import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={ theme } store={ store }>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  );
}

export default App;
