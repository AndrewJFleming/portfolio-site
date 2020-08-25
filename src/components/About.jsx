import React from 'react';
import { Container, Card, Col, Image } from 'react-bootstrap';
import './About.css';

 const About = () => {

    return (
            <Container className="about-container">
                <Card className="bg-primary p-4">
                    <Col xs={12} sm={12} lg={12} smOffset={2}>
                        <Image src="assets/portrait-bright.jpg" className="about-profile-pic mr-5" rounded />
                        <h3> Andrew J. Fleming</h3>
                        <p>
                            I'm a freelance front-end web developer living in Seattle, Washington who focuses on designing apps and websites using the React JavaScript framework. I have several static websites in my portfolio but most of my past projects make use of 3rd party APIs to read, write and delete data from that product's respective Firebase database.
                        </p>
                        <p>Recent noteworthy freelance work includes a website for <a style={{color: "#202f5f", fontWeight: "bold"}}href="https://andrewjfleming.github.io/portraits-of-iowa/">Portraits of Iowa</a>, a project commissioned for a public art installation in Cedar Rapids, Iowa. My client's installation involved gathering hundreds of photo submissions from Cedar Rapids residents that would then be assembled into a hanging gallery/sculpture; I was hired to design a website that would outline the planned project to community contributors, would provide them with image-submission instructions as well as an image-upload component for sending photos to Firebase storage.</p>
                        <p>
                            I'm currently on the search for employment where I'll have the opportunity to work with a team of engineers/designers. I look forward to contributing my web design skills to the development of a product that is greater than anything that I would be able to produce alone.
                        </p>
                        {/* <p>I'm a front-end web developer from Seattle Washington who specializes in designing professional websites using the React Javascript framework. In addition to the initial layout and design phase of development, I'm also practiced in implementing 3rd party APIs. Some examples include:</p>
                        <div className="list">
                            <ul>
                                <li>Authenticating users using their Google or Facebook accounts</li>
                                <li>Allowing users to upload images to Firebase storage</li>
                                <li>Displaying images from the Unsplash photo database</li>                                
                                <li>Sending emails securely with SendGrid</li>
                            </ul>
                        </div>
                        <p>Regarding the aesthetic-side of front-end development, my years spent obtaining my bachelor's degree of Fine Art from the School of the Art Institute of Chicago and my experience as a painting instructor have helped to inform the graphical presentation of my websites.</p> */}
                   
                    </Col>
                </Card>
            </Container>
    );
}

export default About;