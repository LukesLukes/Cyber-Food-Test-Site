// src\components\DarkMode\index.jsx

import { useEffect, useState } from "react";
import "./styles.css";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // Verifica se já existe preferência salva no localStorage
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button className="dark-toggle" onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? "🌙" : "☀️"}
    </button>
  );
};

export default DarkModeToggle;
