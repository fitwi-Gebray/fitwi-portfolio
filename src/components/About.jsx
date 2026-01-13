// src/components/About.jsx
const About = () => {
  return (
    <div className="section-inner">
      <div className="section-header">
        <div>
          <div className="section-badge">Background</div>
          <h2 className="section-title">About me</h2>
        </div>
      </div>

      <div className="about-grid">
        <div className="about-text">
          <p>
            I&apos;m a frontend developer who enjoys turning ideas into clean,
            functional web interfaces. My main focus is React and modern
            JavaScript, and I care a lot about structure, clarity, and
            usability.
          </p>
          <br />
          <p>
            I like working in environments where I can learn quickly, get clear
            feedback, and collaborate with designers and developers to ship
            products that users actually enjoy using.
          </p>
        </div>

        <div className="about-highlight">
          <p>
            I&apos;m currently looking for a junior or frontend role where I
            can:
          </p>
          <ul style={{ marginTop: "0.6rem", paddingLeft: "1.2rem" }}>
            <li>Work with React on real-world products</li>
            <li>Grow my skills with a supportive team</li>
            <li>Contribute to both UI and implementation</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
