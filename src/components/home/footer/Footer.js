import React, { Component } from 'react';
import { FormControl, Form, Row, Col } from 'reactstrap';
import { FaInstagram } from 'react-icons/fa';
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineLock } from "react-icons/ai";
import { BsLockFill } from "react-icons/bs";
import { FaLock } from "react-icons/fa";

import Franchise500 from "./Franchise500.png"


class Footer extends Component {
    render() {
        return (
            <>
                <div style={{ height: '10vh' }}></div>
                <Row className={"no-gutters"}>
                    <Col>
                    </Col>
                    <Col>
                        <FaInstagram size="3em"/>
                        <AiOutlineFacebook size="3em"/>
                    </Col>
                    <Col>
                        {/* <img
                            src={Franchise500}
                            alt="missing"
                        /> */}
                        <FaLock size="3em"/>
                        Protected by US Patents
                    </Col>
                    <div style={{ height: '45px' }}></div>

                </Row>
                
            </>
        )
    }
}

export default Footer;