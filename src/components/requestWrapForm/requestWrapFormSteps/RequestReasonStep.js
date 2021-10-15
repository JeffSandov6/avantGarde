import React, { Component } from 'react';
import { FormControl, Form, Row } from 'react-bootstrap';


class RequestReasonStep extends Component {


    onChange = (e) => {
        console.log("hi");
        console.log(e);
        console.log(e.target.value);
    }

    render() {
        return (
            <>
                <Form.Label>Job Type</Form.Label>
                <Row>
                    <Form>
                        <Form.Check
                            className="radio-button-text"
                            inline
                            type='radio'
                            label='Commercial'
                            value="Commercial"
                            checked={this.props.commercialOrResidential === 'Commercial'}
                            onChange={e => this.props.setCommercialOrResidential(e.target.value)}
                        />
                        <Form.Check
                            className="radio-button-text"
                            inline
                            type='radio'
                            label='Residential'
                            value="Residential"
                            checked={this.props.commercialOrResidential === 'Residential'}
                            onChange={e => this.props.setCommercialOrResidential(e.target.value)}
                        />

                    </Form>
                </Row>
                <Form.Group>
                    <Form.Label>Reason For Request</Form.Label>
                    <FormControl
                        placeholder="Please enter your reason for requesting a wrap"
                        value={this.props.requestReason}
                        as="textarea"
                        rows={6}
                        onChange={e => this.props.setRequestReason(e.target.value)}
                    />
                </Form.Group>
            </>
        )
    }


}

export default RequestReasonStep;