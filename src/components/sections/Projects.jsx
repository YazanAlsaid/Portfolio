import { useLanguage } from "../../context/LanguageContext";
import ProjectCard from "../ui/ProjectCard";
import { useEffect, useState } from "react";

export default function Projects() {
  const { t } = useLanguage();
  const projects = t.projects.items ?? [];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");
    setIsMobile(media.matches);

    const handler = (e) => setIsMobile(e.matches);
    media.addEventListener("change", handler);

    return () => media.removeEventListener("change", handler);
  }, []);

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2 className="projects-title">{t.projects.title}</h2>

        <div className="projects-marquee">
          <div className="projects-track">
            {/* NORMAL: immer einmal */}
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}

            {/* DUPLIKAT NUR AUF DESKTOP */}
            {!isMobile &&
              projects.map((project) => (
                <ProjectCard
                  key={`dup-${project.id}`}
                  project={project}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
