import "./Testimonials.css";
import { testimonials } from "../../../data/testimonials";

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">

        <div className="section-title">
          <h2>What Our Customers Say</h2>
          <p>Customer reviews and feedback</p>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <div className="testimonial-card" key={testimonial.id}>
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="user-img"
              />

              <p className="review">"{testimonial.review}"</p>

              <div className="rating">{testimonial.rating}</div>

              <h4 className="user-name">{testimonial.name}</h4>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;