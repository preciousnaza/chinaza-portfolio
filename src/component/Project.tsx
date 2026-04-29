const Project = () => {
  const projects = [
    {
      title: "Resume Builder App",
      description: "A sleek and intuitive interface for creating professional resumes with ease, featuring customizable templates and real-time previews.",
      tags: ["React", "Tailwind CSS", "Responsive"],
      link: "https://resume-builder-sable-delta.vercel.app/",
    },
    {
      title: "Easibuy E-commerce Website",
      description: "Developeda responsive e-commerce platform with product listing, cart functionality, and dynamic price updates using JavaScript.",
      tags: ["javascript", "html5", "css3"],
      link: "https://easibuy-ecommere-n9sx.vercel.app/",
    },
    {
      title: "Quiz App",
      description: "Built an interactive quiz app with dynamic questions, score tracking, and restart functionality.",
      tags: ["javascript", "html5", "css3"],
      link: "https://quiz-app-mu-bice.vercel.app/",
    },
    {
      title: "Weather App",
      description: "Created a weather app that fetches real-time data from an API, allowing users to search for weather information by city.",
      tags: ["javascript", "html5", "css3","API"],
      link: "https://weather-app-one-phi-65.vercel.app/",
    },
    {
      title: "Todo List App",
      description: "Designed a simple and effective todo list app with features to add, edit, and delete tasks, along with a clean user interface.",
      tags: ["React","css"],
      link: "https://todo-react-coral-nine.vercel.app/",
    }
  ];

  return (
    <section className="project-sec" id="project">
      <div className="section-intro">
        <span className="section-label">Projects</span>
        <h2>My latest work as a web developer</h2>
        <p className="color-wh">
          These projects reflect how I turn ideas into clean, responsive, and memorable web experiences.
          Each one is designed with strong visuals, practical interactions, and polished frontend execution.
        </p>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-card-header">
              <h3>{project.title}</h3>
            </div>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              View Project
            </a>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Project
