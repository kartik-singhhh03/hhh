import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function RealEstateAgencies() {
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
        <div className="page-hero-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&q=80')" }}></div>
        <div className="page-hero-overlay"></div>
        <div className="container">
          <div className="section-label">Real Estate Agencies</div>
          <h1>Your Clients Buy.<br /><em style={{ color: "#B8D0DC" }}>You Keep Earning.</em></h1>
          <p>Refer property buyers to our holiday home management programme and receive ongoing revenue share for the life of the partnership.</p>
        </div>
      </div>

      <section style={{ background: "var(--dark-bg)" }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto 60px" }}>
            <div className="section-label" style={{ justifyContent: "center" }}>Why Partner With HHH</div>
            <h2 className="section-title" style={{ textAlign: "center" }}>The Perfect Complement to Property Sales</h2>
            <p className="section-desc" style={{ textAlign: "center", margin: "0 auto" }}>Many of your clients purchase investment properties with the intention of renting them out. We make that simple, profitable, and completely hassle-free for them — and rewarding for you.</p>
          </div>

          <div className="benefits-grid reveal">
            <div className="benefit-card">
              <span className="benefit-icon"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg></span>
              <h3>Ongoing Commission</h3>
              <p>Earn a percentage of management fees for every owner you refer — month after month, for the duration of their contract with us.</p>
            </div>
            <div className="benefit-card">
              <span className="benefit-icon"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg></span>
              <h3>Stronger Sales Pitch</h3>
              <p>With HHH by your side, you can show prospective buyers exactly how much their investment will earn — converting hesitant buyers into confident purchasers.</p>
            </div>
            <div className="benefit-card">
              <span className="benefit-icon"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg></span>
              <h3>White-Label Option</h3>
              <p>For premium agency partners, we offer a co-branded experience where the management service feels like a natural extension of your own offering.</p>
            </div>
            <div className="benefit-card">
              <span className="benefit-icon"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg></span>
              <h3>Simple Referral Process</h3>
              <p>A single referral form, a dedicated contact, and a transparent tracking portal. No complexity — just results.</p>
            </div>
            <div className="benefit-card">
              <span className="benefit-icon"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg></span>
              <h3>Preferred Agency Status</h3>
              <p>Top-performing agency partners enjoy preferred status, priority support, and exclusive co-marketing opportunities.</p>
            </div>
            <div className="benefit-card">
              <span className="benefit-icon"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg></span>
              <h3>Revenue Reports</h3>
              <p>Monthly commission statements with full transparency on referred clients, bookings generated, and earnings due.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--luxury-dark)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "80px", alignItems: "center" }}>
            <div className="reveal">
              <div className="section-label">Revenue Structure</div>
              <h2 className="section-title">How the Revenue<br />Share Works</h2>
              <p style={{ color: "var(--text-light)", fontSize: ".95rem", lineHeight: 1.9, marginBottom: "32px" }}>
                Our partnership revenue model is simple, transparent, and designed to reward active, long-term partnerships. The more owners you refer, the greater your earning potential.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "36px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "20px", background: "rgba(255,255,255,.04)", border: "1px solid rgba(143,179,194,.12)", borderRadius: "14px", padding: "20px 24px" }}>
                  <div style={{ width: "56px", height: "56px", background: "rgba(143,179,194,.15)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Playfair Display',serif", fontSize: "1.2rem", fontWeight: 700, color: "var(--primary)", flexShrink: 0 }}>5%</div>
                  <div>
                    <div style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 600, color: "var(--white)", fontSize: ".95rem" }}>Standard Partner</div>
                    <div style={{ fontSize: ".82rem", color: "var(--text-muted)" }}>1–5 active referred owners — 5% of management fee earned per owner</div>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "20px", background: "rgba(255,255,255,.04)", border: "1px solid rgba(143,179,194,.12)", borderRadius: "14px", padding: "20px 24px" }}>
                  <div style={{ width: "56px", height: "56px", background: "rgba(143,179,194,.15)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Playfair Display',serif", fontSize: "1.2rem", fontWeight: 700, color: "var(--primary)", flexShrink: 0 }}>8%</div>
                  <div>
                    <div style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 600, color: "var(--white)", fontSize: ".95rem" }}>Premium Partner</div>
                    <div style={{ fontSize: ".82rem", color: "var(--text-muted)" }}>6–15 active referred owners — 8% of management fee per owner</div>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "20px", background: "rgba(143,179,194,.08)", border: "1px solid var(--primary)", borderRadius: "14px", padding: "20px 24px" }}>
                  <div style={{ width: "56px", height: "56px", background: "var(--primary)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Playfair Display',serif", fontSize: "1.2rem", fontWeight: 700, color: "var(--luxury-dark)", flexShrink: 0 }}>12%</div>
                  <div>
                    <div style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 600, color: "var(--white)", fontSize: ".95rem" }}>Elite Partner</div>
                    <div style={{ fontSize: ".82rem", color: "var(--text-muted)" }}>16+ active referred owners — 12% of management fee per owner + co-branding</div>
                  </div>
                </div>
              </div>
              <Link to="/#contact" className="btn-primary-dark">Become a Partner Agency →</Link>
            </div>

            <div className="reveal reveal-delay-2">
              <div style={{ background: "rgba(255,255,255,.04)", border: "1px solid rgba(143,179,194,.15)", borderRadius: "24px", padding: "40px" }}>
                <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.3rem", color: "var(--white)", marginBottom: "24px" }}>Example Earning Scenario</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: ".88rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", padding: "12px 0", borderBottom: "1px solid rgba(143,179,194,.08)" }}>
                    <span style={{ color: "var(--text-muted)" }}>Referred owners</span>
                    <span style={{ color: "var(--white)", fontWeight: 600 }}>8 owners</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", padding: "12px 0", borderBottom: "1px solid rgba(143,179,194,.08)" }}>
                    <span style={{ color: "var(--text-muted)" }}>Avg. monthly revenue per property</span>
                    <span style={{ color: "var(--white)", fontWeight: 600 }}>AED 16,000</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", padding: "12px 0", borderBottom: "1px solid rgba(143,179,194,.08)" }}>
                    <span style={{ color: "var(--text-muted)" }}>HHH management fee (15%)</span>
                    <span style={{ color: "var(--white)", fontWeight: 600 }}>AED 2,400/mo per property</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", padding: "12px 0", borderBottom: "1px solid rgba(143,179,194,.08)" }}>
                    <span style={{ color: "var(--text-muted)" }}>Your commission rate (Premium)</span>
                    <span style={{ color: "var(--primary)", fontWeight: 700 }}>8%</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", padding: "16px", background: "rgba(143,179,194,.1)", borderRadius: "12px", marginTop: "8px" }}>
                    <span style={{ color: "var(--white)", fontWeight: 600 }}>Your monthly earnings</span>
                    <span style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.4rem", color: "var(--primary)", fontWeight: 700 }}>AED 1,536</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", padding: "16px", background: "rgba(143,179,194,.06)", borderRadius: "12px" }}>
                    <span style={{ color: "var(--white)", fontWeight: 600 }}>Your annual earnings</span>
                    <span style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.4rem", color: "var(--primary)", fontWeight: 700 }}>AED 18,432</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--dark-bg)" }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: "center", marginBottom: "60px" }}>
            <div className="section-label" style={{ justifyContent: "center" }}>Agency Onboarding</div>
            <h2 className="section-title" style={{ textAlign: "center" }}>Getting Started is Simple</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "24px" }} className="reveal">
            <div style={{ textAlign: "center", padding: "36px 20px", background: "rgba(255,255,255,.04)", border: "1px solid rgba(143,179,194,.1)", borderRadius: "20px" }}>
              <div style={{ color: "var(--primary)", marginBottom: "16px" }}><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg></div>
              <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.8rem", fontWeight: 700, color: "var(--primary)", marginBottom: "8px" }}>1</div>
              <h3 style={{ fontFamily: "'DM Sans',sans-serif", fontSize: ".9rem", fontWeight: 700, color: "var(--white)", marginBottom: "8px" }}>Apply Online</h3>
              <p style={{ fontSize: ".8rem", color: "var(--text-muted)", lineHeight: 1.7 }}>Complete our simple agency partner application form online.</p>
            </div>
            <div style={{ textAlign: "center", padding: "36px 20px", background: "rgba(255,255,255,.04)", border: "1px solid rgba(143,179,194,.1)", borderRadius: "20px" }}>
              <div style={{ color: "var(--primary)", marginBottom: "16px" }}><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg></div>
              <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.8rem", fontWeight: 700, color: "var(--primary)", marginBottom: "8px" }}>2</div>
              <h3 style={{ fontFamily: "'DM Sans',sans-serif", fontSize: ".9rem", fontWeight: 700, color: "var(--white)", marginBottom: "8px" }}>Partnership Meeting</h3>
              <p style={{ fontSize: ".8rem", color: "var(--text-muted)", lineHeight: 1.7 }}>A 30-minute call to align on expectations and sign the partnership agreement.</p>
            </div>
            <div style={{ textAlign: "center", padding: "36px 20px", background: "rgba(255,255,255,.04)", border: "1px solid rgba(143,179,194,.1)", borderRadius: "20px" }}>
              <div style={{ color: "var(--primary)", marginBottom: "16px" }}><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg></div>
              <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.8rem", fontWeight: 700, color: "var(--primary)", marginBottom: "8px" }}>3</div>
              <h3 style={{ fontFamily: "'DM Sans',sans-serif", fontSize: ".9rem", fontWeight: 700, color: "var(--white)", marginBottom: "8px" }}>Marketing Kit</h3>
              <p style={{ fontSize: ".8rem", color: "var(--text-muted)", lineHeight: 1.7 }}>Receive your branded partner kit — brochures, presentations, and co-branded assets.</p>
            </div>
            <div style={{ textAlign: "center", padding: "36px 20px", background: "rgba(143,179,194,.08)", border: "1px solid var(--primary)", borderRadius: "20px" }}>
              <div style={{ color: "var(--primary)", marginBottom: "16px" }}><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg></div>
              <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.8rem", fontWeight: 700, color: "var(--primary)", marginBottom: "8px" }}>4</div>
              <h3 style={{ fontFamily: "'DM Sans',sans-serif", fontSize: ".9rem", fontWeight: 700, color: "var(--white)", marginBottom: "8px" }}>Start Earning</h3>
              <p style={{ fontSize: ".8rem", color: "var(--text-muted)", lineHeight: 1.7 }}>Begin referring clients and tracking your commissions in real-time.</p>
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
            <div className="section-label" style={{ justifyContent: "center", marginBottom: "20px" }}>Join Our Agency Network</div>
            <h2>Start Earning<br />Recurring Revenue Today</h2>
            <p>Register your interest and our partnerships team will be in touch within one business day to discuss the opportunity in detail.</p>
            <div className="cta-buttons">
              <Link to="/#contact" className="btn-primary">Register Interest</Link>
              <Link to="/partnership-agreements" className="btn-outline">View Partnership Terms</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
