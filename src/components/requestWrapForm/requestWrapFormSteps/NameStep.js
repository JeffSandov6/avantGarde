import React, { Component } from 'react';
import { Container, Row, Col, InputGroup, FormControl, Form, Button } from 'react-bootstrap';


class NameStep extends Component {
    constructor(props) {
        super(props);
    }


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