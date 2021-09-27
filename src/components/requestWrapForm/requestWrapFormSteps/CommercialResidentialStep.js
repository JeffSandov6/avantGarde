import React, { Component } from 'react';
import {  Row, Form } from 'react-bootstrap';


import '../RequestWrapForm.css';

//Question: How do you want this section of the form to look? Radio buttons, dropdown?
//In my opinion, this should be under the Reason for Request section
class CommercialResidentialStep extends Component {
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
            <Form.Label>Job Type</Form.Label>
            <Row className="justify-content-center">
            <Form>
                <Form.Check
                    className="radio-button-text"
                    inline
                    type='radio'
                    label='Commercial'
                />
                <Form.Check
                    className="radio-button-text"
                    inline
                    type='radio'
                    label='Residential'
                />

            </Form>
            </Row>


                {/* <Form.Label>Job type</Form.Label>
                <Row>
                    <InputGroup>
                        <Col sm md lg={2}>
                            <Form.Control 
                                as="select"
                                onChange={this.onJobTypeChosen}
                            >
                                <option>Commercial</option>
                                <option>Residential</option>
                                <option>Other</option>
                            </Form.Control>
                        </Col>
                        <Col>
                            <FormControl
                                readOnly={this.state.jobType !== 'Other'}
                                placeholder="Please enter your email address"
                                type="email"
                                // value={this.props.emailOrPhone}
                                onChange={e => this.props.setEmailOrPhone(e.target.value)}
                            />
                            
                        </Col>
                    </InputGroup>
                </Row> */}



                {/* <Form.Group>
                    <Form.Label>Are you inquiring about a commercial or residential job?</Form.Label>
                    <FormControl
                        placeholder="Please enter an answer"
                        value={this.props.commercialOrResidential}
                        onChange={e => this.props.setCommercialOrResidential(e.target.value)}
                    />
                </Form.Group> */}
            </>
        )
    }


}

export default CommercialResidentialStep;