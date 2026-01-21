import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";
import { useEffect, useState } from "react";

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function Navbar() {
  const { t, language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");
    setIsMobile(media.matches);

    const handler = (e) => setIsMobile(e.matches);
    media.addEventListener("change", handler);

    return () => media.removeEventListener("change", handler);
  }, []);

  function handleNavClick(id) {
    scrollTo(id);
    setMenuOpen(false);
  }

  return (
    <>
      <header className="header">
        {/* LEFT */}
        <div className="brand">&lt;/YA&gt;</div>

        {/* DESKTOP NAV */}
        {!isMobile && (
          <nav className="nav-pill">
            <span onClick={() => scrollTo("home")}>{t.nav.home}</span>
            <span onClick={() => scrollTo("about")}>{t.nav.about}</span>
            <span onClick={() => scrollTo("skills")}>{t.nav.skills}</span>
            <span onClick={() => scrollTo("projects")}>{t.nav.projects}</span>
            <span onClick={() => scrollTo("contact")}>{t.nav.contact}</span>
          </nav>
        )}

        {/* RIGHT CONTROLS */}
        <div className="header-controls">
          <div
            className="switch"
            onClick={() => setLanguage(language === "de" ? "en" : "de")}
          >
            {language.toUpperCase()}
          </div>

          <div className="switch" onClick={toggleTheme}>
            {theme === "light" ? "☀️" : "🌙"}
          </div>

          {/* MOBILE MENU BUTTON */}
          {isMobile && (
            <div
              className="switch mobile-menu-btn"
              onClick={() => setMenuOpen(true)}
            >
              ☰
            </div>
          )}
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      {isMobile && menuOpen && (
        <div className="mobile-menu-overlay" onClick={() => setMenuOpen(false)}>
          <div
            className="mobile-menu"
            onClick={(e) => e.stopPropagation()}
          >
            <span onClick={() => handleNavClick("home")}>{t.nav.home}</span>
            <span onClick={() => handleNavClick("about")}>{t.nav.about}</span>
            <span onClick={() => handleNavClick("skills")}>{t.nav.skills}</span>
            <span onClick={() => handleNavClick("projects")}>{t.nav.projects}</span>
            <span onClick={() => handleNavClick("contact")}>{t.nav.contact}</span>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
