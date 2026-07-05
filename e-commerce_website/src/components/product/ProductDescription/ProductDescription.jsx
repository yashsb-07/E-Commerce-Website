import "./ProductDescription.css";

function ProductDescription() {
  return (
    <section className="product-description-section">
      <div className="container">

        <div className="description-card">

          <h2>Product Description</h2>

          <p>
            The Apple iPhone 17 Pro Max is designed for users who demand the
            best. With a premium titanium body, A19 Bionic chip, advanced
            camera system, and all-day battery life, it delivers flagship
            performance like never before.
          </p>

          <h3>Key Features</h3>

          <ul>
            <li>6.9-inch Super Retina XDR Display</li>
            <li>A19 Bionic Processor</li>
            <li>48MP Triple Camera Setup</li>
            <li>512GB Internal Storage</li>
            <li>5G Connectivity</li>
            <li>Face ID Security</li>
          </ul>

          <h3>Specifications</h3>

          <div className="specs-grid">
            <div>
              <strong>Brand:</strong> Apple
            </div>

            <div>
              <strong>Model:</strong> iPhone 17 Pro Max
            </div>

            <div>
              <strong>Storage:</strong> 512GB
            </div>

            <div>
              <strong>Color:</strong> Cosmic Orange
            </div>

            <div>
              <strong>Battery:</strong> 5000mAh
            </div>

            <div>
              <strong>Network:</strong> 5G
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ProductDescription;