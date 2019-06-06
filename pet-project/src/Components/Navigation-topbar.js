import React from "react";
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

const NavigationBar = () => {
    return (
        <Styling>
            <Navbar expand="lg" fixed="top">
                <Navbar.Brand href="/">Quan Le</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Item>
                            <Nav.Link href="/">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/about">About Me</Nav.Link>
                        </Nav.Item>
                        {/*
                        <Nav.Item>
                            <Nav.Link href="/paypal">Pay Pal</Nav.Link>
                        </Nav.Item>
                         */}
                        <Nav.Item>
                            <Nav.Link href="/YoutubeApi">Youtube API</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Styling>
    );
};

export default NavigationBar;
