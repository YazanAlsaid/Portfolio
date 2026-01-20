import { useLanguage } from "../../context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <h2 className="about-title">{t.about.title}</h2>

        {/* intro ist ein Array */}
        {Array.isArray(t.about.intro) &&
          t.about.intro.map((text, i) => (
            <p className="about-intro" key={i}>
              {text}
            </p>
          ))}

        <div className="timeline-wrapper">
          {/* Education */}
          <div className="timeline-column">
            <h3 className="timeline-heading">🎓 {t.education.title}</h3>
            {t.education.items.map((item, i) => (
              <div className="timeline-item" key={i}>
                <span className="timeline-dot" />
                <div className="timeline-content">
                  <span className="timeline-date">{item.date}</span>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Experience */}
          <div className="timeline-column">
            <h3 className="timeline-heading">💼 {t.experience.title}</h3>
            {t.experience.items.map((item, i) => (
              <div className="timeline-item" key={i}>
                <span className="timeline-dot" />
                <div className="timeline-content">
                  <span className="timeline-date">{item.date}</span>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="about-highlight">
          {t.highlight}
        </div>
      </div>
    </section>
  );
}
