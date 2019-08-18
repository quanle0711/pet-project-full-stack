import React, { Component } from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link, animateScroll as scroll } from "react-scroll";

import styled from "styled-components";
import Container from "react-bootstrap/Container";

const Styling = styled.div`
     {
        @import url("https://fonts.googleapis.com/css?family=Tangerine&display=swap");
        .wrapper {
            background-color: #efefef;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow:0px 10px 20px rgba(0,0,0,1);
        }

        .wrapper ul {
            list-style: none;
            text-align: right;
            margin-top: auto;
            margin-bottom: auto;
        }

        .wrapper h1 {
            text-align: left;
            display: inline;
            margin-left: 1rem;
            padding:0rem;
            padding-top:1rem;
            font-family: 'Tangerine', serif;
            font-size:3em;
            text-shadow: 3px 3px 3px rgba(0,0,0,0.25);
        }

        .wrapper ul li {
            color: #111;
            font-size: 1.2em;
            padding-right: 1em;
            padding: auto;
            display: inline-block;
        }

        .wrapper ul li {
            transition: all 0.5s ease 0s;
        }

        .wrapper ul li:hover {
            color: #888;
        }
    }
`;
class Topnav extends Component {
    render() {
        return (
            <Styling>
                <div className="wrapper">
                    <h1>Quan Le's Portfolio</h1>
                    <ul>
                        <li>
                            <Link
                                activeClass="active"
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Personal
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass="active"
                                to="projects"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass="active"
                                to="contacts"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Contact Me
                            </Link>
                        </li>
                    </ul>
                </div>
            </Styling>
        );
    }
}

export default Topnav;
