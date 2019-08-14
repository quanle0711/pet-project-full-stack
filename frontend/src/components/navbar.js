import React, { Component } from 'react';
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

const Styling = styled.div`
    .navbar {
        background-color: #222;
        
    }

    .navbar-brand,
    .navbar-nav .nav-link {
        color: #bbb;

        &:hover {
            color: white;
        }
    }
`;

const TopBar = () => {
    return (
        <Styling>
            <Navbar expand="lg" fixed="top">
                <Navbar.Brand href="/">My portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Item>
                            <Nav.Link href="#">Personal</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#">Blog</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#">Projects</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#">Resume</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Styling>
    );
};

export default TopBar;
