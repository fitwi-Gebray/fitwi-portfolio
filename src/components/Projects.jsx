// src/components/Projects.jsx
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="section-inner">
      <div className="section-header">
        <div>
          <div className="section-badge">Selected work</div>
          <h2 className="section-title">Projects</h2>
        </div>
        <p className="section-description">
          A selection of projects that demonstrate my approach to UI, state
          management, and working with external data.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
