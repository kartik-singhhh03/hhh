import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Commission.css";

export default function Commission() {
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
      {/* FEE HERO */}
      <section className="fee-hero">
        <div className="fee-hero-bg-blob fee-hero-bg-blob-1"></div>
        <div className="fee-hero-bg-blob fee-hero-bg-blob-2"></div>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="section-label" style={{ justifyContent: "center", color: "var(--primary-dark)", marginBottom: "24px" }}>
            Commission Structure
          </div>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, color: "var(--text-dark)", marginBottom: "16px", lineHeight: 1.15 }}>
            HHH Commission Structure
          </h1>
          <p style={{ fontSize: "1rem", color: "var(--text-body)", marginBottom: 0, fontFamily: "var(--font-ui)", letterSpacing: ".08em", textTransform: "uppercase", fontWeight: 600 }}>
            Transparent &amp; Competitive Fee Model
          </p>
          <div className="fee-display">
            <span className="fee-number">20</span><span className="fee-pct">%</span>
          </div>
          <span className="fee-label">All-Inclusive Management Fee</span>
          <p className="fee-subtitle" style={{ marginTop: "28px" }}>
            One simple, transparent fee. No hidden charges. No setup costs. No surprises.<br />
            Everything needed to run a world-class holiday home operation — included.
          </p>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="included-section">
        <div className="container">
          <div className="reveal" style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto 0" }}>
            <div className="section-label" style={{ justifyContent: "center" }}>
              What's Covered
            </div>
            <h2 className="section-title" style={{ textAlign: "center" }}>
              Everything Included in<br />Your 20% Fee
            </h2>
            <p className="section-desc" style={{ textAlign: "center", margin: "0 auto" }}>
              Our 20% management fee covers complete premium short-term rental operations — we handle every aspect of your property's performance and guest experience.
            </p>
          </div>
          <div className="included-grid">
            <div className="included-card reveal reveal-delay-1">
              <div className="included-card-icon"><span className="material-symbols-outlined">support_agent</span></div>
              <h3>24/7 Guest Communication</h3>
              <p>Round-the-clock guest messaging, enquiry handling, and issue resolution across all booking platforms.</p>
            </div>
            <div className="included-card reveal reveal-delay-2">
              <div className="included-card-icon"><span className="material-symbols-outlined">badge</span></div>
              <h3>Guest Vetting &amp; Screening</h3>
              <p>Full guest ID collection, background screening, and booking verification for every reservation.</p>
            </div>
            <div className="included-card reveal reveal-delay-3">
              <div className="included-card-icon"><span className="material-symbols-outlined">cleaning_services</span></div>
              <h3>Housekeeping Coordination</h3>
              <p>Hotel-standard cleaning, linen management, consumables restocking, and post-stay inspections.</p>
            </div>
            <div className="included-card reveal reveal-delay-1">
              <div className="included-card-icon"><span className="material-symbols-outlined">trending_up</span></div>
              <h3>Dynamic Pricing</h3>
              <p>Data-driven nightly rate optimisation that adapts to market demand and seasonality to maximise revenue.</p>
            </div>
            <div className="included-card reveal reveal-delay-2">
              <div className="included-card-icon"><span className="material-symbols-outlined">travel_explore</span></div>
              <h3>Multi-Platform Listing</h3>
              <p>Professional listings managed and optimised across Airbnb, Booking.com, Expedia, VRBO, and more.</p>
            </div>
            <div className="included-card reveal reveal-delay-3">
              <div className="included-card-icon"><span className="material-symbols-outlined">photo_camera</span></div>
              <h3>Professional Photography</h3>
              <p>High-quality property photography and lifestyle staging to attract premium guests at higher rates.</p>
            </div>
            <div className="included-card reveal reveal-delay-1">
              <div className="included-card-icon"><span className="material-symbols-outlined">home_repair_service</span></div>
              <h3>Maintenance &amp; Inspections</h3>
              <p>Proactive maintenance scheduling, regular property inspections, and rapid response to repair needs.</p>
            </div>
            <div className="included-card reveal reveal-delay-2">
              <div className="included-card-icon"><span className="material-symbols-outlined">gavel</span></div>
              <h3>RAKTDA Compliance</h3>
              <p>Full management of RAKTDA permits, regulatory compliance, and FEWA utility bill monitoring.</p>
            </div>
            <div className="included-card reveal reveal-delay-3">
              <div className="included-card-icon"><span className="material-symbols-outlined">library_books</span></div>
              <h3>Monthly Financial Reports</h3>
              <p>Detailed monthly statements, performance dashboards, and revenue breakdowns delivered with every payout.</p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="comparison-section">
        <div className="container">
          <div className="reveal" style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 0" }}>
            <div className="section-label" style={{ justifyContent: "center" }}>
              HHH vs. Self-Management
            </div>
            <h2 className="section-title" style={{ textAlign: "center" }}>
              Why HHH Management<br />Makes Financial Sense
            </h2>
            <p className="section-desc" style={{ textAlign: "center", margin: "0 auto" }}>
              Our professional management consistently outperforms self-managed properties through higher occupancy, better pricing, and superior guest reviews.
            </p>
          </div>
          <div className="comparison-table reveal">
            <div className="comparison-row header">
              <div className="comparison-cell header-cell">What You Get</div>
              <div className="comparison-cell header-cell center" style={{ color: "var(--primary)" }}>With HHH</div>
              <div className="comparison-cell header-cell center">Self-Managed</div>
            </div>
            <div className="comparison-row">
              <div className="comparison-cell">Dynamic pricing strategy &amp; revenue optimisation</div>
              <div className="comparison-cell center hhh-col"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="check-icon"><polyline points="20 6 9 17 4 12"/></svg></div>
              <div className="comparison-cell center"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cross-icon"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></div>
            </div>
            <div className="comparison-row">
              <div className="comparison-cell">24/7 guest communication across all platforms</div>
              <div className="comparison-cell center hhh-col"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="check-icon"><polyline points="20 6 9 17 4 12"/></svg></div>
              <div className="comparison-cell center"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cross-icon"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></div>
            </div>
            <div className="comparison-row">
              <div className="comparison-cell">Professional photography &amp; listing optimisation</div>
              <div className="comparison-cell center hhh-col"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="check-icon"><polyline points="20 6 9 17 4 12"/></svg></div>
              <div className="comparison-cell center"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cross-icon"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></div>
            </div>
            <div className="comparison-row">
              <div className="comparison-cell">Coordinated housekeeping &amp; maintenance</div>
              <div className="comparison-cell center hhh-col"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="check-icon"><polyline points="20 6 9 17 4 12"/></svg></div>
              <div className="comparison-cell center"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cross-icon"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></div>
            </div>
            <div className="comparison-row">
              <div className="comparison-cell">RAKTDA compliance &amp; permit management</div>
              <div className="comparison-cell center hhh-col"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="check-icon"><polyline points="20 6 9 17 4 12"/></svg></div>
              <div className="comparison-cell center"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cross-icon"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></div>
            </div>
            <div className="comparison-row">
              <div className="comparison-cell">Monthly financial statements &amp; reporting</div>
              <div className="comparison-cell center hhh-col"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="check-icon"><polyline points="20 6 9 17 4 12"/></svg></div>
              <div className="comparison-cell center"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cross-icon"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></div>
            </div>
            <div className="comparison-row">
              <div className="comparison-cell">Your personal time invested per month</div>
              <div className="comparison-cell center hhh-col" style={{ fontWeight: 700 }}>~0 hours</div>
              <div className="comparison-cell center" style={{ color: "rgba(255,100,100,.7)", fontWeight: 600 }}>20+ hours</div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="value-props-section">
        <div className="container">
          <div className="reveal" style={{ maxWidth: "600px" }}>
            <div className="section-label">Core Value Drivers</div>
            <h2 className="section-title">Value We Create<br />for Every Partner</h2>
          </div>
          <div className="value-props-grid">
            <div className="value-prop reveal reveal-delay-1">
              <div className="value-prop-icon"><span className="material-symbols-outlined">group</span></div>
              <div>
                <h4>Exceptional Guest Experience</h4>
                <p>Consistent quality, reliable service, and fast response times that generate 5-star reviews and repeat bookings.</p>
              </div>
            </div>
            <div className="value-prop reveal reveal-delay-2">
              <div className="value-prop-icon"><span className="material-symbols-outlined">currency_exchange</span></div>
              <div>
                <h4>Maximised Owner Returns</h4>
                <p>Dynamic pricing, high occupancy, and multi-platform exposure consistently outperform market benchmarks.</p>
              </div>
            </div>
            <div className="value-prop reveal reveal-delay-1">
              <div className="value-prop-icon"><span className="material-symbols-outlined">shield</span></div>
              <div>
                <h4>Asset Protection</h4>
                <p>Rigorous guest vetting, security deposits, regular inspections, and rapid maintenance keep your property in perfect condition.</p>
              </div>
            </div>
            <div className="value-prop reveal reveal-delay-2">
              <div className="value-prop-icon"><span className="material-symbols-outlined">eco</span></div>
              <div>
                <h4>Sustainable Tourism Impact</h4>
                <p>Our operations align with Ras Al Khaimah's commitment to responsible, sustainable tourism growth and development.</p>
              </div>
            </div>
            <div className="value-prop reveal reveal-delay-1">
              <div className="value-prop-icon"><span className="material-symbols-outlined">partner_exchange</span></div>
              <div>
                <h4>Strong Industry Partnerships</h4>
                <p>Direct relationships with major booking platforms, local authorities, and service providers that benefit your property.</p>
              </div>
            </div>
            <div className="value-prop reveal reveal-delay-2">
              <div className="value-prop-icon"><span className="material-symbols-outlined">visibility</span></div>
              <div>
                <h4>Full Transparency</h4>
                <p>Detailed monthly reports, real-time dashboards, and open communication — you always know exactly how your property is performing.</p>
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
            <div className="section-label" style={{ justifyContent: "center", marginBottom: "20px" }}>
              Get Started Today
            </div>
            <h2>Ready to Partner<br />with HHH?</h2>
            <p>Our 20% all-inclusive management fee is all you pay. No setup fees, no hidden charges, no complicated contracts. Just results.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn-primary">Get in Touch</Link>
              <Link to="/how-it-works" className="btn-outline">See How It Works</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
