import Hero from "../components/home/Hero/Hero";
import Categories from "../components/home/Categories/Categories";
import FeaturedProducts from "../components/home/FeaturedProducts/FeaturedProducts";
import Banner from "../components/home/Banner/Banner";
import NewArrivals from "../components/home/NewArrivals/NewArrivals";
import Testimonials from "../components/home/Testimonials/Testimonials";
import Newsletter from "../components/home/Newsletter/Newsletter";

function HomePage() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Banner />
      <NewArrivals />
      <Testimonials />
      <Newsletter />
    </>
  );
}

export default HomePage;