import React from 'react';
import styled from "styled-components";
import Card from "react-bootstrap/Card";
import ListGroup from 'react-bootstrap/ListGroup'
import Button from "react-bootstrap/Button"

import headshot from '../Assets/Images/headshot.jpg';
import CVFile from '../Assets/Documents/Quan_le_CV.docx';

const Styling = styled.div`

    .wrap {
        display:flex;
        flex-direction:row;
    }

    .card {
        width: 25%;
        float: left;
        font-size:0.85em;
        margin-bottom: 2rem;
    }
    .not-card {
        width: 74%;
        font-size:0.85em;
        margin-left:1%;
        float:right;
    }

    @media (max-width: 767px) {
        .wrap {
          flex-direction: column;
        }
        .card, 
        .not-card {
          width: auto;
          margin: 1% 0;
        }
      }
`;

const About = () => {
    return (
        <Styling>
            <div className="wrap">
            <Card border="primary" className="card">
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
                       Man... I really need some better headshot photos...
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item><strong>Phone</strong> 021 052 4016</ListGroup.Item>
                    <ListGroup.Item><strong>Email</strong> quanlenz1998@gmail.com</ListGroup.Item>
                    <ListGroup.Item><strong>Portfolio URL</strong><a href="http://quanle-personal.com"> quanle-personal.com</a></ListGroup.Item>
                    {/**
                    <ListGroup.Item><bold>Download CV here</bold></ListGroup.Item>
                     */}
                </ListGroup>
                <Card.Body>
                    <Card.Link href="https://www.facebook.com/quan.le.0711z">Facebook</Card.Link>
                    <Card.Link href="https://www.linkedin.com/in/quan-le-aa2a88187/">LinkedIn</Card.Link>
                    <Card.Link href="https://github.com/quanle0711">GitHub</Card.Link>
                    <Card.Link href={CVFile} download="Quan_Le_CV.docx">Download my CV</Card.Link>
                </Card.Body>
            </Card>

            <Card border="primary" className="not-card">
            <ListGroup>
                    <ListGroup.Item variant="primary">
                     <h3>A little bit of introduction..</h3>
                     <p>
                         I like computers, so much so I've decided to make a career out of it. I finished my Computer Science degree last year at Victoria University down in Wellington, in the fictional land of New Zealand... and currently I 
                         want to make some use out of it. But in the meantime, I work as a Barista. Somewhere along those lines
                         I also have developed a passion towards Coffee.
                     </p>
                     <p>
                         I've always enjoyed coding to create a 'product', something that works and can be seen.. Hence I lean towards the Full-Stack, Front-end, UX Design and Game Dev sectors.. seeing your work
                         visually coming together is more satisfactory for me compared to having a staring contest at a wall of text.  
                     </p>
                    </ListGroup.Item>
                    <ListGroup.Item>
                     <h5>Pros</h5>
                     <p>
                        - Java and Javascript... learnt alot of that in my Uni coursework <br/>
                        - SLDC, Full-Stack Development, RESTful APIS <br/> 
                        - Version control and Git (I mean.. obviously.. what kind of software person doesn't know Git???)<br/>
                        - Favourite Things I've worked with and used... React and Amazon Web Services<br/>
                        </p>
                        <p>
                        - Video games, youtube, music (you might've guessed,)<br/>
                        - You bet I can draw and make a mean cup of Joe <br/>
                        - Can shred on the guitar (just kidding.. I'm not that good, but I did teach myself to play for a few years)<br/>
                        - Football, Tennis, Weight Lifting, Hiking, Travelling (I'd like to think im also an outdoorsy person)
                        </p>
                    </ListGroup.Item>
                    <ListGroup.Item variant="primary">
                     <h5>Cons</h5>
                     <p>
                         - I cannot dance to save my life<br/>
                         - Quite young and little exposure to life's unforgiving journey<br/>
                         - A terrible sense of humour (I'm sorry you've had to endure this far...)<br/>
                     </p>
                    </ListGroup.Item>
                    <ListGroup.Item>
                     <h4>Current & Future Endeavors</h4>
                     <p>
                         When I have time that isn't mandatory to paying my bills, I am looking for opportunities to improve on myself.
                         These opportunities are along the lines of job hunting, attending networking events, hackathons and working on side projects for my own benefit/enjoyment.
                     </p>

                      <p>In fact... what you are seeing on this website is the result of my figurative blood, sweat and tears. While the content is still in the works,
                         This website is an accumilation of a bunch of technologies that I wanted to learn how to use... Starting off with a ReactJS framework, adding plugins, tinkering with common use APIs,
                         Hosting and Deploying on AWS through <strong>S3</strong> and <strong>Route53</strong>, and more... 
                     </p>
                     <p>In the future of this website as a pet project of mine, I am looking forwards
                         to involving more back-end work, learn and leverage more complex API's Google Maps, PayPal, Gmail, etc...
                     </p>
                    </ListGroup.Item>
                    <ListGroup.Item variant="primary">
                     <h5>P.S... (To the folks at Datacom)</h5>
                     I hope this hasnt been too painful of a read. I would love an opportunity to attend the TalentX/Datacomp hackathon.<br/>
                     The event looks to be very fun and I'm sure it would be a great opportunity to get to know the people and learn newer things at the very least!
                    </ListGroup.Item>
                </ListGroup>
            </Card>
            </div>
        </Styling>

    );
};

export default About;