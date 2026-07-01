import "./Banner.css";
import Button from "../../common/Button/Button";

function Banner() {
  return (
    <section className="banner">
      <div className="banner-overlay">
        <div className="container banner-content">
          <h2>Big Sale 50% OFF</h2>
          <p>On all products this week. Don't miss out!</p>

          <Button text="Shop Now" />
        </div>
      </div>
    </section>
  );
}

export default Banner;