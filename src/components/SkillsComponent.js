import { FaPython, FaJava, FaPhp, FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaFontAwesome, FaGoogle } from 'react-icons/fa';
import {IoLogoJavascript} from 'react-icons/io';
import {SiCsharp, SiJquery, SiMaterialUi, SiDjango, SiLeaflet, SiPostgresql, SiMysql, SiMariadb, SiOracle, SiMongodb} from 'react-icons/si';
import {AiOutlineConsoleSql} from 'react-icons/ai';
import {HiOutlineDesktopComputer} from 'react-icons/hi';
import {VscJson} from 'react-icons/vsc';

export default function Skills(){
    return(
        <div className="container">
        <div className="skills">
            <h1 className="title">My Skills</h1>
            <div className="skillslist">
                <ul>
                    <li><FaPython className="icon-color"/> Python</li>
                    <li><FaJava className="icon-color"/> Java</li>
                    <li><FaPhp className="icon-color"/> PHP</li>
                    <li><SiCsharp className="icon-color"/> C#</li>
                    <li><HiOutlineDesktopComputer className="icon-color"/> C/C++</li>
                    <li><AiOutlineConsoleSql className="icon-color"/> SQL</li>
                    <li><IoLogoJavascript className="icon-color"/> JavaScript</li>
                    <li><FaHtml5 className="icon-color"/> HTML</li>
                    <li><FaCss3Alt className="icon-color"/> CSS</li>
                </ul>
                <ul>
                    <li><HiOutlineDesktopComputer className="icon-color"/> Animate.css</li>
                    <li><FaBootstrap className="icon-color"/> Bootstrap/Reactstrap</li>
                    <li><FaReact className="icon-color"/> ReactJS</li>
                    <li><SiJquery className="icon-color"/> Query</li>
                    <li><SiMaterialUi className="icon-color"/> Material-UI</li>
                    <li><FaFontAwesome className="icon-color"/> Font Awesome</li>
                    <li><SiDjango className="icon-color"/> Django</li>
                </ul>
                <ul>
                    <li><FaGoogle className="icon-color"/> Google Maps</li>
                    <li><HiOutlineDesktopComputer className="icon-color"/> XML</li>
                    <li><VscJson className="icon-color"/> Fetch API</li>
                    <li><HiOutlineDesktopComputer className="icon-color"/> AJAX</li>
                    <li><SiLeaflet className="icon-color"/> LeafletJS</li>
                </ul>
                <ul>
                    <li><SiPostgresql className="icon-color"/> PostgreSQL</li>
                    <li><SiMysql className="icon-color"/> MariaDB</li>
                    <li><SiOracle className="icon-color"/> OracleSQL</li>
                    <li><SiMysql className="icon-color"/> MySQL</li>
                    <li><SiMariadb className="icon-color"/> MariaDB</li>
                    <li><SiMongodb className="icon-color"/> MongoDB</li>
                </ul>
            </div>
        </div>
        </div>
    )
}