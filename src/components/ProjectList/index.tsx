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
        projects
          .filter((p) => !p.hide)
          .map((project) => (
            <ProjectItem key={project.title} project={project}></ProjectItem>
          ))
      ) : (
        <p>There&apos;s nothing here yet. (´_ゝ｀)</p>
      )}
    </div>
  );
};

export default ProjectList;
