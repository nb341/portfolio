import Home from './HomeComponent';
import Navbar from './NavbarComponent';
import Portfolio from './PortfolioComponent';
import AboutMe from './AboutmeComponent';
import ContactMe from './ContactmeComponent';
import Skills from './SkillsComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

function Main(){
    return(
        <div className="container" >
            
            <Navbar />
            
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/aboutme" component={AboutMe}/>
                <Route exact path="/contact" component={ContactMe}/>
                <Route exact path="/skills" component={Skills}/>
                <Route exact path="/portfolio" component={Portfolio}/>
                <Redirect to="/home"/>
            </Switch>
            
            
            
        </div>
        
        
    )
}

export default Main;