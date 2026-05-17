import { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import "./GalleryPage.css";

/* ─── Image data ────────────────────────────────────────────── */
const ALL_IMAGES = [
  /* ── Bay Residences / Hayat Island ─────────────────────── */
  { id: 1,  src: "/image-1.webp",  property: "Bay Residences – Hayat Island",  location: "hayat",  category: "exterior",  label: "Exterior" },
  { id: 2,  src: "/image-2.webp",  property: "Bay Residences – Hayat Island",  location: "hayat",  category: "exterior",  label: "Exterior" },
  { id: 3,  src: "/image-3.webp",  property: "Bay Residences – Hayat Island",  location: "hayat",  category: "amenities", label: "Amenities" },
  { id: 4,  src: "/image-4.webp",  property: "Bay Residences – Hayat Island",  location: "hayat",  category: "exterior",  label: "Exterior" },
  { id: 5,  src: "/image-5.webp",  property: "Bay Residences – Hayat Island",  location: "hayat",  category: "seaview",   label: "Sea View" },
  { id: 6,  src: "/image-6.webp",  property: "Bay Residences – Hayat Island",  location: "hayat",  category: "exterior",  label: "Exterior" },
  { id: 7,  src: "/image-7.webp",  property: "Bay Residences – Hayat Island",  location: "hayat",  category: "amenities", label: "Amenities" },
  { id: 8,  src: "/image-8.webp",  property: "Bay Residences – Hayat Island",  location: "hayat",  category: "interior",  label: "Interior" },
  { id: 9,  src: "/image-9.webp",  property: "Bay Residences – Hayat Island",  location: "hayat",  category: "interior",  label: "Interior" },
  { id: 10, src: "/image-10.webp", property: "Bay Residences – Hayat Island",  location: "hayat",  category: "interior",  label: "Interior" },
  { id: 11, src: "/image-11.webp", property: "Bay Residences – Hayat Island",  location: "hayat",  category: "interior",  label: "Interior" },
  { id: 12, src: "/image-12.webp", property: "Bay Residences – Hayat Island",  location: "hayat",  category: "interior",  label: "Interior" },
  { id: 13, src: "/image-13.webp", property: "Bay Residences – Hayat Island",  location: "hayat",  category: "interior",  label: "Interior" },
  { id: 14, src: "/image-14.webp", property: "Bay Residences – Hayat Island",  location: "hayat",  category: "interior",  label: "Interior" },
  { id: 15, src: "/image-15.webp", property: "Bay Residences – Hayat Island",  location: "hayat",  category: "interior",  label: "Interior" },
  { id: 16, src: "/image-16.webp", property: "Bay Residences – Hayat Island",  location: "hayat",  category: "interior",  label: "Interior" },
  { id: 17, src: "/image-17.webp", property: "Bay Residences – Hayat Island",  location: "hayat",  category: "interior",  label: "Interior" },
  { id: 18, src: "/image-18.webp", property: "Bay Residences – Hayat Island",  location: "hayat",  category: "seaview",   label: "Sea View" },
  { id: 19, src: "/image-19.webp", property: "Bay Residences – Hayat Island",  location: "hayat",  category: "exterior",  label: "Exterior" },

  /* ── Pacific Apartment / Marjan Island ──────────────────── */
  { id: 20, src: "/pacific-apt-1.webp",  property: "Pacific Apartment – Marjan Island", location: "marjan", category: "exterior",  label: "Exterior" },
  { id: 21, src: "/pacific-apt-2.webp",  property: "Pacific Apartment – Marjan Island", location: "marjan", category: "amenities", label: "Amenities" },
  { id: 22, src: "/pacific-apt-3.webp",  property: "Pacific Apartment – Marjan Island", location: "marjan", category: "interior",  label: "Interior" },
  { id: 23, src: "/pacific-apt-4.webp",  property: "Pacific Apartment – Marjan Island", location: "marjan", category: "interior",  label: "Interior" },
  { id: 24, src: "/pacific-apt-5.webp",  property: "Pacific Apartment – Marjan Island", location: "marjan", category: "interior",  label: "Interior" },
  { id: 25, src: "/pacific-apt-6.webp",  property: "Pacific Apartment – Marjan Island", location: "marjan", category: "interior",  label: "Interior" },
  { id: 26, src: "/pacific-apt-7.webp",  property: "Pacific Apartment – Marjan Island", location: "marjan", category: "interior",  label: "Interior" },
  { id: 27, src: "/pacific-apt-8.webp",  property: "Pacific Apartment – Marjan Island", location: "marjan", category: "interior",  label: "Interior" },
  { id: 28, src: "/pacific-apt-9.webp",  property: "Pacific Apartment – Marjan Island", location: "marjan", category: "seaview",   label: "Sea View" },
  { id: 29, src: "/pacific-apt-10.webp", property: "Pacific Apartment – Marjan Island", location: "marjan", category: "amenities", label: "Amenities" },
  { id: 30, src: "/pacific-apt-11.webp", property: "Pacific Apartment – Marjan Island", location: "marjan", category: "amenities", label: "Amenities" },
  { id: 31, src: "/pacific-apt-12.webp", property: "Pacific Apartment – Marjan Island", location: "marjan", category: "exterior",  label: "Exterior" },
  { id: 32, src: "/pacific-apt-13.webp", property: "Pacific Apartment – Marjan Island", location: "marjan", category: "exterior",  label: "Exterior" },
  { id: 33, src: "/pacific-apt-14.webp", property: "Pacific Apartment – Marjan Island", location: "marjan", category: "exterior",  label: "Exterior" },
  { id: 34, src: "/pacific-apt-15.webp", property: "Pacific Apartment – Marjan Island", location: "marjan", category: "amenities", label: "Amenities" },
  { id: 35, src: "/pacific-apt-16.webp", property: "Pacific Apartment – Marjan Island", location: "marjan", category: "exterior",  label: "Exterior" },
  { id: 36, src: "/pacific-apt-17.webp", property: "Pacific Apartment – Marjan Island", location: "marjan", category: "interior",  label: "Interior" },
  { id: 37, src: "/pacific-apt-18.webp", property: "Pacific Apartment – Marjan Island", location: "marjan", category: "interior",  label: "Interior" },
  { id: 38, src: "/pacific-apt-19.webp", property: "Pacific Apartment – Marjan Island", location: "marjan", category: "seaview",   label: "Sea View" },
];

const FILTERS = [
  { id: "all",       label: "All",          match: () => true },
  { id: "hayat",     label: "Hayat Island", match: (img) => img.location === "hayat" },
  { id: "marjan",    label: "Marjan Island",match: (img) => img.location === "marjan" },
  { id: "interior",  label: "Interior",     match: (img) => img.category === "interior" },
  { id: "exterior",  label: "Exterior",     match: (img) => img.category === "exterior" },
  { id: "amenities", label: "Amenities",    match: (img) => img.category === "amenities" },
  { id: "seaview",   label: "Sea View",     match: (img) => img.category === "seaview" },
];

/* ─── Modal component ───────────────────────────────────────── */
function Modal({ images, startIndex, onClose }) {
  const [idx, setIdx] = useState(startIndex);
  const total = images.length;
  const img   = images[idx];

  const prev = useCallback((e) => { e?.stopPropagation(); setIdx((i) => (i - 1 + total) % total); }, [total]);
  const next = useCallback((e) => { e?.stopPropagation(); setIdx((i) => (i + 1) % total); }, [total]);

  useEffect(() => {
    const handle = (e) => {
      if (e.key === "Escape")      onClose();
      if (e.key === "ArrowLeft")   prev();
      if (e.key === "ArrowRight")  next();
    };
    document.addEventListener("keydown", handle);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handle);
      document.body.style.overflow = "";
    };
  }, [onClose, prev, next]);

  return (
    <div
      className="gp-modal"
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery"
      onClick={onClose}
    >
      {/* Close */}
      <button
        className="gp-modal-close"
        aria-label="Close gallery"
        onClick={(e) => { e.stopPropagation(); onClose(); }}
      >
        ×
      </button>

      {/* Counter & meta */}
      <div className="gp-modal-meta" onClick={(e) => e.stopPropagation()}>
        <span className="gp-modal-counter">{idx + 1} / {total}</span>
        <span className="gp-modal-property">{img.property}</span>
        <span className="gp-modal-label">{img.label}</span>
      </div>

      {/* Nav prev */}
      <button className="gp-modal-nav gp-modal-prev" aria-label="Previous image" onClick={prev}>
        &#8592;
      </button>

      {/* Image */}
      <div className="gp-modal-img-wrap" onClick={(e) => e.stopPropagation()}>
        <img
          key={img.src}
          src={img.src}
          alt={`${img.property} – ${img.label}`}
          className="gp-modal-img"
        />
      </div>

      {/* Nav next */}
      <button className="gp-modal-nav gp-modal-next" aria-label="Next image" onClick={next}>
        &#8594;
      </button>
    </div>
  );
}

