import React from 'react';
import styled from "styled-components";
import Card from "react-bootstrap/Card";
import ListGroup from 'react-bootstrap/ListGroup'
import headshot from '../Assets/Images/headshot.jpg';
const Styling = styled.div`
    .card {
        width: 33%;
        float: left;
        margin-bottom: 2rem;
    }
    .not-card {
        width: 66%;
        height:66%;
        
        float:right;
    }
`;

const About = () => {
    return (
        <Styling>
            <Card border="warning" className="card">
                <Card.Img variant="top" src={headshot} />
                <Card.Body>
                    <Card.Title>
                        <h1>
                            Quan Le
                        </h1>
                        <h4>Computer Science Graduate<br />(Victoria University of Wellington)
                        </h4>
                    </Card.Title>
                    <Card.Text>
                       I need some better headshot photos...
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item><strong>Phone</strong> 021 052 4016</ListGroup.Item>
                    <ListGroup.Item><strong>Email</strong> quanlenz1998@gmail.com</ListGroup.Item>
                    <ListGroup.Item><strong>Portfolio URL</strong> quanle-personal.com</ListGroup.Item>
                    {/**
                    <ListGroup.Item><bold>Download CV here</bold></ListGroup.Item>
                     */}
                </ListGroup>
                <Card.Body>
                    <Card.Link href="https://www.facebook.com/quan.le.0711z">Facebook</Card.Link>
                    <Card.Link href="https://www.linkedin.com/in/quan-le-aa2a88187/">LinkedIn</Card.Link>
                    <Card.Link href="#">CV Download</Card.Link>
                </Card.Body>
            </Card>

            <Card border="warning" className="not-card">
                <Card.Body>
                    <Card.Title>
                        <h1>
                            Quan Le
                        </h1>
                        <h4>Computer Science Graduate<br />(Victoria University of Wellington)
                        </h4>
                    </Card.Title>
                    <Card.Text>
                        ASDF
                    </Card.Text>
                    <Card.Link href="https://www.facebook.com/quan.le.0711z">Facebook</Card.Link>
                    <Card.Link href="https://www.linkedin.com/in/quan-le-aa2a88187/">LinkedIn</Card.Link>
                </Card.Body>
            </Card>
        </Styling>

    );
};

export default About;