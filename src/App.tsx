import "./index.css";
import "./component/Portfolio.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import Skill from "./component/Skill";
import Project from "./component/Project";
import Contact from "./component/Contact";
// import ScrollToTop from "./component/ScrollToTop";

const App = () => {
  return (
    <>
      <div className="portfolio">
        <Navbar />
        <Home />
        <About />
        <Skill />
        <Project />
        <Contact />
      </div>
    </>
  );
};

export default App;
