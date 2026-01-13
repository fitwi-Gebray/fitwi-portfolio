// src/components/Skills.jsx
import { skillGroups } from "../data/skills";

const Skills = () => {
  return (
    <div className="section-inner">
      <div className="section-header">
        <div>
          <div className="section-badge">Toolbox</div>
          <h2 className="section-title">Skills</h2>
        </div>
        <p className="section-description">
          Technologies and concepts I work with regularly, with a focus on
          building modern React-based frontends.
        </p>
      </div>

      <div className="skills-groups">
        {skillGroups.map((group) => (
          <div key={group.title} className="skills-card">
            <div className="skills-title-row">
              <h3 className="skills-title">{group.title}</h3>
            </div>
            <div className="skills-chips">
              {group.items.map((item) => (
                <span key={item} className="skills-chip">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
