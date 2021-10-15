import React, { Component } from 'react';
import {  Row, Form, Col, InputGroup, FormControl } from 'react-bootstrap';


import '../RequestWrapForm.css';

//Question: How do you want this section of the form to look? Radio buttons, dropdown?
//In my opinion, this should be under the Reason for Request section
class ReviewInfoStep extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jobType: ''
        }
    }

    onJobTypeChosen = (e) => {
        this.setState({jobType: e.target.value});
        // this.props.clearEmailOrPhoneState();

    }

    render() {
        return (
            <>
            <Form.Label>Name</Form.Label>
            <Form.Control
                type="text"
                value={this.props.name}
                readOnly
            />
            <Form.Label>Job Type</Form.Label>
            <Form.Control
                type="text"
                value={this.props.commercialOrResidential}
                readOnly
            />
            <Form.Label>Reason for Request</Form.Label>
            <Form.Control
                type="text"
                value={this.props.requestReason}
                as="textarea"
                rows={4}
                readOnly
            />
            <Form.Label>Method of Contact</Form.Label>
            <Row>
            <InputGroup>
                <Col sm md lg={2}>
                    <Form.Control
                        type="text"
                        value={this.props.preferredContactMethod}
                        readOnly
                    />
                </Col>
                <Col>
                    <Form.Control
                        type="text"
                        value={this.props.emailOrPhone}
                        readOnly
                    />
                </Col>
                </InputGroup>
                </Row>

            </>
        )
    }


}

export default ReviewInfoStep;