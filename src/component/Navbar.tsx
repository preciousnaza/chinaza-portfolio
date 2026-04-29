import {useState, useEffect,useRef} from "react"
import {Link} from "react-scroll"
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSun, FaMoon, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const navbar = () => {

  const [theme,setTheme] = useState('dark');
  const [menuopen, setmenuopen] = useState(false);
  const menuclose = useRef<HTMLSpanElement>(null)

  const toggleMenu = (e:any)=>{
    e.stopPropagation();
    setmenuopen(prev => !prev)
  }

  useEffect(()=>{
      const handleClickOutside = (e:any)=>{
    if(menuopen && menuclose.current && !menuclose.current.contains(e.target)){
      setmenuopen(false)
    }
  }

  document.addEventListener('click',handleClickOutside)
  return ()=>{
  document.removeEventListener('click',handleClickOutside)
  }
  },[menuopen])


  const handleThemeController = (e:any)=> {
    const newTheme = e.target.checked ? "dark":"light"
    setTheme(newTheme)
    document.documentElement.setAttribute("data-theme", newTheme)
  }

  useEffect( ()=> {
    const HandleResize = ()=>{
      if(window.innerWidth >= 651){
        setmenuopen(menuopen)
      }
    };

      window.addEventListener('resize', HandleResize)

      return ()=>{
      window.removeEventListener('resize',HandleResize)
      }

    
  }, [])


  return (
    <>

        <div className="mb-navbar">
          <div className="nav-bg">
            <div className="m-nav">
            <span>
              <h1 className="text-xl">Portfolio</h1>
            </span>

            <span className="theme-icon ">
              <label className="swap swap-rotate">
               
                <input type="checkbox" className="theme-controller" value="synthwave" checked={theme === 'dark'} onChange={handleThemeController}/>

            
                <FaSun className="swap-off h-5 w-5 fill-current"/>

                
                <FaMoon className="swap-on h-5 w-5 fill-current"/>


              </label>
            </span>

            <span className="theme-icon mobile-s  hambuger" onClick={toggleMenu}>
              {menuopen ? <FaTimes size={20}/> : <GiHamburgerMenu size={20}/>}
            </span>

          </div>

            <span ref={menuclose} className={`nav-links ${menuopen ? "mobile" : "desktop"}`}>
              <ul onClick={()=> setmenuopen(false)}>
                
                  <Link to="home" smooth={true} duration={300} spy={true} activeClass="active" >Home</Link>
                
               
                  <Link to="about" smooth={true} duration={300} spy={true} activeClass="active" >About</Link >
              
               
                  <Link  to="skill" smooth={true} duration={300} spy={true} activeClass="active" >Skill</Link >
              
               
                  <Link  to="project" smooth={true} duration={300} spy={true} activeClass="active" >Projects</Link >
              
               
                  <Link  to="contact" smooth={true} duration={300} spy={true} activeClass="active" >Contact</Link >
              
                  <Link  className="hire-me" to="contact" smooth={true} duration={300} spy={true} activeClass="active" >Hire me</Link >
              
              </ul>
            </span>

          </div>
        </div>
      
        

    </>
  );
};

export default navbar;
