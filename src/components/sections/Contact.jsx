import { useLanguage } from "../../context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="contact-title">{t.contact.title}</h2>

        <p className="contact-text">
          {t.contact.description}
        </p>

        <a
          href="mailto:yazan7.jad@icloud.com"
          className="contact-email"
        >
          Email
        </a>
      </div>
    </section>
  );
}
