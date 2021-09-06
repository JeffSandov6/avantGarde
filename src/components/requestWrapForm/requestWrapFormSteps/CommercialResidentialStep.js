import React, { Component } from 'react';
import { FormControl, Form } from 'react-bootstrap';


//Question: How do you want this section of the form to look? Radio buttons, dropdown?
//In my opinion, this should be under the Reason for Request section
class CommercialResidentialStep extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Form.Group>
                    <Form.Label>Are you inquiring about a commercial or residential job?</Form.Label>
                    <FormControl
                        placeholder="Please enter an answer"
                        value={this.props.commercialOrResidential}
                        onChange={e => this.props.setCommercialOrResidential(e.target.value)}
                    />
                </Form.Group>
            </>
        )
    }


}

export default CommercialResidentialStep;