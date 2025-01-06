import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import LeftSidebar from "./components/LeftSidebar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useMediaQuery } from "react-responsive";
import TableOfContents from "./components/TableOfContents";
import { Heading } from "./types";
import Notes from "./pages/Notes";

function App() {
  const [theme, setTheme] = useState<string>("dark");
  const isMobile = useMediaQuery({ query: "(max-width: 764px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1224px)" });
  const [headings, setHeadings] = useState<Heading[]>([]);
  const location = useLocation();

  useEffect(() => {
    if (!location.pathname.includes("projects")) {
      setHeadings([]);
    }
  }, [location.pathname]);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    } else if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    const root = document.querySelector("html");
    if (!root) return;

    if (theme === "dark") {
      root.classList.remove("light-mode");
    } else {
      root.classList.add("light-mode");
    }

    if (isMobile) {
      root.classList.add("mobile");
      root.classList.remove("tablet");
    } else if (isTablet) {
      root.classList.add("tablet");
      root.classList.remove("mobile");
    } else {
      root.classList.remove("mobile", "tablet");
    }
  }, [theme, isMobile, isTablet]);

  const themeToggleHandler = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="App">
      <Navbar theme={theme} handleThemeToggle={() => themeToggleHandler()} />
      <main>
        <LeftSidebar />
        <div className="main-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route
              path="/projects"
              element={<Projects handleHeadings={setHeadings} />}
            />
            <Route path="/notes" element={<Notes />} />
          </Routes>
        </div>
        <TableOfContents headings={headings} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
