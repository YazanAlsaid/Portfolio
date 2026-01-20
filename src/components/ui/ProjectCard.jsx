import { techIcons } from "../../data/techIcons";

export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      {/* Name */}
      <span className="project-name">{project.name}</span>

      {/* Type */}
      <span className="project-type">{project.type}</span>

      {/* Tech Icons */}
      {project.tech && (
        <div className="project-tech">
          {project.tech.map((key) => {
            const Icon = techIcons[key];
            return Icon ? (
              <Icon key={key} title={key} />
            ) : null;
          })}
        </div>
      )}

      {/* GitHub */}
      <a
        href={project.github}
        target="_blank"
        rel="noreferrer"
        className="github-button"
      >
        GitHub
      </a>
    </div>
  );
}
