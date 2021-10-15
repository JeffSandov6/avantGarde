import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import { Header } from 'semantic-ui-react';
import { FormControl, Form, Row } from 'react-bootstrap';
import Button from '@material-ui/core/Button';

import "./Comments.css";
import * as FirebaseUtils from '../../../firebase/FirebaseUtils';




//TODO: clear the comment form when done, popup saying success?
//Do i want to reload the comments from firebase?
export default function AddComments(props) {
  const [rating, setRating] = useState(0) // initial rating value
  const [name, setName] = useState("")
  const [comment, setComment] = useState("")

  const handleRating = (rate) => {
    setRating(rate)
  }

  async function submitClicked() {
      if(rating === 0 || name === '' || comment === '') {
          return;
      }

      let res = await FirebaseUtils.submitUserComment(name, rating, comment);
      props.userCommentSubmissionResult(res);

      if(res === 'Success') {
          setRating(0)
          setName("")
          setComment("")
      }
    }

  return (
    <>
        
        <Header as='h3' dividing>Add a Review</Header>
        <Form.Group>
            <FormControl
                placeholder="Add a Review"
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