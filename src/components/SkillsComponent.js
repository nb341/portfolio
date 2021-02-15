import { FaPython, FaJava, FaPhp, FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaFontAwesome, FaGoogle } from 'react-icons/fa';
import {IoLogoJavascript} from 'react-icons/io';
import {SiCsharp, SiJquery, SiMaterialUi, SiDjango, SiLeaflet, SiPostgresql, SiMysql, SiMariadb, SiOracle, SiMongodb} from 'react-icons/si';
import {AiOutlineConsoleSql} from 'react-icons/ai';
import {HiOutlineDesktopComputer} from 'react-icons/hi';
import {VscJson} from 'react-icons/vsc';
export default function Skills(){
    return(
        <div className="main-skills">
            <h1 className="title">
                    My Skills
                </h1>
        <div className="skills-container">
            <div className="languages">
                <span><FaPython className="icon-color"/> Python</span>    
                <span><FaJava className="icon-color"/> Java</span>
                <span><FaPhp className="icon-color"/> PHP</span>
                <span><SiCsharp className="icon-color"/> C#</span>
                <span><HiOutlineDesktopComputer className="icon-color"/> C/C++</span>
                <span><AiOutlineConsoleSql className="icon-color"/> SQL</span>
                <span><IoLogoJavascript className="icon-color"/> JavaScript</span>  
                <span><FaHtml5 className="icon-color"/> HTML</span>
                <span><FaCss3Alt className="icon-color"/> CSS</span>
            </div>
            <div className="frameworks">
                <span><HiOutlineDesktopComputer className="icon-color"/> Animate.css</span>
                <span><FaBootstrap className="icon-color"/> Bootstrap/Reactstrap</span>
                <span><FaReact className="icon-color"/> ReactJS</span>
                <span><SiJquery className="icon-color"/> jQuery</span>
                <span><SiMaterialUi className="icon-color"/> Material-UI</span>
                <span><FaFontAwesome className="icon-color"/> Font Awesome</span>
                <span><SiDjango className="icon-color"/> Django</span>
            </div>
            <div className="apis">
                <span><FaGoogle className="icon-color"/> Google Maps</span>
                <span><HiOutlineDesktopComputer className="icon-color"/> XML</span>
                <span><VscJson className="icon-color"/> JSON</span>
                <span><HiOutlineDesktopComputer className="icon-color"/> Fetch API</span>
                <span><HiOutlineDesktopComputer className="icon-color"/> AJAX</span>
                <span><SiLeaflet className="icon-color"/> Leaflet JS</span>
            </div>
            <div className="databases">
                <span><SiPostgresql className="icon-color"/> PostgreSQL</span>
                <span><SiMysql className="icon-color"/> MySQL</span>
                <span><SiMariadb className="icon-color"/> MariaDB</span>
                <span><SiOracle className="icon-color"/> OracleSQL</span>
                <span><SiMongodb className="icon-color"/> MongoDB</span>
            </div>
        </div>
        </div>
    )
}

