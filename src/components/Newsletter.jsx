import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this to your backend
    console.log("Subscribed with email:", email);
    setSubscribed(true);
    setEmail("");

    // Reset after 3 seconds
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <section className="newsletter">
      <div className="container">
        <div className="newsletter-content">
          <h2>Stay in the Loop</h2>
          <p>
            Subscribe to our newsletter for updates on new products,
            sustainability tips, and exclusive offers.
          </p>

          {subscribed ? (
            <div className="success-message">
              <i className="fas fa-check-circle"></i>
              <span>Thank you for subscribing!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="newsletter-form">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">Subscribe</button>
            </form>
          )}

          <p className="privacy-note">
            We respect your privacy and will never share your information.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
