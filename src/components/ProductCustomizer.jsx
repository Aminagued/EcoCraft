import { useState } from "react";
import { Animate } from "react-simple-animate";
import "./ProductCustomizer.css";

const ProductCustomizer = ({ customization, setCustomization }) => {
  const [activeTab, setActiveTab] = useState("color");
  const [engravingText, setEngravingText] = useState("");

  const products = [
    { id: "bottle", name: "Water Bottle", price: "$34.99" },
    { id: "bag", name: "Tote Bag", price: "$29.99" },
    { id: "cup", name: "Coffee Cup", price: "$24.99" },
  ];

  const colors = ["#2a9d8f", "#e9c46a", "#e76f51", "#264653", "#f4a261"];
  const sizes = ["small", "medium", "large"];
  const materials = ["bamboo", "recycled plastic", "stainless steel", "glass"];

  const handleEngravingChange = (e) => {
    const text = e.target.value;
    setEngravingText(text);
    if (text.length <= 15) {
      setCustomization({ ...customization, engraving: text });
    }
  };

  return (
    <section id="customizer" className="customizer-section">
      <div className="container">
        <h2>Create Your Sustainable Product</h2>
        <p className="section-subtitle">
          Customize every detail to match your style and values
        </p>

        <div className="customizer-container">
          <div className="product-display">
            <div className="product-visualization">
              <div
                className={`product-model ${customization.product}`}
                style={{ backgroundColor: customization.color }}
              >
                <div className="product-details">
                  <span className="product-name">{customization.product}</span>
                  {customization.engraving && (
                    <span className="engraving-preview">
                      {customization.engraving}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="product-info">
              <h3>
                Your Custom{" "}
                {products.find((p) => p.id === customization.product).name}
              </h3>
              <div className="price">
                $
                {customization.product === "bottle"
                  ? "34.99"
                  : customization.product === "bag"
                  ? "29.99"
                  : "24.99"}
              </div>
              <ul className="product-features">
                <li>
                  <i className="fas fa-check"></i> Made from sustainable
                  materials
                </li>
                <li>
                  <i className="fas fa-check"></i> Carbon neutral production
                </li>
                <li>
                  <i className="fas fa-check"></i> Lifetime warranty
                </li>
                <li>
                  <i className="fas fa-check"></i> Plant a tree with purchase
                </li>
              </ul>
            </div>
          </div>

          <div className="customization-options">
            <div className="options-tabs">
              <button
                className={activeTab === "product" ? "active" : ""}
                onClick={() => setActiveTab("product")}
              >
                <i className="fas fa-box"></i> Product
              </button>
              <button
                className={activeTab === "color" ? "active" : ""}
                onClick={() => setActiveTab("color")}
              >
                <i className="fas fa-palette"></i> Color
              </button>
              <button
                className={activeTab === "size" ? "active" : ""}
                onClick={() => setActiveTab("size")}
              >
                <i className="fas fa-ruler"></i> Size
              </button>
              <button
                className={activeTab === "material" ? "active" : ""}
                onClick={() => setActiveTab("material")}
              >
                <i className="fas fa-leaf"></i> Material
              </button>
              <button
                className={activeTab === "engraving" ? "active" : ""}
                onClick={() => setActiveTab("engraving")}
              >
                <i className="fas fa-pen"></i> Engraving
              </button>
            </div>

            <div className="options-content">
              {activeTab === "product" && (
                <Animate play start={{ opacity: 0 }} end={{ opacity: 1 }}>
                  <div className="product-options">
                    <h3>Choose Your Product</h3>
                    <div className="product-grid">
                      {products.map((product) => (
                        <div
                          key={product.id}
                          className={`product-option ${
                            customization.product === product.id
                              ? "selected"
                              : ""
                          }`}
                          onClick={() =>
                            setCustomization({
                              ...customization,
                              product: product.id,
                            })
                          }
                        >
                          <div className={`product-icon ${product.id}`}>
                            {product.id === "bottle" && (
                              <i className="fas fa-wine-bottle"></i>
                            )}
                            {product.id === "bag" && (
                              <i className="fas fa-shopping-bag"></i>
                            )}
                            {product.id === "cup" && (
                              <i className="fas fa-mug-hot"></i>
                            )}
                          </div>
                          <span className="option-name">{product.name}</span>
                          <span className="option-price">{product.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Animate>
              )}

              {activeTab === "color" && (
                <Animate play start={{ opacity: 0 }} end={{ opacity: 1 }}>
                  <div className="color-options">
                    <h3>Select Color</h3>
                    <div className="color-grid">
                      {colors.map((color) => (
                        <div
                          key={color}
                          className={`color-option ${
                            customization.color === color ? "selected" : ""
                          }`}
                          style={{ backgroundColor: color }}
                          onClick={() =>
                            setCustomization({ ...customization, color })
                          }
                        >
                          {customization.color === color && (
                            <i className="fas fa-check"></i>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </Animate>
              )}

              {activeTab === "size" && (
                <Animate play start={{ opacity: 0 }} end={{ opacity: 1 }}>
                  <div className="size-options">
                    <h3>Select Size</h3>
                    <div className="size-grid">
                      {sizes.map((size) => (
                        <div
                          key={size}
                          className={`size-option ${
                            customization.size === size ? "selected" : ""
                          }`}
                          onClick={() =>
                            setCustomization({ ...customization, size })
                          }
                        >
                          {size}
                        </div>
                      ))}
                    </div>
                  </div>
                </Animate>
              )}

              {activeTab === "material" && (
                <Animate play start={{ opacity: 0 }} end={{ opacity: 1 }}>
                  <div className="material-options">
                    <h3>Select Material</h3>
                    <div className="material-grid">
                      {materials.map((material) => (
                        <div
                          key={material}
                          className={`material-option ${
                            customization.material === material
                              ? "selected"
                              : ""
                          }`}
                          onClick={() =>
                            setCustomization({ ...customization, material })
                          }
                        >
                          {material}
                        </div>
                      ))}
                    </div>
                  </div>
                </Animate>
              )}

              {activeTab === "engraving" && (
                <Animate play start={{ opacity: 0 }} end={{ opacity: 1 }}>
                  <div className="engraving-options">
                    <h3>Add Personal Engraving</h3>
                    <p>
                      Make it truly yours with a custom message (max 15
                      characters)
                    </p>
                    <div className="engraving-input">
                      <input
                        type="text"
                        placeholder="Enter your text here"
                        value={engravingText}
                        onChange={handleEngravingChange}
                        maxLength={15}
                      />
                      <div className="char-count">
                        {engravingText.length}/15
                      </div>
                    </div>
                    <div className="engraving-preview-box">
                      Your engraving will appear here:
                      <div className="preview-text">
                        {customization.engraving || "Your text"}
                      </div>
                    </div>
                  </div>
                </Animate>
              )}
            </div>

            <div className="customization-summary">
              <h3>Your Custom Product</h3>
              <div className="summary-details">
                <div className="summary-item">
                  <span className="label">Product:</span>
                  <span className="value">
                    {products.find((p) => p.id === customization.product).name}
                  </span>
                </div>
                <div className="summary-item">
                  <span className="label">Color:</span>
                  <span className="value">
                    <span
                      className="color-dot"
                      style={{ backgroundColor: customization.color }}
                    ></span>
                    {customization.color}
                  </span>
                </div>
                <div className="summary-item">
                  <span className="label">Size:</span>
                  <span className="value">{customization.size}</span>
                </div>
                <div className="summary-item">
                  <span className="label">Material:</span>
                  <span className="value">{customization.material}</span>
                </div>
                {customization.engraving && (
                  <div className="summary-item">
                    <span className="label">Engraving:</span>
                    <span className="value">{customization.engraving}</span>
                  </div>
                )}
              </div>
              <div className="summary-total">
                <div className="total-label">Total:</div>
                <div className="total-price">
                  $
                  {customization.product === "bottle"
                    ? "34.99"
                    : customization.product === "bag"
                    ? "29.99"
                    : "24.99"}
                </div>
              </div>
              <button className="cta-button add-to-cart">
                <i className="fas fa-shopping-cart"></i> Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCustomizer;
