import React, { Component } from 'react';
import { FormControl, Form, } from 'react-bootstrap';


class AddressStep extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <>
                <Form.Group>
                    <Form.Label>Address</Form.Label>
                    <FormControl
                        placeholder="Please enter your address"
                        value={this.props.address}
                        onChange={e => this.props.setAddress(e.target.value)}
                    />
                </Form.Group>
            </>
        )
    }


}

export default AddressStep;