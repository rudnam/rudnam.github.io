import { Project } from "../types";
import jpStudyImg from "../assets/img/jp-study.png";
import locksenseImg from "../assets/img/locksense.png";
import dctidImg from "../assets/img/dctid-website.png";
import studysyncImg from "../assets/img/studysync.png";
import portfolioImg from "../assets/img/portfolio.png";

const projects: Project[] = [
  {
    title: "DCTID Website",
    image: dctidImg,
    description: `
      Website for the Department of Clothing, Textiles, and Interior Design of UP Diliman. \
      Allows for easy management through the Sanity Studio.
      `,
    url: "https://up-dctid.vercel.app/",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/ctid-department/dctid-website",
      },
      {
        label: "Sanity Studio (requires perms)",
        url: "https://up-dctid.sanity.studio/",
      },
    ],
    technologies: ["Next.js", "TypeScript", "Sanity CMS", "Vercel"],
  },
  {
    title: "LockSense",
    image: locksenseImg,
    description: `
      Software side for an IoT smart lock system. The GitHub repository includes code \
      for both the user-facing app and cloud component.
      `,
    url: "https://locksense-c23a8.web.app/",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/rudnam/LockSense",
      },
      {
        label: "Documentation",
        url: "https://drive.google.com/file/d/1dBEvbvaglZH1AzWSfaItZwSOcOkWpEUQ",
      },
    ],
    technologies: ["Flutter", "Dart", "MQTT", "Firebase", "TypeScript"],
  },
  {
    title: "StudySync",
    image: studysyncImg,
    description:
      "A Chrome extension for productivity. Includes a dictionary, a pomodoro timer, a todo list, and a \
        note-taking feature.",
    url: "https://chromewebstore.google.com/detail/studysync-alpha/pibncdfgjlhidgmollhdfenpkjhckpdb",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/NoirHearts/studysync",
      },
    ],
    technologies: ["React", "TypeScript", "Playwright"],
  },
  {
    title: "rudnam.github.io",
    image: portfolioImg,
    description: "My personal website.",
    url: ".",
    links: [
      {
        label: "Github",
        url: "https://github.com/rudnam/rudnam.github.io",
      },
    ],
    technologies: ["React", "TypeScript", "CSS"],
  },
  {
    title: "JP-study",
    image: jpStudyImg,
    description:
      'A repository for storing resources for studying Japanese. Includes note templates made \
        with HTML, CSS, and JavaScript for the spaced repetition application "Anki".',
    url: "https://github.com/rudnam/JP-study",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

export default projects;
