import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./TableOfContents.css";
import { Heading } from "../../types";

interface Props {
  headings: Heading[];
}

const TableOfContents: React.FC<Props> = ({ headings }) => {
  const [activeHeading, setActiveHeading] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const title =
    document.querySelector(".main-container > div > h1")?.textContent || "";

  const navbarHeight =
    document.querySelector<HTMLElement>(".nav-bar")?.offsetHeight || 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHeading(entry.target.id);
          }
        });
      },
      { threshold: 0.5 },
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [headings]);

  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -navbarHeight;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handleHeadingClick = (id: string) => {
    navigate(`#${id}`);
    scrollToElement(id);
  };

  return (
    <nav className="table-of-contents">
      {headings.length > 0 && (
        <>
          <h3 className="table-of-contents-title">{title}</h3>
          <ul className="table-of-contents-list">
            {headings.map((heading) => (
              <li
                key={heading.text}
                className={`table-of-contents-item  ${activeHeading === heading.id ? "active" : ""}`}
              >
                <a
                  className="table-of-contents-link"
                  href={`#${location.pathname}#${heading.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleHeadingClick(heading.id);
                  }}
                >
                  {heading.text}
                </a>
              </li>
            ))}
          </ul>
        </>
      )}
    </nav>
  );
};

export default TableOfContents;
