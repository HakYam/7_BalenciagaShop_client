import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, Outlet } from 'react-router-dom';

import './App.css'
import Products from './pages/products/Products';
import Product from './pages/product/Product';
import Home from './pages/Home/Home';
import Layout from './components/Layout';



function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/category/:id" element={<Products />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
