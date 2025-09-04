const Features = () => {
  const features = [
    {
      icon: "fas fa-leaf",
      title: "Eco-Friendly Materials",
      description:
        "All our products are made from 100% sustainable and recycled materials.",
    },
    {
      icon: "fas fa-palette",
      title: "Fully Customizable",
      description:
        "Choose colors, materials, and add personal engravings to make it truly yours.",
    },
    {
      icon: "fas fa-truck",
      title: "Carbon Neutral Shipping",
      description: "We offset all carbon emissions from our shipping process.",
    },
    {
      icon: "fas fa-seedling",
      title: "Plant a Tree",
      description:
        "For every product sold, we plant a tree in partnership with OneTreePlanted.",
    },
  ];

  return (
    <section id="features" className="features">
      <div className="container">
        <h2>Why Choose EcoCraft?</h2>
        <p className="section-subtitle">
          We combine sustainability with beautiful design and personalization
        </p>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                <i className={feature.icon}></i>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
