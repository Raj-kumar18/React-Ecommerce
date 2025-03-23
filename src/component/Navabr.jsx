import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react';
import { useState } from 'react';
const Navabr = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="flex items-center justify-between py-4 px-8 w-full h-20 shadow-xl">
            {/* logo */}
            <div className="logo">
                <h1 className="text-2xl font-bold text-pink-700">ECodeWear</h1>
            </div>
            {/* nav links */}
            <div>
                <ul className="flex items-center space-x-8">
                    <li className='text-md hover:text-pink-400 transition-colors '><Link to="/">Home</Link></li>
                    <li className='text-md hover:text-pink-400 transition-colors '><Link to="/">About Us</Link></li>
                    <li className='text-md hover:text-pink-400 transition-colors '><Link to="/product">Products</Link></li>
                    <li className='text-md hover:text-pink-400 transition-colors '><Link to="/">Contact Us</Link></li>
                </ul>
            </div>            {/* cart icon */}
            <div className="flex items-center space-x-4">
                <button className="text-pink-700 hover:text-pink-600 transition-colors " onClick={() => setIsOpen(!isOpen)}>
                    <ShoppingCart />
                </button>

                {/* login button */}
                <button className="bg-pink-700 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition-colors">
                    <Link to="/login">Login</Link>
                </button>
            </div>
        </div>
    )
}

export default Navabr