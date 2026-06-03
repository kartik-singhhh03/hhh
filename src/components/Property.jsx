import { useNavigate } from "react-router-dom";
import { useProperties } from "../context/PropertiesProvider";
import { getPropertyRoutePath } from "../lib/propertiesApi";

function getMobileBadge(property) {
  if (property.badgeDisplay) return property.badgeDisplay;
  return property.badge?.replace(/·/g, "•").toUpperCase() ?? "";
}

function PropertyCard({ property }) {
  const navigate = useNavigate();

  const handleCheckAvailability = (e) => {
    e.preventDefault();
    document
      .getElementById("lodgify-booking")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const handleKnowMore = (e) => {
    e.preventDefault();
    navigate(getPropertyRoutePath(property));
  };

  const mobileTitleLine1 =
    property.displayTitleLine1 ||
    property.title?.replace(/^HHH\s*[–-]\s*/i, "").replace(/\s*[–-]\s*Sea View\s*$/i, "") ||
    property.title;
  const mobileTitleLine2 = property.displayTitleLine2 || property.location;

  return (
    <div className="property-wrap">
      <div className="property-image-wrap reveal reveal-delay-1">
        <img src={property.image} alt={mobileTitleLine1} loading="lazy" />
        {property.displayArea ? (
          <span className="property-area-label">{property.displayArea}</span>
        ) : null}
        <span className="property-badge property-badge--desktop">
          {property.badge}
        </span>
        <span className="property-badge property-badge--mobile">
          {getMobileBadge(property)}
        </span>
        {property.displayResidence ? (
          <span className="property-residence-overlay">
            {property.displayResidence}
          </span>
        ) : null}
        <div className="property-price-tag">
          <div className="price">{property.price}</div>
          <div className="per">{property.priceLabel}</div>
        </div>
      </div>

      <div className="property-info reveal reveal-delay-2">
        <div className="section-label property-info-label">Featured Property</div>
        <h2 className="property-title property-title--desktop">{property.title}</h2>
        <div className="property-title property-title--mobile" aria-label={property.title}>
          <span className="property-title-main">{mobileTitleLine1}</span>
          <span className="property-title-sub">{mobileTitleLine2}</span>
        </div>
        <div className="property-location">
          <span className="material-symbols-outlined">place</span>
          {property.location}
        </div>
        <div className="property-specs">
          <div className="spec-item">
            <span className="material-symbols-outlined">group</span>
            <span className="spec-label">Guests</span>
            <span className="spec-value">{property.guests}</span>
          </div>
          <div className="spec-item">
            <span className="material-symbols-outlined">king_bed</span>
            <span className="spec-label">Bedrooms</span>
            <span className="spec-value">{property.bedrooms}</span>
          </div>
          <div className="spec-item">
            <span className="material-symbols-outlined">shower</span>
            <span className="spec-label">Bathrooms</span>
            <span className="spec-value">{property.bathrooms}</span>
          </div>
          <div className="spec-item">
            <span className="material-symbols-outlined">straighten</span>
            <span className="spec-label">Area</span>
            <span className="spec-value">{property.area}</span>
          </div>
        </div>
        <p className="property-desc">{property.shortDescription}</p>
        <div className="property-buttons">
          <a
            href="#lodgify-booking"
            className="btn-primary-dark"
            onClick={handleCheckAvailability}
          >
            <span className="material-symbols-outlined">date_range</span>
            {property.buttonText}
          </a>
          <a
            href={getPropertyRoutePath(property)}
            className="btn-outline"
            onClick={handleKnowMore}
          >
            <span className="material-symbols-outlined">info</span>
            Know More
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Property() {
  const { properties } = useProperties();

  return (
    <section className="property-section" id="property">
      <div className="container">
        <div className="reveal">
          <div className="section-label">Featured Properties</div>
        </div>

        {properties.map((property) => (
          <PropertyCard key={property.lodgifyId ?? property.id} property={property} />
        ))}
      </div>
    </section>
  );
}
