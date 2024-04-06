import React from "react";
import "./ProjectItem.css";
import { Project } from "../../types";

interface Props {
  project: Project;
}

const ProjectItem: React.FC<Props> = ({ project }) => {
  return (
    <div className="project-item" onClick={() => window.open(project.url)}>
      <h3 className="project-item-title">{project.title}</h3>
      <img className="project-item-img" src={project.image}></img>
      <p className="project-item-desc">{project.description}</p>
      {project.links && project.links.length > 0 && (
        <div className="project-item-links">
          {project.links?.map((link, idx) => (
            <a
              key={idx}
              className="project-item-link"
              href={link.url}
              rel="noreferrer"
              target="_blank"
              onClick={(e) => e.stopPropagation()}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
      {project.technologies && project.technologies.length > 0 && (
        <div className="project-item-technologies">
          {project.technologies?.map((technology, idx) => (
            <div key={idx} className="project-item-technology">
              {technology}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectItem;
