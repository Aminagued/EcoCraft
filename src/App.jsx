import { useState } from "react";
import "./App.css";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Newsletter from "./components/Newsletter";
import ProductCustomizer from "./components/ProductCustomizer";
import Testimonials from "./components/Testimonials";

function App() {
  const [customization, setCustomization] = useState({
    product: "bottle",
    color: "#2a9d8f",
    size: "medium",
    engraving: "",
    material: "bamboo",
  });

  return (
    <div className="App">
      <Header />
      <section id="home">
        <Hero />
      </section>
      <section id="customizer">
        <ProductCustomizer
          customization={customization}
          setCustomization={setCustomization}
        />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="about">
        <Newsletter />
      </section>
      <Footer />
    </div>
  );
}

export default App;
