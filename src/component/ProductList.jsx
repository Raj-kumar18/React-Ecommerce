import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/cartContext'
import SingleProduct from '../pages/SingleProduct'
const ProductList = ({ products }) => {
    const { addTocart } = useContext(CartContext)
    return (
        <div className='grid grid-cols-3 gap-6'>
            {products.map((product) => (
                <div key={product.id} className='p-4 rounded-lg shadow-md'>
                    <img src={product.thumbnail} alt={product.title} className='h-40 w-full object-cover mb-2' />
                    <h2 className='text-lg font-bold'>{product.title}</h2>
                    <p className='text-gray-500'>{product.price}</p>


                    {/* View Details Button */}
                    <Link
                        to={`/products/${product.id}`}
                        className="mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                    >
                        View Details
                    </Link>

                    <button className='bg-pink-700 text-white px-4 py-2 rounded-md mt-2' onClick={() => addTocart(product)}>
                        Add to cart

                    </button>
                </div>
            ))}
        </div>
    )
}

export default ProductList