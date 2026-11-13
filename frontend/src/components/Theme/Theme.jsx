import React, { useState } from "react";
import './Theme.css';

const   Theme = () => {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    const newTheme = !dark;
    setDark(newTheme);

    document.body.classList.toggle("dark-theme", newTheme);
  };

  return (
    <button className="btn btn-outline-primary" onClick={toggleTheme}>
      {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
};

export default Theme;