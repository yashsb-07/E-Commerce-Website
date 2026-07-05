import "./ProductBreadcrumb.css";

function ProductBreadcrumb({ product }) {
  return (
    <section className="product-breadcrumb">
      <div className="container">
        <p>
          <span>Home</span> &gt; <span>Shop</span> &gt;{" "}
          <span>{product.category}</span> &gt; {product.title}
        </p>
      </div>
    </section>
  );
}

export default ProductBreadcrumb;