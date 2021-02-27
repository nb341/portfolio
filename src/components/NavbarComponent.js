import { Link} from 'react-router-dom';
import {FaHome, FaBriefcase} from 'react-icons/fa';
import {AiFillSetting, AiFillGithub, AiFillLinkedin, AiFillCodepenCircle} from 'react-icons/ai';
import {RiAccountCircleFill} from 'react-icons/ri';
import {GrMail} from 'react-icons/gr';
import React, { useEffect, useState } from "react";
function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }
  
  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    );
  
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    return windowDimensions;
  }

  



const iconSize = {fontSize: 30};

function Navbar(){
   const { width } = useWindowDimensions();
   const [navSize, setNavSize] = useState({maxWidth: 40});

   useEffect(()=>{
        if(width>780){
            setNavSize({maxWidth: 30})
        }
    }, [width, navSize]);
  
    return(
        <div className="navbar" style={{maxWidth:navSize}}>
            <ul>
                <li className="nav-item"><Link className="nav-link" to="/">
                    <FaHome style={iconSize} className="nav-icon"/> <span className="nav-icon-hover">Home</span></Link></li>
                <li className="nav-item"><Link className="nav-link" to="/aboutme">
                    <RiAccountCircleFill style={iconSize} className="nav-icon"/> <span className="nav-icon-hover">About Me</span></Link></li>
                <li className="nav-item"><Link className="nav-link" to="/skills">
                    <AiFillSetting style={iconSize} className="nav-icon"/> <span className="nav-icon-hover">Skills</span></Link></li>
                <li className="nav-item"><Link className="nav-link" to="/portfolio">
                    <FaBriefcase style={iconSize} className="nav-icon"/> <span className="nav-icon-hover">Portfolio</span></Link></li>
                <li className="nav-item"><Link className="nav-link" to="/contactme">
                    <GrMail style={iconSize} className="nav-icon"/> <span className="nav-icon-hover">Contact Me</span></Link></li>
            </ul>
            <ul>
                <li className="nav-item">
                    <a className="nav-link" target="_blank" rel="noreferrer" href="https://github.com/nb341/">
                        <AiFillGithub style={iconSize} className="nav-icon"/> <span className="nav-icon-hover">Github</span></a></li>
                <li className="nav-item"><a className="nav-link" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/narindra-balkissoon/">
                    <AiFillLinkedin style={iconSize} className="nav-icon"/> <span className="nav-icon-hover">LinkedIn</span></a></li>
                <li className="nav-item">
                    <a rel="noreferrer" className="nav-link" target="_blank" href="https://codepen.io/nb341/">
                    <AiFillCodepenCircle style={iconSize} className="nav-icon"/> <span className="nav-icon-hover">CodePen</span></a></li>
            </ul>
            
        </div>
    );
}

export default Navbar;