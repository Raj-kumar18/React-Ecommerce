import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navabr from '../component/Navabr'
const SingleProduct = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const { id } = useParams()
    const fetchProduct = async () => {
        try {
            const response = await fetch(`https://dummyjson.com/products/${id}`)
            const data = await response.json()
            console.log(data)
            setProduct(data)
        } catch (error) {
            console.log("Error fetching products", error)
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchProduct()
    }, [id])
    return (
        <>
            <Navabr />
            <div>
                {loading ? <p className='text-center text-pink-700 text-4xl'>Loading...</p> : (
                  <div className="container mx-auto px-4 py-8">
                  <div className="flex space-x-8">
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="w-1/3 h-96 object-contain border rounded-lg shadow-lg"
                    />
                    <div className="w-2/3">
                      <h1 className="text-3xl font-bold">{product.title}</h1>
                      <p className="text-gray-600 mt-2">{product.description}</p>
                      <p className="text-xl font-semibold text-green-600 mt-4">₹{product.price}</p>
                    </div>
                  </div>
                </div>
                )}
            </div>
        </>
    )
}

export default SingleProduct