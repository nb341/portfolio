import React from "react";
import Navbar from './NavbarComponent';
import AboutMe from './AboutmeComponent';
import ContactMe from './ContactmeComponent';
import Portfolio from './PortfolioComponent';
import Skills from './SkillsComponent';
import Home from './HomeComponent';
import Player from './PlayerComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
export default function Main(){
    return(
    <div id="page-wrapper">
        <Player/>
        <Navbar/>
        <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/aboutme" component={AboutMe}/>
                <Route exact path="/contactme" component={ContactMe}/>
                <Route exact path="/skills" component={Skills}/>
                <Route exact path="/portfolio" component={Portfolio}/>
                <Redirect to="/home"/>
        </Switch>
    </div>
    );
}