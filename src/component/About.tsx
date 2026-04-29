import image from "../assets/image.jpg";
import "./Portfolio.css";

const About = () => {
  return (
    <>
        <div className="about-sec" id="about">
            <div className="image-sec">
          <img src={image} alt="my image" />
           <span className="background">
              <span className="inner-text"></span>
           </span>
       </div>

      <div className="text-section">
          <h1 className="color">About me</h1>
          <p>I am a front-end developer and aspiring AI engineer passionate about building responsive, user-friendly web applications that solve real problems. I have hands-on experience creating projects such as a resume builder, eCommerce app, and weather application using HTML, CSS, JavaScript, Tailwind CSS, TypeScript, and React. I use Git and GitHub confidently for version control and collaboration. As a fast learner with strong teamwork, communication, and attention to detail, I focus on delivering clean, efficient, and scalable solutions. Currently in my 300 level studying Information Technology, I am eager to bring value, growth, and innovation to a forward-thinking company while continuing to expand my skills in modern web development and AI.</p>
          <ul className="about-list">
            <li>
              <span className="color">5+</span>
              <p>Education</p>
            </li>
             <li>
              <span className="color">10+</span>
              <p>Experience</p>
            </li>
             <li>
              <span className="color">20+</span>
              <p>project completed</p>
            </li>
            
          </ul>
      </div>
        </div>
    </>
  )
}

export default About