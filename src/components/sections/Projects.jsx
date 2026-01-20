import { useLanguage } from "../../context/LanguageContext";
import ProjectCard from "../ui/ProjectCard";

export default function Projects() {
  const { t } = useLanguage();
  const projects = t.projects.items ?? [];

  return (
    <section className="projects" id="projects">
      
      <div className="projects-container">
        <h2 className="projects-title">{t.projects.title}</h2>
        <div className="projects-marquee">
          <div className="projects-track">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}

            {/* DUPLIKAT für Endlos-Animation */}
            {projects.map((project) => (
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
