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
            I&apos;m a frontend engineer passionate about building scalable,
            maintainable, and production-ready React applications. I focus on
            modular architecture, reusable components, clean routing, and
            data-driven UI composition. Some highlights of my work: - **Modular
            React Architecture Showcase:** Demonstrates routing, reusable
            components, and scalable folder structure. [Live
            Demo](https://frontend-architecture-showcase-j24qgxvkt-fitwis-projects.vercel.app/)
            - **Admin Dashboard:** Analytics charts, tables, dark mode, built
            with React, Vite, Material UI, and Recharts. - **Travel Planner
            App:** Full-screen UI, destination search, responsive design, built
            with React and Material UI. I enjoy creating applications that
            balance user experience with engineering best practices. Always
            learning new technologies and applying them to real-world problems.
          </p>
          <br />
          <p>
            I like working in environments where I can learn quickly, get clear
            feedback, and collaborate with designers and developers to ship
            products that users actually enjoy using.
          </p>
        </div>

        <div className="about-highlight">
          <p style={{ fontSize: "1.1rem", fontWeight: "500" }}>
            I&apos;m currently seeking a junior or frontend role where I can:
          </p>
          <ul
            style={{
              marginTop: "0.8rem",
              paddingLeft: "1.5rem",
              fontSize: "1rem",
              lineHeight: "1.6",
            }}
          >
            <li>
              Apply and deepen my React skills by working on real-world,
              impactful products
            </li>
            <li>
              Grow as a developer within a supportive and collaborative team
              environment
            </li>
            <li>
              Contribute meaningfully to both UI design and implementation,
              ensuring a polished user experience
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
