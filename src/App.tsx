import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import LeftSidebar from "./components/LeftSidebar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState("dark");

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
  }, [theme]);

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
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
