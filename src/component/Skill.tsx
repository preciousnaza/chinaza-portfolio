import { FaHtml5, FaCss3Alt, FaReact, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";

const Skill = () => {
  const skillGroups = [
    {
      image: <FaReact size={40} color="#61DBFB" />,
      title: "React",
      level: '90% ',
      width: '13rem',
    },
     {
      image: <IoLogoJavascript size={40} color="#F7DF1E" />,
      title: "Javascript",
      level: '95% ',
      width: '14rem',
    },
    {
      image: <FaCss3Alt size={40} color="#2683CF" />,
      title: "Tailwind CSS",
      level: '85% ',
      width: '10rem',
    },
    {
      image: <FaHtml5 size={40} color="#E44D26" />,
      title: "HTML5",
      level: '100% ',
      width: '14.8rem',
    },
     {
      image: <FaGithub size={40} color="#333" />,
      title: "Github",
      level: '85% ',
      width: '13rem',
    },
     {
      image: <SiTypescript size={40} color="#3178C6" />,
      title: "Typescript",
      level: '70% ',
      width: '10rem',
    },
  ];

  return (
    <section className="skill-sec" id="skill">
      <div className="skill-header">
        <span className="section-label">My Skills</span>
        <h2>I build confident, modern web experiences that feel uniquely polished.</h2>
        <p>
          I bring a blend of creative design and technical discipline to every project.
          From React-powered interfaces to responsive, high-performance layouts,
          I create web applications that look sharp and work smoothly.
        </p>
      </div>

      <div className="skill-grid">
        {skillGroups.map((group) => (
          <article className="skill-card" key={group.title}>
            <div className="skill-card-top">
              <span>{group.image}</span>
              <h3>{group.title}</h3>
            </div>
            <div className="description">
              <ul>
                <li className="name">Skill Level</li>
                <li className="percent">{group.level}</li>
              </ul>
              <span className="Progress-bar">
                <span className="progress" style={{width: group.width}}></span>
              </span>
            </div>
          </article>
        ))}
      </div>

      <div className="skill-meta">
        <div className="skill-meta-card">
          <span>95%</span>
          <p>UI craftsmanship powered by React</p>
        </div>
        <div className="skill-meta-card">
          <span>90%</span>
          <p>Responsive designs that adapt beautifully</p>
        </div>
        <div className="skill-meta-card">
          <span>85%</span>
          <p>Performance polish and seamless interactions</p>
        </div>
      </div>
    </section>
  );
};

export default Skill