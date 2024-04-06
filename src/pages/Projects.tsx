import React, { useEffect, useState } from "react";
import ProjectList from "../components/ProjectList";
import { Heading, Project } from "../types";
import projectObjects from "../services/projects";
import titleToId from "../utils";

interface Props {
  handleHeadings: (headings: Heading[]) => void;
}

const Projects: React.FC<Props> = ({ handleHeadings }) => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    setProjects(projectObjects);
    const headings = projectObjects.map((proj) => {
      return {
        id: titleToId(proj.title),
        text: proj.title,
      } as Heading;
    });
    handleHeadings(headings);
  }, []);

  return (
    <div>
      <h1>Projects</h1>
      <ProjectList projects={projects} />
    </div>
  );
};

export default Projects;
