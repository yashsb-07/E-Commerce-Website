import "./Categories.css";

import menImage from "../../../assets/images/categories/men.jpg";
import womenImage from "../../../assets/images/categories/women.jpg";
import phoneImage from "../../../assets/images/categories/smartphones.jpeg";
import shoesImage from "../../../assets/images/categories/shoes.png";
import headphoneImage from "../../../assets/images/categories/headphones.png";
import watchImage from "../../../assets/images/categories/watches.jpeg";

function Categories() {
  const categories = [
    { id: 1, name: "Men", image: menImage },
    { id: 2, name: "Women", image: womenImage },
    { id: 3, name: "Smartphones", image: phoneImage },
    { id: 4, name: "Shoes", image: shoesImage },
    { id: 5, name: "Headphones", image: headphoneImage },
    { id: 6, name: "Watches", image: watchImage },
  ];

  return (
    <section className="categories">
      <div className="container">

        <div className="section-title">
          <h2>Shop by Category</h2>
          <p>Browse our wide range of categories</p>
        </div>

        <div className="categories-grid">
          {categories.map((category) => (
            <div className="category-card" key={category.id}>
              <img src={category.image} alt={category.name} />

              <div className="category-overlay">
                <h3>{category.name}</h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Categories;