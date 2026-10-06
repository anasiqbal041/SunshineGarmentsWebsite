import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { getProductPriceDetails, products } from '../Data/products';

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem('cartItems');
        if (!savedCart) return [];

        return JSON.parse(savedCart).map(item => {
            const product = products.find(currentProduct => currentProduct.id === item.id);
            return product ? { ...item, ...getProductPriceDetails(product) } : item;
        });
    });

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product, quantity = 1, size = 'Standard') => {
        setCartItems(prevItems => {
            const existingItemIndex = prevItems.findIndex(item => item.id === product.id && item.size === size);

            if (existingItemIndex > -1) {
                const newItems = [...prevItems];
                newItems[existingItemIndex] = {
                    ...newItems[existingItemIndex],
                    ...getProductPriceDetails(product),
                    quantity: newItems[existingItemIndex].quantity + quantity
                };
                toast.success(`Updated ${product.name} quantity in cart!`);
                return newItems;
            } else {
                toast.success(`${product.name} added to cart!`);
                return [...prevItems, { ...product, ...getProductPriceDetails(product), quantity, size }];
            }
        });
    };

    const removeFromCart = (id, size) => {
        setCartItems(prevItems => prevItems.filter(item => !(item.id === id && item.size === size)));
        toast.error('Item removed from cart');
    };

    const updateQuantity = (id, size, newQuantity) => {
        if (newQuantity < 1) return;
        setCartItems(prevItems =>
            prevItems.map(item =>
                (item.id === id && item.size === size)
                    ? { ...item, quantity: newQuantity }
                    : item
            )
        );
    };

    const clearCart = () => {
        setCartItems([]);
        toast.info('Cart cleared');
    };

    const getCartTotal = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const getCartCount = () => {
        return cartItems.reduce((count, item) => count + item.quantity, 0);
    };

    return (
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            getCartTotal,
            getCartCount
        }}>
            {children}
        </CartContext.Provider>
    );
};
