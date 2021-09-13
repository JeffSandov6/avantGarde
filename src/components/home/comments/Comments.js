import React, { Component } from 'react';
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import { Row, Col } from 'react-bootstrap';
import { Rating } from 'react-simple-star-rating';


import AddComments from './AddComments';
import "./Comments.css"



class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <>
            <div style={{ height: '10vh' }}></div>

            <Row>
                <Col>
                    <Comment.Group>
                        <Header as='h3' dividing>
                            Comments
                        </Header>
                        <div className="comment-div">

                        <Row className="justify-content-center comment-row-padding">
                            <Comment>
                            <Comment.Content>
                                <Comment.Author as='a'>Matt</Comment.Author>
                                <Comment.Metadata>
                                {/* <div>Today at 5:42PM</div> */}
                                <Rating 
                                    ratingValue={5}
                                    size="15"
                                />
                                </Comment.Metadata>
                                <Comment.Text>How do you want the comments to look? Do you want the stars next to the name and the date in the bottom like this comment?</Comment.Text>
                                <Comment.Metadata>
                                <div>Today at 5:42PM</div>
                                </Comment.Metadata>
                            </Comment.Content>
                            </Comment>
                            <div style={{ height: '5px' }}></div>
                        </Row>

                        <Row className="justify-content-center comment-row-padding">
                            <Comment>
                            <Comment.Content>
                                <Comment.Author as='a'>Elliot S</Comment.Author>
                                <Comment.Metadata>
                                <div>Yesterday at 12:30AM</div>
                                <Rating 
                                    ratingValue={5}
                                    size="15"
                                />
                                </Comment.Metadata>
                                <Comment.Text>Or do you want the comments to look like this, where the date and the stars are both next to the name?</Comment.Text>
                            </Comment.Content>
                            </Comment>
                            <div style={{ height: '5px' }}></div>
                        </Row>

                        <Row className="justify-content-center comment-row-padding">
                            <Comment>
                            <Comment.Content>
                                <Comment.Author as='a'>Jenny Hess</Comment.Author>
                                <Comment.Metadata>
                                <div>Yesterday at 12:30AM</div>
                                </Comment.Metadata>
                                <Comment.Text>Testing a really long comment. Testing a really long comment. Testing a really long comment. Testing a really long comment. Testing a really long comment. Testing a really long comment. Testing a really long comment.</Comment.Text>
                            </Comment.Content>
                            </Comment>
                            <div style={{ height: '5px' }}></div>
                        </Row>

                        <Row className="justify-content-center comment-row-padding">
                            <Comment>
                            <Comment.Content>
                                <Comment.Author as='a'>Joe Henderson</Comment.Author>
                                <Comment.Metadata>
                                <div>5 days ago</div>
                                </Comment.Metadata>
                                <Comment.Text>Comment 4</Comment.Text>
                            </Comment.Content>
                            </Comment>
                            <div style={{ height: '5px' }}></div>
                        </Row>

                        <Row className="justify-content-center comment-row-padding">
                            <Comment>
                            <Comment.Content>
                                <Comment.Author as='a'>Joe Henderson</Comment.Author>
                                <Comment.Metadata>
                                <div>5 days ago</div>
                                </Comment.Metadata>
                                <Comment.Text>testing the comment scroll</Comment.Text>
                            </Comment.Content>
                            </Comment>
                            <div style={{ height: '5px' }}></div>
                        </Row>

                        <Row className="justify-content-center comment-row-padding">
                            <Comment>
                            <Comment.Content>
                                <Comment.Author as='a'>Joe Henderson</Comment.Author>
                                <Comment.Metadata>
                                <div>5 days ago</div>
                                </Comment.Metadata>
                                <Comment.Text>testing the comment scroll</Comment.Text>
                            </Comment.Content>
                            </Comment>
                            <div style={{ height: '5px' }}></div>
                        </Row>
                        </div>
                    </Comment.Group>
        
                </Col>
                <Col>
                    <AddComments/>
                </Col>
            </Row>
            </>
        )
    }

}

export default Comments;