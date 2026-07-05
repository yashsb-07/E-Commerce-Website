import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer/Footer";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <div className="app-layout">
      <Navbar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/shop/product/:id" element={<ProductPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;