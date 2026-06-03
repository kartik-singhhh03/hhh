import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useProperties } from "../context/PropertiesProvider";
import { getPropertyRoutePath } from "../lib/propertiesApi";

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/property-owners", label: "For Owners" },
  { to: "/services", label: "Services" },
  { to: "/commission", label: "Commission" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const location = useLocation();
  const { properties } = useProperties();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setDropdownOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setDropdownOpen(false);
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  const linkClassName = ({ isActive }) => (isActive ? "active" : undefined);

  const handleLogoClick = (event) => {
    closeMenu();
    if (location.pathname === "/") {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Check if any property page is active
  const isPropertiesActive =
    location.pathname.startsWith("/property/") ||
    location.pathname.startsWith("/properties/");

  return (
    <nav
      className={`nav ${scrolled ? "scrolled" : ""} ${menuOpen ? "menu-open" : ""}`}
      id="mainNav"
    >
      <Link
        to="/"
        className="nav-logo"
        onClick={handleLogoClick}
        aria-label="Holiday Home Host home"
      >
        <img
          src="/hhh-black.webp"
          alt="Holiday Home Host"
          className="brand-logo-img"
        />
      </Link>

      <ul className="nav-links" id="navLinks">
        {navItems.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              end={item.end}
              className={linkClassName}
              onClick={closeMenu}
            >
              {item.label}
            </NavLink>
          </li>
        ))}

        {/* All Properties Dropdown */}
        <li className="nav-dropdown-wrap" ref={dropdownRef}>
          <button
            className={`nav-dropdown-trigger ${isPropertiesActive ? "active" : ""} ${dropdownOpen ? "open" : ""}`}
            onClick={() => setDropdownOpen((v) => !v)}
            aria-haspopup="true"
            aria-expanded={dropdownOpen}
            id="propertiesDropdownBtn"
          >
            All Properties
            <svg
              className="nav-dropdown-arrow"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M2 4l4 4 4-4"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div
            className={`nav-dropdown-menu ${dropdownOpen ? "open" : ""}`}
            role="menu"
          >
            <div className="nav-dropdown-header">Our Properties</div>
            {properties.map((prop) => (
              <Link
                key={prop.lodgifyId ?? prop.id}
                to={getPropertyRoutePath(prop)}
                className="nav-dropdown-item"
                onClick={closeMenu}
                role="menuitem"
              >
                <div className="nav-dropdown-item-img">
                  <img src={prop.image} alt={prop.title} />
                </div>
                <div className="nav-dropdown-item-info">
                  <span className="nav-dropdown-item-name">{prop.title}</span>
                  <span className="nav-dropdown-item-loc">
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M6 1C4.07 1 2.5 2.57 2.5 4.5c0 2.65 3.5 6.5 3.5 6.5s3.5-3.85 3.5-6.5C9.5 2.57 7.93 1 6 1zm0 4.75A1.25 1.25 0 1 1 6 3.25a1.25 1.25 0 0 1 0 2.5z" fill="currentColor"/>
                    </svg>
                    {prop.location}
                  </span>
                  <span className="nav-dropdown-item-price">{prop.price} <em>/ night</em></span>
                </div>
              </Link>
            ))}
          </div>
        </li>

        <li>
          <NavLink
            to="/property-owners"
            className={({ isActive }) => `nav-cta ${isActive ? "active" : ""}`}
            onClick={closeMenu}
          >
            List Your Property
          </NavLink>
        </li>
      </ul>

      <button
        className="nav-hamburger"
        id="navHamburger"
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}
