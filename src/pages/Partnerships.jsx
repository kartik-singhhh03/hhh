import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Partnerships() {
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
        <div className="page-hero-bg" style={{ backgroundImage: "url('/image-3.webp')" }}></div>
        <div className="page-hero-overlay"></div>
        <div className="container">
          <div className="section-label">Partnerships</div>
          <h1>Grow Together with<br /><em style={{ fontStyle: "italic", color: "#B8D0DC" }}>Holiday Home Host</em></h1>
          <p>Join our exclusive partnership programme and unlock new revenue streams while delivering exceptional value to your clients.</p>
        </div>
      </div>

      <section style={{ background: "var(--dark-bg)" }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 60px" }}>
            <div className="section-label" style={{ justifyContent: "center" }}>Why Partner With Us</div>
            <h2 className="section-title" style={{ textAlign: "center" }}>A Partnership Built on Results</h2>
            <p className="section-desc" style={{ margin: "0 auto", textAlign: "center" }}>We believe the best partnerships are those where everyone wins — you, your clients, and the guests who experience the magic of Ras Al Khaimah.</p>
          </div>
          <div className="benefits-grid reveal">
            <div className="benefit-card">
              <span className="benefit-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </span>
              <h3>Revenue Share</h3>
              <p>Earn competitive commission on every booking referred through your partnership. Transparent, timely, and always fair.</p>
            </div>
            <div className="benefit-card">
              <span className="benefit-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
              </span>
              <h3>Co-Marketing Support</h3>
              <p>Access our premium marketing materials, branded collateral, and social media cross-promotion to amplify your brand reach.</p>
            </div>
            <div className="benefit-card">
              <span className="benefit-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </span>
              <h3>Dedicated Partner Manager</h3>
              <p>Every partner gets a named account manager, ensuring seamless communication and rapid support at all times.</p>
            </div>
            <div className="benefit-card">
              <span className="benefit-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
              </span>
              <h3>Real-Time Dashboard</h3>
              <p>Track referrals, bookings, and commissions through our intuitive partner portal with live reporting.</p>
            </div>
            <div className="benefit-card">
              <span className="benefit-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </span>
              <h3>Exclusive Rates</h3>
              <p>Partners receive preferential pricing for their clients — making our proposition even more compelling at the point of sale.</p>
            </div>
            <div className="benefit-card">
              <span className="benefit-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              </span>
              <h3>Global Guest Network</h3>
              <p>Tap into our growing network of luxury travellers from the UK, Europe, GCC, and Asia Pacific markets.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--luxury-dark)" }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: "center", marginBottom: "60px" }}>
            <div className="section-label" style={{ justifyContent: "center" }}>Partnership Types</div>
            <h2 className="section-title" style={{ textAlign: "center" }}>Find Your Perfect Partnership</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }} className="reveal">
            <div style={{ background: "rgba(144,203,220,.06)", border: "1px solid rgba(144,203,220,.2)", borderRadius: "24px", padding: "48px 32px", textAlign: "center", transition: "all .4s" }} onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 20px 60px rgba(144,203,220,.15)'; }} onMouseOut={(e) => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
              <div style={{ display: "flex", justifyContent: "center", marginBottom: "16px", color: "var(--primary)" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="22" height="15" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="17"/><line x1="9.5" y1="14.5" x2="14.5" y2="14.5"/></svg>
              </div>
              <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.3rem", color: "var(--text-dark)", marginBottom: "12px" }}>Real Estate Agencies</h3>
              <p style={{ fontSize: ".88rem", color: "var(--text-muted)", lineHeight: 1.8 }}>Refer property owners and earn ongoing commission. Turn your property sales network into a passive income stream.</p>
              <Link to="/real-estate-agencies" style={{ display: "inline-block", marginTop: "20px", color: "var(--primary)", fontFamily: "'DM Sans',sans-serif", fontSize: ".85rem", fontWeight: 600, letterSpacing: ".06em" }}>Learn More →</Link>
            </div>
            <div style={{ background: "rgba(144,203,220,.06)", border: "1px solid rgba(144,203,220,.2)", borderRadius: "24px", padding: "48px 32px", textAlign: "center", transition: "all .4s" }} onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 20px 60px rgba(144,203,220,.15)'; }} onMouseOut={(e) => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
              <div style={{ display: "flex", justifyContent: "center", marginBottom: "16px", color: "var(--primary)" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3m3 7a5 5 0 1 1-10 0 5 5 0 0 1 10 0"/><polyline points="15.5 13.5 17 15 20 12"/></svg>
              </div>
              <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.3rem", color: "var(--text-dark)", marginBottom: "12px" }}>Travel Agencies</h3>
              <p style={{ fontSize: ".88rem", color: "var(--text-muted)", lineHeight: 1.8 }}>Bundle our luxury apartments into your RAK travel packages. Exclusive rates and white-label booking options available.</p>
              <Link to="/contact" style={{ display: "inline-block", marginTop: "20px", color: "var(--primary)", fontFamily: "'DM Sans',sans-serif", fontSize: ".85rem", fontWeight: 600, letterSpacing: ".06em" }}>Learn More →</Link>
            </div>
            <div style={{ background: "rgba(144,203,220,.06)", border: "1px solid rgba(144,203,220,.2)", borderRadius: "24px", padding: "48px 32px", textAlign: "center", transition: "all .4s" }} onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 20px 60px rgba(144,203,220,.15)'; }} onMouseOut={(e) => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
              <div style={{ display: "flex", justifyContent: "center", marginBottom: "16px", color: "var(--primary)" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              </div>
              <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.3rem", color: "var(--text-dark)", marginBottom: "12px" }}>Lifestyle Brands</h3>
              <p style={{ fontSize: ".88rem", color: "var(--text-muted)", lineHeight: 1.8 }}>Collaborate on co-branded experiences, campaigns, and influencer-led content that reaches high-net-worth audiences.</p>
              <Link to="/contact" style={{ display: "inline-block", marginTop: "20px", color: "var(--primary)", fontFamily: "'DM Sans',sans-serif", fontSize: ".85rem", fontWeight: 600, letterSpacing: ".06em" }}>Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--dark-bg)" }}>
        <div className="container">
          <div className="reveal">
            <div className="section-label">Case Studies</div>
            <h2 className="section-title">Partnership Success Stories</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px", marginTop: "48px" }}>
            <div className="reveal reveal-delay-1" style={{ background: "rgba(255,255,255,.88)", border: "1px solid rgba(144,203,220,.12)", borderRadius: "20px", padding: "40px" }}>
              <div style={{ color: "var(--primary)", fontSize: ".75rem", fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", marginBottom: "16px" }}>Real Estate Agency · Dubai</div>
              <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.3rem", color: "var(--text-dark)", marginBottom: "12px" }}>Premium Properties Dubai</h3>
              <p style={{ fontSize: ".9rem", color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "20px" }}>"Partnering with HHH opened a completely new revenue stream for us. Within 6 months, we'd referred 12 property owners and were earning consistent monthly commissions. The process was incredibly smooth."</p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ width: "44px", height: "44px", background: "linear-gradient(135deg,var(--primary),var(--primary-dark))", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Playfair Display',serif", fontWeight: 700, color: "var(--text-dark)" }}>R</div>
                <div>
                  <div style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 600, color: "var(--text-dark)", fontSize: ".95rem" }}>Rania Al-Khalidi</div>
                  <div style={{ fontSize: ".78rem", color: "var(--text-muted)" }}>Head of Partnerships, PPD</div>
                </div>
              </div>
            </div>
            <div className="reveal reveal-delay-2" style={{ background: "rgba(255,255,255,.88)", border: "1px solid rgba(144,203,220,.12)", borderRadius: "20px", padding: "40px" }}>
              <div style={{ color: "var(--primary)", fontSize: ".75rem", fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", marginBottom: "16px" }}>Travel Agency · London</div>
              <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.3rem", color: "var(--text-dark)", marginBottom: "12px" }}>Emerald Escapes</h3>
              <p style={{ fontSize: ".9rem", color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "20px" }}>"Our clients had been asking about Ras Al Khaimah for years. Partnering with HHH allowed us to offer genuinely luxury accommodation — the feedback has been phenomenal and repeat bookings are already flowing."</p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ width: "44px", height: "44px", background: "linear-gradient(135deg,var(--primary),var(--primary-dark))", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Playfair Display',serif", fontWeight: 700, color: "var(--text-dark)" }}>J</div>
                <div>
                  <div style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 600, color: "var(--text-dark)", fontSize: ".95rem" }}>James Thornton</div>
                  <div style={{ fontSize: ".78rem", color: "var(--text-muted)" }}>Director, Emerald Escapes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="owner-cta-section">
        <div className="cta-bg-shapes">
          <div className="cta-shape cta-shape-1"></div>
          <div className="cta-shape cta-shape-2"></div>
        </div>
        <div className="container">
          <div className="owner-cta-content reveal">
            <div className="section-label" style={{ justifyContent: "center", marginBottom: "20px" }}>Ready to Partner?</div>
            <h2>Let's Build Something<br />Extraordinary Together</h2>
            <p>Contact our partnerships team today and discover how we can create a mutually rewarding relationship tailored to your business model.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn-primary">Get in Touch</Link>
              <Link to="/partnership-agreements" className="btn-outline">View Agreement Terms</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
