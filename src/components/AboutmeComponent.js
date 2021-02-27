import Map from './MapComponent';

export default function AboutMe(){
    return(
        <div className="container">
        <div className="aboutme">
            <h1 className="title">About Me</h1>
            <img id="pro" height={180} width={180} src='../assets/images/turing_profile.jpg' alt="developer" />
            <p className="about-text">I get more compilation errors coding in React than I ever did in C. 😐😐😐😐
                How do I keep count you may ask? I count the number of bruises on my ego.
                Avid Real Madrid supporter, HALA MADRID!!!!!!!!!!!!!!!!
                Big Blue Fan, Go Giants. Probably another losing season on the horizon 😔😔😔😔.
                Seeking freelance full-stack opportunities in small to medium size projects or a full time position.
            </p>
            <div id="map-container">
                <h3 id="i-live" className="title">I Live Somewhere on This Map</h3>
                <Map />
            </div>
        </div>
        </div>
    )
}
        
   