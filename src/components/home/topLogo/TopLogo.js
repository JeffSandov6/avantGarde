import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

import wrapRoofLogo from './wrapRoofLogo.png';
import './TopLogo.css';


class TopLogo extends Component {

    render() {
        return (
            <>
                <Row className="align-items-center">
                    {/* <div style={{ height: '40vh' }}></div> */}
                    <Col className="logo-top-bottom-margins">
                        <img 
                            src={wrapRoofLogo}
                            alt="missing"
                            style={{width: '30%', height: '30%'}}
                        />
                        <div className="logo-supporting-text">
                            The most effective temporary roofing solution
                        </div>
                    </Col>
                    {/* <div style={{ height: '40vh' }}></div> */}
                </Row>
            </>
        )
    }
}


export default TopLogo;