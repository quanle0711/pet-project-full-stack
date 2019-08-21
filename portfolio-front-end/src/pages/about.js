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
        padding:1em 1em;
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
    li {
        list-style: none;
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
                        <h3>Skillset</h3>
                        <ul>
                            <li>Languages:<br /> Javascript - HTML - CSS - Java - C# - Typescript - Swift - SQL
                            </li>
                            <hr />
                            <li>
                                Frameworks & Modules:<br /> ReactJS - Ionic - Angular - NodeJS - Gradle - Bootstrap - JSX - React Native
                            </li>
                            <hr />
                            <li>
                                Tools & Platforms:<br /> Amazon Web Services - Google Firebase - Heroku - Unity3D - PostgreSQL
                            </li>
                            <hr />
                            <li>
                                Version Control:<br /> Git - GitHub
                            </li>
                            <hr />
                            <li>
                                Others:<br/> MS Office - Active Directory - Tosca test suite
                            </li>
                        </ul>

                    </div>
                </Container>
            </Styling>
        );
    }
}

export default About;
