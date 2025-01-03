import React from "react";
import "./ProjectList.css";
import ProjectItem from "../ProjectItem";
import { Project } from "../../types";
import titleToId from "../../utils";

interface Props {
  projects: Project[];
}

const ProjectList: React.FC<Props> = ({ projects }) => {
  return (
    <div className="project-list">
      {projects.length > 0 ? (
        projects
          .filter((p) => !p.hide)
          .map((project, idx, filteredProjects) => (
            <section id={titleToId(project.title)} key={idx}>
              <ProjectItem key={project.title} project={project}></ProjectItem>
              {idx < filteredProjects.length - 1 && (
                <hr className="project-list-separator" />
              )}
            </section>
          ))
      ) : (
        <p>There&apos;s nothing here yet. (´_ゝ｀)</p>
      )}
    </div>
  );
};

export default ProjectList;
