
import { Link } from "react-scroll";
import "./styles/home.css";
import CV from "../assets/chinaza_CV.pdf";
import image from "../assets/image.jpg";

const Home = () => {
  return (
    <section className="home" id="home" aria-labelledby="home-title">
      <div className="text-sec">
        <p className="welcome-label">
          <span className="welcome-indicator" aria-hidden="true" />
          Frontend Developer
        </p>

        <h1 className="home-title" id="home-title">
          Hi, I'm
          <span className="name-highlight">
            Onyejekwe Chinaza Precious.
          </span>
        </h1>

        <p className="home-description">
          I build responsive, user-friendly web experiences with HTML, CSS,
          JavaScript, and React. I'm focused on writing maintainable code,
          improving my problem-solving skills, and creating interfaces that
          work well across devices.
        </p>

        <div className="home-actions">
          <Link
            to="project"
            smooth
            duration={400}
            offset={-90}
            className="home-button home-button-primary"
          >
            View my projects
            <span aria-hidden="true">↗</span>
          </Link>

          <a
            className="home-button home-button-secondary"
            href={CV}
            download
          >
            Download CV
            <span aria-hidden="true">↓</span>
          </a>
        </div>

        <p className="home-note">
          Currently learning, building, and improving.
        </p>
      </div>

      <div className="image-sec">
        <div className="image-frame">
          <img
            src={image}
            alt="Portrait of Onyejekwe Chinaza Precious"
            fetchPriority="high"
          />
        </div>
        <span className="image-accent" aria-hidden="true" />
      </div>
    </section>
  );
};

export default Home;