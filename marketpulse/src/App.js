
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
import Shop from './Components/Shop';
function App() {
  return (
    <>
    <Routes>
    <Route
          path="/"
          element={
            
            <Home/>
          }
        />
          <Route
          path="/contact"
          element={
            
            <Contact />
          }
        />
          <Route
          path="/about"
          element={
            
            <About />
          }
        />
          <Route
          path="/shop"
          element={
            
            <Shop />
          }
        />
    </Routes>
    </>
  );
}

export default App;
