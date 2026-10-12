
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGithub,
} from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import "./styles/Portfolio.css";

const skillGroups = [
  {
    icon: <FaReact />,
    title: "React",
    level: "Comfortable",
    description: "Building reusable UI components",
    color: "#61DBFB",
  },
  {
    icon: <IoLogoJavascript />,
    title: "JavaScript",
    level: "Comfortable",
    description: "Working with logic and interactivity",
    color: "#D4B900",
  },
  {
    icon: <SiTailwindcss />,
    title: "Tailwind CSS",
    level: "Comfortable",
    description: "Creating responsive interfaces",
    color: "#38BDF8",
  },
  {
    icon: <FaHtml5 />,
    title: "HTML5",
    level: "Proficient",
    description: "Writing semantic page structure",
    color: "#E44D26",
  },
  {
    icon: <FaGithub />,
    title: "Git & GitHub",
    level: "Working knowledge",
    description: "Version control and project tracking",
    color: "#8B918B",
  },
  {
    icon: <SiTypescript />,
    title: "TypeScript",
    level: "Developing",
    description: "Adding types to React applications",
    color: "#3178C6",
  },
  {
    icon: <RiNextjsFill />,
    title: "Next.js",
    level: "Developing",
    description: "Learning modern React frameworks",
    color: "var(--text-color)",
  },
  {
    icon: <FaCss3Alt />,
    title: "CSS3",
    level: "Proficient",
    description: "Styling layouts and responsive designs",
    color: "#2683CF",
  },
];

const Skill = () => {
  return (
    <section className="skill-sec" id="skill" aria-labelledby="skill-title">
      <div className="skill-header">
        <span className="section-label">Technical Skills</span>
        <h2 id="skill-title">
          The tools I use to bring <span className="color">ideas to life.</span>
        </h2>
        <p>
          My frontend toolkit helps me build responsive interfaces, create
          reusable components, and turn designs into functional web experiences.
          I'm continually improving through hands-on projects and practice.
        </p>
      </div>

      <div className="skill-grid">
        {skillGroups.map((skill, index) => (
          <article className="skill-card" key={skill.title}>
            <div className="skill-card-top">
              <span
                className="skill-icon"
                style={{ "--skill-icon-color": skill.color } as React.CSSProperties}
                aria-hidden="true"
              >
                {skill.icon}
              </span>

              <span className="skill-index">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <div className="skill-card-content">
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </div>

            <div className="skill-card-footer">
              <span className="skill-level-dot" />
              <span>{skill.level}</span>
            </div>
          </article>
        ))}
      </div>

      <div className="skill-note">
        <span className="skill-note-mark" aria-hidden="true">+</span>
        <div>
          <h3>Always learning</h3>
          <p>
            Strengthening my fundamentals, improving how I debug, and exploring
            better ways to build maintainable web applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skill;