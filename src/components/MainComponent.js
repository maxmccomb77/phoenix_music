import React, { Component } from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import Header from './HeaderComponent';
import HomePage from './HomeComponent';
import AboutMe from './AboutMeComponent';


class Main extends Component {

    render(){
        return(
            <div>
            <Header/>
            <Switch>
                <Route path="/home" component={HomePage}/>
                <Route path="/aboutme" component={AboutMe}/>
                <Redirect to="/home"/>
            </Switch>
            </div>
        );
    }



}

export default Main;

