import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Services.css";

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      {/* PAGE HERO */}
      <div className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('/image-15.webp')" }}></div>
        <div className="page-hero-overlay"></div>
        <div className="container">
          <div className="section-label">Our Services</div>
          <h1>Comprehensive<br /><em style={{ color: "#B8D0DC" }}>Management Services</em></h1>
          <p>End-to-end short-term rental management covering everything from guest communication to compliance — so you can focus on returns, not operations.</p>
        </div>
      </div>

      {/* SERVICE CATEGORIES */}
      <section className="services-detail-section">
        <div className="container">
          {/* 1: Guest Experience */}
          <div className="service-category reveal">
            <div>
              <div className="service-cat-label"><span className="material-symbols-outlined" style={{ fontSize: "14px" }}>support_agent</span> Category 01</div>
              <h2 className="service-cat-title">Guest Experience<br />&amp; Hospitality</h2>
              <p className="service-cat-desc">We handle every guest interaction — from the first enquiry to the final review — ensuring an exceptional, hotel-level experience that drives repeat bookings and glowing reviews.</p>
              <ul className="service-list">
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  24/7 guest communication — across all booking platforms
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  Guest vetting, ID collection and background screening
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  Seamless check-in and check-out coordination
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  Issue resolution and in-stay guest support
                </li>
              </ul>
            </div>
            <div className="service-icon-block">
              <div className="service-icon-big">
                <span className="material-symbols-outlined">support_agent</span>
              </div>
              <h4>5-Star Guest Service</h4>
              <p>Hotel-level hospitality delivered within every private vacation home we manage.</p>
            </div>
          </div>

          {/* 2: Operations & Property Care */}
          <div className="service-category reverse reveal">
            <div>
              <div className="service-cat-label"><span className="material-symbols-outlined" style={{ fontSize: "14px" }}>home_repair_service</span> Category 02</div>
              <h2 className="service-cat-title">Operations &amp;<br />Property Care</h2>
              <p className="service-cat-desc">We maintain every property to the highest standard between stays — ensuring your asset is always guest-ready, immaculate, and fully operational.</p>
              <ul className="service-list">
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  Professional housekeeping coordination &amp; quality checks
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  Maintenance scheduling, inspections &amp; repairs
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  Linen, consumables &amp; amenity restocking
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  Full inventory control and asset tracking
                </li>
              </ul>
            </div>
            <div className="service-icon-block">
              <div className="service-icon-big">
                <span className="material-symbols-outlined">cleaning_services</span>
              </div>
              <h4>Pristine Every Time</h4>
              <p>Your property maintained, inspected, and guest-ready for every single booking.</p>
            </div>
          </div>

          {/* 3: Revenue Management */}
          <div className="service-category reveal">
            <div>
              <div className="service-cat-label"><span className="material-symbols-outlined" style={{ fontSize: "14px" }}>trending_up</span> Category 03</div>
              <h2 className="service-cat-title">Revenue<br />Management</h2>
              <p className="service-cat-desc">We deploy sophisticated pricing strategies and multi-platform listing techniques to maximise your property's occupancy and monthly income throughout the year.</p>
              <ul className="service-list">
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  Dynamic pricing strategy — market data-driven nightly rates
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  Multi-platform listing optimisation (Airbnb, Booking.com, Expedia, VRBO)
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  Professional photography &amp; lifestyle staging
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  Occupancy &amp; revenue optimisation reporting
                </li>
              </ul>
            </div>
            <div className="service-icon-block">
              <div className="service-icon-big">
                <span className="material-symbols-outlined">trending_up</span>
              </div>
              <h4>Maximised Returns</h4>
              <p>Smart pricing and saturated platform exposure keeps your calendar full and revenue growing.</p>
            </div>
          </div>

          {/* 4: Owner Support & Compliance */}
          <div className="service-category reverse reveal">
            <div>
              <div className="service-cat-label"><span className="material-symbols-outlined" style={{ fontSize: "14px" }}>gavel</span> Category 04</div>
              <h2 className="service-cat-title">Owner Support<br />&amp; Compliance</h2>
              <p className="service-cat-desc">We keep you fully informed and fully compliant — handling all regulatory requirements while delivering transparent monthly insights into your property's performance.</p>
              <ul className="service-list">
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  Monthly financial reporting &amp; performance dashboards
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  FEWA utility bill monitoring &amp; management
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  RAKTDA compliance, permit management &amp; renewals
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  Transparent owner portals with real-time data access
                </li>
              </ul>
            </div>
            <div className="service-icon-block">
              <div className="service-icon-big">
                <span className="material-symbols-outlined">library_books</span>
              </div>
              <h4>Full Transparency</h4>
              <p>Monthly statements, live dashboards, and compliance managed — so you always know exactly where you stand.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PLATFORMS */}
      <section className="platforms-section">
        <div className="container">
          <div className="reveal" style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto 0" }}>
            <div className="section-label" style={{ justifyContent: "center" }}>Maximum Exposure</div>
            <h2 className="section-title" style={{ textAlign: "center" }}>Listed on All Major<br />Booking Platforms</h2>
            <p className="section-desc" style={{ textAlign: "center", margin: "0 auto" }}>Your property reaches millions of travellers worldwide through our multi-platform listing strategy — giving you the broadest possible audience and the highest possible occupancy.</p>
          </div>
          <div className="platforms-grid reveal">
            <div className="platform-card">
              <div className="platform-name">Airbnb</div>
              <div className="platform-desc">The world's largest vacation rental marketplace</div>
            </div>
            <div className="platform-card">
              <div className="platform-name">Booking.com</div>
              <div className="platform-desc">Global OTA with 500M+ monthly visitors</div>
            </div>
            <div className="platform-card">
              <div className="platform-name">Expedia</div>
              <div className="platform-desc">Major travel platform reaching global audiences</div>
            </div>
            <div className="platform-card">
              <div className="platform-name">VRBO</div>
              <div className="platform-desc">Vacation rental specialist with premium travellers</div>
            </div>
          </div>
        </div>
      </section>

      {/* PROPERTY ONBOARDING */}
      <section className="onboarding-section">
        <div className="container">
          <div className="reveal" style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto 0" }}>
            <div className="section-label" style={{ justifyContent: "center" }}>Property Onboarding</div>
            <h2 className="section-title" style={{ textAlign: "center" }}>From Property to<br />Live Listing in Days</h2>
            <p className="section-desc" style={{ textAlign: "center", margin: "0 auto" }}>Holiday Home Host provides complete onboarding for new properties including professional staging, listing optimisation, photography, and multi-platform distribution across all major booking platforms.</p>
          </div>
          <div className="onboarding-grid reveal">
            <div className="onboarding-step">
              <div className="onboarding-num">01</div>
              <h4>Consultation &amp; Assessment</h4>
              <p>We evaluate your property, discuss your goals, and outline the onboarding roadmap.</p>
            </div>
            <div className="onboarding-step">
              <div className="onboarding-num">02</div>
              <h4>Staging &amp; Photography</h4>
              <p>Professional staging and lifestyle photography that showcases your property at its finest.</p>
            </div>
            <div className="onboarding-step">
              <div className="onboarding-num">03</div>
              <h4>Listing &amp; Distribution</h4>
              <p>Compelling listing copy, dynamic pricing setup, and live publication across all platforms.</p>
            </div>
            <div className="onboarding-step">
              <div className="onboarding-num">04</div>
              <h4>Full Management Begins</h4>
              <p>We handle all guests, operations, and reporting. You simply receive your monthly statement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="owner-cta-section">
        <div className="cta-bg-shapes">
          <div className="cta-shape cta-shape-1"></div>
          <div className="cta-shape cta-shape-2"></div>
        </div>
        <div className="container">
          <div className="owner-cta-content reveal">
            <div className="section-label" style={{ justifyContent: "center", marginBottom: "20px" }}>Get Started</div>
            <h2>Ready to List<br />Your Property?</h2>
            <p>Join our growing portfolio of premium Ras Al Khaimah holiday homes. Our 20% all-inclusive management fee means no surprises — just results.</p>
            <div className="cta-buttons">
              <Link to="/how-it-works" className="btn-primary">See How It Works</Link>
              <Link to="/commission" className="btn-outline">Our Commission Model</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
