import React, { useState, useEffect, useContext } from 'react';
import Navbar from "../component/Navabr"
import { CartContext } from '../context/cartContext';

const Cart = () => {
    const { cartItems, removeFromCart, clearCart, updateQuantity } = useContext(CartContext);
    const [totalPrice, setTotalPrice] = useState(0);

    // Calculate total price whenever cartItems changes
    useEffect(() => {
        const total = cartItems.reduce((acc, item) => Math.round(acc + item.price * item.quantity), 0);
        setTotalPrice(total);
    }, [cartItems]);

    const handleIncrement = (itemId) => {
        const item = cartItems.find((item) => item.id === itemId);
        if (item) {
            updateQuantity(itemId, item.quantity + 1);
        }
    };

    const handleDecrement = (itemId) => {
        const item = cartItems.find((item) => item.id === itemId);
        if (item && item.quantity > 1) {
            updateQuantity(itemId, item.quantity - 1);
        }
    };

    return (
        <>
            <Navbar />
            <div className="container mx-auto px-4">
                <h1 className='text-2xl font-bold my-4'>Cart</h1>
                {cartItems.length === 0 ? (
                    <p className='text-center text-pink-700 text-4xl'>Cart is empty</p>
                ) : (
                    <>
                        <div className="flex flex-col space-y-4">
                            {cartItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex items-center justify-between border-b pb-4 "
                                >
                                    <div className="flex items-center space-x-4">
                                        <img
                                            src={item.thumbnail}
                                            alt={item.title}
                                            className="w-20 h-20 object-contain"
                                        />
                                        <div>
                                            <h1 className="text-xl font-bold">{item.title}</h1>
                                            <p className="text-gray-600">{item.description}</p>
                                            <p className="text-green-600 font-semibold">₹{item.price}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <button
                                            onClick={() => handleDecrement(item.id)}
                                            className="text-2xl font-bold border-2 border-pink-600 px-3 cursor-pointer py-2 rounded-lg"
                                        >
                                            -
                                        </button>
                                        <p>{item.quantity}</p>
                                        <button
                                            onClick={() => handleIncrement(item.id)}
                                           className="text-2xl font-bold border-2 border-pink-600 px-3 py-2 cursor-pointer rounded-lg"
                                        >
                                            +
                                        </button>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-pink-600 font-semibold cursor-pointer "
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-between items-center mt-8">
                            <button
                                onClick={clearCart}
                                className="bg-pink-600 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-pink-700 transition-colors"
                            >
                                Clear Cart
                            </button>
                            <h1 className="text-2xl font-bold">Total: ₹{totalPrice}</h1>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default Cart;
