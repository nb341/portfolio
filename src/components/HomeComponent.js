import React, {Component} from 'react';
import Cube from './CubeComponent';




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
                    <Cube />
                    <p>A work in progress</p>
                    <p>Stay tuned on this episode of <span className="status-cube">Will He Ever Finish His Portfolio Site</span>to see if the rotating
                    skills cube is ever finised.
                    </p>
                </div>
                
            </div>
        );
    }
}

export default Home;