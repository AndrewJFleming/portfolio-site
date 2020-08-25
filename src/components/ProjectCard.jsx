import React, { Component } from "react";
import { Row, Col, Card, Button } from 'react-bootstrap';
import "./ProjectCard.css";

import Modal from "./Modal";

export class ProjectCard extends Component {
  state = {
    showModal: false,
    dataModal: {
      name: "",
      anime: "",
      description: ""
    }
  };

  getModal = project => {
    this.setState({ showModal: true, dataModal: project });
    console.log(project)
  };

  hideModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <Row>
        {this.props.project.map((project, key) => (
          <Col className="col-12 col-sm-6 col-md-3 col-lg-3 mt-3 mb-3">
            <Card border="secondary" bg="primary" className="text-center h-100" key={key}>
              <Card.Body>
                <Card.Img variant="top" src={project.src} />
                <Card.Title className="mt-4 mb-1">{project.name}</Card.Title>
              </Card.Body>
              <Card.Footer>
                <Button onClick={() => this.getModal(project)} variant="primary">Demo</Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}

        <Modal
          show={this.state.showModal}
          onHide={this.hideModal}
          name={this.state.dataModal.name}
          anime={this.state.dataModal.anime}
          description={this.state.dataModal.description}
          site={this.state.dataModal.site}
          gitHub={this.state.dataModal.gitHub}
        />
      </Row>
    );
  }
}