import { useRef } from "react";

/**
 * Generic reusable explore/advantage slider.
 * Props:
 *   id         – unique DOM id prefix (e.g. "explore", "marjan")
 *   label      – section-label text
 *   title      – h2 text
 *   subtitle   – section-desc text
 *   cards      – [{ tag, title, desc, image, alt, delay? }]
 */
export default function ExploreSection({ id, label, title, subtitle, cards }) {
  const cardsRef = useRef(null);

  const scrollLeft = () =>
    cardsRef.current?.scrollBy({ left: -380, behavior: "smooth" });
  const scrollRight = () =>
    cardsRef.current?.scrollBy({ left: 380, behavior: "smooth" });

  return (
    <section className="explore-section" id={id}>
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
            <div className="section-label">{label}</div>
            <h2 className="section-title">{title}</h2>
            <p className="section-desc">{subtitle}</p>
          </div>
          <div className="explore-scroll-btn">
            <button
              className="scroll-btn"
              id={`${id}Prev`}
              onClick={scrollLeft}
              aria-label="Previous"
            >
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <button
              className="scroll-btn"
              id={`${id}Next`}
              onClick={scrollRight}
              aria-label="Next"
            >
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>

        <div className="explore-scroll-wrap">
          <div
            className="explore-cards"
            id={`${id}Cards`}
            ref={cardsRef}
            style={{
              display: "flex",
              gap: "24px",
              overflowX: "auto",
              scrollbarWidth: "none",
              paddingBottom: "20px",
              scrollSnapType: "x mandatory",
            }}
          >
            {cards.map((card, i) => (
              <div
                key={i}
                className={`explore-card reveal${card.delay ? ` reveal-delay-${card.delay}` : ""}`}
              >
                <img src={card.image} alt={card.alt} loading="lazy" />
                <div className="explore-card-content">
                  <div className="explore-card-tag">{card.tag}</div>
                  <div className="explore-card-title">{card.title}</div>
                  <div className="explore-card-desc">{card.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
