import React, { Component } from "react";
import styled from "styled-components";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import { Container } from "react-bootstrap";
const Styling = styled.div`
    .about {
        background-color: white;
        display: flex;
        flex-direction: row;
        padding:2em 2em;
    }
    .left {
        width: 33%;
        float: left;
        text-align:left;
    }
    .right {
        width: 66%;
        font-size: 1.2em;
        margin-left: 1%;
    }
    ul {
        list-style-none;
        padding-left:0px;
    }
    li {
        list-style: none;
    }

    .accent2 {
        font-family: 'Lexend Deca', sans-serif;
        color: #69f0ae;
    }

    .accent {
        background: linear-gradient(to right, #9c27b0 0%, #e91e63 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    @media (max-width: 767px) {
        .about {
            flex-direction: column;
        }
        .left,
        .right {
            text-align:center;
            width: 100%;
            margin: 1% 0;
        }
    }
`;

class About extends Component {
    render() {
        return (
            <Styling>
                <Container className="about" id="about">
                    <div className="left">
                        <h1>A bit about me</h1>
                    </div>
                    <div className="right">
                        <p>
                            My Name is Quan, I Studied at Victoria University of
                            Wellington and graduated at 2018 with a Bachelor's
                            Degree majoring in Computer Science.

                            I Write various software and web applications.
                            My specialties are front-end,full-stack & mobile application development.

                        </p>
                        <h2><span className="accent">
                            Skillset
                            </span>
                        </h2>
                        <ul>
                            <li>
                                <span className="accent2">
                                    Languages:
                                    </span>
                                <br /> Javascript - HTML - CSS - Java - C# - Typescript - Swift - SQL
                            </li>
                            <hr />
                            <li>
                                <span className="accent2">
                                    Framework & Modules:
                                    </span>
                                <br /> ReactJS - Ionic - Angular - NodeJS - Gradle - Bootstrap - JSX - React Native
                            </li>
                            <hr />
                            <li>
                            <span className="accent2">
                                    Tools & Platforms:
                                    </span>
                                <br /> Amazon Web Services - Google Firebase - Heroku - Unity3D - PostgreSQL
                            </li>
                            <hr />
                            <li>
                            <span className="accent2">
                                    Version Control:
                                    </span>
                                <br /> Git - GitHub
                            </li>
                            <hr />
                            <li>
                            <span className="accent2">
                                    Others:
                                    </span>
                                <br /> MS Office - Active Directory - Tosca test suite
                            </li>
                        </ul>

                    </div>
                </Container>
            </Styling>
        );
    }
}

export default About;
