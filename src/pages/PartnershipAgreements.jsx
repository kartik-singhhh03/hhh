import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

export default function PartnershipAgreements() {
  const [activeFaq, setActiveFaq] = useState(null);
  const faqRefs = useRef([]);

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

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "Can I terminate the agreement early?",
      a: "After the initial 6-month term, you may terminate with 30 days' written notice. During the initial term, early termination is subject to a settlement fee equivalent to one month's projected management fee."
    },
    {
      q: "Is there an exclusivity clause?",
      a: "For property owners, our agreements are exclusive during the active management period — this ensures consistent quality and pricing across all platforms. Agency partners are not required to be exclusive."
    },
    {
      q: "What law governs the agreement?",
      a: "All agreements are governed by the laws of the United Arab Emirates, specifically within the jurisdiction of Ras Al Khaimah. Any disputes are first referred to mediation before any court proceedings."
    },
    {
      q: "Can the agreement terms be customised?",
      a: "Standard terms are fixed for transparency, but we are open to discussing reasonable modifications for premium or large-portfolio partners. Any changes must be agreed in writing and signed by both parties."
    },
    {
      q: "How is a dispute resolved?",
      a: "We believe disputes should be resolved through open dialogue first. Our agreements include a structured escalation pathway: direct negotiation → independent mediation → formal arbitration. We aim to resolve all issues amicably."
    },
    {
      q: "Do I need a lawyer to review the agreement?",
      a: "We strongly encourage all partners to seek independent legal advice before signing. We are happy to provide a draft agreement to share with your legal counsel before any commitment is made."
    }
  ];

  return (
    <main>
      {/* PAGE HERO */}
      <div className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('/image-6.webp')" }}></div>
        <div className="page-hero-overlay"></div>
        <div className="container">
          <div className="section-label">Partnership Agreements</div>
          <h1>Clear Terms.<br /><em style={{ color: "#B8D0DC" }}>Honest Partnerships.</em></h1>
          <p>Everything you need to know about working with Holiday Home Host — transparent, fair, and built for the long term.</p>
        </div>
      </div>

      <section style={{ background: "var(--dark-bg)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "80px", alignItems: "start" }} className="reveal">
            <div>
              <div className="section-label">Agreement Overview</div>
              <h2 className="section-title">What You're Agreeing To</h2>
              <p style={{ color: "var(--text-light)", fontSize: ".95rem", lineHeight: 1.9, marginBottom: "24px" }}>
                Our partnership agreements are designed to be straightforward and mutually beneficial. We believe in clarity — so before you sign anything, we want you to understand exactly what is expected from both parties.
              </p>
              <p style={{ color: "var(--text-light)", fontSize: ".95rem", lineHeight: 1.9, marginBottom: "24px" }}>
                All agreements are bespoke to the partnership type (property owner, real estate agency, travel partner, etc.) but share the same core principles: transparency, fairness, and respect.
              </p>
              <p style={{ color: "var(--text-light)", fontSize: ".95rem", lineHeight: 1.9 }}>
                Our legal team reviews every agreement annually to ensure compliance with RAK and UAE law. Partners are always encouraged to seek independent legal advice before signing.
              </p>
            </div>
            <div style={{ background: "rgba(255,255,255,.88)", border: "1px solid rgba(144,203,220,.15)", borderRadius: "20px", padding: "40px" }}>
              <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.2rem", color: "var(--text-dark)", marginBottom: "24px" }}>Agreement Highlights</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                  <span style={{ color: "var(--primary)", fontSize: "1.1rem", flexShrink: 0, marginTop: "2px" }}>✓</span>
                  <span style={{ fontSize: ".88rem", color: "var(--text-light)" }}>Minimum 6-month term, then rolling monthly</span>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                  <span style={{ color: "var(--primary)", fontSize: "1.1rem", flexShrink: 0, marginTop: "2px" }}>✓</span>
                  <span style={{ fontSize: ".88rem", color: "var(--text-light)" }}>30-day written notice to terminate</span>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                  <span style={{ color: "var(--primary)", fontSize: "1.1rem", flexShrink: 0, marginTop: "2px" }}>✓</span>
                  <span style={{ fontSize: ".88rem", color: "var(--text-light)" }}>Governed by UAE law — Ras Al Khaimah jurisdiction</span>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                  <span style={{ color: "var(--primary)", fontSize: "1.1rem", flexShrink: 0, marginTop: "2px" }}>✓</span>
                  <span style={{ fontSize: ".88rem", color: "var(--text-light)" }}>Monthly commission / revenue statements</span>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                  <span style={{ color: "var(--primary)", fontSize: "1.1rem", flexShrink: 0, marginTop: "2px" }}>✓</span>
                  <span style={{ fontSize: ".88rem", color: "var(--text-light)" }}>Data protection and confidentiality provisions</span>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                  <span style={{ color: "var(--primary)", fontSize: "1.1rem", flexShrink: 0, marginTop: "2px" }}>✓</span>
                  <span style={{ fontSize: ".88rem", color: "var(--text-light)" }}>Dispute resolution via mediation first</span>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                  <span style={{ color: "var(--primary)", fontSize: "1.1rem", flexShrink: 0, marginTop: "2px" }}>✓</span>
                  <span style={{ fontSize: ".88rem", color: "var(--text-light)" }}>No exclusivity requirement for agency partners</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--luxury-dark)" }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: "center", marginBottom: "60px" }}>
            <div className="section-label" style={{ justifyContent: "center" }}>Responsibilities</div>
            <h2 className="section-title" style={{ textAlign: "center" }}>What We Each Bring to the Table</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px" }} className="reveal">
            <div style={{ background: "rgba(144,203,220,.06)", border: "1px solid rgba(144,203,220,.2)", borderRadius: "20px", padding: "40px" }}>
              <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.3rem", color: "var(--primary)", marginBottom: "24px" }}>Holiday Home Host Commits To:</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: ".88rem", color: "var(--text-light)" }}>
                  <span style={{ color: "var(--primary)", flexShrink: 0 }}>→</span> Full management of the property from listing to payout
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: ".88rem", color: "var(--text-light)" }}>
                  <span style={{ color: "var(--primary)", flexShrink: 0 }}>→</span> Professional photography at no extra cost
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: ".88rem", color: "var(--text-light)" }}>
                  <span style={{ color: "var(--primary)", flexShrink: 0 }}>→</span> Multi-platform marketing and dynamic pricing
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: ".88rem", color: "var(--text-light)" }}>
                  <span style={{ color: "var(--primary)", flexShrink: 0 }}>→</span> 24/7 guest support and emergency maintenance response
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: ".88rem", color: "var(--text-light)" }}>
                  <span style={{ color: "var(--primary)", flexShrink: 0 }}>→</span> Monthly revenue statements and payouts by the 10th
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: ".88rem", color: "var(--text-light)" }}>
                  <span style={{ color: "var(--primary)", flexShrink: 0 }}>→</span> Full DTCM compliance and licensing management
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: ".88rem", color: "var(--text-light)" }}>
                  <span style={{ color: "var(--primary)", flexShrink: 0 }}>→</span> Confidentiality of owner and guest data at all times
                </div>
              </div>
            </div>

            <div style={{ background: "rgba(255,255,255,.88)", border: "1px solid rgba(144,203,220,.12)", borderRadius: "20px", padding: "40px" }}>
              <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.3rem", color: "var(--text-dark)", marginBottom: "24px" }}>The Partner Commits To:</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: ".88rem", color: "var(--text-light)" }}>
                  <span style={{ color: "var(--primary)", flexShrink: 0 }}>→</span> Ensuring the property is in good condition at handover
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: ".88rem", color: "var(--text-light)" }}>
                  <span style={{ color: "var(--primary)", flexShrink: 0 }}>→</span> Providing accurate ownership and property documentation
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: ".88rem", color: "var(--text-light)" }}>
                  <span style={{ color: "var(--primary)", flexShrink: 0 }}>→</span> Notifying HHH of any planned personal usage in advance
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: ".88rem", color: "var(--text-light)" }}>
                  <span style={{ color: "var(--primary)", flexShrink: 0 }}>→</span> Allowing access for maintenance and inspections
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: ".88rem", color: "var(--text-light)" }}>
                  <span style={{ color: "var(--primary)", flexShrink: 0 }}>→</span> Maintaining adequate buildings insurance
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: ".88rem", color: "var(--text-light)" }}>
                  <span style={{ color: "var(--primary)", flexShrink: 0 }}>→</span> Promptly reviewing and approving major expenditure decisions
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: ".88rem", color: "var(--text-light)" }}>
                  <span style={{ color: "var(--primary)", flexShrink: 0 }}>→</span> Respecting confidentiality of guest booking data
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "var(--dark-bg)" }}>
        <div className="container">
          <div className="reveal">
            <div className="section-label">Agreement FAQ</div>
            <h2 className="section-title">Questions About the Agreement</h2>
          </div>
          <div style={{ maxWidth: "780px", marginTop: "48px" }} className="reveal reveal-delay-1">
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div key={index} className={`faq-item ${activeFaq === index ? "active open" : ""}`}>
                  <button className="faq-question" onClick={() => toggleFaq(index)}>
                    {faq.q}
                    <span className="faq-arrow">▾</span>
                  </button>
                  <div
                    className="faq-answer"
                    ref={(el) => (faqRefs.current[index] = el)}
                    style={{
                      maxHeight: activeFaq === index && faqRefs.current[index] ? `${faqRefs.current[index].scrollHeight}px` : "0px",
                      overflow: "hidden",
                      transition: "max-height 0.4s ease"
                    }}
                  >
                    {faq.a}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="owner-cta-section">
        <div className="cta-bg-shapes">
          <div className="cta-shape cta-shape-1"></div>
          <div className="cta-shape cta-shape-2"></div>
        </div>
        <div className="container">
          <div className="owner-cta-content reveal">
            <div className="section-label" style={{ justifyContent: "center", marginBottom: "20px" }}>Next Steps</div>
            <h2>Ready to Formalise<br />Our Partnership?</h2>
            <p>Get in touch today and our team will send you a draft agreement within 24 hours. No commitment required to review.</p>
            <div className="cta-buttons">
              <Link to="/#contact" className="btn-primary">Request Agreement Draft</Link>
              <Link to="/partnerships" className="btn-outline">Back to Partnerships</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
