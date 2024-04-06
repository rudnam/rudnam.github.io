import React from "react";
import "./ProjectItem.css";
import { Project } from "../../types";

interface Props {
  project: Project;
}

const ProjectItem: React.FC<Props> = ({ project }) => {
  return (
    <a
      className="project-item"
      href={project.url}
      rel="noreferrer"
      target="_blank"
    >
      <h3 className="project-item-title">{project.title}</h3>
      <img className="project-item-img" src={project.image}></img>
      <p className="project-item-desc">{project.description}</p>
      {project.links && project.links.length > 0 && (
        <div className="project-item-links">
          {project.links?.map((link, idx) => (
            <span
              key={idx}
              className="project-item-link"
              title={link.url}
              rel="noreferrer"
              role="link"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                window.open(link.url);
              }}
            >
              {link.label}
            </span>
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
    </a>
  );
};

export default ProjectItem;
