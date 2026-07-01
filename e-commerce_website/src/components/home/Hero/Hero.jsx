import "./Hero.css";
import Button from "../../common/Button/Button";
import heroImage from "../../../assets/images/banners/hero.jpg";

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-container">

        {/* Left Side */}
        <div className="hero-text">
          <h4 className="hero-subtitle">New Collection</h4>

          <h1 className="hero-title">
            Discover Modern Products for Your Lifestyle
          </h1>

          <p className="hero-description">
            Explore the latest trends with high-quality products at the best
            prices. Upgrade your lifestyle with our exclusive collection.
          </p>

          <div className="hero-buttons">
            <Button text="Shop Now" />
            <Button text="View Products" className="btn-outline" />
          </div>
        </div>

        {/* Right Side */}
        <div className="hero-image">
          <img src={heroImage} alt="Shopping Banner" />
        </div>

      </div>
    </section>
  );
}

export default Hero;