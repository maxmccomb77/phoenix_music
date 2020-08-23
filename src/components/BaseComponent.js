import React, { Component } from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import AboutMe from './AboutMeComponent';
import Events from './EventsComponent';
import SupportMe from './SupportMeComponent';
import LeftBase from './LeftBaseComponent';
import {
    Row,
    Col,
    Container,
    Button
} from "react-bootstrap";
import '../styling/base_styling.css';

class Base extends Component {

    render(){
        return(
            <Container fluid>
                <Row>
                    <div className="container-left">
                        <LeftBase/>
                    </div>
                    <div className="container-main">
            <Switch>
                <Route path="/aboutme" component={AboutMe}/>
                <Route path="/events" component={Events}/>
                <Route path="/supportme" component={SupportMe}/>
                <Redirect to="/home"/>
            </Switch>
            </div>
            <div className="container-right">

            </div>
            </Row>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            </Container>
        );
    }



}

export default Base;