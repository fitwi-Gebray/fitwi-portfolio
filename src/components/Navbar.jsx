import { FiMail } from "react-icons/fi";
import Avatar from "@mui/material/Avatar";

const Navbar = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const imageUrl = "https://i.imgur.com/Y6BuswM.jpeg";

  return (
    <header className="navbar">
      <div className="navbar-inner">
        {/* Left: Avatar + Name (row), Role (under avatar) */}
        <div className="nav-logo">
          <div className="flex items-center gap-3">
            <Avatar
              alt="Fitwi Gebray"
              src={imageUrl}
              sx={{ width: 80, height: 80 }}
              className="border-2 border-white"
            />

            <span
              style={{
                fontSize: "22px",
                fontWeight: "600",
              }}
            >
              Fitwi
            </span>
          </div>

          <span
            style={{
              display: "block",
              marginTop: "6px",
              marginLeft: "4px",
              fontSize: "14px",
              color: "#aaa",
            }}
          >
            Frontend Developer
          </span>
        </div>

        {/* Center: Navigation */}
        <nav className="nav-links">
          <button
            className="nav-link"
            style={{ fontSize: "24px" }}
            onClick={() => scrollToSection("home")}
          >
            Home
          </button>

          <button
            className="nav-link"
            style={{ fontSize: "24px" }}
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </button>

          <button
            className="nav-link"
            style={{ fontSize: "24px" }}
            onClick={() => scrollToSection("skills")}
          >
            Skills
          </button>

          <button
            className="nav-link"
            style={{ fontSize: "24px" }}
            onClick={() => scrollToSection("about")}
          >
            About
          </button>

          <button
            className="nav-link"
            style={{ fontSize: "24px" }}
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </button>
        </nav>

        {/* Right: CTA */}
        <button className="nav-cta" onClick={() => scrollToSection("contact")}>
          <FiMail size={15} />
          <span>Contact</span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
