import React, { Component } from 'react';
import { FormControl, Form, Row, Col } from 'reactstrap';
import { FaInstagram } from 'react-icons/fa';
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineLock } from "react-icons/ai";
import { BsLockFill } from "react-icons/bs";

import franchise500 from "./Franchise500.png"
import uvProtectionIcon from './UV-Protection-Icon.png';


class Footer extends Component {
    render() {
        return (
            <>
                <div style={{ height: '10vh' }}></div>
                <Row className={"no-gutters"}>
                    <Col>
                        <img
                            source={require("./Franchise500.png")}
                            alt="missing"
                            style={{width: '50%', height: '50%'}}
                        />
                    </Col>
                    <Col>
                        <FaInstagram size="3em"/>
                        <AiOutlineFacebook size="3em"/>
                    </Col>
                    <Col>
                        <img
                            source={franchise500}
                            alt="missing"
                            style={{width: '10%', height: '10%'}}
                        />
                        <BsLockFill size="2em"/>
                        Protected by US Patents
                    </Col>
                    
                </Row>
            </>
        )
    }
}

export default Footer;