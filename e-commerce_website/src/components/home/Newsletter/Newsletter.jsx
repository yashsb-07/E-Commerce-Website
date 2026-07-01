import "./Newsletter.css";
import Button from "../../common/Button/Button";

function Newsletter() {
  return (
    <section className="newsletter">
      <div className="container newsletter-content">

        <h2>Subscribe to Our Newsletter</h2>

        <p>
          Get updates about new products and special offers
        </p>

        <form className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email"
            required
          />

          <Button text="Subscribe" type="submit" />
        </form>

      </div>
    </section>
  );
}

export default Newsletter;