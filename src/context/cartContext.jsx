import { createContext, useState } from "react";

//create context

export const CartContext = createContext();

//create provider

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    //Add to cart
    const addTocart = (product) => {
        setCartItems((prevCart) => {
            // check if item is already in cart
            const existingItem = prevCart.find((item) => item.id === product.id);
            if (existingItem) {
                return prevCart.map((item) => {
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                })
            }
            else {
                return [...prevCart, { ...product, quantity: 1 }]
            }
        }
        )
    }

    //Remove from cart

    const removeFromCart = (id) => {
        setCartItems((prevCart) => prevCart.filter((item) => item.id !== id))
    }

    //clear cart
    const clearCart = () => {
        setCartItems([]);
    }

    return (
        <CartContext.Provider value={{ cartItems, addTocart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    )



}
