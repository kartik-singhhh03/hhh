import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sections from "./components/Sections";
import Footer from "./components/Footer";

// Pages
import About from "./pages/About";
import PropertyOwners from "./pages/PropertyOwners";
import Services from "./pages/Services";
import Commission from "./pages/Commission";
import HowItWorks from "./pages/HowItWorks";
import RoiCalculator from "./pages/RoiCalculator";
import Partnerships from "./pages/Partnerships";
import PartnershipAgreements from "./pages/PartnershipAgreements";
import RealEstateAgencies from "./pages/RealEstateAgencies";

export default function App() {
  useEffect(() => {
    const items = document.querySelectorAll(".reveal");
    if (!items.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    items.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="hhh-fw">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Sections />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/property-owners" element={<PropertyOwners />} />
        <Route path="/services" element={<Services />} />
        <Route path="/commission" element={<Commission />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/roi-calculator" element={<RoiCalculator />} />
        <Route path="/partnerships" element={<Partnerships />} />
        <Route path="/partnership-agreements" element={<PartnershipAgreements />} />
        <Route path="/real-estate-agencies" element={<RealEstateAgencies />} />
      </Routes>

      <Footer />

      <div
        id="toast"
        style={{
          position: "fixed",
          bottom: "32px",
          right: "32px",
          zIndex: 3000,
          background: "rgba(255,255,255,.95)",
          border: "1px solid var(--border)",
          backdropFilter: "blur(16px)",
          borderRadius: "12px",
          padding: "16px 24px",
          fontFamily: "var(--font-ui)",
          fontSize: ".9rem",
          color: "var(--text-dark)",
          transform: "translateY(80px)",
          opacity: 0,
          transition: "all .4s ease",
          pointerEvents: "none",
          maxWidth: "300px",
          boxShadow: "var(--shadow-md)",
        }}
        aria-live="polite"
      ></div>
    </div>
  );
}
