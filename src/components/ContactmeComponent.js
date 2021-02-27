import {FaLinkedin} from 'react-icons/fa';
import {SiMicrosoftoutlook} from 'react-icons/si';

export default function ContactMe(){
    return(
        <div className="container">
            <h1 className="title">Contact Me</h1>
        <div className="contact">
            
            <div className="contact-info">
                <span ><SiMicrosoftoutlook className="icon-color"/> narindra_balkissoon@outlook.com</span>
                <span ><FaLinkedin className="icon-color"/> <a rel="noreferrer" href="https://www.linkedin.com/in/narindra-balkissoon/">LinkedIn</a></span>
            </div>
                   
        </div>
        </div>
    )
}