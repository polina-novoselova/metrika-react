import React from "react";
import "./reset.css";
import Navigation from "./assets/components/Navigation/Navigation";
import AboutSection from "./assets/components/AboutSection/AboutSection";
import ContactsSection from "./assets/components/ContactsSection/ContactsSection";
import Footer from "./assets/components/Footer/Footer";
import Gallery from "./assets/components/Gallery/Gallery";
import MainSection from "./assets/components/MainSection/MainSection";
import ProjectSection from "./assets/components/ProjectSection/ProjectSection";
import ReviewsSection from "./assets/components/ReviewsSection/ReviewsSection";
import ServicesSection from "./assets/components/ServicesSection/ServicesSection";

function App() {
  return (
    <div>
      <div className="conteiner">
        <Navigation />
        <MainSection />
        <AboutSection />
        <ProjectSection />
      </div>
      <ServicesSection />
      <div className="conteiner">
        <ReviewsSection />
        <Gallery />
        <ContactsSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
