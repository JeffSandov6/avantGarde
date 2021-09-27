import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Fade from '@material-ui/core/Fade';
import VisibilitySensor from 'react-visibility-sensor';

import commercialImage from './Commercial_8.jpeg';
import '../CommonHomeComponents.css';
import './Commercial.css';

class Commercial extends Component {
    constructor(props) {
        super(props);
        this.state = {
            elementIsVisible: true,
        }
    }

    isVisible = (isVisible) => {
        this.setState({elementIsVisible: isVisible});
    }

    render() {
        return (
            <>
            <div style={{ height: '10vh '}}></div>
            <Row>
                <Col className="align-self-center">
                    <div className="residential-commercial-headers">Commercial</div>
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
                <Col className="d-flex justify-content-center">
                    <VisibilitySensor
                        onChange={this.isVisible}
                    >
                        <Fade
                                in={this.state.elementIsVisible}
                                timeout={3000}
                                disableStrictModeCompat={true}
                        >
                            <img 
                                className="image-float-commercial"
                                src={commercialImage} 
                                width="80%"
                                alt="missing"
                            />
                        </Fade>
                    </VisibilitySensor>
                </Col>
            </Row>
            </>
        )
    }
}

export default Commercial;