import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";

import topLeft from "./images/topLeft.jpeg";
import topRight from "./images/topRight.jpeg";
import bottomLeft from "./images/bottomLeft.jpeg";
import bottomRight from "./images/bottomRight.jpeg";

import bigImageRight from "./images/bigImageRight.jpeg";

import "./Gallery.css";

//TODO: fix the spacing on this page
//Do i need <Container>?
class Gallery extends Component {
  render() {
    return (
      <div className="gallery-section">
        <div style={{ height: "10vh " }}></div>
        {/* <div className="container gx-0"> */}
        <Container>
          <Row className="gallery-background-color ">
            <Col className="col-md-6 left-half-col">
              <Row className="top-half-row">
                <Col className="col-md-6">
                  <img
                    src={topLeft}
                    style={{ width: "100%", height: "100%" }}
                  />
                </Col>
                <Col className="col-md-6">
                  <img
                    src={topRight}
                    style={{ width: "100%", height: "100%" }}
                  />
                </Col>
              </Row>
              <Row className="bottom-half-row">
                <Col className="col-md-6">
                  <img
                    src={bottomLeft}
                    style={{ width: "100%", height: "100%" }}
                  />
                </Col>
                <Col className="col-md-6">
                  <img
                    src={bottomRight}
                    style={{ width: "100%", height: "100%" }}
                  />
                </Col>
              </Row>
            </Col>

            <Col className="col-md-6 right-half-col">
              <img
                src={bigImageRight}
                style={{ width: "100%", height: "100%" }}
              />
            </Col>
          </Row>
          {/* </div> */}
        </Container>
        <div style={{ height: "10vh " }}></div>
      </div>
    );
  }
}

export default Gallery;
