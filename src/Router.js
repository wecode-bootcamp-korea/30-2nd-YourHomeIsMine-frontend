import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import Detail from './pages/Detail/Detail';
import List from './pages/List/List';
import Nav from './component/Nav/Nav';
import Footer from './component/Footer/Footer';

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/list" element={<List />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default Router;
