import React, {Component} from 'react';
import Map from "./MapComponent";
import pro from "../turing_profile.jpg";
//import Map from './MapComponent';
class AboutMe extends Component{
    
    componentWillMount(){
        document.title="Narindra Balkissoon: About Me";
    }
    render(){
        
        return(
           
            <div class="about-me">
                
                <h1 className="title">
                    About Me
                </h1>
                <img id="pro" src={pro} alt="developer" />
                <p class="about-text">
                    I get more compilation errors coding in React than I ever did in C. 😐😐😐😐
                    <br/>How do I keep count you may ask? I count the number of bruises on my ego.
                    <br/> Avid Real Madrid supporter, HALA MADRID!!!!!!!!!!!!!!!!<br/> 
                     Big Blue Fan, Go Giants. Probably another losing season on the horizon 😔😔😔😔.
                     <br/>Seeking freelance full-stack opportunities in small to medium size projects or a full time position.
                </p>
                
                    <div style={{margin: 'auto'}} id="mapid">
                        <h3 className="title">I live somewhere on this map</h3>
                        <Map/>
                    </div>
                
            </div>
        );
    }
}

export default AboutMe;
        
   