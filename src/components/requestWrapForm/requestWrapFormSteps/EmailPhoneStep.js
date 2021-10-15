import React, { Component } from 'react';
import {  Row, Col, InputGroup, FormControl, Form } from 'react-bootstrap';

//Question: which do you prefer on preferred method of contact?

class EmailPhoneStep extends Component {
    constructor(props) {
        super(props);
    }

    onPreferredContactMethodChosen = (e) => {
        this.props.setPreferredContactMethod(e.target.value);
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
                                value={this.props.preferredContactMethod}
                                onChange={this.onPreferredContactMethodChosen}
                            >
                                <option>Email</option>
                                <option>Phone</option>
                            </Form.Control>
                        </Col>
                        <Col>
                            {this.props.preferredContactMethod === 'Email' &&
                                <FormControl
                                    placeholder="Please enter your email address"
                                    type="email"
                                    value={this.props.emailOrPhone}
                                    onChange={e => this.props.setEmailOrPhone(e.target.value)}
                                />
                            }
                            {this.props.preferredContactMethod === 'Phone' &&
                                <FormControl
                                    placeholder="Please enter your phone number"
                                    type="phone-mobile"
                                    inputMode="numeric"
                                    value={this.props.emailOrPhone}
                                    onChange={e => this.props.setEmailOrPhone(e.target.value)}
                                />
                            }
                        </Col>
                    </InputGroup>
                </Row>
            </>
        )
    }


}

export default EmailPhoneStep;

