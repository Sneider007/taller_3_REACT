import { HashRouter, Routes, Route } from "react-router-dom";

// Layout
import { Header } from "./features/layout/components/Header";
import { Content } from "./features/layout/components/Content";
import { Footer } from "./features/layout/components/Footer";

// Auth
import { Account } from "./features/auth/components/Account";
import { Favorites } from "./features/auth/components/Favorites";
import { Purchases } from "./features/auth/components/Purchases";

// View
import { Article } from "./features/view/components/Article";
import { Offers } from "./features/view/components/Offers";

// Contexts
import { CartProvider } from "./features/view/hooks/CartContext";
import { FavoritesProvider } from "./features/view/hooks/FavoritesContext";

function App() {
  return (
    <CartProvider>
      <FavoritesProvider>
        <HashRouter>
          <Header />

          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/articles" element={<Article />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/myaccount" element={<Account />} />
            <Route path="/myfavorites" element={<Favorites />} />
            <Route path="/mybuys" element={<Purchases />} />
            <Route path="/cart" element={<Purchases />} />
          </Routes>

          <Footer />
        </HashRouter>
      </FavoritesProvider>
    </CartProvider>
  );
}

export default App;