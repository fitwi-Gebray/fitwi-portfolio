import { FiArrowRight } from "react-icons/fi";

const Hero = () => {
  // 1. Move skills to a dynamic array (Easy to update/maintain)
  const coreStack = [
    "React",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind",
    "REST APIs",
    "Git",
  ];

  // 2. Smooth Scroll Logic
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-left">
          <div className="hero-pill">
            <span className="hero-dot" />
            <span>Available for frontend opportunities</span>
          </div>

          <h1 className="hero-heading">
            I build
            <span className="hero-gradient">
              {" "}
              clean, modern web interfaces
            </span>{" "}
            with React.
          </h1>

          <p className="hero-subtitle">
            I focus on translating ideas into fast, responsive, and usable
            interfaces. Strong in React, JavaScript, and building UI that feels
            polished and intentional.
          </p>

          <div className="hero-meta">
            <span>Location: Netherlands (open to remote)</span>
            <span>Focus: Frontend / React</span>
          </div>

          <div className="hero-buttons">
            <button
              className="btn-primary"
              onClick={() => scrollToSection("projects")}
            >
              View projects
              <FiArrowRight size={16} />
            </button>
            <button
              className="btn-secondary"
              onClick={() => scrollToSection("contact")}
            >
              Contact me
            </button>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-card">
            <div>
              <span className="hero-pill">Portfolio overview</span>
              <div className="hero-stats">
                <div className="hero-stat">
                  <div className="hero-stat-value">3+</div>
                  <div className="hero-stat-label">
                    Production-like projects
                  </div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-value">React</div>
                  <div className="hero-stat-label">Frontend focus</div>
                </div>
              </div>
            </div>

            <div className="hero-divider" />

            <div>
              <div
                style={{
                  fontSize: "0.78rem",
                  color: "#9ca3af",
                  marginBottom: "0.4rem",
                }}
              >
                Core stack
              </div>
              <div className="hero-tech">
                {coreStack.map((tech, index) => (
                  <span key={index} className="hero-tech-pill">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="hero-footer">
              <span>Open to junior / frontend roles</span>
              <span>Let&apos;s build something great.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
