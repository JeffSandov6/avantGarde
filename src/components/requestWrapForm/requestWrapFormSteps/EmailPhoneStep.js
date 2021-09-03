import React, { Component } from 'react';
import {  Row, Col, InputGroup, FormControl, Form } from 'react-bootstrap';

//Question: which do you prefer on preferred method of contact?

class EmailPhoneStep extends Component {
    constructor(props) {
        super(props);
        this.state = {
            preferredContactMethod: 'Email'
        }
    }

    onPreferredContactMethodChosen = (e) => {
        this.setState({preferredContactMethod: e.target.value});
        this.props.clearEmailOrPhoneState();

    }


    render() {
        return (
            <>
                <Form.Label>Preferred Method of Contact</Form.Label>
                <Row>
                    <InputGroup>
                        <Col sm md lg={2}>
                            <Form.Control 
                                as="select"
                                onChange={this.onPreferredContactMethodChosen}
                            >
                                <option>Email</option>
                                <option>Phone</option>
                            </Form.Control>
                        </Col>
                        <Col>
                            {this.state.preferredContactMethod === 'Email' &&
                                <FormControl
                                    placeholder="Please enter your email address"
                                    type="email"
                                    value={this.props.emailOrPhone}
                                    onChange={e => this.props.setEmailOrPhone(e.target.value)}
                                />
                            }
                            {this.state.preferredContactMethod === 'Phone' &&
                                    <FormControl
                                        placeholder="Please enter your phone number"
                                        type="phone-mobile"
                                        inputMode="numeric"
                                        value={this.props.emailOrPhone}
                                        onChange={e => this.props.setEmailOrPhone(e.target.value)}                                />
                            }
                        </Col>
                    </InputGroup>
                </Row>




                {/* <Form.Label>Preferred Method of Contact</Form.Label>
                <Row className="no-gutters">
                    <InputGroup>
                        <InputGroup.Prepend>
                            <Form.Control 
                                as="select"
                                onChange={this.onPreferredContactMethodChosen}
                            >
                                <option>Email</option>
                                <option>Phone</option>
                            </Form.Control>
                        </InputGroup.Prepend>

                        {this.state.preferredContactMethod === 'Email' &&
                            <FormControl
                                placeholder="Please enter your email address"
                                type="email"
                                value={this.props.emailOrPhone}
                                onChange={e => this.props.setEmailOrPhone(e.target.value)}
                            />
                        }
                        {this.state.preferredContactMethod === 'Phone' &&
                                <FormControl
                                    placeholder="Please enter your phone number"
                                    type="phone-mobile"
                                    inputMode="numeric"
                                    value={this.props.emailOrPhone}
                                    onChange={e => this.props.setEmailOrPhone(e.target.value)}                                />
                        }
                    </InputGroup>
                </Row> */}
            </>
        )
    }


}

export default EmailPhoneStep;

