import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const galleryImages = [
  {
    index: 0,
    src: "/image-10.webp",
    alt: "Bay Residences bright bedroom",
    className: "tall reveal reveal-delay-1",
  },
  {
    index: 1,
    src: "/image-12.webp",
    alt: "Bay Residences bright living and dining area",
    className: "reveal reveal-delay-2",
  },
  {
    index: 2,
    src: "/image-7.webp",
    alt: "Bay Residences pool and apartment towers",
    className: "reveal reveal-delay-3",
  },
  {
    index: 3,
    src: "/image-5.webp",
    alt: "Bay Residences balcony with sea view",
    className: "wide reveal reveal-delay-2",
  },
  {
    index: 4,
    src: "/image-9.webp",
    alt: "Bay Residences bedroom detail",
    className: "reveal reveal-delay-4",
  },
];

const stripImages = [
  "/image-1.webp",
  "/image-2.webp",
  "/image-4.webp",
  "/image-6.webp",
  "/image-19.webp",
];

export default function Gallery() {
  const navigate = useNavigate();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);

  const openLightbox = (idx) => {
    setCurrentIdx(idx);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "";
  };

  const nextImg = (e) => {
    e?.stopPropagation();
    setCurrentIdx((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImg = (e) => {
    e?.stopPropagation();
    setCurrentIdx((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevImg();
      if (e.key === "ArrowRight") nextImg();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen]);

  return (
    <section className="gallery-section" id="gallery">
      <div className="container">
        <div
          className="reveal"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <div>
            <div className="section-label">Gallery</div>
            <h2 className="section-title">A Glimpse of Paradise</h2>
          </div>
          <button
            className="btn-outline"
            style={{ marginBottom: "4px" }}
            onClick={() => navigate("/gallery")}
            aria-label="View full property gallery"
          >
            View Full Gallery
          </button>
        </div>

        <div className="gallery-grid" id="galleryGrid">
          {galleryImages.map((img) => (
            <div
              key={img.index}
              className={`gallery-item ${img.className}`}
              data-index={img.index}
              onClick={() => openLightbox(img.index)}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
              <div className="gallery-overlay">
                <span className="material-symbols-outlined">open_in_full</span>
              </div>
            </div>
          ))}
        </div>

        <div className="gallery-strip reveal">
          <div
            className="strip-track"
            id="stripTrack"
            onMouseEnter={(e) => {
              e.currentTarget.style.animationPlayState = "paused";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.animationPlayState = "running";
            }}
          >
            {[...stripImages, ...stripImages].map((src, i) => (
              <div key={`${src}-${i}`} className="strip-item">
                <img src={src} alt="" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {lightboxOpen && (
        <div
          className="lightbox active"
          id="lightbox"
          role="dialog"
          aria-modal="true"
          onClick={closeLightbox}
        >
          <button
            className="lightbox-close"
            id="lightboxClose"
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
          >
            &times;
          </button>
          <button className="lightbox-nav lightbox-prev" id="lightboxPrev" onClick={prevImg}>
            &#8592;
          </button>
          <img
            src={galleryImages[currentIdx].src}
            alt={galleryImages[currentIdx].alt}
            id="lightboxImg"
            onClick={(e) => e.stopPropagation()}
          />
          <button className="lightbox-nav lightbox-next" id="lightboxNext" onClick={nextImg}>
            &#8594;
          </button>
        </div>
      )}
    </section>
  );
}
