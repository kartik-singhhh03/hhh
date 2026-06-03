import { useMemo, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useProperties } from "../context/PropertiesProvider";
import { sanitizePropertyHtml } from "../lib/sanitizeHtml";
import MarjanIslandAdvantage from "../components/MarjanIslandAdvantage";
import "./PropertyDetails.css";

/* ──────────────────────────────────────────────
   AMENITY GROUP config: key → { label, icon }
────────────────────────────────────────────── */
const AMENITY_GROUPS = {
  poolSpa:          { label: "Pool & Spa",        icon: "pool" },
  locationFeatures: { label: "Location",           icon: "location_on" },
  kitchen:          { label: "Kitchen & Dining",   icon: "soup_kitchen" },
  bathroom:         { label: "Bathroom & Laundry", icon: "shower" },
  heatingCooling:   { label: "Heating & Cooling",  icon: "ac_unit" },
  entertainment:    { label: "Entertainment",      icon: "tv" },
  internet:         { label: "Internet",           icon: "wifi" },
  safety:           { label: "Home Safety",        icon: "security" },
  policies:         { label: "Policies",           icon: "gavel" },
  parking:          { label: "Parking",            icon: "local_parking" },
};

/* ──────────────────────────────────────────────
   LIGHTBOX component
────────────────────────────────────────────── */
function Lightbox({ images, activeIndex, onClose, onPrev, onNext }) {
  if (activeIndex === null) return null;
  return (
    <div className="pd-lightbox active" onClick={onClose}>
      <button
        className="pd-lb-close"
        onClick={onClose}
        aria-label="Close lightbox"
      >
        <span className="material-symbols-outlined">close</span>
      </button>
      <button
        className="pd-lb-nav pd-lb-prev"
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="Previous image"
      >
        <span className="material-symbols-outlined">chevron_left</span>
      </button>
      <img
        src={images[activeIndex]}
        alt={`Property photo ${activeIndex + 1}`}
        onClick={(e) => e.stopPropagation()}
      />
      <button
        className="pd-lb-nav pd-lb-next"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="Next image"
      >
        <span className="material-symbols-outlined">chevron_right</span>
      </button>
      <div className="pd-lb-counter">
        {activeIndex + 1} / {images.length}
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────
   MAIN PAGE
────────────────────────────────────────────── */
export default function PropertyDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getByLodgifyId, loading } = useProperties();
  const property = getByLodgifyId(id);

  const [lbIndex, setLbIndex] = useState(null);

  const sanitizedDescriptionHtml = useMemo(() => {
    if (!property?.fullData?.descriptionIsHtml) return "";
    return sanitizePropertyHtml(property.fullData.description);
  }, [property]);

  if (loading && !property) {
    return (
      <div
        className="pd-page pd-page--loading"
        aria-busy="true"
        aria-live="polite"
      />
    );
  }

  if (!property) {
    return (
      <div className="pd-page">
        <div className="container">
          <div className="pd-not-found">
            <span className="material-symbols-outlined">search_off</span>
            <h2>Property Not Found</h2>
            <p>We couldn't find the property you were looking for.</p>
            <Link to="/" className="btn-primary-dark" style={{ marginTop: "8px" }}>
              <span className="material-symbols-outlined">home</span>
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const { fullData } = property;
  const images = fullData.images;
  const thumbImages = images.slice(1, 5); // up to 4 thumbnails

  const openLightbox = (i) => setLbIndex(i);
  const closeLightbox = () => setLbIndex(null);
  const prevImage = () => setLbIndex((i) => (i - 1 + images.length) % images.length);
  const nextImage = () => setLbIndex((i) => (i + 1) % images.length);

  const handleCheckAvailability = (e) => {
    e.preventDefault();
    navigate("/#lodgify-booking");
  };

  const handleContactHost = (e) => {
    e.preventDefault();
    navigate("/#contact");
  };

  return (
    <div className="pd-page">
      {/* ── Lightbox ── */}
      <Lightbox
        images={images}
        activeIndex={lbIndex}
        onClose={closeLightbox}
        onPrev={prevImage}
        onNext={nextImage}
      />

      <div className="container">
        {/* ── Breadcrumb ── */}
        <nav className="pd-breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span className="material-symbols-outlined">chevron_right</span>
          <span>Properties</span>
          <span className="material-symbols-outlined">chevron_right</span>
          <span>{property.title}</span>
        </nav>
      </div>

      {/* ══════════════════════════════════════
          SECTION 1 — IMAGE GALLERY
      ══════════════════════════════════════ */}
      <section className="pd-gallery">
        <div className="container">
          <div className="pd-gallery-inner">
            {/* Hero image */}
            <div
              className="pd-hero-img"
              onClick={() => openLightbox(0)}
              role="button"
              aria-label="View full image"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && openLightbox(0)}
            >
              <img src={images[0]} alt={property.title} />
            </div>

            {/* Thumbnails */}
            <div className="pd-thumbs">
              {thumbImages.map((src, i) => {
                const isLast = i === thumbImages.length - 1 && images.length > 5;
                return (
                  <div
                    key={i}
                    className="pd-thumb"
                    onClick={() => openLightbox(i + 1)}
                    role="button"
                    aria-label={`View photo ${i + 2}`}
                    tabIndex={0}
                    onKeyDown={(e) => e.key === "Enter" && openLightbox(i + 1)}
                  >
                    <img
                      src={src}
                      alt={`${property.title} – photo ${i + 2}`}
                      loading="lazy"
                    />
                    {isLast && (
                      <div className="pd-thumb-overlay">
                        <span className="material-symbols-outlined">photo_library</span>
                        +{images.length - 5} more
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 2 — TITLE + STATS BAR
      ══════════════════════════════════════ */}
      <section className="pd-header-section">
        <div className="container">
          <div className="pd-header-inner">
            <div>
              <h1 className="pd-title">{property.title}</h1>
              <div className="pd-location">
                <span className="material-symbols-outlined">place</span>
                {property.location}
              </div>
            </div>
            <div className="pd-price-block">
              <div className="price">{property.price}</div>
              <div className="per">{property.priceLabel}</div>
            </div>
          </div>

          <div className="pd-stats-bar">
            <div className="pd-stat">
              <span className="material-symbols-outlined">group</span>
              <span className="pd-stat-label">Guests</span>
              <span className="pd-stat-value">{property.guests}</span>
            </div>
            <div className="pd-stat">
              <span className="material-symbols-outlined">king_bed</span>
              <span className="pd-stat-label">Bedrooms</span>
              <span className="pd-stat-value">{property.bedrooms}</span>
            </div>
            <div className="pd-stat">
              <span className="material-symbols-outlined">bed</span>
              <span className="pd-stat-label">Beds</span>
              <span className="pd-stat-value">{property.beds}</span>
            </div>
            <div className="pd-stat">
              <span className="material-symbols-outlined">shower</span>
              <span className="pd-stat-label">Bathrooms</span>
              <span className="pd-stat-value">{property.bathrooms}</span>
            </div>
            <div className="pd-stat">
              <span className="material-symbols-outlined">login</span>
              <span className="pd-stat-label">Check-in</span>
              <span className="pd-stat-value">{fullData.houseRules.checkIn}</span>
            </div>
            <div className="pd-stat">
              <span className="material-symbols-outlined">logout</span>
              <span className="pd-stat-label">Check-out</span>
              <span className="pd-stat-value">{fullData.houseRules.checkOut}</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        {/* ══════════════════════════════════════
            SECTION 3 — DESCRIPTION
        ══════════════════════════════════════ */}
        <div className="pd-section">
          <h2 className="pd-section-title">About This Property</h2>
          {fullData.descriptionIsHtml ? (
            <div
              className="pd-description"
              dangerouslySetInnerHTML={{ __html: sanitizedDescriptionHtml }}
            />
          ) : (
            fullData.description.split("\n\n").map((para, i) => (
              <p
                className="pd-description"
                key={i}
                style={{
                  marginBottom:
                    i < fullData.description.split("\n\n").length - 1
                      ? "16px"
                      : 0,
                }}
              >
                {para}
              </p>
            ))
          )}
        </div>

        {/* ══════════════════════════════════════
            SECTION 4 — AMENITIES
        ══════════════════════════════════════ */}
        <div className="pd-section">
          <h2 className="pd-section-title">Amenities</h2>
          <div className="pd-amenities-groups">
            {Object.entries(AMENITY_GROUPS).map(([key, { label, icon }]) => {
              const items = fullData.amenities[key];
              if (!items || items.length === 0) return null;
              return (
                <div className="pd-amenity-group" key={key}>
                  <div className="pd-amenity-group-header">
                    <div className="pd-amenity-group-icon">
                      <span className="material-symbols-outlined">{icon}</span>
                    </div>
                    <span className="pd-amenity-group-name">{label}</span>
                  </div>
                  <ul className="pd-amenity-list">
                    {items.map((item, i) => (
                      <li className="pd-amenity-item" key={i}>
                        <span className="material-symbols-outlined">check_circle</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* ══════════════════════════════════════
            MARJAN ISLAND ADVANTAGE (conditional)
        ══════════════════════════════════════ */}
        {fullData.showAdvantage && (
          <div className="pd-section" style={{ padding: "0", border: "none" }}>
            <MarjanIslandAdvantage />
          </div>
        )}

        {/* ══════════════════════════════════════
            SECTION 5 — GUEST ACCESS
        ══════════════════════════════════════ */}
        <div className="pd-section">
          <h2 className="pd-section-title">Guest Access</h2>
          <p className="pd-guest-access">{fullData.guestAccess}</p>
        </div>

        {/* ══════════════════════════════════════
            SECTION 6 — HOUSE RULES
        ══════════════════════════════════════ */}
        <div className="pd-section">
          <h2 className="pd-section-title">House Rules</h2>
          <div className="pd-rules-grid">
            <div className="pd-rule-card">
              <span className="material-symbols-outlined">login</span>
              Check-in from {fullData.houseRules.checkIn}
            </div>
            <div className="pd-rule-card">
              <span className="material-symbols-outlined">logout</span>
              Check-out by {fullData.houseRules.checkOut}
            </div>
            {fullData.houseRules.noPets && (
              <div className="pd-rule-card rule-no">
                <span className="material-symbols-outlined">pets</span>
                No pets allowed
              </div>
            )}
            {fullData.houseRules.noSmoking && (
              <div className="pd-rule-card rule-no">
                <span className="material-symbols-outlined">smoking_rooms</span>
                No smoking inside
              </div>
            )}
          </div>
          {fullData.houseRules.smokingNote && (
            <div className="pd-smoking-note">
              <span className="material-symbols-outlined">info</span>
              {fullData.houseRules.smokingNote}
            </div>
          )}
          {fullData.houseRules.additionalRules?.length > 0 && (
            <div className="pd-additional-rules">
              <h4>Additional Rules</h4>
              <ul>
                {fullData.houseRules.additionalRules.map((rule, i) => (
                  <li key={i}>
                    <span className="material-symbols-outlined">arrow_right</span>
                    {rule}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {/* Policy Notes */}
          {fullData.policyNotes && (
            <div className="pd-policy-notes">
              <h4>Booking Policy</h4>
              <div className="pd-policy-grid">
                <div className="pd-policy-item">
                  <span className="material-symbols-outlined">payments</span>
                  <div>
                    <strong>Payment</strong>
                    <span>{fullData.policyNotes.payment}</span>
                  </div>
                </div>
                <div className="pd-policy-item">
                  <span className="material-symbols-outlined">cancel</span>
                  <div>
                    <strong>Cancellation</strong>
                    <span>{fullData.policyNotes.cancellation}</span>
                  </div>
                </div>
                <div className="pd-policy-item">
                  <span className="material-symbols-outlined">shield</span>
                  <div>
                    <strong>Security Deposit</strong>
                    <span>{fullData.policyNotes.securityDeposit}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ══════════════════════════════════════
            SECTION 7 — LOCATION
        ══════════════════════════════════════ */}
        <div className="pd-section">
          <h2 className="pd-section-title">Location</h2>
          <div className="pd-location-block">
            <div className="pd-location-address">
              <p>{fullData.location.address}</p>
              <span className="pd-map-code">{fullData.location.mapCode}</span>
              <a
                href={fullData.location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                style={{ display: "inline-flex", fontSize: ".82rem", padding: "10px 22px" }}
              >
                <span className="material-symbols-outlined">map</span>
                Open in Maps
              </a>
            </div>
            <div className="pd-map-placeholder">
              <span className="material-symbols-outlined">location_on</span>
              <span>
                {fullData.location.address}
              </span>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════
            SECTION 8 — HOST
        ══════════════════════════════════════ */}
        <div className="pd-section">
          <h2 className="pd-section-title">Your Host</h2>
          <div className="pd-host-card">
            <div className="pd-host-avatar">
              <span className="material-symbols-outlined">storefront</span>
            </div>
            <div>
              <div className="pd-host-name">{fullData.host.name}</div>
              <div className="pd-host-details">
                <div className="pd-host-detail">
                  <span className="material-symbols-outlined">mail</span>
                  <a href={`mailto:${fullData.host.email}`}>{fullData.host.email}</a>
                </div>
                <div className="pd-host-detail">
                  <span className="material-symbols-outlined">phone</span>
                  <a href={`tel:${fullData.host.phone}`}>{fullData.host.phone}</a>
                </div>
                <div className="pd-host-detail">
                  <span className="material-symbols-outlined">language</span>
                  <a
                    href={`https://${fullData.host.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {fullData.host.website}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════
            SECTION 9 — REVIEWS (conditional)
        ══════════════════════════════════════ */}
        {fullData.reviews?.length > 0 && (
          <div className="pd-section">
            <h2 className="pd-section-title">Guest Reviews</h2>
            <div className="pd-reviews-summary">
              <div className="pd-rating-badge">
                <span className="pd-rating-score">
                  {property.rating > 0 ? property.rating.toFixed(1) : "5.0"}
                </span>
                <span className="pd-rating-stars">★★★★★</span>
                <span className="pd-rating-label">Overall Rating</span>
              </div>
            </div>
            <div className="pd-reviews-grid">
              {fullData.reviews.map((review) => (
                <div className="pd-review-card" key={review.id}>
                  <div className="pd-review-stars">
                    {"★".repeat(review.rating)}
                  </div>
                  <p className="pd-review-text">&ldquo;{review.text}&rdquo;</p>
                  <div className="pd-review-author">
                    <div className="pd-review-avatar">
                      {review.initials}
                    </div>
                    <div className="pd-review-meta">
                      <span className="pd-review-name">{review.reviewer}</span>
                      <span className="pd-review-info">
                        {review.stayType} &middot; {review.duration} &middot; {review.date}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ══════════════════════════════════════
          SECTION 9 — CTA
      ══════════════════════════════════════ */}
      <section className="pd-cta-section">
        <div className="container">
          <div className="reveal">
            <h2>Ready to Book?</h2>
            <p>
              Check real-time availability and secure your stay at{" "}
              {property.title}. Our team responds within 2 hours.
            </p>
            <div className="pd-cta-buttons">
              <a
                href="/#lodgify-booking"
                className="btn-primary-dark"
                onClick={handleCheckAvailability}
                id={`pd-cta-check-${property.id}`}
              >
                <span className="material-symbols-outlined">date_range</span>
                Check Availability
              </a>
              <a
                href="/#contact"
                className="btn-outline"
                onClick={handleContactHost}
                id={`pd-cta-contact-${property.id}`}
              >
                <span className="material-symbols-outlined">mail</span>
                Contact Host
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
