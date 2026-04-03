import { useState, useEffect } from 'react';

const galleryImages = [
  { index: 0, src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80', alt: 'Sea view', className: 'tall reveal reveal-delay-1' },
  { index: 1, src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80', alt: 'Interior', className: 'reveal reveal-delay-2' },
  { index: 2, src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80', alt: 'Jebel Jais', className: 'reveal reveal-delay-3' },
  { index: 3, src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80', alt: 'Beach', className: 'wide reveal reveal-delay-2' },
  { index: 4, src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80', alt: 'Bedroom', className: 'reveal reveal-delay-4' }
];

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);

  const openLightbox = (idx) => {
    setCurrentIdx(idx);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
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
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImg();
      if (e.key === 'ArrowRight') nextImg();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  return (
    <section className="gallery-section" id="gallery">
      <div className="container">
        <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div className="section-label">Gallery</div>
            <h2 className="section-title">A Glimpse of Paradise</h2>
          </div>
          <a href="#" className="btn-outline" style={{ marginBottom: '4px' }}>View Full Gallery</a>
        </div>
        
        <div className="gallery-grid" id="galleryGrid">
          {galleryImages.map((img) => (
            <div key={img.index} className={`gallery-item ${img.className}`} data-index={img.index} onClick={() => openLightbox(img.index)}>
              <img src={img.src} alt={img.alt} loading="lazy" />
              <div className="gallery-overlay"><span className="material-symbols-outlined">open_in_full</span></div>
            </div>
          ))}
        </div>
        
        <div className="gallery-strip reveal">
          <div className="strip-track" id="stripTrack" 
               onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'}
               onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'}>
            {[
              '1582719478250-c89cae4dc85b', '1600596542815-ffad4c1539a9', '1464822759023-fed622ff2c3b',
              '1506905925346-21bda4d32df4', '1560448204-e02f11c3d0e2', '1571896349842-33c89424de2d'
            ].map((id, i) => (
              <div key={`s1-${i}`} className="strip-item">
                <img src={`https://images.unsplash.com/photo-${id}?w=400&q=75`} alt="" loading="lazy" />
              </div>
            ))}
            {[
              '1582719478250-c89cae4dc85b', '1600596542815-ffad4c1539a9', '1464822759023-fed622ff2c3b',
              '1506905925346-21bda4d32df4', '1560448204-e02f11c3d0e2', '1571896349842-33c89424de2d'
            ].map((id, i) => (
              <div key={`s2-${i}`} className="strip-item">
                <img src={`https://images.unsplash.com/photo-${id}?w=400&q=75`} alt="" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {lightboxOpen && (
        <div className="lightbox active" id="lightbox" role="dialog" aria-modal="true" onClick={closeLightbox}>
          <button className="lightbox-close" id="lightboxClose" onClick={(e) => { e.stopPropagation(); closeLightbox(); }}>✕</button>
          <button className="lightbox-nav lightbox-prev" id="lightboxPrev" onClick={prevImg}>&#8592;</button>
          {/* using simple transition approach */}
          <img src={galleryImages[currentIdx].src} alt={galleryImages[currentIdx].alt} id="lightboxImg" onClick={(e) => e.stopPropagation()} style={{ opacity: 1, transform: 'scale(1)', transition: 'opacity .35s ease, transform .35s ease' }} />
          <button className="lightbox-nav lightbox-next" id="lightboxNext" onClick={nextImg}>&#8594;</button>
        </div>
      )}
    </section>
  );
}
