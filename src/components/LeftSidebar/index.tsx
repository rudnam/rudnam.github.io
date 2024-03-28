import React from "react";
import { Link } from "react-router-dom";
import "./LeftSidebar.css";

function LeftSidebar() {
  const closeSidebar = () => {
    document.querySelector(".left-sidebar")?.classList.remove("open");
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
            About me
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
}

export default LeftSidebar;
