import React, { createContext, useContext, useState, useEffect } from "react";

const FavoritesContext = createContext();

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
};

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('shop_favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem('shop_favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (product) => {
    setFavorites((prevFavorites) => {
      const exists = prevFavorites.find((item) => item.title === product.title);
      if (!exists) {
        return [...prevFavorites, product];
      }
      return prevFavorites;
    });
  };

  const removeFavorite = (productTitle) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((item) => item.title !== productTitle)
    );
  };

  const isFavorite = (productTitle) => {
    return favorites.some((item) => item.title === productTitle);
  };

  const getTotalFavorites = () => {
    return favorites.length;
  };

  const clearFavorites = () => {
    setFavorites([]);
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite,
        getTotalFavorites,
        clearFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
