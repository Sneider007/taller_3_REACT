import { createContext, useState } from "react";

// unified context for favorites and cart
export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {

    const [favorites, setFavorites] = useState([]);
    const [cart, setCart] = useState([]);

    const addFavorite = (product) => {
        const exist = favorites.find(item => item.id === product.id);
        if (!exist) {
            setFavorites([...favorites, product]);
        }
    };

    const removeFavorite = (id) => {
        setFavorites(favorites.filter(item => item.id !== id));
    };

    const addToCart = (product) => {
        const exist = cart.find(item => item.id === product.id);
        if (!exist) {
            setCart([...cart, product]);
        }
    };

    const removeFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    return (
        <ShopContext.Provider value={{
            favorites,
            addFavorite,
            removeFavorite,
            cart,
            addToCart,
            removeFromCart
        }}>
            {children}
        </ShopContext.Provider>
    );
};