import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Home, Footer } from './index';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar/> 
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
