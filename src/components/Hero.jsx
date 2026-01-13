// src/components/Hero.jsx
import { FiArrowRight } from "react-icons/fi";

const Hero = () => {
  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="hero">
      <div className="hero-inner">
        <div>
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
            <button className="btn-primary" onClick={scrollToProjects}>
              View projects
              <FiArrowRight size={16} />
            </button>
            <button className="btn-secondary" onClick={scrollToContact}>
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
                <span className="hero-tech-pill">React</span>
                <span className="hero-tech-pill">JavaScript</span>
                <span className="hero-tech-pill">HTML</span>
                <span className="hero-tech-pill">CSS</span>
                <span className="hero-tech-pill">REST APIs</span>
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
