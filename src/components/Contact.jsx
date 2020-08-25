import React, { Component } from 'react';
import { Form, Button, Container, Card, Row, Col } from 'react-bootstrap';
import Axios from 'axios';
import './Contact.css';


export default class Contact extends Component {
        state = {
            name: '',
            email: '',
            message: '',
            disabled: false,
            emailSent: null
        };
    
    handleChange = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    };

    handleSubmit = event => {
        event.preventDefault();

        this.setState({
            disabled: true,
        });

        Axios.post('http://localhost:3030/api/email', this.state)
            .then(res => {
                if (res.data.success) {
                    this.setState({
                        disabled: false,
                        emailSent: true
                    });
                } else {
                    this.setState({
                        disabled: false,
                        emailSent: false
                    });
                }
            })
            .catch(err => {
                this.setState({
                    disabled: false,
                    emailSent: false
                });
            })
    };
    
    render () {
        return(
            <div>
                <div className="banner-container">
                    <div className="hero-text">
                        <h1>Send me a message</h1>
                        <h3>let's set you up with a beautiful website</h3>
                    </div>
                        <img src="assets/portrait-banner.jpg" className="banner-image"/>
                </div>
                <Container className="container">
                    <Row>
                        <Col xs={12} sm={7} md={8}>
                            <Card className="bg-primary p-2 contact-card">
                                <Card.Header className="text-center">
                                    <h3> Andrew J. Fleming</h3>
                                    <h6><a href="https://github.com/AndrewJFleming">GitHub</a> / <a href="https://www.linkedin.com/in/andrew-fleming-49916012a/">LinkedIn</a> / <a href="https://my.indeed.com/p/andrewf-57wmkef">Resume</a></h6>

                                </Card.Header>
                                <Card.Body className="d-flex">
                                    <ul className="mx-auto">
                                        <li>
                                            <h5><a className="" href="mailto:aflemi1@gmail.com">aflemi1@gmail.com</a></h5>                                
                                        </li>
                                        <li>
                                            <h5><a className="" href="tel:206-471-8342">(206) 471-8342</a></h5>
                                        </li>
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                        {/* <Col xs={12} sm={7} md={8} className="form-col">
                            <div>
                                <h1 className="contact-text">Contact</h1>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group className="name">
                                        <Form.Label className="contact-text" htmlFor="name">Name</Form.Label>
                                        <Form.Control 
                                            id="name"
                                            name="name"
                                            placeholder="Name" 
                                            type="text" 
                                            value={this.state.name}
                                            onChange={this.handleChange}
                                        />
                                    </Form.Group>
                                    <Form.Group className="email">
                                        <Form.Label className="contact-text" htmlFor="email">Email</Form.Label>
                                        <Form.Control 
                                            id="email"
                                            name="email"
                                            placeholder="Email" 
                                            value={this.state.email}
                                            onChange={this.handleChange}
                                        />
                                    </Form.Group>
                                    <Form.Group className="message">
                                        <Form.Label className="contact-text" htmlFor="message">Message</Form.Label>
                                        <Form.Control 
                                            id="message"
                                            name="message"
                                            placeholder="Message" 
                                            as="textarea"
                                            rows="3"
                                            value={this.state.message}
                                            onChange={this.handleChange}
                                        />
                                    </Form.Group>
                                    <Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled}>
                                        Send
                                    </Button>

                                    {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
                                    {this.state.emailSent === false && <p className="d-inline err-msg">Email Not Sent</p>}                    
                                </Form>
                            </div>
                        </Col> */}
                        <Col xs={12} sm={5} md={4} className="d-none d-sm-block contact-sidebar">
                            <h4>Whatever your design needs may be...</h4>
                            <p>Are you looking modernize or have maintenance done on an existing website? Perhaps you need something brand-new, built from the ground up. I can help, whatever your web-design needs may be.</p>
                        </Col>
                        {/* <Col xs={12} sm={5} md={4} className="d-none d-sm-block">
                            <Card className="bg-primary p-2">
                                <Card.Body>
                                    <h4>Whatever your design needs may be...</h4>
                                    <p>Are you looking modernize or have maintenance done on an existing website? Perhaps you need something brand-new, built from the ground up. I can help, whatever your web-design needs may be.</p>
                                </Card.Body>
                            </Card>
                        </Col> */}
                    </Row>  
                </Container>
            </div>
        )
    }
}