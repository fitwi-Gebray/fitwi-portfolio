import { FiMail } from "react-icons/fi";
const Navbar = () => {
  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "About", id: "about" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">
        {/* LOGO SECTION */}

        <div
          className="nav-logo"
          onClick={() => scrollToSection("home")}
          style={{ cursor: "pointer" }}
          role="button" // 1. Tells screen readers this is interactive
          tabIndex="0" // 2. Allows keyboard users to "tab" to it
          aria-label="Scroll to home" // 3. Describes the action to screen readers
          onKeyDown={(e) => {
            // 4. Makes it work with the "Enter" key
            if (e.key === "Enter") scrollToSection("home");
          }}
        >
          <div className="nav-logo-circle" />
          <div className="nav-logo-text">
            <div className="nav-logo-name">Fitwi.G</div>
            <div className="nav-logo-sub">Frontend Developer</div>
          </div>
        </div>

        {/* 2. DYNAMIC MAPPING: Shows you know how to handle lists in React */}
        <nav className="nav-links">
          {navLinks.map((link) => (
            <button
              key={link.id}
              className="nav-link"
              onClick={() => scrollToSection(link.id)}
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* CTA SECTION */}
        <button className="nav-cta" onClick={() => scrollToSection("contact")}>
          <FiMail size={15} />
          <span>Contact</span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
