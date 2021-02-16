import {FaLinkedin} from 'react-icons/fa';
import {SiMicrosoftoutlook} from 'react-icons/si';
export default function ContactMe(){
    return(
        <div className="contact-container">
           <h1 className="title">Contact Me</h1>
           <div className="contact-section">
            <span><SiMicrosoftoutlook className="icon-color"/> narindra_balkissoon@outlook.com</span>
            <span><FaLinkedin className="icon-color"/> Go to my <a 
            href="https://www.linkedin.com/in/narindra-balkissoon/"
            target="_blank"
            rel="noopener noreferrer"
            >LinkedIn</a> to contact me</span>
           </div>
        </div>
    )
}