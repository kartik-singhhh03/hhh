export default function Property() {
  return (
    <section className="property-section" id="property">
      <div className="container">
        <div className="reveal">
          <div className="section-label">Featured Property</div>
        </div>
        <div className="property-wrap">
          <div className="property-image-wrap reveal reveal-delay-1">
            <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900&q=85" alt="Luxury apartment" loading="lazy" />
            <span className="property-badge">Sea View · Hayat Island</span>
            <div className="property-price-tag">
              <div className="price">AED 650</div>
              <div className="per">per night</div>
            </div>
          </div>
          <div className="property-info reveal reveal-delay-2">
            <div className="section-label">Featured Property</div>
            <h2>Luxury Sea View<br />Apartment, Hayat Island</h2>
            <div className="property-location">
              <span className="material-symbols-outlined">place</span>
              Hayat Island, Mina Al Arab, Ras Al Khaimah
            </div>
            <div className="property-specs">
              <div className="spec-item">
                <span className="material-symbols-outlined">group</span>
                <span className="spec-label">Guests</span>
                <span className="spec-value">2–4</span>
              </div>
              <div className="spec-item">
                <span className="material-symbols-outlined">king_bed</span>
                <span className="spec-label">Bedrooms</span>
                <span className="spec-value">1</span>
              </div>
              <div className="spec-item">
                <span className="material-symbols-outlined">shower</span>
                <span className="spec-label">Bathrooms</span>
                <span className="spec-value">2</span>
              </div>
              <div className="spec-item">
                <span className="material-symbols-outlined">straighten</span>
                <span className="spec-label">Area</span>
                <span className="spec-value">850 ft²</span>
              </div>
            </div>
            <p className="property-desc">Wake up to panoramic Arabian Gulf views from this exquisitely appointed apartment on Hayat Island. Floor-to-ceiling windows, an expansive wrap-around balcony, fully equipped kitchen, and access to world-class resort amenities.</p>
            <a href="#contact" className="btn-primary-dark" onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              <span className="material-symbols-outlined">date_range</span>
              Check Availability
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
