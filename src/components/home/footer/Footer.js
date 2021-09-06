import React, { Component } from 'react';
import { FormControl, Form, Row, Col } from 'react-bootstrap';
import { FaInstagram } from 'react-icons/fa';
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineLock } from "react-icons/ai";


class Footer extends Component {
    render() {
        return (
            <>
                <div style={{ height: '10vh' }}></div>
                <Row>
                    <Col>

                    </Col>
                    <Col>
                        <FaInstagram size="3em"/>
                        <AiOutlineFacebook size="3em"/>
                    </Col>
                    <Col>
                        <AiOutlineLock size="3em"/>
                        Protected by US Patents
                    </Col>
                    
                </Row>
            </>
        )
    }
}

export default Footer;