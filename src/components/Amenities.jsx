export default function Amenities() {
  return (
    <section className="amenities-section" id="amenities">
      <div className="container">
        <div
          className="reveal"
          style={{ textAlign: "center", marginBottom: 0 }}
          id="services"
        >
          <div className="section-label" style={{ justifyContent: "center" }}>
            Our Services
          </div>
          <h2 className="section-title" style={{ textAlign: "center" }}>
            Comprehensive Management Services
          </h2>
          <p
            className="section-desc"
            style={{ textAlign: "center", margin: "0 auto" }}
          >
            Everything needed to transform your property into a high-performing
            vacation rental &mdash; managed end-to-end by our expert team.
          </p>
        </div>
        <div className="amenities-grid">
          <div className="amenity-card reveal reveal-delay-1">
            <div className="amenity-icon-wrap">
              <span className="material-symbols-outlined">support_agent</span>
            </div>
            <h3>24/7 Guest Communication</h3>
          </div>
          <div className="amenity-card reveal reveal-delay-2">
            <div className="amenity-icon-wrap">
              <span className="material-symbols-outlined">trending_up</span>
            </div>
            <h3>Dynamic Pricing</h3>
          </div>
          <div className="amenity-card reveal reveal-delay-3">
            <div className="amenity-icon-wrap">
              <span className="material-symbols-outlined">photo_camera</span>
            </div>
            <h3>Professional Photography</h3>
          </div>
          <div className="amenity-card reveal reveal-delay-4">
            <div className="amenity-icon-wrap">
              <span className="material-symbols-outlined">
                cleaning_services
              </span>
            </div>
            <h3>Housekeeping &amp; Maintenance</h3>
          </div>
          <div className="amenity-card reveal reveal-delay-1">
            <div className="amenity-icon-wrap">
              <span className="material-symbols-outlined">library_books</span>
            </div>
            <h3>Monthly Reporting</h3>
          </div>
          <div className="amenity-card reveal reveal-delay-2">
            <div className="amenity-icon-wrap">
              <span className="material-symbols-outlined">travel_explore</span>
            </div>
            <h3>Multi-Platform Listing</h3>
          </div>
          <div className="amenity-card reveal reveal-delay-3">
            <div className="amenity-icon-wrap">
              <span className="material-symbols-outlined">gavel</span>
            </div>
            <h3>RAKTDA Compliance</h3>
          </div>
          <div className="amenity-card reveal reveal-delay-4">
            <div className="amenity-icon-wrap">
              <span className="material-symbols-outlined">badge</span>
            </div>
            <h3>Guest Vetting &amp; ID</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
