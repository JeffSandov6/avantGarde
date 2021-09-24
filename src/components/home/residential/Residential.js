import React, { Component } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

import residentialImage from './Commercial_8.jpeg';
import '../CommonHomeComponents.css';
import './Residential.css';
import { Row, Col } from 'react-bootstrap';
import Fade from '@material-ui/core/Fade';
import Slide from '@material-ui/core/Slide';



class Residential extends Component {
    constructor(props) {
        super(props);
        this.state = {
            elementIsVisible: true,
        }
    }

    isVisible = (isVisible) => {
        console.log("at is visible");
        console.log(isVisible);
        this.setState({elementIsVisible: isVisible});
    }

    render() {
        return (
            <>
            <Row className="justify-content-center align-items-center">
                <div style={{ height: '10vh' }}></div>
                <div>
                    <Col>
                        <VisibilitySensor
                            onChange={this.isVisible}
                        >
                            <Fade
                                in={this.state.elementIsVisible}
                                timeout={3000}
                                disableStrictModeCompat={true}
                                // direction="right"
                            >
                                <img 
                                    className="image-float-residential mr-4"
                                    src={residentialImage} 
                                    width="40%"
                                />
                            </Fade>
                        </VisibilitySensor>

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