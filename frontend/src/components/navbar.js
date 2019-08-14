import React, { Component } from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import styled from "styled-components";

const Topnav = () => {
    return (
        <Navbar>
            <Navbar.Brand href="#home">Quan</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#home">Personal</Nav.Link>
                    <Nav.Link href="#link">Projects</Nav.Link>
                    <Nav.Link href="#home">Github</Nav.Link>
                    <Nav.Link href="#link">Resume</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Topnav;
