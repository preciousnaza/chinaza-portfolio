import "./home.css"
import CV from "../assets/chinaza_CV.pdf"
import image from "../assets/image.jpg"

const Home = () => {
  return (
    <>
      <div className="home" id="home">
       <div className="text-sec">
         <div className="welcome-btn">
          <button>Welcome to my Portfolio</button>
        </div>
        <div className="title">
          <h1>Hi! I'm Onyejekwe Chinaza Precious</h1>
        </div>
        <div className="description">
            <p>I am a front-end developer and aspiring AI engineer who builds responsive, user-friendly web applications using HTML, CSS, JavaScript, and React. I have experience working on projects like a resume builder and a collaborative movie website, demonstrating strong problem-solving and teamwork skills. I am passionate about creating and improving with technology and currently focused on growing my expertise in frontend development and artificial intelligence</p>
        </div>

        <div className="cv-btn">
          <a className="download-cv" href={CV} download>
          <button>Download CV</button>
          </a>
          </div>
       </div>
       <div className="image-sec">
          <img src={image} alt="my image" />
           <span className="background">
              <span className="inner-text"></span>
           </span>
       </div>
      </div>
    </>
  )
}

export default Home