/* ─── Gallery card ──────────────────────────────────────────── */
function GalleryCard({ img, onOpen }) {
  return (
    <div
      className="gp-card"
      onClick={onOpen}
      role="button"
      tabIndex={0}
      aria-label={`View ${img.property} – ${img.label}`}
      onKeyDown={(e) => e.key === "Enter" && onOpen()}
    >
      <img
        src={img.src}
        alt={`${img.property} – ${img.label}`}
        loading="lazy"
        className="gp-card-img"
      />
      <div className="gp-card-overlay">
        <div className="gp-card-overlay-inner">
          <span className="gp-card-overlay-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/>
              <line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/>
            </svg>
          </span>
          <p className="gp-card-overlay-name">{img.property}</p>
          <p className="gp-card-overlay-cat">{img.label}</p>
        </div>
      </div>
    </div>
  );
}

/* ─── Main page ─────────────────────────────────────────────── */
export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [modalIdx, setModalIdx]         = useState(null);   // null = closed
  const gridRef = useRef(null);

  /* Scroll to top on mount */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  /* Filtered list */
  const filterFn  = FILTERS.find((f) => f.id === activeFilter)?.match ?? (() => true);
  const displayed = ALL_IMAGES.filter(filterFn);

  /* When filter changes, reset modal */
  const handleFilter = (id) => {
    setActiveFilter(id);
    setModalIdx(null);
  };

  const openModal  = (indexInDisplayed) => setModalIdx(indexInDisplayed);
  const closeModal = ()                 => setModalIdx(null);

  return (
    <main className="gp-page">
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="gp-hero">
        <div className="container">
          <div className="gp-hero-inner">
            <div className="gp-hero-text">
              <div className="section-label">Gallery</div>
              <h1 className="gp-hero-title">Property Gallery</h1>
              <p className="gp-hero-sub">
                Explore our luxury stays and discover every detail before your visit.
              </p>
            </div>
            <div className="gp-hero-links">
              <Link to="/properties/hayat-island-sea-view" className="btn-primary">
                <span className="material-symbols-outlined">home</span>
                Bay Residences
              </Link>
              <Link to="/properties/pacific-marjan-island-sea-view" className="btn-outline">
                <span className="material-symbols-outlined">home</span>
                Pacific Apartment
              </Link>
            </div>
          </div>
          {/* Stat bar */}
          <div className="gp-stat-bar">
            <div className="gp-stat">
              <strong>{ALL_IMAGES.length}</strong>
              <span>Photos</span>
            </div>
            <div className="gp-stat-divider" />
            <div className="gp-stat">
              <strong>2</strong>
              <span>Properties</span>
            </div>
            <div className="gp-stat-divider" />
            <div className="gp-stat">
              <strong>Hayat &amp; Marjan</strong>
              <span>Locations</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── FILTERS ───────────────────────────────────────────── */}
      <section className="gp-filter-section">
        <div className="container">
          <div className="gp-filters" role="toolbar" aria-label="Filter gallery by category">
            {FILTERS.map((f) => {
              const count = f.id === "all"
                ? ALL_IMAGES.length
                : ALL_IMAGES.filter(f.match).length;
              return (
                <button
                  key={f.id}
                  className={`gp-filter-btn ${activeFilter === f.id ? "active" : ""}`}
                  onClick={() => handleFilter(f.id)}
                  aria-pressed={activeFilter === f.id}
                >
                  {f.label}
                  <span className="gp-filter-count">{count}</span>
                </button>
              );
            })}
          </div>
          <p className="gp-filter-result-label">
            Showing <strong>{displayed.length}</strong> photo{displayed.length !== 1 ? "s" : ""}
          </p>
        </div>
      </section>

      {/* ── GRID ──────────────────────────────────────────────── */}
      <section className="gp-grid-section">
        <div className="container">
          {displayed.length === 0 ? (
            <div className="gp-empty">
              <span className="material-symbols-outlined">photo_library</span>
              <p>No images match this filter.</p>
            </div>
          ) : (
            <div className="gp-grid" ref={gridRef}>
              {displayed.map((img, i) => (
                <GalleryCard
                  key={img.id}
                  img={img}
                  onOpen={() => openModal(i)}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="gp-cta-section">
        <div className="container">
          <div className="gp-cta-inner">
            <div className="gp-cta-text">
              <h2>Ready to Book Your Stay?</h2>
              <p>Choose from our premium coastal properties in Ras Al Khaimah.</p>
            </div>
            <div className="gp-cta-links">
              <Link to="/properties/hayat-island-sea-view" className="btn-primary">
                <span className="material-symbols-outlined">bed</span>
                Bay Residences
              </Link>
              <Link to="/properties/pacific-marjan-island-sea-view" className="btn-primary">
                <span className="material-symbols-outlined">bed</span>
                Pacific Apartment
              </Link>
              <Link to="/" className="btn-outline">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── MODAL ─────────────────────────────────────────────── */}
      {modalIdx !== null && (
        <Modal
          images={displayed}
          startIndex={modalIdx}
          onClose={closeModal}
        />
      )}
    </main>
  );
}
