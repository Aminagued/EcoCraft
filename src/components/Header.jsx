import { useEffect, useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Function to handle scroll and detect active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          window.pageYOffset >= sectionTop - 100 &&
          window.pageYOffset < sectionTop + sectionHeight - 100
        ) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to handle smooth scrolling to section
  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <header>
      <div className="logo">EcoCraft</div>
      <nav className={isMenuOpen ? "nav-open" : ""}>
        <ul>
          <li>
            <a
              href="#home"
              className={activeSection === "home" ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("home");
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#customizer"
              className={activeSection === "customizer" ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("customizer");
              }}
            >
              Customize
            </a>
          </li>
          <li>
            <a
              href="#features"
              className={activeSection === "features" ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("features");
              }}
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#testimonials"
              className={activeSection === "testimonials" ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("testimonials");
              }}
            >
              Testimonials
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={activeSection === "about" ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("about");
              }}
            >
              About
            </a>
          </li>
        </ul>
      </nav>
      <button
        className="cta-button"
        onClick={() => scrollToSection("customizer")}
      >
        Get Started
      </button>
      <button
        className="mobile-menu-btn"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <i className={isMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
      </button>
    </header>
  );
};

export default Header;
