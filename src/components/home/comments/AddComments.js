import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import { Comment, Header } from 'semantic-ui-react';
import { FormControl, Form, Row, Col} from 'react-bootstrap';
import Button from '@material-ui/core/Button';

import "./Comments.css";





export default function AddComments() {
  const [rating, setRating] = useState(0) // initial rating value

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate)
    // Some logic
  }

  function submitClicked() {
      console.log("clicked");
      console.log(rating);
  }

  return (
    <>
        
        <Header as='h3' dividing>Add a Comment</Header>
        <Form.Group>
            <FormControl
                placeholder="Add a Comment"
                // value={this.props.requestReason}
                as="textarea"
                rows={6}
                // onChange={e => this.props.setRequestReason(e.target.value)}
            />
        </Form.Group>
        <Form.Group>
            {/* <Form.Label column sm="2">Name</Form.Label> */}
            <FormControl
                placeholder="Please enter full name"
                // value={this.props.name}
                // onChange={e => this.props.setName(e.target.value)}
            />
        </Form.Group>

        <Rating 
            className="star-align"
            onClick={handleRating} 
            ratingValue={rating} 
            /* Rating Props */ 
            />
        <Row className="justify-content-center">
            <Button 
                variant="contained"
                color="primary"
                onClick={submitClicked}
            >
                Submit
            </Button>
        </Row>
    </>
  )
}