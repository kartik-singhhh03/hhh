import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LodgifySearchBar from "./components/LodgifySearchBar";
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

const SEO_BY_PATH = {
  "/": {
    title: "Holiday Home Host | Premium Holiday Homes in Ras Al Khaimah",
    description:
      "Book premium coastal holiday homes on Hayat Island, Ras Al Khaimah, or partner with Holiday Home Host for short-term rental management.",
  },
  "/about": {
    title: "About Holiday Home Host | Ras Al Khaimah Rental Management",
    description:
      "Meet Holiday Home Host, a hospitality-led short-term rental management company serving Hayat Island, Mina Al Arab, and Ras Al Khaimah.",
  },
  "/property-owners": {
    title: "For Property Owners | Holiday Home Host",
    description:
      "Earn more from your Ras Al Khaimah holiday home with professional listing, guest, housekeeping, pricing, and reporting support.",
  },
  "/services": {
    title: "Holiday Home Management Services | Holiday Home Host",
    description:
      "Explore HHH services including dynamic pricing, guest communication, housekeeping coordination, listing optimisation, and compliance support.",
  },
  "/commission": {
    title: "Commission Structure | Holiday Home Host",
    description:
      "See the transparent 20% all-inclusive Holiday Home Host management fee and what is included for property owners.",
  },
  "/how-it-works": {
    title: "How It Works | Holiday Home Host",
    description:
      "Learn the simple onboarding process for listing and managing your holiday home with Holiday Home Host.",
  },
  "/roi-calculator": {
    title: "ROI Calculator | Holiday Home Host",
    description:
      "Estimate monthly and annual holiday home revenue for Ras Al Khaimah properties using the HHH rental revenue calculator.",
  },
  "/partnerships": {
    title: "Partnerships | Holiday Home Host",
    description:
      "Partner with Holiday Home Host for real estate, hospitality, and property owner opportunities in Ras Al Khaimah.",
  },
  "/partnership-agreements": {
    title: "Partnership Agreements | Holiday Home Host",
    description:
      "Review the partnership terms and operating model for working with Holiday Home Host.",
  },
  "/real-estate-agencies": {
    title: "Real Estate Agency Partnerships | Holiday Home Host",
    description:
      "Referral and partnership opportunities for real estate agencies with Holiday Home Host in Ras Al Khaimah.",
  },
};

function getNavOffset() {
  const nav = document.getElementById("mainNav");
  return nav ? nav.getBoundingClientRect().height + 14 : 92;
}

function updateMeta(name, content, property = false) {
  const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
  let tag = document.head.querySelector(selector);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(property ? "property" : "name", name);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

export default function App() {
  const location = useLocation();

  useEffect(() => {
    const items = document.querySelectorAll(".reveal");
    if (!items.length) return;

    if (!("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("visible"));
      return;
    }

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
  }, [location.pathname]);

  useEffect(() => {
    const seo = SEO_BY_PATH[location.pathname] ?? SEO_BY_PATH["/"];
    const canonicalUrl = `https://www.holidayhomehost.ae${location.pathname}`;

    document.title = seo.title;
    updateMeta("description", seo.description);
    updateMeta("og:title", seo.title, true);
    updateMeta("og:description", seo.description, true);
    updateMeta("og:url", canonicalUrl, true);
    updateMeta("twitter:title", seo.title);
    updateMeta("twitter:description", seo.description);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);
  }, [location.pathname]);

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      return;
    }

    const id = location.hash.replace("#", "");
    window.setTimeout(() => {
      const target = document.getElementById(id);
      if (!target) return;

      const top =
        target.getBoundingClientRect().top + window.scrollY - getNavOffset();
      window.scrollTo({ top, behavior: "smooth" });
    }, 80);
  }, [location]);

  return (
    <div className="hhh-fw">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <LodgifySearchBar />
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
