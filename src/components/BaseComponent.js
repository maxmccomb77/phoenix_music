import React, { Component } from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import AboutMe from './AboutMeComponent';
import MyMusic from './MyMusicComponent';
import Events from './EventsComponent';


class Base extends Component {

    render(){
        return(
            <Switch>
                <Route path="/aboutme" component={AboutMe}/>
                <Route path="/mymusic" component={MyMusic}/>
                <Route path="/events" component={Events}/>
                <Redirect to="/home"/>
            </Switch>
        );
    }



}

export default Base;