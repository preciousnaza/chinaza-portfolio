
import { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSun, FaMoon, FaTimes } from "react-icons/fa";
import "./styles/Navbar.css";

type Theme = "light" | "dark";

const Navbar = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof document !== "undefined") {
      return document.documentElement.getAttribute("data-theme") === "light"
        ? "light"
        : "dark";
    }

    return "light";
  });

  const [menuOpen, setMenuOpen] = useState(false);
  const navbarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    if (!menuOpen) return;

    const handleClickOutside = (event: PointerEvent) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("pointerdown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("pointerdown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [menuOpen]);

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "dark" ? "light" : "dark"
    );
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navItems = [
    { label: "Home", target: "home" },
    { label: "About", target: "about" },
    { label: "Skills", target: "skill" },
    { label: "Projects", target: "project" },
    { label: "Contact", target: "contact" },
  ];

  return (
    <header className="navbar-wrapper" ref={navbarRef}>
      <nav className="navbar" aria-label="Main navigation">
        <Link
          to="home"
          smooth
          duration={300}
          className="navbar-brand"
          onClick={closeMenu}
          aria-label="Portfolio home"
        >
          Portfolio<span className="brand-dot">.</span>
        </Link>

        <div className={`navbar-links ${menuOpen ? "is-open" : ""}`}>
          {navItems.map((item) => (
            <Link
              key={item.target}
              to={item.target}
              smooth
              duration={300}
              spy
              offset={-90}
              activeClass="active"
              className="navbar-link"
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}

          <Link
            to="contact"
            smooth
            duration={300}
            offset={-90}
            className="navbar-hire"
            onClick={closeMenu}
          >
            Hire me <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <div className="navbar-actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? (
              <FaSun aria-hidden="true" />
            ) : (
              <FaMoon aria-hidden="true" />
            )}
          </button>

          <button
            type="button"
            className="menu-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? (
              <FaTimes aria-hidden="true" />
            ) : (
              <GiHamburgerMenu aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      <div
        id="mobile-navigation"
        className={`mobile-navigation ${menuOpen ? "is-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        {navItems.map((item) => (
          <Link
            key={item.target}
            to={item.target}
            smooth
            duration={300}
            spy
            offset={-90}
            activeClass="active"
            className="mobile-navigation-link"
            tabIndex={menuOpen ? 0 : -1}
            onClick={closeMenu}
          >
            {item.label}
          </Link>
        ))}

        <Link
          to="contact"
          smooth
          duration={300}
          offset={-90}
          className="mobile-navigation-hire"
          tabIndex={menuOpen ? 0 : -1}
          onClick={closeMenu}
        >
          Hire me <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;