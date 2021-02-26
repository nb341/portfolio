import React, {Component} from 'react';
import Canvas from './CanvasComponent';




class Home extends Component{
    
    render(){
        document.title = "Narindra Balkissoon:Home"
        return(
            <div className="home">
                <div className="home-intro">
                    <p>Hi,<br/>
                    I'm, Narindra,<br/>
                    A full-stack developer.</p>
                </div>

                <div className="home-cube">
                    <Canvas/>
                </div>
                
            </div>
        );
    }
}

export default Home;