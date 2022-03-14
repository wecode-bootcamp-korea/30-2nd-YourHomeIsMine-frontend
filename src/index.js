import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import GlobalStyle from './styles/GlobalStyle';
import GlobalFonts from './styles/fonts/fonts';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import './styles/common.scss';
import './styles/reset.scss';

ReactDOM.render(
  <>
    <GlobalStyle />
    <GlobalFonts />
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  </>,
  document.getElementById('root')
);
