import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/property-owners", label: "For Owners" },
  { to: "/services", label: "Services" },
  { to: "/commission", label: "Commission" },
  { to: "/how-it-works", label: "How It Works" },
];

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const linkClassName = ({ isActive }) => (isActive ? "active" : undefined);

  const handleLogoClick = (event) => {
    closeMenu();

    if (location.pathname === "/") {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

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
