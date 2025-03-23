import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart, X } from 'lucide-react';
import { useState } from 'react';
import { CartContext } from '../context/cartContext';
const Navabr = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { cartItems, removeFromCart, clearCart } = useContext(CartContext)
    return (
        <div className="flex items-center justify-between py-4 px-8 w-full h-20 shadow-xl">
            {/* logo */}
            <div className="logo">
                <h1 className="text-2xl font-bold text-pink-700">ECodeWear</h1>
            </div>
            {/* nav links */}
            <div>
                <ul className="flex items-center space-x-8">
                    <li className='text-md hover:text-pink-400 transition-colors font-bold '><Link to="/">Home</Link></li>
                    <li className='text-md hover:text-pink-400 transition-colors font-bold '><Link to="/">About Us</Link></li>
                    <li className='text-md hover:text-pink-400 transition-colors font-bold '><Link to="/products">Products</Link></li>
                    <li className='text-md hover:text-pink-400 transition-colors font-bold '><Link to="/">Contact Us</Link></li>
                </ul>
            </div>            {/* cart icon */}
            <div className="flex items-center space-x-4">
                <button className="text-pink-700 hover:text-pink-600 transition-colors cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                    <ShoppingCart />
                    {
                        cartItems.length > 0 && (
                            <span className="absolute top-5 right-28 bg-pink-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                                {cartItems.length}
                            </span>
                        )}
                </button>
                {/* cart dropdown */}
                {
                    isOpen && (
                        <div className='absolute top-20 right-[-15px] w-96 bg-pink-100 shadow-xl p-6 h-full'>
                            <h1 className='text-xl font-bold'>Shopping Cart</h1>
                            <div>
                                {cartItems.map((item) => (
                                    <>
                                        <div key={item.id} className='flex items-center justify-between my-2'>
                                            <div className='flex items-center space-x-4'>
                                                <img src={item.thumbnail} alt={item.title} className='rounded-lg w-[60px] h-[60px] object-cover' />
                                                <h1 className='text-md font-bold'>{item.title}</h1>
                                            </div>
                                            <button className='text-pink-500 cursor-pointer' onClick={() => removeFromCart(item.id)}>
                                                <X />
                                            </button>

                                        </div>

                                    </>
                                ))}
                                <h3 className='text-xl font-bold'>Subtotal : {
                                    cartItems.reduce((acc, item) => Math.round(acc + item.price * item.quantity), 0)
                                }</h3>
                                <div className='flex items-center space-x-4 py-4'>
                                    <button className="bg-pink-500 text-white px-3 py-2 cursor-pointer rounded-md hover:bg-pink-600 transition-colors" onClick={clearCart}>Clear Cart</button>
                                    <button className="bg-pink-500 text-white px-3 py-2 cursor-pointer rounded-md hover:bg-pink-600 transition-colors">CheckOut</button>
                                </div>

                            </div>
                        </div>
                    )
                }
                {/* login button */}
                <button className="bg-pink-700 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition-colors">
                    <Link to="/login">Login</Link>
                </button>
            </div>
        </div>
    )
}

export default Navabr