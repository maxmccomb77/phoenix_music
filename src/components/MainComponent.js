import React, { Component } from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import Header from './HeaderComponent';
import HomePage from './HomeComponent';
import AboutMe from './AboutMeComponent';
import MyMusic from './MyMusicComponent';


class Main extends Component {

    render(){
        return(
            <div>
            <Header/>
            <Switch>
                <Route path="/home" component={HomePage}/>
                <Route path="/aboutme" component={AboutMe}/>
                <Route path="/mymusic" component={MyMusic}/>
                <Redirect to="/home"/>
            </Switch>
            </div>
        );
    }



}

export default Main;

