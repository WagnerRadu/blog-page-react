import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './components/style.css';
import Details from './pages/Details';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:articleId" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
