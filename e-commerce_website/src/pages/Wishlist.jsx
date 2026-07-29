import "../components/wishlist/Wishlist.css";

const Wishlist = () => {
  return (
    <section className="wishlist-page">
      <div className="container">
        <div className="wishlist-header">
          <h1>Your Wishlist</h1>

          <p>
            Save your favorite products here and come back to
            them anytime.
          </p>
        </div>

        <div className="wishlist-content">
          <p>
            Your saved products will appear here.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Wishlist;