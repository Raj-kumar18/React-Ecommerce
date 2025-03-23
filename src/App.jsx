import React from 'react'
import Home from './pages/Home'
import Product from './pages/ProductsPage'
import SingleProduct from './pages/SingleProduct'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/products/:id" element={<SingleProduct />} />
      </Routes>
    </Router>
  )
}

export default App