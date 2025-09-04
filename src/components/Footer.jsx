import { useEffect, useState } from "react";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  // This ensures the year stays updated
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>EcoCraft</h3>
            <p>
              Creating sustainable, customizable products for a better planet.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" aria-label="Pinterest">
                <i className="fab fa-pinterest-p"></i>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Shop</h4>
            <ul>
              <li>
                <a href="#">Water Bottles</a>
              </li>
              <li>
                <a href="#">Tote Bags</a>
              </li>
              <li>
                <a href="#">Coffee Cups</a>
              </li>
              <li>
                <a href="#">Accessories</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Sustainability</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Support</h4>
            <ul>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Shipping</a>
              </li>
              <li>
                <a href="#">Returns</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} EcoCraft. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
