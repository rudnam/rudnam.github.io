import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

interface Props {
  theme: string;
  handleThemeToggle: () => void;
}

const Navbar: React.FC<Props> = ({ theme, handleThemeToggle }) => {
  return (
    <nav className="nav-bar">
      <ul>
        <li
          className="sidebar-toggle button"
          onClick={() => {
            const sidebar = document.querySelector(".left-sidebar");
            if (!sidebar) return;
            sidebar.classList.toggle("open");
          }}
        >
          ≡
        </li>
        <li className="home-button" onClick={() => location.reload()}>
          <Link to="/">rudnam</Link>
        </li>
        <li
          className="theme-toggle button"
          onClick={() => {
            handleThemeToggle();
          }}
        >
          {theme === "dark" ? "☾" : "☀"}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
