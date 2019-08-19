import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link, animateScroll as scroll } from "react-scroll";

import styled from "styled-components";

const Styling = styled.div`
    .navbar {
        background-color: rgba(0, 0, 0, 0.4);
    }

    .navbar-brand,
    .navbar-nav {
        padding: 0 4vw;
    }

    .navbar-brand {
        font-size: 1.75em;
        background: linear-gradient(to right, #9c27b0 0%, #e91e63 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        &:hover {
            background: white;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }

    .navbar-nav .nav-link {
        font-size: 1.2em;
    }
    .navbar-brand,
    .navbar-nav .nav-link {
        color: white;
        &:hover {
            color: #69f0ae;
        }
    }
`;

const NavigationTop = () => {
    return (
        <Styling>
            <Navbar expand="lg" fixed="top">
                <Navbar.Brand href="/">Portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Item>
                            <Nav.Link>
                                <Link
                                    activeClass="active"
                                    to="main"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                >
                                    Main
                                </Link>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>
                                <Link
                                    activeClass="active"
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                >
                                    About
                                </Link>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>
                                <Link
                                    activeClass="active"
                                    to="projects"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                >
                                    Projects
                                </Link>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Styling>
    );
};

export default NavigationTop;
