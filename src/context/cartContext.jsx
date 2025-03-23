import { createContext, useState } from "react";

//create context

export const CartContext = createContext();

//create provider

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    //Add to cart
    const addTocart = (product) => {
        setCartItems((prevCart) => {
            console.log("Previous Cart:", prevCart);
            const existingItem = prevCart.find((item) => item.id === product.id);

            let updatedCart;
            if (existingItem) {
                updatedCart = prevCart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                updatedCart = [...prevCart, { ...product, quantity: 1 }];
            }

            console.log("Updated Cart:", updatedCart);
            return updatedCart;
        });
    };

    //update quantity

    const updateQuantity = (id, quantity) => {
        setCartItems((prevCart) =>
            prevCart.map((item) =>
                item.id === id ? { ...item, quantity } : item
            )
        );
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
        <CartContext.Provider value={{ cartItems, addTocart, removeFromCart, clearCart,updateQuantity }}>
            {children}
        </CartContext.Provider>
    )



}
