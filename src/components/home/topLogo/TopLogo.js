import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import wrapRoofLogo from './wrapRoofLogo.png';
import './TopLogo.css';


class TopLogo extends Component {

    render() {
        return (
            <>
                <div className="container">
                    <div style={{height: '10px'}}></div>
                        <Row className="logo-row">
                            <Col className="col-md-3">
                                <div className="contact-us-link">
                                    Contact Us
                                </div>
                            </Col>
                            <Col className="col-md-6 logo-top-bottom-margins">
                                <img 
                                    src={wrapRoofLogo}
                                    alt="missing"
                                    style={{width: '100%', height: '90%'}}
                                />
                                <div className="logo-supporting-text">
                                    The most effective temporary roofing solution
                                </div>
                            </Col>
                            <Col className="col-md-3">
                            </Col>
                            {/* <div style={{ height: '40vh' }}></div> */}
                        </Row>
                </div>
            </>
        )
    }
}


export default TopLogo;