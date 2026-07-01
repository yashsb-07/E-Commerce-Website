import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer/Footer";
import Button from "./components/common/Button/Button";
import ProductCard from "./components/common/ProductCard/ProductCard";
import Hero from "./components/home/Hero/Hero";
import Categories from "./components/home/Categories/Categories";
import FeaturedProducts from "./components/home/FeaturedProducts/FeaturedProducts";
import Banner from "./components/home/Banner/Banner";
import NewArrivals from "./components/home/NewArrivals/NewArrivals";
import Testimonials from "./components/home/Testimonials/Testimonials";


function App() {
  return (
    <div className="app-layout">
      <Navbar />

      <main className="main-content">
        <Hero />
        <Categories />
        <FeaturedProducts />
        <Banner />
        <NewArrivals />
        <Testimonials />
      </main>

      <Footer />
    </div>
  );
}

export default App;