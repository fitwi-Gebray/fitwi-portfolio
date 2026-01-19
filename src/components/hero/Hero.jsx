import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { heroData } from "../../data/heroData";
import { scrollToSection } from "../../utils/scrollToSection";

import Button from "../ui/Button";
import Pill from "../ui/Pill";
import Stat from "../ui/Stat";

const Hero = () => {
  const { availabilityText, heading, subtitle, meta, coreStack, stats } =
    heroData;

  return (
    <section className="hero">
      <div className="hero-inner">
        {/* LEFT */}
        <div className="hero-left">
          <Pill>
            <span className="hero-dot" />
            {availabilityText}
          </Pill>

          <h1 className="hero-heading">
            {heading.normal}{" "}
            <span className="hero-gradient">{heading.highlight}</span>{" "}
            {heading.suffix}
          </h1>

          <p className="hero-subtitle">{subtitle}</p>

          <div className="hero-meta">
            {meta.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

          <div className="hero-buttons">
            <Button onClick={() => scrollToSection("projects")}>
              View projects <FiArrowRight size={16} />
            </Button>

            <Button
              variant="secondary"
              onClick={() => scrollToSection("contact")}
            >
              Contact me
            </Button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hero-right">
          <div className="hero-card">
            <div>
              <Pill>Portfolio overview</Pill>

              <div className="hero-stats">
                {stats.map((stat) => (
                  <Stat
                    key={stat.label}
                    value={stat.value}
                    label={stat.label}
                  />
                ))}
              </div>
            </div>

            <div className="hero-divider" />

            <div>
              <div className="hero-tech">
                {coreStack.map((tech) => (
                  <span key={tech} className="hero-tech-pill">
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
