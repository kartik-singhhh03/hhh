import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./About.css";

export default function About() {
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

    // Animated Counters
    const counters = document.querySelectorAll(".counter");
    const easeOut = (t) => 1 - Math.pow(1 - t, 3);
    const animateCounter = (el) => {
      const target = parseInt(el.dataset.target, 10);
      const duration = 1800;
      const start = performance.now();
      const step = (now) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        el.textContent = Math.round(easeOut(progress) * target);
        if (progress < 1) requestAnimationFrame(step);
        else el.textContent = target;
      };
      requestAnimationFrame(step);
    };

    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach((el) => counterObserver.observe(el));

    return () => {
      observer.disconnect();
      counterObserver.disconnect();
    };
  }, []);

  return (
    <main>
      {/* HERO */}
      <section className="about-hero" id="aboutHero">
        <div className="about-hero-bg"></div>
        <div className="about-hero-overlay"></div>
        <div className="container">
          <div className="about-hero-content">
            <div className="about-hero-badge">
              <span className="material-symbols-outlined" style={{ fontSize: "14px" }}>
                verified
              </span>
              Premium Rental Management · Ras Al Khaimah, UAE
            </div>
            <h1>
              We Are <em>Holiday<br />Home Host</em>
            </h1>
            <p className="about-hero-sub">
              A premium short-term rental management company dedicated to elevating the standard of holiday homes across Ras Al Khaimah and the UAE — founded and operated by hospitality professionals.
            </p>
            <div className="about-hero-actions">
              <button className="btn-primary" onClick={() => document.getElementById("story")?.scrollIntoView({ behavior: "smooth" })}>
                <span className="material-symbols-outlined">menu_book</span>
                Our Story
              </button>
              <Link to="/property-owners" className="btn-outline" style={{ color: "#fff", borderColor: "rgba(255,255,255,.45)" }}>
                <span className="material-symbols-outlined">home_work</span>
                List Your Property
              </Link>
            </div>
          </div>
        </div>
        <div className="about-hero-scroll">
          <span>Scroll</span>
          <div className="scroll-dot-wrap">
            <div className="scroll-dot"></div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="about-marquee" aria-hidden="true">
        <div className="about-marquee-track">
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              <div className="about-marquee-item"><span className="dot"></span>Premium Rental Management</div>
              <div className="about-marquee-item"><span className="dot"></span>Ras Al Khaimah, UAE</div>
              <div className="about-marquee-item"><span className="dot"></span>20+ Years Hospitality Expertise</div>
              <div className="about-marquee-item"><span className="dot"></span>5-Star Guest Experience</div>
              <div className="about-marquee-item"><span className="dot"></span>Airbnb · Booking.com · Expedia · VRBO</div>
              <div className="about-marquee-item"><span className="dot"></span>24/7 Guest Support</div>
              <div className="about-marquee-item"><span className="dot"></span>Maximised Owner Returns</div>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* STORY SECTION */}
      <section className="story-section" id="story">
        <div className="container">
          <div className="story-wrap">
            <div className="story-visual reveal">
              <div className="story-founded-badge">
                <span className="year">2021</span>
                <span className="label">Founded</span>
              </div>
              <div className="story-img-main">
                <img src="/hhh_img.jpeg" alt="Bright Bay Residences apartment living room managed by Holiday Home Host" loading="lazy" />
              </div>
              <div className="story-img-float">
                <img src="/image-5.webp" alt="Bay Residences balcony with sea view" loading="lazy" />
              </div>
            </div>
            <div className="story-content reveal reveal-delay-2">
              <div className="section-label">About Holiday Home Host</div>
              <h2>
                Transforming Properties into<br />
                <span>High-Performing Assets</span>
              </h2>
              <div className="story-divider"></div>
              <p>
                Holiday Home Host is a premium short-term rental management company focused on transforming properties into high-performing vacation rentals across Ras Al Khaimah and the UAE.
              </p>
              <p>
                Our team brings decades of hospitality experience, delivering professional management, exceptional guest experiences, and strong financial performance for property owners. We combine operational excellence, technology, and market expertise to maximise occupancy, increase revenue, and maintain high service standards.
              </p>
              <p>
                Our commitment to innovation and sustainability aligns with Ras Al Khaimah's vision of becoming one of the region's leading tourism destinations, attracting 3.5 million annual visitors by 2030.
              </p>
              <Link to="/property-owners" className="btn-primary" style={{ marginTop: "12px" }}>
                <span className="material-symbols-outlined">home_work</span>
                List Your Property
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* NUMBERS */}
      <section className="numbers-section">
        <div className="numbers-bg-blob numbers-bg-blob-1"></div>
        <div className="numbers-bg-blob numbers-bg-blob-2"></div>
        <div className="container">
          <div className="reveal" style={{ textAlign: "center", marginBottom: "56px" }}>
            <div className="section-label" style={{ justifyContent: "center", color: "#1C3240" }}>
              By The Numbers
            </div>
            <h2 className="section-title" style={{ color: "#1C3240" }}>
              Our Track Record<br />Speaks for Itself
            </h2>
          </div>
          <div className="numbers-grid reveal">
            <div className="number-item">
              <div className="number-icon">
                <span className="material-symbols-outlined">history_edu</span>
              </div>
              <span className="number-val">
                <span className="counter" data-target="20">0</span>
                <span className="number-suffix">+</span>
              </span>
              <span className="number-label">Years of Experience</span>
            </div>
            <div className="number-item">
              <div className="number-icon">
                <span className="material-symbols-outlined">mood</span>
              </div>
              <span className="number-val">
                <span className="counter" data-target="98">0</span>
                <span className="number-suffix">%</span>
              </span>
              <span className="number-label">Guest Satisfaction</span>
            </div>
            <div className="number-item">
              <div className="number-icon">
                <span className="material-symbols-outlined">trending_up</span>
              </div>
              <span className="number-val">
                <span className="counter" data-target="20">0</span>
                <span className="number-suffix">%</span>
              </span>
              <span className="number-label">All-Inclusive Fee</span>
            </div>
            <div className="number-item">
              <div className="number-icon">
                <span className="material-symbols-outlined">support_agent</span>
              </div>
              <span className="number-val">
                <span className="counter" data-target="24">0</span>
                <span className="number-suffix">h</span>
              </span>
              <span className="number-label">Guest Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VALUES CARDS */}
      <section className="mission-section" id="mission">
        <div className="container">
          <div className="mission-header reveal">
            <div className="section-label" style={{ justifyContent: "center" }}>
              What Drives Us
            </div>
            <h2 className="section-title" style={{ textAlign: "center" }}>
              Our Vision, Mission<br />&amp; Core Values
            </h2>
            <p className="section-desc" style={{ textAlign: "center", margin: "0 auto" }}>
              Three guiding pillars that shape every decision we make — for property owners, guests, and Ras Al Khaimah's tourism future.
            </p>
          </div>
          <div className="mission-cards">
            <div className="mission-card reveal reveal-delay-1">
              <div className="mission-card-icon">
                <span className="material-symbols-outlined">visibility</span>
              </div>
              <h3>Our Vision</h3>
              <p>
                To become Ras Al Khaimah's leading premium holiday home operator, setting new benchmarks in sustainable tourism, guest experience, and property performance while supporting the Emirate's vision to attract 3.5 million annual visitors by 2030.
              </p>
            </div>
            <div className="mission-card reveal reveal-delay-2">
              <div className="mission-card-icon">
                <span className="material-symbols-outlined">flag</span>
              </div>
              <h3>Our Mission</h3>
              <p>
                To transform every home under our care into a world-class hospitality experience through professional management, innovation, sustainability, and service excellence — enriching RAK's tourism landscape and maximising value for property owners.
              </p>
            </div>
            <div className="mission-card reveal reveal-delay-3">
              <div className="mission-card-icon">
                <span className="material-symbols-outlined">handshake</span>
              </div>
              <h3>Our Promise</h3>
              <p>
                Transparent, responsible, and sustainable management that maximises owner returns, protects property assets, and delivers an exceptional guest experience — every time, without exception.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="team-section" id="team">
        <div className="container">
          <div className="team-header reveal">
            <div className="section-label" style={{ justifyContent: "center" }}>
              Our Expert Team
            </div>
            <h2 className="section-title" style={{ textAlign: "center" }}>
              Led by Hospitality Professionals
            </h2>
            <p className="section-desc" style={{ textAlign: "center", margin: "0 auto" }}>
              Decades of combined experience in hotel management, operations, and guest services — now powering RAK's leading vacation rental company.
            </p>
          </div>
          <div className="team-grid">
            <div className="team-card reveal reveal-delay-1">
              <div className="team-card-photo">
                <img src="/dara-img.webp" alt="Daria, founder of Holiday Home Host" loading="lazy" />
                <div className="team-card-photo-overlay"></div>
                <div className="team-social-links">
                  <a href="#" className="team-social-link" aria-label="LinkedIn">
                    <span className="material-symbols-outlined">work</span>
                  </a>
                  <a href="#" className="team-social-link" aria-label="Email">
                    <span className="material-symbols-outlined">mail</span>
                  </a>
                </div>
              </div>
              <div className="team-card-info">
                <h3>Daria</h3>
                <span className="team-card-role">Founder</span>
                <p>Founder of HHH, bringing a refined hospitality eye to owner partnerships, guest experience, and premium coastal stays.</p>
              </div>
            </div>
            <div className="team-card reveal reveal-delay-2">
              <div className="team-card-photo">
                <img src="/image-17.webp" alt="Guest-ready Bay Residences dining and kitchen area" loading="lazy" />
                <div className="team-card-photo-overlay"></div>
                <div className="team-social-links">
                  <a href="#" className="team-social-link" aria-label="LinkedIn">
                    <span className="material-symbols-outlined">work</span>
                  </a>
                  <a href="#" className="team-social-link" aria-label="Email">
                    <span className="material-symbols-outlined">mail</span>
                  </a>
                </div>
              </div>
              <div className="team-card-info">
                <h3>Operations Director</h3>
                <span className="team-card-role">Operations Excellence</span>
                <p>Ensures every property meets our exacting standards — from seamless housekeeping coordination to flawless guest check-ins.</p>
              </div>
            </div>
            <div className="team-card reveal reveal-delay-3">
              <div className="team-card-photo">
                <img src="/image-7.webp" alt="Bay Residences pool amenity" loading="lazy" />
                <div className="team-card-photo-overlay"></div>
                <div className="team-social-links">
                  <a href="#" className="team-social-link" aria-label="LinkedIn">
                    <span className="material-symbols-outlined">work</span>
                  </a>
                  <a href="#" className="team-social-link" aria-label="Email">
                    <span className="material-symbols-outlined">mail</span>
                  </a>
                </div>
              </div>
              <div className="team-card-info">
                <h3>Guest Experience Lead</h3>
                <span className="team-card-role">Hospitality &amp; Guest Services</span>
                <p>Your first point of contact — available around the clock to anticipate needs, resolve issues, and deliver 5-star moments.</p>
              </div>
            </div>
            <div className="team-card reveal reveal-delay-4">
              <div className="team-card-photo">
                <img src="/image-1.webp" alt="Bay Residences exterior in Ras Al Khaimah" loading="lazy" />
                <div className="team-card-photo-overlay"></div>
                <div className="team-social-links">
                  <a href="#" className="team-social-link" aria-label="LinkedIn">
                    <span className="material-symbols-outlined">work</span>
                  </a>
                  <a href="#" className="team-social-link" aria-label="Email">
                    <span className="material-symbols-outlined">mail</span>
                  </a>
                </div>
              </div>
              <div className="team-card-info">
                <h3>Layla Fernandez</h3>
                <span className="team-card-role">Marketing & Partnerships</span>
                <p>Drives our brand story and manages key owner and agency partnerships across the UAE and beyond.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="values-section" id="values">
        <div className="container">
          <div className="reveal" style={{ maxWidth: "600px" }}>
            <div className="section-label">Our Core Values</div>
            <h2 className="section-title">
              The Principles That<br />Guide Everything We Do
            </h2>
          </div>
          <div className="values-wrap">
            <div className="values-image reveal">
              <img src="/image-5.webp" alt="Bay Residences balcony overlooking the coast" loading="lazy" />
              <div className="values-image-tag">
                <div className="values-image-tag-icon">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div className="values-image-tag-text">
                  <div className="tag-title">Hayat Island, RAK</div>
                  <div className="tag-sub">Mina Al Arab · Arabian Gulf</div>
                </div>
              </div>
            </div>
            <div className="values-list reveal reveal-delay-2">
              <div className="value-item">
                <div className="value-item-num">1</div>
                <div className="value-item-body">
                  <h4>Exceptional Guest Experience</h4>
                  <p>Consistent quality, reliable service, and fast responsive support that generates 5-star reviews and drives repeat bookings for every property we manage.</p>
                </div>
              </div>
              <div className="value-item">
                <div className="value-item-num">2</div>
                <div className="value-item-body">
                  <h4>Maximised Owner Returns</h4>
                  <p>We protect property assets, optimise revenue through dynamic pricing, and provide sustainable tourism impact that grows owner income year on year.</p>
                </div>
              </div>
              <div className="value-item">
                <div className="value-item-num">3</div>
                <div className="value-item-body">
                  <h4>Transparency &amp; Responsibility</h4>
                  <p>We operate with radical transparency — with guests, owners, and partners alike. Clear monthly reporting and honest communication, always.</p>
                </div>
              </div>
              <div className="value-item">
                <div className="value-item-num">4</div>
                <div className="value-item-body">
                  <h4>Innovation &amp; Sustainability</h4>
                  <p>We invest in technology, training, and sustainable practices to stay ahead — supporting RAK's vision of responsible, world-class tourism by 2030.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="location-section" id="location">
        <div className="container">
          <div className="reveal" style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 0" }}>
            <div className="section-label" style={{ justifyContent: "center" }}>
              Where We Are
            </div>
            <h2 className="section-title" style={{ textAlign: "center" }}>
              Rooted in one of the<br />Gulf's Most Beautiful Addresses
            </h2>
          </div>
          <div className="location-wrap">
            <div className="location-image reveal">
              <img src="/image-1.webp" alt="Bay Residences exterior near Hayat Island, Ras Al Khaimah" loading="lazy" />
            </div>
            <div className="reveal reveal-delay-2">
              <p className="section-desc" style={{ marginBottom: "32px", maxWidth: "100%" }}>
                Our properties are located exclusively on Hayat Island, within the prestigious Mina Al Arab development — one of the most sought-after waterfront addresses in the entire UAE.
              </p>
              <div className="location-facts">
                <div className="location-fact">
                  <div className="location-fact-icon">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <h4>Hayat Island</h4>
                  <p>Mina Al Arab, Ras Al Khaimah</p>
                </div>
                <div className="location-fact">
                  <div className="location-fact-icon">
                    <span className="material-symbols-outlined">flight</span>
                  </div>
                  <h4>45 Min from Dubai</h4>
                  <p>Easy access from DXB &amp; DWC airports</p>
                </div>
                <div className="location-fact">
                  <div className="location-fact-icon">
                    <span className="material-symbols-outlined">pool</span>
                  </div>
                  <h4>Beachfront Access</h4>
                  <p>Private beach &amp; infinity pool on-site</p>
                </div>
                <div className="location-fact">
                  <div className="location-fact-icon">
                    <span className="material-symbols-outlined">landscape</span>
                  </div>
                  <h4>Jebel Jais nearby</h4>
                  <p>UAE's highest peak, 40 min drive</p>
                </div>
              </div>
              <Link to="/property-owners" className="btn-primary" style={{ marginTop: "32px" }}>
                <span className="material-symbols-outlined">home_work</span>
                List Your Property
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="about-reviews" id="guestWords">
        <div className="container">
          <div className="about-reviews-header reveal">
            <div className="section-label" style={{ justifyContent: "center" }}>
              Guest Voices
            </div>
            <h2 className="section-title" style={{ textAlign: "center" }}>
              What Guests &amp; Owners<br />Say About HHH
            </h2>
          </div>
          <div className="about-reviews-grid">
            <div className="about-review-card reveal reveal-delay-1">
              <div className="about-review-stars">★★★★★</div>
              <p className="about-review-text">
                "HHH transformed my investment property into a high-performing asset. The team's professionalism, transparent reporting, and dynamic pricing exceeded every expectation from day one."
              </p>
              <div className="about-review-author">
                <div className="about-review-avatar">K</div>
                <div>
                  <div className="about-review-name">Khalid A.</div>
                  <div className="about-review-country">Property Owner &middot; Abu Dhabi</div>
                </div>
              </div>
            </div>
            <div className="about-review-card reveal reveal-delay-2">
              <div className="about-review-stars">★★★★★</div>
              <p className="about-review-text">
                "I was nervous about renting my apartment but the HHH team made everything effortless — from photos to guests to monthly reports. The monthly income has been incredible."
              </p>
              <div className="about-review-author">
                <div className="about-review-avatar">N</div>
                <div>
                  <div className="about-review-name">Nadia S.</div>
                  <div className="about-review-country">Property Owner &middot; Dubai</div>
                </div>
              </div>
            </div>
            <div className="about-review-card reveal reveal-delay-3">
              <div className="about-review-stars">★★★★★</div>
              <p className="about-review-text">
                "The transparency is what I love most. I always know exactly how my property is performing — the dashboards are clear and the team responds within minutes. Outstanding."
              </p>
              <div className="about-review-author">
                <div className="about-review-avatar">O</div>
                <div>
                  <div className="about-review-name">Omar J.</div>
                  <div className="about-review-country">Property Owner &middot; Germany</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="about-cta-bg-shapes">
          <div className="about-cta-shape about-cta-shape-1"></div>
          <div className="about-cta-shape about-cta-shape-2"></div>
        </div>
        <div className="container">
          <div className="about-cta-inner reveal">
            <div className="section-label" style={{ justifyContent: "center", marginBottom: "20px", color: "#1C3240" }}>
              <span style={{ background: "rgba(144,203,220,.28)" }}></span>Ready to Get Started?
            </div>
            <h2>
              Transform Your Property<br />Into a Premium Holiday Home
            </h2>
            <p>
              Join the growing number of property owners trusting Holiday Home Host with their Ras Al Khaimah investments. Our 20% all-inclusive fee means professional management with no hidden surprises.
            </p>
            <div className="about-cta-links">
              <Link to="/property-owners" className="btn-primary">
                <span className="material-symbols-outlined">home_work</span>
                List Your Property
              </Link>
              <Link to="/commission" className="btn-outline" style={{ color: "#1C3240", borderColor: "rgba(144,203,220,.28)" }}>
                <span className="material-symbols-outlined">percent</span>
                Our Commission Model
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
