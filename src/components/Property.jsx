import { useNavigate } from "react-router-dom";
import { useProperties } from "../context/PropertiesProvider";
import { getPropertyRoutePath } from "../lib/propertiesApi";

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

  return (
    <div className="property-wrap">
      <div className="property-image-wrap reveal reveal-delay-1">
        <img
          src={property.image}
          alt={property.title}
          loading="lazy"
        />
        <span className="property-badge">{property.badge}</span>
        <div className="property-price-tag">
          <div className="price">{property.price}</div>
          <div className="per">{property.priceLabel}</div>
        </div>
      </div>

      <div className="property-info reveal reveal-delay-2">
        <div className="section-label">Featured Property</div>
        <h2>{property.title}</h2>
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
