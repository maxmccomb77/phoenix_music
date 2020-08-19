import React, { Component } from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import AboutMe from './AboutMeComponent';
import Events from './EventsComponent';
import SupportMe from './SupportMeComponent';


class Base extends Component {

    render(){
        return(
            <Switch>
                <Route path="/aboutme" component={AboutMe}/>
                <Route path="/events" component={Events}/>
                <Route path="/supportme" component={SupportMe}/>
                <Redirect to="/home"/>
            </Switch>
        );
    }



}

export default Base;