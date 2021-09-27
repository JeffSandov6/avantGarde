import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import { Header } from 'semantic-ui-react';
import { FormControl, Form, Row } from 'react-bootstrap';
import Button from '@material-ui/core/Button';

import "./Comments.css";
import * as FirebaseUtils from '../../../firebase/FirebaseUtils';




//TODO: clear the comment form when done, popup saying success?
//Do i want to reload the comments from firebase?
export default function AddComments() {
  const [rating, setRating] = useState(0) // initial rating value
  const [name, setName] = useState("")
  const [comment, setComment] = useState("")

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate)
    // Some logic
  }

  function submitClicked() {
      FirebaseUtils.submitUserComment(name, rating, comment);
  }

  return (
    <>
        
        <Header as='h3' dividing>Add a Comment</Header>
        <Form.Group>
            <FormControl
                placeholder="Add a Comment"
                value={comment}
                as="textarea"
                rows={6}
                onChange={e => setComment(e.target.value)}
            />
        </Form.Group>
        <Form.Group>
            {/* <Form.Label column sm="2">Name</Form.Label> */}
            <FormControl
                placeholder="Please enter full name"
                value={name}
                onChange={e => setName(e.target.value)}
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