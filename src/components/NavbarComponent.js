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
class Navbar extends Component{

    render(){
        
        return(
            <div activeClassName="navbar">
                
                <nav className="nav-top">
                    <ul className="nav-items">
                        <li className="nav-item">
                            <Link className="nav-link" to="/"><HomeOutlinedIcon style={{fontSize: 40}}/></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/aboutme"><PersonOutlineOutlinedIcon style={{fontSize: 40}}/></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/skills"><SettingsOutlinedIcon style={{fontSize: 40}}/></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/portfolio"><BusinessCenterOutlinedIcon style={{fontSize: 40}}/></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact"><EmailOutlinedIcon style={{fontSize: 40}}/></Link>
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
                            style={{fontSize: 40}}/>
                            </a>
                        </li>
                        <li className="nav-item">
                        <a 
                        rel="noopener noreferrer" 
                        className="nav-link" 
                        href="https://www.linkedin.com/in/narindra-balkissoon/" 
                        target="_blank"
                        >
                            <LinkedInIcon style={{fontSize: 40}}/>
                        </a>
                        </li>
                        <li className="nav-item">
                            <a
                            rel="noopener noreferrer" 
                            className="nav-link" 
                            target="_blank" 
                            href="https://codepen.io/nb341/"
                            >
                                <CodeIcon style={{fontSize: 40}}/>
                            </a>
                        </li>
                    </ul>
                </nav>
                
            </div>
            
        );
    }
}

export default Navbar;