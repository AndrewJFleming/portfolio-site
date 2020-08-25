import React, { Component } from "react";
import { Button, Modal } from 'react-bootstrap';
import "./Modal.css";

class ProjectModal extends Component {
  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.onHide} className="text-center">
      <Modal.Header closeButton>
        <Modal.Title>{this.props.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={this.props.anime} className="demo-gif" />
        <p className="text-padding">{this.props.description}</p>
      </Modal.Body>
      <Modal.Footer> 
        <Button variant="success" href={this.props.site}>Visit Site</Button>
        <Button variant="primary" href={this.props.gitHub}>GitHub Repo</Button>
        <Button onClick={this.props.onHide} variant="secondary">Close</Button>
      </Modal.Footer>
    </Modal>
    );
  }
}

export default ProjectModal;