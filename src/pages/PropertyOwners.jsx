import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function PropertyOwners() {
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
        <div className="page-hero-bg" style={{ backgroundImage: "url('/image-5.webp')" }}></div>
        <div className="page-hero-overlay"></div>
        <div className="container">
          <div className="section-label">For Property Owners</div>
          <h1>Earn More From<br /><em style={{ color: "#B8D0DC" }}>Your Holiday Home</em></h1>
          <p>We handle everything — so you can enjoy the rewards without the hassle. Premium management for premium properties.</p>
        </div>
      </div>

      {/* BENEFITS */}
      <section style={{ background: "var(--bg-main)" }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 60px" }}>
            <div className="section-label" style={{ justifyContent: "center" }}>Benefits of Listing</div>
            <h2 className="section-title" style={{ textAlign: "center" }}>Why Owners Choose HHH</h2>
            <p className="section-desc" style={{ margin: "0 auto", textAlign: "center" }}>We don't just list your property — we manage it like it's our own, ensuring five-star guest experiences and maximum returns for you.</p>
          </div>
          <div className="benefits-grid">
            <div className="benefit-card reveal reveal-delay-1">
              <span className="benefit-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /><circle cx="12" cy="10" r="3" /></svg>
              </span>
              <h3>Professional Photography</h3>
              <p>Stunning architectural and lifestyle photography that showcases your property at its absolute finest across all channels.</p>
            </div>
            <div className="benefit-card reveal reveal-delay-2">
              <span className="benefit-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0" /><path d="M1.42 9a16 16 0 0 1 21.16 0" /><path d="M8.53 16.11a6 6 0 0 1 6.95 0" /><circle cx="12" cy="20" r="1" fill="currentColor" /></svg>
              </span>
              <h3>Multi-Platform Marketing</h3>
              <p>Your property listed across Airbnb, Booking.com, Vrbo, and our direct booking channels — maximising visibility and enquiries.</p>
            </div>
            <div className="benefit-card reveal reveal-delay-3">
              <span className="benefit-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
              </span>
              <h3>Optimised Pricing</h3>
              <p>Dynamic pricing strategies powered by real market data, ensuring you achieve the best possible rate every night of the year.</p>
            </div>
            <div className="benefit-card reveal reveal-delay-1">
              <span className="benefit-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
              </span>
              <h3>Housekeeping &amp; Maintenance</h3>
              <p>Hotel-standard cleaning, restocking, and proactive maintenance — your property stays immaculate between every guest.</p>
            </div>
            <div className="benefit-card reveal reveal-delay-2">
              <span className="benefit-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
              </span>
              <h3>Guest Management</h3>
              <p>Full guest communication, check-in coordination, and 24/7 support — we handle every guest interaction professionally.</p>
            </div>
            <div className="benefit-card reveal reveal-delay-3">
              <span className="benefit-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>
              </span>
              <h3>Monthly Reporting</h3>
              <p>Transparent monthly statements with booking data, revenue breakdown, and performance insights delivered directly to you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* REVENUE POTENTIAL */}
      <section style={{ background: "var(--bg-soft)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }} className="reveal">
            <div>
              <div className="section-label">Revenue Potential</div>
              <h2 className="section-title" style={{ color: "#1C3240" }}>What Could Your<br />Property Earn?</h2>
              <p className="section-desc" style={{ marginBottom: "32px", color: "#1C3240" }}>Hayat Island properties are in exceptionally high demand year-round. Our owners consistently outperform market benchmarks by an average of 30% thanks to our premium positioning and dynamic pricing.</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "36px" }}>
                <div style={{ background: "rgba(144,203,220,.08)", border: "1px solid rgba(144,203,220,.2)", borderRadius: "16px", padding: "24px", textAlign: "center" }}>
                  <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "2rem", fontWeight: 700, color: "var(--primary)", marginBottom: "6px" }}>AED 650</div>
                  <div style={{ fontSize: ".75rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: ".1em" }}>Avg. Nightly Rate</div>
                </div>
                <div style={{ background: "rgba(144,203,220,.08)", border: "1px solid rgba(144,203,220,.2)", borderRadius: "16px", padding: "24px", textAlign: "center" }}>
                  <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "2rem", fontWeight: 700, color: "var(--primary)", marginBottom: "6px" }}>82%</div>
                  <div style={{ fontSize: ".75rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: ".1em" }}>Avg. Occupancy</div>
                </div>
                <div style={{ background: "rgba(144,203,220,.08)", border: "1px solid rgba(144,203,220,.2)", borderRadius: "16px", padding: "24px", textAlign: "center" }}>
                  <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "2rem", fontWeight: 700, color: "var(--primary)", marginBottom: "6px" }}>AED 16K</div>
                  <div style={{ fontSize: ".75rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: ".1em" }}>Avg. Monthly Revenue</div>
                </div>
                <div style={{ background: "rgba(144,203,220,.08)", border: "1px solid rgba(144,203,220,.2)", borderRadius: "16px", padding: "24px", textAlign: "center" }}>
                  <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "2rem", fontWeight: 700, color: "var(--primary)", marginBottom: "6px" }}>AED 195K</div>
                  <div style={{ fontSize: ".75rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: ".1em" }}>Avg. Annual Revenue</div>
                </div>
              </div>
              <Link to="/roi-calculator" className="btn-primary-dark">Calculate Your Revenue →</Link>
            </div>
            <div style={{ background: "rgba(144,203,220,.28)", border: "1px solid rgba(144,203,220,.15)", borderRadius: "24px", padding: "48px" }}>
              <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.4rem", color: "#1C3240", marginBottom: "28px" }}>Management Services Included</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", padding: "14px", background: "rgba(144,203,220,.06)", borderRadius: "10px" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1C3240" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><polyline points="20 6 9 17 4 12" /></svg>
                  <span style={{ fontSize: ".9rem", color: "#1C3240" }}>RAKTDA Holiday Home Permit Management</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", padding: "14px", background: "rgba(144,203,220,.06)", borderRadius: "10px" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1C3240" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><polyline points="20 6 9 17 4 12" /></svg>
                  <span style={{ fontSize: ".9rem", color: "#1C3240" }}>Professional listing creation &amp; optimisation</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", padding: "14px", background: "rgba(144,203,220,.06)", borderRadius: "10px" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1C3240" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><polyline points="20 6 9 17 4 12" /></svg>
                  <span style={{ fontSize: ".9rem", color: "#1C3240" }}>Full guest screening &amp; background checks</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", padding: "14px", background: "rgba(144,203,220,.06)", borderRadius: "10px" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1C3240" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><polyline points="20 6 9 17 4 12" /></svg>
                  <span style={{ fontSize: ".9rem", color: "#1C3240" }}>24 / 7 emergency maintenance response</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", padding: "14px", background: "rgba(144,203,220,.06)", borderRadius: "10px" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1C3240" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><polyline points="20 6 9 17 4 12" /></svg>
                  <span style={{ fontSize: ".9rem", color: "#1C3240" }}>Insurance &amp; security deposit management</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", padding: "14px", background: "rgba(144,203,220,.06)", borderRadius: "10px" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1C3240" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><polyline points="20 6 9 17 4 12" /></svg>
                  <span style={{ fontSize: ".9rem", color: "#1C3240" }}>Monthly payouts &amp; financial reporting</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OWNER TESTIMONIALS */}
      <section style={{ background: "var(--bg-main)" }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: "center", marginBottom: "60px" }}>
            <div className="section-label" style={{ justifyContent: "center" }}>Owner Testimonials</div>
            <h2 className="section-title" style={{ textAlign: "center", color: "#1C3240" }}>What Our Owners Say</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "24px" }}>
            <div className="review-card reveal reveal-delay-1">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">"HHH transformed my investment property into a high-performing asset. The team's professionalism and attention to detail is outstanding. My revenue exceeded projections from month one."</p>
              <div className="review-author">
                <div className="review-avatar">K</div>
                <div>
                  <div className="review-name">Khalid A.</div>
                  <div className="review-country">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: "inline", verticalAlign: "middle", marginRight: "4px" }}><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                    Abu Dhabi, UAE
                  </div>
                </div>
              </div>
            </div>
            <div className="review-card reveal reveal-delay-2">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">"I was nervous about renting out my apartment but the HHH team made everything effortless. They handled everything from photos to guests, and the monthly income is incredible."</p>
              <div className="review-author">
                <div className="review-avatar">N</div>
                <div>
                  <div className="review-name">Nadia S.</div>
                  <div className="review-country">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: "inline", verticalAlign: "middle", marginRight: "4px" }}><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                    United Kingdom
                  </div>
                </div>
              </div>
            </div>
            <div className="review-card reveal reveal-delay-3">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">"The transparency is what I love most. I always know exactly how my property is performing, and the team responds within minutes. Best decision I ever made for my Hayat Island apartment."</p>
              <div className="review-author">
                <div className="review-avatar">O</div>
                <div>
                  <div className="review-name">Omar J.</div>
                  <div className="review-country">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: "inline", verticalAlign: "middle", marginRight: "4px" }}><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                    Germany
                  </div>
                </div>
              </div>
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
            <p>Join our growing portfolio of luxury Ras Al Khaimah holiday homes. Our team will guide you through every step of the onboarding process.</p>
            <div className="cta-buttons">
              <Link to="/how-it-works" className="btn-primary">See Listing Process</Link>
              <Link to="/contact" className="btn-outline" style={{ color: "#1C3240", borderColor: "rgba(144,203,220,.28)" }}>Contact Us Today</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
