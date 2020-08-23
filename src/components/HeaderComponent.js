import React, { Component } from 'react';
import {
    Navbar,
    Nav,
    Form,
    FormControl,
    Button,
    Row,
    Container,
} from "react-bootstrap";
import { HouseDoorFill } from 'react-bootstrap-icons';
import { NavLink } from 'react-router-dom';
import '../styling/custom_styling.css';


class Header extends Component {


    render() {
        return (
                <Navbar className="navbar" variant="dark" expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav defaultActiveKey="/home">
                            <Nav.Item>
                                <NavLink className="navlink" to="/home"><HouseDoorFill /></NavLink>
                            </Nav.Item>
                            <Nav.Item>
                                <NavLink className="navlink" to="/mymusic"><p className="navItem-text">My Music</p></NavLink>
                            </Nav.Item>
                            <Nav.Item>
                                <NavLink to="/aboutme" ><p className="navItem-text">About Me</p></NavLink>
                            </Nav.Item>
                            <Nav.Item>
                                <NavLink to="/events" ><p className="navItem-text">Events</p></NavLink>
                            </Nav.Item>
                            <Nav.Item>
                                <NavLink to="/supportme" ><p className="navItem-text">Support Me</p></NavLink>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
        );
    }


}

export default Header;