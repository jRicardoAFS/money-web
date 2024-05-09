import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Home from './pages/home/home';
import CadDespesa from './pages/cadDespresa/cadDespesa';
import SideBar from './components/sideBar/sideBar';
import './styles/global.css'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/despesas/:idUrl' element={<CadDespesa />} />
    </Routes>
  </BrowserRouter>
);