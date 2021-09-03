import React, { Component } from 'react';
import { FormControl, Form } from 'react-bootstrap';


class RequestReasonStep extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <>
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