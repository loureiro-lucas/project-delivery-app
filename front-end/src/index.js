import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './pages/Login';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={ <App /> } />
      <Route path="/login" element={ <Login /> } />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root'),
);
