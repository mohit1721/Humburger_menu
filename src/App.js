import React, { useState } from "react";
import "./Navbar.css";

const App = () => {
  const [open, setOpen] = useState(false);
  const navItems = ["Home", "About", "Services", "Contact"];

  return (
    <nav className="navbar">
      <div className="brand">MyApp</div>

      <button
        className="menu-toggle"
        onClick={() => setOpen(!open)}
        aria-label="Toggle Menu"
        aria-expanded={open}
      >
        ☰
      </button>

      <ul className={`nav-links ${open ? "open" : ""}`}>
        {navItems.map((item, index) => (
          <li key={index} onClick={() => setOpen(false)}>
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default App;
