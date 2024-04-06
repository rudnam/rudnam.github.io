import React from "react";
import "./ProjectList.css";
import ProjectItem from "../ProjectItem";
import { Project } from "../../types";

interface Props {
  projects: Project[];
}

const ProjectList: React.FC<Props> = ({ projects }) => {
  return (
    <div className="project-list">
      {projects.length > 0 ? (
        projects.map((project) => (
          <ProjectItem key={project.title} project={project}></ProjectItem>
        ))
      ) : (
        <p>No projects</p>
      )}
    </div>
  );
};

export default ProjectList;
