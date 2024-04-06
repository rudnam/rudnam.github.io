import React from "react";
import ProjectList from "../components/ProjectList";
import { Project } from "../types";
import fsoBloglistImg from "../assets/img/fso-bloglist.png";
import jpStudyImg from "../assets/img/jp-study.png";

function Projects() {
  const projects: Project[] = [
    {
      title: "Full Stack Open Bloglist",
      image: fsoBloglistImg,
      description:
        "A simple bloglist website that incorporates what I've learned from the Full Stack Open course. \
        Connected to a MongoDB database and has a CI/CD pipeline.",
      url: "https://bloglist-rudnam.onrender.com/",
      links: [
        {
          label: "Github",
          url: "https://github.com/rudnam/full-stack-open-bloglist",
        },
        {
          label: "Full Stack Open",
          url: "https://fullstackopen.com/en/",
        },
      ],
      technologies: ["MongoDB", "ExpressJS", "React", "NodeJS", "Javascript"],
    },
    {
      title: "JP-study",
      image: jpStudyImg,
      description:
        'A repository where I store resources I use for studying Japanese. Includes note templates for the spaced repetition application "Anki".',
      url: "https://github.com/rudnam/JP-study",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
  ];

  return (
    <div>
      <h1>Projects</h1>
      <ProjectList projects={projects} />
    </div>
  );
}

export default Projects;
