// src/components/ProjectCard.jsx
import { FiExternalLink, FiGithub } from "react-icons/fi";

const ProjectCard = ({
  title,
  role,
  description,
  tech,
  liveUrl,
  githubUrl,
}) => {
  return (
    <article className="project-card">
      <div className="project-image">
        <div className="project-image-overlay" />
      </div>

      <div className="project-title-row">
        <h3 className="project-title">{title}</h3>
        <span className="project-label">{role}</span>
      </div>

      <p className="project-description">{description}</p>

      {tech?.length
        ? tech.map((item) => (
            <span key={item} className="project-tech-pill">
              {item}
            </span>
          ))
        : null}

      <div className="project-links">
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            <FiGithub size={14} />
            <span>Code</span>
          </a>
        )}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            <FiExternalLink size={14} />
            <span>Live</span>
          </a>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
