import React, { Component } from 'react';

import residentialImage from './Commercial_8.jpeg';
import '../CommonHomeComponents.css';
import './Residential.css';
import { Row, Col } from 'react-bootstrap';


class Residential extends Component {

    render() {
        return (
            <>
            <Row className="justify-content-center align-items-center">
                <div style={{ height: '10vh' }}></div>
                <div>
                    <Col>
                        <img 
                            className="image-float-residential mr-4"
                            src={residentialImage} 
                            width="40%"
                        />
                    </Col>
                    <Col className="justify-content-center">
                        <div className="residential-commercial-headers">Residential</div>
                        <div className="residential-commercial-supporting-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit risus ut massa ornare pellentesque. Proin id leo id arcu placerat tincidunt.
                            Integer eget porta metus, ac ultricies eros. Etiam aliquet sodales gravida. Integer neque mauris, malesuada sit amet ante ac, sagittis elementum lacus. 
                            Nulla tellus nibh, tempus et elit vel, lobortis hendrerit felis.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit risus ut massa ornare pellentesque. Proin id leo id arcu placerat tincidunt.
                            Integer eget porta metus, ac ultricies eros. Etiam aliquet sodales gravida. Integer neque mauris, malesuada sit amet ante ac, sagittis elementum lacus. 
                            Nulla tellus nibh, tempus et elit vel, lobortis hendrerit felis.
                            Lorem ipsum dolor sit amet, consectLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit risus ut massa ornare pellentesque. Proin id leo id arcu placerat tincidunt.
                        </div>
                    </Col>
                </div>
            </Row>
            </>
        )
    }
}

export default Residential;