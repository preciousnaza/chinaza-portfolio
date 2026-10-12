
import "./styles/Portfolio.css";

const projects = [
  {
    title: "Resume Builder",
    category: "Web Application",
    description:
      "A resume-building application with customizable templates and real-time previews to help users create professional-looking resumes.",
    tags: ["React", "Tailwind CSS"],
    link: "https://resume-builder-sable-delta.vercel.app/",
  },
  {
    title: "Easibuy",
    category: "E-commerce",
    description:
      "A responsive online shopping interface featuring product listings, cart interactions, and dynamic price updates.",
    tags: ["JavaScript", "HTML5", "CSS3"],
    link: "https://easibuy-ecommere-n9sx.vercel.app/",
  },
  {
    title: "Quiz App",
    category: "Interactive Application",
    description:
      "An interactive quiz experience with dynamic questions, score tracking, and the ability to restart and play again.",
    tags: ["JavaScript", "HTML5", "CSS3"],
    link: "https://quiz-app-mu-bice.vercel.app/",
  },
  {
    title: "Weather App",
    category: "API Integration",
    description:
      "A weather application that retrieves live weather information from an API and lets users search by city.",
    tags: ["JavaScript", "CSS3", "REST API"],
    link: "https://weather-app-one-phi-65.vercel.app/",
  },
  {
    title: "Todo List",
    category: "Web Application",
    description:
      "A task management interface for adding, editing, and deleting tasks through a simple, responsive UI.",
    tags: ["React", "CSS"],
    link: "https://todo-react-coral-nine.vercel.app/",
  },
  {
    title: "Personal Portfolio",
    category: "Portfolio Website",
    description:
      "A personal website showcasing my frontend skills, selected projects, and development journey.",
    tags: ["React", "Tailwind CSS"],
    link: "https://chinaza-portfolio-3wqk.vercel.app/",
  },
  {
    title: "Admin Dashboard",
    category: "Dashboard",
    description:
      "An admin dashboard interface focused on organizing information, presenting data, and adapting to different screen sizes.",
    tags: ["Next.js", "Tailwind CSS"],
    link: "https://admin-dashboard-next-delta.vercel.app/",
  },
  {
    title: "E-commerce Website",
    category: "E-commerce",
    description:
      "A responsive shopping interface built with Next.js and Tailwind CSS, featuring product listings and cart-focused UI.",
    tags: ["Next.js", "Tailwind CSS"],
    link: "https://ecommerce-ptniphoor-chinazas-projects-81709bda.vercel.app/",
  },
];

const Project = () => {
  return (
    <section className="project-sec" id="project" aria-labelledby="project-title">
      <div className="section-intro">
        <span className="section-label">Selected Work</span>

        <h2 id="project-title">
          Projects that turn ideas into <span className="color">reality.</span>
        </h2>

        <p>
          A collection of web applications I've built while developing my
          frontend skills, exploring new technologies, and solving practical
          interface challenges.
        </p>
      </div>

      <div className="project-grid">
        {projects.map((project, index) => (
          <article className="project-card" key={project.title}>
            <div className="project-card-top">
              <span className="project-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="project-category">{project.category}</span>
            </div>

            <div className="project-card-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>

            <div className="project-card-bottom">
              <div className="project-tags" aria-label="Technologies used">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                aria-label={`View ${project.title} project`}
              >
                View project <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Project;