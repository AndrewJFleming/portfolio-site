import React, { Component } from "react";
import { Col, Row, Image } from 'react-bootstrap';
import "./CardWebsites.css";

import Modal from "./Modal";

class CardWebsites extends Component {
  state = {
    showModal: false,
    dataModal: {
      name: "",
      anime: ""
    }
  };

  getModal = websites => {
    this.setState({ showModal: true, dataModal: websites });
    console.log(websites)
  };

  hideModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const websites = this.props.websites;
    return (
      <div className="container">
        {websites.map((websites, key) => (
          <Row>
            <Col className="person-wrapper">
              <div key={key}>
                <Image src={websites.src} className="profile-pic" />
                <h4>{websites.name}</h4>
                <p>{websites.description}</p>
                <button onClick={() => this.getModal(websites)}>Demo</button>
              </div>
            </Col>
          </Row>


        ))}

        <Modal
          show={this.state.showModal}
          onHide={this.hideModal}
          name={this.state.dataModal.name}
          anime={this.state.dataModal.anime}
        />
      </div>
    );
  }
}

export default CardWebsites;
