import { useLanguage } from "../../context/LanguageContext";

export default function DocumentsModal({ open, onClose }) {
  const { t } = useLanguage();

  if (!open) return null;

  const title = t.documents?.title || "Documents";

  return (
    <div className="documents-overlay" onClick={onClose}>
      <div
        className="documents-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="documents-title">
          {title}
        </h3>

        <ul className="documents-list">
          <li>
            <a href="/documents/Arbeitszeugnis.pdf" download>
              Deka Bank - Arbeitszeugnis
            </a>
          </li>
          <li>
            <a href="/documents/Coursera-ML.pdf" download>
              Frankfurt University of Applied Sciences – Arbeitszeugnis
            </a>
          </li>
          <li>
            <a href="/documents/Coursera-React.pdf" download>
              Coursera – React
            </a>
          </li>
        </ul>

        <button
          className="documents-close"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}
