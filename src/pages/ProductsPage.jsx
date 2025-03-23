import React, { useEffect, useState } from 'react'
import Navabr from '../component/Navabr'
import ProductList from '../component/ProductList'
const ProductsPage = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products") //API endpoint
      const data = await response.json()
      console.log(data)
      if (Array.isArray(data.products)) {

        setProducts(data.products)
      }
      else {
        console.log("Data is not an array", data.products)
      }
    } catch (error) {
      console.log("Error fetching products", error)
    }
    finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])
  return (
    <>
      <Navabr />

      <div className="container mx-auto px-4">
        <h1 className='text-2xl font-bold my-4'>Products</h1>

        {loading ? <p className='text-center text-pink-700 text-4xl'>Loading...</p> : (
          <ProductList products={products} />
        )}
      </div>
    </>
  )
}

export default ProductsPage