import React from 'react'
import { Row, Col } from 'react-bootstrap';
import './CustomFooter.css'

const CustomFooter = () => {

  return (
    <div className="main-footer">
        <Row className="justify-content-md-around">
          <Col className="text-center">
            <h4>Andrew J Fleming</h4>
            <ul className="list-unstyled">
              <li><a className="link-unstyled" href="mailto:aflemi1@gmail.com">aflemi1@gmail.com</a></li>
              <li><a className="link-unstyled" href="tel:206-471-8342">(206) 471-8342</a></li>
            </ul>
          </Col>
          <Col className="text-center">
            <h4>Find me at <span className="colon">:</span></h4>
            <ul className="list-unstyled">
              <li><a className="link-unstyled" href="https://github.com/AndrewJFleming">GitHub</a></li>
              <li><a className="link-unstyled" href="https://www.linkedin.com/in/andrew-fleming-49916012a/">LinkedIn</a></li>
              <li><a className="link-unstyled" href="https://my.indeed.com/p/andrewf-57wmkef">Resume</a></li>
              {/* <li><a className="link-unstyled" href="">Indeed</a></li> */}
            </ul>
          </Col>
        </Row>
        <hr className="hr"/>
        <Row className="justify-content-md-center text-center">
          <Col md="auto">
            <p className="mt-4">
              &copy;{new Date().getFullYear()} Andrew J Fleming | All rights
            </p>
          </Col>
        </Row>
    </div>
  );
}

export default CustomFooter;