import image from "../assets/image.jpg";
import "./styles/Portfolio.css";

const About = () => {
  return (
    <section className="about-sec" id="about" aria-labelledby="about-title">
      <div className="about-visual">
        <div className="about-image-frame">
          <img
            src={image}
            alt="Portrait of Onyejekwe Chinaza Precious"
            loading="lazy"
          />
        </div>

        <span className="about-image-accent" aria-hidden="true" />
      </div>

      <div className="text-section">
        <p className="about-eyebrow">A little about me</p>

        <h2 id="about-title">
          Building for the web, with <span className="color">purpose.</span>
        </h2>

        <p className="about-description">
          I'm a frontend developer and Information Technology student who enjoys
          turning ideas into responsive, user-friendly web experiences. I work
          with HTML, CSS, JavaScript, TypeScript, React, and Tailwind CSS, and
          use Git and GitHub to manage my projects and track my progress.
        </p>

        <p className="about-description">
          Through hands-on projects, I'm strengthening my understanding of
          component-based development, interface design, and writing
          maintainable code. I'm focused on growing as a developer, improving my
          problem-solving skills, and building useful experiences that work well
          across devices.
        </p>

        <ul className="about-list" aria-label="My background">
          <li className="about-card">
            <span className="about-card-icon">01</span>
            <div>
              <h3>Education</h3>
              <p>Information Technology student</p>
            </div>
          </li>

          <li className="about-card">
            <span className="about-card-icon">02</span>
            <div>
              <h3>Experience</h3>
              <p>Practical frontend development</p>
            </div>
          </li>

          <li className="about-card">
            <span className="about-card-icon">03</span>
            <div>
              <h3>Projects</h3>
              <p>Building responsive web applications</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
