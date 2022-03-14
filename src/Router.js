import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyles from './component/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import Detail from './pages/Detail/Detail';
import List from './pages/List/List';
import Nav from './component/Nav/Nav';
import Footer from './component/Footer/Footer';
import theme from './styles/theme';

function Router() {
  return (
    <BrowserRouter>
      <GlobalStyles>
        <ThemeProvider theme={theme}>
          <Nav />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/main" element={<Main />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/list" element={<List />} />
          </Routes>
          <Footer />
        </ThemeProvider>
      </GlobalStyles>
    </BrowserRouter>
  );
}
export default Router;
