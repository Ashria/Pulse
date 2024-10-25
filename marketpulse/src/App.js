
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
import Shop from './Components/Shop';
import Product1 from './Components/Products/Product1';
import Product2 from './Components/Products/Product2';
import Product3 from './Components/Products/Product3';
import Product4 from './Components/Products/Product4';
import Product5 from './Components/Products/Product5';
import Product6 from './Components/Products/Product6';
import Product7 from './Components/Products/Product7';
import Product8 from './Components/Products/Product8';
import Product9 from './Components/Products/Product9';
import Product10 from './Components/Products/Product10';
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
          <Route
          path="/product1"
          element={
            
            <Product1 />
          }
        />
          <Route
          path="/product2"
          element={
            
            <Product2 />
          }
        />
          <Route
          path="/product3"
          element={
            
            <Product3 />
          }
        />
          <Route
          path="/product4"
          element={
            
            <Product4 />
          }
        />
          <Route
          path="/product5"
          element={
            
            <Product5 />
          }
        />
          <Route
          path="/product6"
          element={
            
            <Product6 />
          }
        />
          <Route
          path="/product7"
          element={
            
            <Product7 />
          }
        />
          <Route
          path="/product8"
          element={
            
            <Product8 />
          }
        />
          <Route
          path="/product9"
          element={
            
            <Product9 />
          }
        />
          <Route
          path="/product10"
          element={
            
            <Product10 />
          }
        />
        
    </Routes>
    </>
  );
}

export default App;
