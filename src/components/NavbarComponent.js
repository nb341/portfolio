import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import BusinessCenterOutlinedIcon from '@material-ui/icons/BusinessCenterOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import CodeIcon from '@material-ui/icons/Code';
import '../styles/navbar.scss';

class Navbar extends Component{

    constructor(props){
        super(props);
        this.state = {
            homeHover: false,
            skillsHover: false,
            portfolioHover: false,
            aboutHover: false,
            contactHover: false,
            gitHover: false,
            linkedinHover: false,
            codeHover: false
        };
        this.homeHover = this.homeHover.bind(this);
        
    }
     
    homeHover(){
        this.setState(this.toggleHomeHover);
    }

    toggleHomeHover(state){
        return{
            homeHover: !state.homeHover,
        }
    }

    render(){
        
        return(
            <div className="navbar">
                
                <nav className="nav-top">
                    <ul className="nav-items">
                        <li className="nav-item">
                            <Link 
                            className="nav-link" 
                            to="/"  
                            
                            >
                              <HomeOutlinedIcon className="nav-icon" style={{fontSize: 40}}/>
                               <span className="nav-icon-hover">Home</span>
                                </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/aboutme">
                                <PersonOutlineOutlinedIcon className="nav-icon" style={{fontSize: 40}}/>
                                <span className="nav-icon-hover">About Me</span>
                                </Link>
                            
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/skills">
                                <SettingsOutlinedIcon className="nav-icon" style={{fontSize: 40}}/>
                                <span className="nav-icon-hover">Skills</span>
                                </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/portfolio">
                                <BusinessCenterOutlinedIcon className="nav-icon" style={{fontSize: 40}}/>
                                <span className="nav-icon-hover">Portfolio</span>
                                </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact"><EmailOutlinedIcon className="nav-icon" style={{fontSize: 40}}/>
                            <span className="nav-icon-hover">Contact Me</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
                
                <nav className="nav-bottom">
                    <ul className="nav-items">
                        <li className="nav-item">
                            <a 
                            rel="noopener noreferrer" 
                            className="nav-link" 
                            href="https://github.com/nb341/" 
                            target="_blank"><GitHubIcon
                            className="nav-icon"
                            style={{fontSize: 40}}/>
                            <span className="nav-icon-hover">Github</span>
                            </a>
                        </li>
                        <li className="nav-item">
                        <a 
                        rel="noopener noreferrer" 
                        className="nav-link" 
                        href="https://www.linkedin.com/in/narindra-balkissoon/" 
                        target="_blank"
                        >
                            <LinkedInIcon className="nav-icon" style={{fontSize: 40}}/>
                            <span className="nav-icon-hover">LinkedIn</span>
                        </a>
                        </li>
                        <li className="nav-item">
                            <a
                            rel="noopener noreferrer" 
                            className="nav-link" 
                            target="_blank" 
                            href="https://codepen.io/nb341/"
                            >
                                <CodeIcon className="nav-icon" style={{fontSize: 40}}/>
                                <span className="nav-icon-hover">CodePen</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                
            </div>
            
        );
    }
}

export default Navbar;