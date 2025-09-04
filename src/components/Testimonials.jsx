import { useState } from "react";

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Environmental Activist",
      content:
        "I love my custom water bottle from EcoCraft! Not only is it beautiful and personalized, but I feel good knowing it's made from recycled materials.",
      avatar: "👩",
    },
    {
      name: "Michael Chen",
      role: "Graphic Designer",
      content:
        "The customization options are incredible. I was able to create a truly unique product that reflects my style while being environmentally conscious.",
      avatar: "👨",
    },
    {
      name: "Eco Warriors Group",
      role: "Non-profit Organization",
      content:
        "We ordered custom products for our entire team and the quality exceeded our expectations. Plus, their planting a tree for each product aligns with our mission.",
      avatar: "👥",
    },
  ];

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2>What Our Customers Say</h2>
        <p className="section-subtitle">
          Don't just take our word for it - hear from our satisfied customers
        </p>

        <div className="testimonial-container">
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>"{testimonials[activeTestimonial].content}"</p>
            </div>
            <div className="testimonial-author">
              <div className="avatar">
                {testimonials[activeTestimonial].avatar}
              </div>
              <div className="author-info">
                <h4>{testimonials[activeTestimonial].name}</h4>
                <p>{testimonials[activeTestimonial].role}</p>
              </div>
            </div>
          </div>

          <div className="testimonial-nav">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={activeTestimonial === index ? "active" : ""}
                onClick={() => setActiveTestimonial(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
