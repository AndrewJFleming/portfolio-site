import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { CardGroup, Card, Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

import {ProjectCard} from "./ProjectCard";

export default class Home extends Component {
    state = {
        projects: [
            { 
                id: 1, 
                name: "Kanji Cards", 
                description: "A Japanese kanji flashcards app for visual learners. Images from the Unsplash API are loaded for each English vocabulary word in the database.", 
                src: "assets/kanji-thumb-small.png",
                anime: "assets/kanji-cards-demo.gif",
                site: "https://andrewjfleming.github.io/kanji-cards/",
                gitHub: "https://github.com/AndrewJFleming/kanji-cards/tree/master"
            },
            { 
                id: 2, 
                name: "Divine Comedy Slideshow", 
                description: "A slideshow app where visitors can view prints made by Gustave Dore for each of the three books of Dante's Divine Comedy.", 
                src: "assets/dante-thumb2-small.png",
                anime: "assets/dante-demo2.gif",
                site: "https://andrewjfleming.github.io/divine-comedy-slideshow/",
                gitHub: "https://github.com/AndrewJFleming/divine-comedy-slideshow/tree/master"
            },
            { 
                id: 3, 
                name: "Portraits of Iowa", 
                description: "A website commissioned by public artist John Fleming for an installation in Cedar Rapids, Iowa. After authenticating using their Google accounts, participants can then upload images to Firebase storage which will then be used in the assembly of the installation.", 
                src: "assets/poi-thumb-small.png",
                anime: "assets/portraits-demo.gif",
                site: "https://andrewjfleming.github.io/portraits-of-iowa/",
                gitHub: "https://github.com/AndrewJFleming/portraits-of-iowa/tree/master"
            },
            { 
                id: 4, 
                name: "Painter's Bootcamp", 
                description: "A blog-site where visitors can enjoy articles about painting technique. Only registered admins can access the rich text-editor used for posting new articles.", 
                src: "assets/painter.png",
                anime: "assets/painters-demo2.gif",
                site: "http://andfle23.dreamhosters.com/",
                gitHub: "https://github.com/AndrewJFleming/painters-bootcamp/tree/master"
            }
        ]
      };

    render() {
        return (
            <React.Fragment>
                <Container>
                    <Jumbotron className="p-0 jumbo">
                        <Row>
                            <Col sm={7} md={8} className="p-3">
                                <Col className="col-md-6 offset-md-1">
                                    <h2 className="jumbo-title">Andrew J. Fleming</h2>
                                    <h6 className="jumbo-subtitle">Website and App Developer</h6>
                                    <Link smooth to="#projects-section">
                                        <Button bsStyle="primary" className="mt-3" >My Projects</Button>
                                    </Link>
                                </Col>
                            </Col>
                            <Col sm={5} md={4} className="home-image">
                                <Image src="assets/portrait2.jpg" className="w-100 "/>
                            </Col>
                        </Row>
                    </Jumbotron>
                    <Container>
                        <h1 className="main-titles">Specialization</h1>
                        <CardGroup>
                            <Card className="col-sm-8 col-md-9 col-lg-6 bg-primary special-card">
                                <Card.Header>
                                    <Card.Title>Focus on Front-end Web Development</Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Text>Using my professional experience in graphic design, I take advantage of the React's efficency to produce stylish websites that are a pleasure for the user to navigate.</Card.Text>
                                    <Card.Text>I invite you to browse my <Link smooth to="#projects-section">project section</Link> below where you'll find apps and websites constructed using:</Card.Text>
                                    <ul>
                                        <li>React</li>
                                        <li>Bootstrap</li>
                                        <li>Axios</li>
                                        <li>Firebase</li>
                                    </ul>
                                    <Card.Text className="d-none d-md-block d-xl-block d-sm-none">All projects have been deployed to <a href="https://github.com/AndrewJFleming">GitHub</a> where visitors can view the source-code.</Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className="col-sm-4 col-md-3 col-lg-6 bg-primary special-card">
                                <Card.Body>
                                    <Row className="special-card-cols">
                                        <Col className="col-3 col-sm-12 col-md-12 col-lg-6">
                                            <img className="tool-img" src="assets/HTML5-logo.png"></img>
                                        </Col>
                                        <Col className="col-3 col-sm-12 col-md-12 col-lg-6">
                                            <img className="tool-img" src="assets/CSS3-logo.png"></img>
                                        </Col>
                                        <Col className="d-none d-md-none d-xl-none d-sm-block">
                                            <img className="tool-img" src="assets/Bootstrap-logo.png"></img>
                                        </Col>
                                        <Col className="col-3 col-sm-12 col-md-12 col-lg-6">
                                            <img className="tool-img" src="assets/JavaScript-logo.png"></img>
                                        </Col>
                                        <Col className="col-3 col-sm-12 col-md-12 col-lg-6">
                                            <img className="tool-img" src="assets/React-logo.png"></img>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </CardGroup>
                    </Container>
                    <Container>
                        <h1 className="main-titles" id="projects-section">Projects</h1>
                        <Row>
                            <ProjectCard project={this.state.projects} />
                        </Row>
                    </Container>
                </Container>
            </React.Fragment>
        );
    }
}