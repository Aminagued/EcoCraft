const Hero = () => {
  const scrollToCustomizer = () => {
    const section = document.getElementById("customizer");
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Custom Sustainable Products Made Just For You</h1>
          <p>
            EcoCraft creates beautiful, eco-friendly products that you can
            customize to match your style while helping protect our planet.
          </p>
          <div className="hero-buttons">
            <button className="cta-button primary" onClick={scrollToCustomizer}>
              Create Yours
            </button>
            <button className="cta-button secondary">Learn More</button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">10K+</span>
              <span className="stat-label">Happy Customers</span>
            </div>
            <div className="stat">
              <span className="stat-number">15K+</span>
              <span className="stat-label">Trees Planted</span>
            </div>
            <div className="stat">
              <span className="stat-number">98%</span>
              <span className="stat-label">Recycled Materials</span>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <div className="floating-product">
            <div className="product-circle"></div>
            <div className="product-circle"></div>
            <div className="product-circle"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
