import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}


function Navbar() {
  const { t, language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header">
      {/* LEFT: Brand */}
      <div className="brand">&lt;/YA&gt;</div>

      {/* CENTER: Glass Navigation */}
        <nav className="nav-pill">
          <span onClick={() => scrollTo("home")}>{t.nav.home}</span>
          <span onClick={() => scrollTo("about")}>{t.nav.about}</span>
          <span onClick={() => scrollTo("skills")}>{t.nav.skills}</span>
          <span onClick={() => scrollTo("projects")}>{t.nav.projects}</span>
          <span onClick={() => scrollTo("contact")}>{t.nav.contact}</span>
        </nav>


      {/* RIGHT: Controls */}
      <div className="header-controls">
        <div
          className="switch"
          onClick={() => setLanguage(language === "de" ? "en" : "de")}
        >
          {language.toUpperCase()}
        </div>

        <div className="switch" onClick={toggleTheme}>
          {theme === "light" ? "🌙" : "☀️"}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
