import React, {Component} from 'react';
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
                <p class="about-text">
                    I get more compilation errors coding in React than I ever did in C. 😐😐😐😐
                    <br/>How do I keep count you may ask? I count the number of bruises on my ego.
                    <br/> Avid Real Madrid supporter, HALA MADRID!!!!!!!!!!!!!!!!<br/> 
                     Big Blue Fan, Go Giants. Probably another losing season on the horizon 😔😔😔😔.
                </p>
            </div>
        );
    }
}

export default AboutMe;
        
   