import React from "react";
import { Link } from "react-router-dom";
import "./LeftSidebar.css";

const LeftSidebar: React.FC = () => {
  const closeSidebar = () => {
    const sidebar = document.querySelector(".left-sidebar");
    if (!sidebar) return;
    sidebar.classList.remove("open");
  };

  return (
    <div className="left-sidebar">
      <button className="close-sidebar button" onClick={() => closeSidebar()}>
        ✖
      </button>
      <ul>
        <li>
          <Link to="/" onClick={() => closeSidebar()}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about-me" onClick={() => closeSidebar()}>
            About Me
          </Link>
        </li>
        <li>
          <Link to="/projects" onClick={() => closeSidebar()}>
            Projects
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default LeftSidebar;
