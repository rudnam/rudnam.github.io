import { Project } from "../types";
import fsoBloglistImg from "../assets/img/fso-bloglist.png";
import jpStudyImg from "../assets/img/jp-study.png";
import cs180Img from "../assets/img/cs180-project.png";
import cs132Img from "../assets/img/cs132-project.png";
import studysyncImg from "../assets/img/studysync.png";
import portfolioImg from "../assets/img/portfolio.png";
import highlightImg from "../assets/img/highlightword.png";
import todolistImg from "../assets/img/odin-todolist.png";
import fsoRepoImg from "../assets/img/fso-repo.png";

const projects: Project[] = [
  {
    title: "Full Stack Open Bloglist",
    image: fsoBloglistImg,
    description:
      "A simple bloglist website that incorporates what I've learned from the Full Stack Open online \
        course. Connected to a MongoDB database and has an automated CI/CD pipeline.",
    url: "https://bloglist-rudnam.onrender.com/",
    links: [
      {
        label: "Github",
        url: "https://github.com/rudnam/full-stack-open-bloglist",
      },
      {
        label: "Full Stack Open website",
        url: "https://fullstackopen.com/en/",
      },
    ],
    technologies: ["MongoDB", "ExpressJS", "ReactJS", "NodeJS", "JavaScript"],
  },
  {
    title: "JP-study",
    image: jpStudyImg,
    description:
      'A repository where I store resources I use for studying Japanese. Includes note templates made \
        with HTML, CSS, and JavaScript for the spaced repetition application "Anki".',
    url: "https://github.com/rudnam/JP-study",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "rudnam.github.io",
    image: portfolioImg,
    description:
      "A simple portfolio website for displaying projects I have previously done and a little about me.",
    url: ".",
    links: [
      {
        label: "Github",
        url: "https://github.com/rudnam/rudnam.github.io",
      },
    ],
    technologies: ["ReactJS", "TypeScript", "CSS"],
  },
  {
    title: "Full Stack Open repository",
    image: fsoRepoImg,
    description:
      "The repository for (most of) my submissions for the Full Stack Open online course. \
        Learned about modern JavaScript-based web development both frontend and backend.",
    url: "https://bloglist-rudnam.onrender.com/",
    links: [
      {
        label: "Github",
        url: "https://github.com/rudnam/FSO",
      },
      {
        label: "Full Stack Open website",
        url: "https://fullstackopen.com/en/",
      },
    ],
    technologies: ["MERN stack", "TypeScript", "Cypress", "Redux", "GraphQL"],
  },
  {
    title: "Highlight Target Word",
    image: highlightImg,
    description:
      "A simple Anki add-on for enclosing target vocab words with `<b>` tags for Japanese.",
    url: "https://ankiweb.net/shared/info/999501408",
    links: [
      {
        label: "Github",
        url: "https://github.com/rudnam/HighlightTargetWord",
      },
    ],
    technologies: ["Python"],
  },
  {
    title: "The Odin Project Todo List",
    image: todolistImg,
    description:
      "A simple todo list web app made for The Odin Project online course. Made with JavaScript and CSS.",
    url: "https://rudnam.github.io/odin-todo-list/",
    links: [
      {
        label: "Github",
        url: "https://github.com/rudnam/odin-todo-list",
      },
      {
        label: "The Odin Project website",
        url: "https://www.theodinproject.com/",
      },
    ],
    technologies: ["JavaScript", "CSS"],
  },
  {
    title: "Clustering of Filipino Households using K-Means",
    image: cs180Img,
    description:
      "A project where we analyzed a dataset of Filipino Households using K-means clustering. \
        Includes a Jupyter Notebook and a simple web app for demonstration of results.",
    url: "https://cs180-project.onrender.com/",
    links: [
      {
        label: "Google Colab",
        url: "https://colab.research.google.com/drive/13gjczh-z4OHZHS1QJRjv6Qr5TqE3LhEj?usp=sharing",
      },
      {
        label: "Github",
        url: "https://github.com/rudnam/cs180-project",
      },
    ],
    technologies: ["Scikit-learn", "Python", "Flask"],
  },
  {
    title: "PH Twitter Disinformation Analysis: COVID-19 Herbal Cures",
    image: cs132Img,
    description:
      "A project where we explored the correlation between tweets spreading misinformation regarding \
        herbal cures and endorsements of celebrities/politicians. Includes a Jupyter Notebook and a website.",
    url: "https://jltsang.github.io/COVID-Alternative-Cures-Misinformation/",
    links: [
      {
        label: "Google Colab",
        url: "https://colab.research.google.com/drive/1tcgCDNkg-jZN13Bc0dKArLcq4YV9d928",
      },
      {
        label: "Github",
        url: "https://github.com/jltsang/COVID-Alternative-Cures-Misinformation",
      },
    ],
    technologies: ["Scikit-learn", "Python", "HTML", "JavaScript"],
  },
  {
    title: "StudySync",
    image: studysyncImg,
    description:
      "A chrome extension for productivity. Includes a dictionary, a pomodoro timer, a todo list, and a \
        note-taking feature.",
    url: "https://chromewebstore.google.com/detail/studysync-alpha/pibncdfgjlhidgmollhdfenpkjhckpdb",
    links: [
      {
        label: "Github",
        url: "https://github.com/NoirHearts/studysync",
      },
    ],
    technologies: ["ReactJS", "TypeScript", "Playwright"],
  },
];

export default projects;
