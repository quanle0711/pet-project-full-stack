import React, { Component } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";


const Styling = styled.div`

.contact-section {
    padding:2em;
    width:100%;
    height:auto;
    background-color:black;
    color:white;
}
ul {
    list-style-none;
    padding-left:0px;
}
li, li a {
    list-style: none;
    padding-top:1em;
    &:hover {
        color: #69f0ae;
        text-decoration: none;
    }
}

`;

class Contact extends Component {
    render() {
        return (
            <Styling>
                <div className="contact-section" id="contact">
                    <Container>
                        <Row>
                            <Col md="6">
                                <h2>
                                    Reach out to me
                                </h2>
                            </Col>
                            <Col md="6">
                                <ul>
                                    <li>Phone: 021 052 4016</li>
                                    <li>Email: quanlenz1998@gmail.com</li>
                                    <li> <a href="https://www.facebook.com/quan.le.0711z" target="_blank">
                                        Facebook
                                        </a>
                                    </li>

                                    <li> <a href="https://www.linkedin.com/in/quan-le-aa2a88187/" target="_blank">
                                        LinkedIn
                                        </a>
                                    </li>
                                    <li> <a href="https://github.com/quanle0711" target="_blank">
                                        GitHub
                                        </a>
                                    </li>
                                    <li>CV</li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Styling>
        );
    }
}

export default Contact;