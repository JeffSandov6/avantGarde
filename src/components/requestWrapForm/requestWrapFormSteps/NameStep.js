import React, { Component } from 'react';
import { FormControl, Form } from 'react-bootstrap';


class NameStep extends Component {

    render() {
        return (
            <>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <FormControl
                        placeholder="Please enter full name"
                        value={this.props.name}
                        onChange={e => this.props.setName(e.target.value)}
                    />
                </Form.Group>
            </>
        )
    }


}

export default NameStep;