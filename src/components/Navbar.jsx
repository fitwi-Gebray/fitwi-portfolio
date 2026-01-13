// src/components/Navbar.jsx
import { FiMail } from "react-icons/fi";

const Navbar = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="nav-logo">
          <div className="nav-logo-circle" />
          <div className="nav-logo-text">
            <div className="nav-logo-name">Fitwi.G</div>
            <div>Frontend Developer</div>
          </div>
        </div>

        <nav className="nav-links">
          <button className="nav-link" onClick={() => scrollToSection("home")}>
            Home
          </button>
          <button
            className="nav-link"
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </button>
          <button
            className="nav-link"
            onClick={() => scrollToSection("skills")}
          >
            Skills
          </button>
          <button className="nav-link" onClick={() => scrollToSection("about")}>
            About
          </button>
          <button
            className="nav-link"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </button>
        </nav>

        <button className="nav-cta" onClick={() => scrollToSection("contact")}>
          <FiMail size={15} />
          <span>Contact</span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
