import { useNavigate } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";

const EmptyWishlist = () => {
  const navigate = useNavigate();

  const handleExploreProducts = () => {
    navigate("/shop");
  };

  return (
    <div className="empty-wishlist">
      <div className="empty-wishlist-icon">
        <FaRegHeart />
      </div>

      <h2>Your wishlist is empty</h2>

      <p>
        Save products you love and they will appear here.
      </p>

      <button
        type="button"
        className="empty-wishlist-btn"
        onClick={handleExploreProducts}
      >
        Explore Products
      </button>
    </div>
  );
};

export default EmptyWishlist;