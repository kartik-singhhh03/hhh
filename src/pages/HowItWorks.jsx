import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./HowItWorks.css";

export default function HowItWorks() {
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
      q: "Do I need a RAKTDA permit to list my property?",
      a: "Yes — all holiday homes in Ras Al Khaimah require a RAKTDA (Ras Al Khaimah Tourism Development Authority) permit. We handle the entire application and compliance process on your behalf at no extra charge as part of our all-inclusive management service."
    },
    {
      q: "What is your management fee?",
      a: "Holiday Home Host charges a simple, transparent <strong>20% all-inclusive management fee</strong>. This covers everything — platform management, guest communications, housekeeping coordination, professional photography, maintenance oversight, RAKTDA compliance, and monthly performance reporting. No hidden charges, no surprises."
    },
    {
      q: "Can I block dates for personal use?",
      a: "Absolutely. You retain full control over your property calendar. Simply block any dates you wish to use personally through our owner portal, and we'll ensure those nights are never booked."
    },
    {
      q: "How and when do I receive payments?",
      a: "Monthly payouts are processed by the 10th of each month, covering all completed stays from the previous month. You'll receive a detailed statement breakdown with every payment."
    },
    {
      q: "What happens if a guest damages my property?",
      a: "We collect a security deposit from every guest. In the event of damage, we manage the claims process on your behalf, coordinating repairs and recovery of costs. We also recommend all owners carry holiday home insurance."
    },
    {
      q: "How long is the management contract?",
      a: "Our standard agreements are for a minimum of 6 months. After this period, contracts roll monthly with 30 days' notice on either side. We don't believe in locking you in — we earn your trust every month."
    }
  ];

  return (
    <main>
      {/* PAGE HERO */}
      <div className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1600&q=80')" }}></div>
        <div className="page-hero-overlay"></div>
        <div className="container">
          <div className="section-label">How It Works</div>
          <h1>Your Property.<br /><em style={{ color: "#B8D0DC" }}>Our Expertise.</em></h1>
          <p>A seamless 5-step onboarding process that gets your property earning in as little as 2 weeks.</p>
        </div>
      </div>

      {/* TIMELINE SECTION */}
      <section style={{ background: "var(--dark-bg)" }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto 80px" }}>
            <div className="section-label" style={{ justifyContent: "center" }}>The Process</div>
            <h2 className="section-title" style={{ textAlign: "center" }}>From Onboarding to Earnings</h2>
            <p className="section-desc" style={{ textAlign: "center", margin: "0 auto" }}>We've designed a smooth, transparent process that respects your time and gets results fast.</p>
          </div>

          {/* Desktop Horizontal Timeline */}
          <div className="timeline timeline-desktop reveal">
            <div className="timeline-step">
              <div className="timeline-num">01</div>
              <h3>Property Onboarding</h3>
              <p>We assess your property, discuss your goals, and onboard you with full DTCM compliance documentation and setup guidance.</p>
            </div>
            <div className="timeline-step">
              <div className="timeline-num">02</div>
              <h3>Photography &amp; Staging</h3>
              <p>Our professional photographers capture your property in its best light — architectural, lifestyle, and detail shots included.</p>
            </div>
            <div className="timeline-step">
              <div className="timeline-num">03</div>
              <h3>Listing Creation</h3>
              <p>Compelling listing copy, dynamic pricing setup, and publication across Airbnb, Booking.com, Vrbo and our direct channel.</p>
            </div>
            <div className="timeline-step">
              <div className="timeline-num">04</div>
              <h3>Marketing &amp; Promotion</h3>
              <p>Targeted digital marketing, social media promotion, and SEO optimisation to attract high-quality guests year-round.</p>
            </div>
            <div className="timeline-step">
              <div className="timeline-num">05</div>
              <h3>Guest Management</h3>
              <p>We handle all enquiries, bookings, check-ins, housekeeping, and support — you simply receive your monthly payment.</p>
            </div>
          </div>

          {/* Mobile Vertical Timeline */}
          <div className="timeline-mobile">
            <div className="tm-step">
              <div className="tm-num-wrap"><div className="tm-num">01</div></div>
              <div className="tm-content">
                <h3>Property Onboarding</h3>
                <p>We assess your property, discuss your goals, and onboard you with full RAKTDA compliance documentation and setup guidance.</p>
              </div>
            </div>
            <div className="tm-step">
              <div className="tm-num-wrap"><div className="tm-num">02</div></div>
              <div className="tm-content">
                <h3>Photography &amp; Staging</h3>
                <p>Our professional photographers capture your property in its best light — architectural, lifestyle, and detail shots included.</p>
              </div>
            </div>
            <div className="tm-step">
              <div className="tm-num-wrap"><div className="tm-num">03</div></div>
              <div className="tm-content">
                <h3>Listing Creation</h3>
                <p>Compelling listing copy, dynamic pricing setup, and publication across all major platforms.</p>
              </div>
            </div>
            <div className="tm-step">
              <div className="tm-num-wrap"><div className="tm-num">04</div></div>
              <div className="tm-content">
                <h3>Marketing &amp; Promotion</h3>
                <p>Targeted digital marketing, social media promotion, and SEO optimisation to attract high-quality guests.</p>
              </div>
            </div>
            <div className="tm-step">
              <div className="tm-num-wrap"><div className="tm-num">05</div></div>
              <div className="tm-content">
                <h3>Guest Management</h3>
                <p>We handle all bookings, check-ins, housekeeping, and support — you simply receive your monthly payment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section style={{ background: "var(--luxury-dark)" }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: "center", marginBottom: "60px" }}>
            <div className="section-label" style={{ justifyContent: "center" }}>What to Expect</div>
            <h2 className="section-title" style={{ textAlign: "center" }}>Your Onboarding Timeline</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "20px" }} className="reveal">
            <div style={{ textAlign: "center", padding: "32px 20px", background: "rgba(255,255,255,.04)", border: "1px solid rgba(143,179,194,.1)", borderRadius: "20px" }}>
              <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "2.2rem", color: "var(--primary)", fontWeight: 700 }}>Day 1</div>
              <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: ".85rem", color: "var(--white)", fontWeight: 600, margin: "8px 0 4px" }}>Initial Consultation</div>
              <div style={{ fontSize: ".8rem", color: "var(--text-muted)" }}>Property assessment and agreement signing</div>
            </div>
            <div style={{ textAlign: "center", padding: "32px 20px", background: "rgba(255,255,255,.04)", border: "1px solid rgba(143,179,194,.1)", borderRadius: "20px" }}>
              <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "2.2rem", color: "var(--primary)", fontWeight: 700 }}>Day 3</div>
              <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: ".85rem", color: "var(--white)", fontWeight: 600, margin: "8px 0 4px" }}>Photo Shoot</div>
              <div style={{ fontSize: ".8rem", color: "var(--text-muted)" }}>Professional photography and virtual tour</div>
            </div>
            <div style={{ textAlign: "center", padding: "32px 20px", background: "rgba(255,255,255,.04)", border: "1px solid rgba(143,179,194,.1)", borderRadius: "20px" }}>
              <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "2.2rem", color: "var(--primary)", fontWeight: 700 }}>Day 7</div>
              <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: ".85rem", color: "var(--white)", fontWeight: 600, margin: "8px 0 4px" }}>Go Live</div>
              <div style={{ fontSize: ".8rem", color: "var(--text-muted)" }}>Listings published and marketing activated</div>
            </div>
            <div style={{ textAlign: "center", padding: "32px 20px", background: "rgba(143,179,194,.1)", border: "1px solid var(--primary)", borderRadius: "20px" }}>
              <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "2.2rem", color: "var(--primary)", fontWeight: 700 }}>Day 14</div>
              <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: ".85rem", color: "var(--white)", fontWeight: 600, margin: "8px 0 4px" }}>First Booking</div>
              <div style={{ fontSize: ".8rem", color: "var(--text-muted)" }}>Average time to first confirmed guest</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "var(--dark-bg)" }}>
        <div className="container">
          <div className="reveal">
            <div className="section-label">FAQ</div>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>

          <div style={{ maxWidth: "760px", marginTop: "48px" }}>
            <div className="faq-list reveal reveal-delay-1">
              {faqs.map((faq, index) => (
                <div key={index} className={`faq-item ${activeFaq === index ? "active" : ""}`}>
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
                    dangerouslySetInnerHTML={{ __html: faq.a }}
                  />
                </div>
              ))}
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
            <div className="section-label" style={{ justifyContent: "center", marginBottom: "20px" }}>Get Started Today</div>
            <h2>Ready to Start<br />Earning?</h2>
            <p>Contact us today for a free, no-obligation property assessment. We'll provide a personalised revenue forecast and walk you through the next steps.</p>
            <div className="cta-buttons">
              <Link to="/#contact" className="btn-primary">Book a Free Consultation</Link>
              <Link to="/roi-calculator" className="btn-outline">Calculate Your Revenue</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
