import { useState } from "react";
import { Link } from "react-router-dom";

const FOOTER_SECTIONS = [
  {
    id: "quick-links",
    title: "Quick Links",
    links: [
      { to: "/", label: "Home" },
      { to: "/about", label: "About HHH" },
      { to: "/services", label: "Our Services" },
      { to: "/commission", label: "Commission" },
      { to: "/contact", label: "Contact Us" },
    ],
  },
  {
    id: "owners-partners",
    title: "Owners & Partners",
    links: [
      { to: "/property-owners", label: "For Property Owners" },
      { to: "/commission", label: "Commission Structure" },
      { to: "/how-it-works", label: "How It Works" },
      { to: "/roi-calculator", label: "ROI Calculator" },
    ],
  },
  {
    id: "contact-info",
    title: "Contact",
    items: [
      { href: "mailto:hello@holidayhomehost.ae", label: "hello@holidayhomehost.ae" },
      { href: "tel:+971501234567", label: "+971 50 123 4567" },
      { type: "text", label: "Hayat Island, Mina Al Arab" },
      { type: "text", label: "Ras Al Khaimah, UAE" },
    ],
  },
];

export default function Footer() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (id) => {
    setOpenSection((current) => (current === id ? null : id));
  };

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <img
              src="/hhh-black.webp"
              alt="Holiday Home Host"
              className="footer-logo-img"
            />
            <p>
              Premium short-term rental management in Ras Al Khaimah -
              maximising owner returns and delivering exceptional guest
              experiences.
            </p>
            <div className="footer-social">
              <a
                href="https://www.instagram.com/holidayhomehost"
                className="social-icon"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined">photo_camera</span>
              </a>
              <a
                href="tel:+971501234567"
                className="social-icon"
                aria-label="WhatsApp"
              >
                <span className="material-symbols-outlined">chat_bubble</span>
              </a>
              <a href="#" className="social-icon" aria-label="LinkedIn">
                <span className="material-symbols-outlined">work</span>
              </a>
            </div>
          </div>

          {FOOTER_SECTIONS.map((section) => (
            <div
              key={section.id}
              className={`footer-col${openSection === section.id ? " is-open" : ""}`}
            >
              <button
                type="button"
                className="footer-col-toggle"
                aria-expanded={openSection === section.id}
                aria-controls={`footer-panel-${section.id}`}
                onClick={() => toggleSection(section.id)}
              >
                <h4>{section.title}</h4>
                <span className="footer-col-chevron material-symbols-outlined" aria-hidden="true">
                  expand_more
                </span>
              </button>
              <ul id={`footer-panel-${section.id}`}>
                {section.links
                  ? section.links.map((link) => (
                      <li key={link.to}>
                        <Link to={link.to}>{link.label}</Link>
                      </li>
                    ))
                  : section.items.map((item) => (
                      <li key={item.label}>
                        {item.href ? (
                          <a href={item.href}>{item.label}</a>
                        ) : (
                          item.label
                        )}
                      </li>
                    ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <span>&copy; 2026 Holiday Home Host. All rights reserved.</span>
          <span>
            <a href="#">Privacy Policy</a> &nbsp;&middot;&nbsp;{" "}
            <a href="#">Terms of Service</a> &nbsp;&middot;&nbsp;{" "}
            <a href="#">RAKTDA Licensed</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
